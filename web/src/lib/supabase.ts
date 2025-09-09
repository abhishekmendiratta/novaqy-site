/**
 * Supabase helper for server-side inserts into the contact_submissions table.
 *
 * This module uses the Supabase PostgREST endpoint (rest/v1) via fetch so no
 * additional dependencies are required. It expects the following env vars:
 *  - SUPABASE_URL (e.g. https://xyzcompany.supabase.co)
 *  - SUPABASE_SERVICE_ROLE_KEY (server-only secret)
 *
 * Security: NEVER expose SUPABASE_SERVICE_ROLE_KEY to the browser.
 */

export type ContactSubmission = {
  name: string;
  email: string;
  phone?: string | null;
  preferred_time?: string | null;
  message: string;
};

type SupabaseInsertResult<T> = T & { id?: string; created_at?: string };

/**
 * Insert a contact submission into the Supabase `contact_submissions` table.
 * Uses the service role key so this function MUST only run on the server.
 *
 * @param submission - contact form payload
 * @returns the inserted row as returned by Supabase
 */
export async function insertContactSubmission(
  submission: ContactSubmission
): Promise<SupabaseInsertResult<ContactSubmission>> {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment');
  }

  const endpoint = `${SUPABASE_URL.replace(/\/$/, '')}/rest/v1/contact_submissions`;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      Prefer: 'return=representation',
    },
    body: JSON.stringify(submission),
  });

  if (!res.ok) {
    let bodyText = await res.text().catch(() => '');
    try {
      const json = await res.json();
      bodyText = JSON.stringify(json);
    } catch {
      // ignore
    }
    throw new Error(`Supabase insert failed (${res.status}): ${bodyText}`);
  }

  const json = await res.json();
  // PostgREST returns an array of inserted rows when return=representation
  return (Array.isArray(json) ? json[0] : json) as SupabaseInsertResult<ContactSubmission>;
}

export type OrderRecord = {
  stripe_session_id: string;
  plan_id?: string | null;
  plan_title?: string | null;
  amount_cents?: number | null;
  currency?: string | null;
  customer_email?: string | null;

  // Acceptance metadata captured from Stripe session metadata for dispute defense
  terms_accepted?: boolean | null;
  terms_version?: string | null;
  accepted_at?: string | null;
  accepted_ip?: string | null;
  accepted_user_agent?: string | null;

  created_at?: string | null;
};

export type CallRequest = {
  order_id?: string | null;
  customer_email?: string | null;
  phone?: string | null;
  status?: string | null; // e.g. 'pending'
  notes?: string | null;
};

async function postToTable<T>(table: string, payload: T) {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment');
  }

  const endpoint = `${SUPABASE_URL.replace(/\/$/, '')}/rest/v1/${table}`;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      Prefer: 'return=representation',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let bodyText = await res.text().catch(() => '');
    try {
      const json = await res.json();
      bodyText = JSON.stringify(json);
    } catch {
      // ignore
    }
    throw new Error(`Supabase insert failed (${res.status}) for ${table}: ${bodyText}`);
  }

  const json = await res.json();
  return (Array.isArray(json) ? json[0] : json) as T & { id?: string; created_at?: string };
}

/**
 * Insert an order record into the Supabase `orders` table.
 * Uses the service role key so this function MUST only run on the server.
 */
export async function insertOrder(order: OrderRecord) {
  return postToTable<OrderRecord>('orders', order);
}

/**
 * Insert a call request into the Supabase `call_requests` table.
 * Uses the service role key so this function MUST only run on the server.
 */
export async function insertCallRequest(callRequest: CallRequest) {
  return postToTable<CallRequest>('call_requests', callRequest);
}
