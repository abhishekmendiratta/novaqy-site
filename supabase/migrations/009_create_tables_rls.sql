-- 009_create_tables_rls.sql
-- Creates contact_submissions, plan_purchases, call_notifications (and compatibility tables orders, call_requests)
-- and configures Row Level Security (RLS) policies per PRD.
--
-- NOTES:
-- 1) This file creates both the canonical tables asked for in the PRD (plan_purchases, call_notifications)
--    and the tables used by the existing server code (orders, call_requests). They are created with the
--    same schema so existing code continues to work.
-- 2) Service role (SUPABASE_SERVICE_ROLE_KEY) bypasses RLS; server-side helpers that use the service role
--    will continue to have full access.
-- 3) Policies that reference JWT claims assume the standard Supabase JWT structure (auth.jwt()).
--    Adjust the policy expressions if your project uses custom claims or a different admin claim key.
-- 4) Review and adapt admin condition (here: auth.jwt() ->> 'role' = 'admin') if your project uses a different claim.

-- Enable pgcrypto extension for gen_random_uuid() if not present
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ======================
-- contact_submissions
-- ======================
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  preferred_contact_time text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Security: enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous (anon role) inserts from the public API (browser forms).
-- Note: service_role bypasses RLS, so server-side inserts will work regardless.
CREATE POLICY "Allow anonymous inserts" ON public.contact_submissions
  FOR INSERT
  TO anon
  USING (true)
  WITH CHECK (true);

-- Do NOT create a SELECT policy here so that anonymous / authenticated users cannot read submissions.
-- Admins and service-role server code can read because service role bypasses RLS. If you want admins
-- to read via a JWT claim (e.g., role='admin') add a SELECT policy similar to examples below.

-- ======================
-- plan_purchases (canonical PRD table)
-- ======================
CREATE TABLE IF NOT EXISTS public.plan_purchases (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  stripe_session_id text UNIQUE NOT NULL,
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text,
  plan_type text NOT NULL CHECK (plan_type IN ('mobile','individual','family','family_plus')),
  amount_cents integer NOT NULL,
  currency text,
  payment_status text DEFAULT 'pending',
  call_initiated boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.plan_purchases ENABLE ROW LEVEL SECURITY;

-- Allow INSERT from authenticated users (client-side) - per PRD restrict to authenticated sessions.
-- If you prefer server-only inserts, remove this policy.
CREATE POLICY "Allow authenticated inserts" ON public.plan_purchases
  FOR INSERT
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to SELECT only their own rows (matching email in JWT).
-- This policy assumes the JWT contains an 'email' claim: auth.jwt() ->> 'email'
-- If you prefer user_id ownership, add a user_id UUID column and compare with auth.uid().
CREATE POLICY "Allow owner select by email" ON public.plan_purchases
  FOR SELECT
  TO authenticated
  USING (customer_email = (auth.jwt() ->> 'email'));

-- Prevent authenticated users from updating rows (updates should come from server/admin).
CREATE POLICY "Deny updates from clients" ON public.plan_purchases
  FOR UPDATE
  TO authenticated
  USING (false)
  WITH CHECK (false);

-- Service role / admin (service role bypasses RLS) will still be able to read/write.
-- Optionally allow admin JWT role to SELECT/UPDATE/DELETE:
CREATE POLICY "Allow admin all on plan_purchases" ON public.plan_purchases
  FOR ALL
  TO authenticated
  USING ((auth.jwt() ->> 'role') = 'admin');

-- ======================
-- orders (compatibility table used by server code)
-- ======================
-- Create as identical to plan_purchases so existing code that writes to "orders" continues to work.
CREATE TABLE IF NOT EXISTS public.orders (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  stripe_session_id text UNIQUE NOT NULL,
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text,
  plan_type text NOT NULL CHECK (plan_type IN ('mobile','individual','family','family_plus')),
  amount_cents integer NOT NULL,
  currency text,
  payment_status text DEFAULT 'pending',
  call_initiated boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated inserts on orders" ON public.orders
  FOR INSERT
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow owner select on orders" ON public.orders
  FOR SELECT
  TO authenticated
  USING (customer_email = (auth.jwt() ->> 'email'));

CREATE POLICY "Deny updates from clients on orders" ON public.orders
  FOR UPDATE
  TO authenticated
  USING (false)
  WITH CHECK (false);

CREATE POLICY "Allow admin all on orders" ON public.orders
  FOR ALL
  TO authenticated
  USING ((auth.jwt() ->> 'role') = 'admin');

-- ======================
-- call_notifications (canonical PRD table)
-- ======================
CREATE TABLE IF NOT EXISTS public.call_notifications (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  purchase_id uuid REFERENCES public.plan_purchases(id) ON DELETE SET NULL,
  customer_name text NOT NULL,
  customer_phone text NOT NULL,
  plan_type text NOT NULL,
  notification_sent boolean DEFAULT false,
  call_completed boolean DEFAULT false,
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.call_notifications ENABLE ROW LEVEL SECURITY;

-- Restrict call_notifications to admin/service only. No policies for anonymous/authenticated clients
-- ensures only service role (server) or DB superusers can access. Alternatively, allow JWT-role 'admin'.
CREATE POLICY "Allow admin all on call_notifications" ON public.call_notifications
  FOR ALL
  TO authenticated
  USING ((auth.jwt() ->> 'role') = 'admin');

-- ======================
-- call_requests (compatibility table used by server code)
-- ======================
CREATE TABLE IF NOT EXISTS public.call_requests (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id uuid REFERENCES public.orders(id) ON DELETE SET NULL,
  customer_email text,
  phone text,
  status text DEFAULT 'pending',
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.call_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow admin all on call_requests" ON public.call_requests
  FOR ALL
  TO authenticated
  USING ((auth.jwt() ->> 'role') = 'admin');

-- ======================
-- Indexes
-- ======================
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_plan_purchases_created_at ON public.plan_purchases(created_at);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON public.orders(created_at);
CREATE INDEX IF NOT EXISTS idx_plan_purchases_stripe_session_id ON public.plan_purchases(stripe_session_id);
CREATE INDEX IF NOT EXISTS idx_orders_stripe_session_id ON public.orders(stripe_session_id);
CREATE INDEX IF NOT EXISTS idx_call_notifications_purchase_id ON public.call_notifications(purchase_id);
CREATE INDEX IF NOT EXISTS idx_call_requests_order_id ON public.call_requests(order_id);

-- ======================
-- Helpful comments
-- ======================
COMMENT ON TABLE public.plan_purchases IS 'One-time plan purchases (canonical). Mirrors orders table for compatibility.';
COMMENT ON TABLE public.orders IS 'Compatibility table for existing server code; mirrors plan_purchases.';
COMMENT ON TABLE public.call_notifications IS 'Notifications for support team (canonical).';
COMMENT ON TABLE public.call_requests IS 'Compatibility table for existing server code; mirrors call_notifications.';

-- End of migration
