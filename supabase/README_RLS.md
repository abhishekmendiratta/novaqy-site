# Supabase Schema & RLS — Migration 009 (Novaqy MVP)

This document explains the migration created at `supabase/migrations/009_create_tables_rls.sql`, the Row Level Security (RLS) choices, and how to test them.

Summary
- Creates tables: `contact_submissions`, `plan_purchases`, `call_notifications`.
- Also creates compatibility tables used by server code: `orders`, `call_requests`.
- Enables RLS on all tables and provides example policies:
  - `contact_submissions`: allows anonymous INSERTs (public form), no public SELECT.
  - `plan_purchases` / `orders`: authenticated INSERTs allowed; SELECT only for owner (by email claim) and admin; client UPDATEs denied.
  - `call_notifications` / `call_requests`: admin-only access (JWT role='admin') — server (service role) bypasses RLS.
- Assumes standard Supabase JWT claims (auth.jwt() ->> 'email' and ->> 'role'). Adjust policies if your project uses different claims.

Applying the migration
Option A — Supabase SQL editor (recommended for quick apply)
1. Open Supabase project → SQL Editor → Run the contents of `supabase/migrations/009_create_tables_rls.sql`.
2. Verify the tables appear in the Table editor.

Option B — psql (connected to your Supabase DB)
1. Save the SQL file locally.
2. Connect and run:
   psql "postgresql://postgres:YOUR_PG_PASSWORD@HOST:PORT/postgres" -f supabase/migrations/009_create_tables_rls.sql

Option C — Supabase CLI (if using migrations workflow)
- Convert file to your migration flow and run `supabase db push` or follow your existing migration pipeline.

Important notes before applying
- The migration creates `orders` and `call_requests` to preserve compatibility with existing server code (`web/src/lib/supabase.ts` uses those names).
- Service-role key (SUPABASE_SERVICE_ROLE_KEY) bypasses RLS — keep it server-only.
- If you want owner-by-user-id instead of email, add a `user_id uuid` column and modify policies to use `auth.uid()`.

Quick test instructions (curl examples)
Set these env vars locally before running the curl examples:
- SUPABASE_URL (e.g. https://xyz.supabase.co)
- SUPABASE_ANON_KEY (project anon key)
- SUPABASE_SERVICE_KEY (service role key)
- SAMPLE_JWT (a valid JWT with {"email":"test@example.com","role":"authenticated"} for authenticated tests) — can use Supabase auth client to create a session.

1) Contact form: anon insert (should succeed)
curl -sS -X POST "${SUPABASE_URL}/rest/v1/contact_submissions" \
  -H "apikey: ${SUPABASE_ANON_KEY}" \
  -H "Authorization: Bearer ${SUPABASE_ANON_KEY}" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"anon@example.com","message":"Hello","preferred_contact_time":"Morning"}'

Expected: 201 and returned row representation (if Prefer: return=representation added); otherwise 201 with empty body.

2) Contact form: anon select (should be blocked)
curl -sS -X GET "${SUPABASE_URL}/rest/v1/contact_submissions" \
  -H "apikey: ${SUPABASE_ANON_KEY}" \
  -H "Authorization: Bearer ${SUPABASE_ANON_KEY}"

Expected: 403 Forbidden (RLS prevents anon SELECT).

3) Create order / plan purchase via service role (server-side; should succeed)
curl -sS -X POST "${SUPABASE_URL}/rest/v1/orders" \
  -H "apikey: ${SUPABASE_SERVICE_KEY}" \
  -H "Authorization: Bearer ${SUPABASE_SERVICE_KEY}" \
  -H "Content-Type: application/json" \
  -d '{"stripe_session_id":"sess_test_123","customer_name":"Alice","customer_email":"alice@example.com","plan_type":"individual","amount_cents":24900,"currency":"usd"}'

Expected: 201 created with row data (service role bypasses RLS).

4) Authenticated user SELECT their own orders (requires a real user session)
- Use your frontend or supabase-js client to sign in the user then request `/rest/v1/orders?customer_email=eq.alice@example.com`
- The SELECT should succeed if the JWT email matches `customer_email`.

5) Attempt client UPDATE on orders (should be denied)
- Using an authenticated user's JWT attempt to PATCH `orders` row; expected: 403.

6) request-call flow (server-side)
- The API `web/src/pages/api/request-call.ts` uses the service role to POST to `call_requests`. This will continue to work because service key bypasses RLS.

Automated test script (example)
- See `supabase/tests/009_rls_test.sh` — a small curl-based script that runs the examples above. You may need to adapt timing and add `Prefer: return=representation` if you require the inserted row in the response.

What to check after applying
- Tables exist and RLS is enabled.
- Policies created as in the SQL file.
- Server endpoints (`finalize-order`, `request-call`, `contact`) continue to operate without code changes.
- Anonymous INSERTs to `contact_submissions` work from the browser endpoint (or via PostgREST with anon key).
- Authenticated users cannot read others' `orders` / `plan_purchases`.

Next recommended steps
- If you want owner-by-user-id, confirm and I will update the migration and server code to set `user_id` using auth.uid() and capture user id during checkout.
- Add a small integration test (node script) to run the curl flows end-to-end in CI.

If you want, I will:
- create the test script (`supabase/tests/009_rls_test.sh`),
- run additional code updates to swap `orders`→`plan_purchases` in server code (only if requested),
- or apply tweaks to policies for a different admin claim.
