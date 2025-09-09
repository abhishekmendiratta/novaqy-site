/**
 * Zoho Sign helper
 *
 * Responsibilities:
 * - Acquire access token (via refresh token)
 * - Create agreements from a template (or mock one)
 * - Handle downloading signed documents
 * - Persist metadata to Supabase via PostgREST (service role key)
 * - Upload signed file bytes to Supabase Storage using service role key
 *
 * Notes:
 * - All secrets must live server-side (SUPABASE_SERVICE_ROLE_KEY, ZOHO_CLIENT_SECRET, ZOHO_REFRESH_TOKEN)
 * - Mock mode (ZOHO_INTEGRATION_ENABLED=false) returns deterministic dummy responses useful for local development
 */

import type { Readable } from 'stream';

type ZohoCreateAgreementResult = {
  transactionId?: string;
  signUrl?: string;
  rawResponse?: any;
};

type ZohoDocumentRecord = {
  template_id?: string | null;
  recipient_email?: string | null;
  recipient_name?: string | null;
  status?: string | null;
  zoho_transaction_id?: string | null;
  zoho_sign_url?: string | null;
  signed_file_path?: string | null;
  signed_file_url?: string | null;
  metadata?: any;
};

const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;
const ZOHO_SIGN_TEMPLATE_ID = process.env.ZOHO_SIGN_TEMPLATE_ID;
const ZOHO_INTEGRATION_ENABLED = (process.env.ZOHO_INTEGRATION_ENABLED || 'false') === 'true';
function getSupabaseUrl() {
  return process.env.SUPABASE_URL;
}
function getSupabaseServiceRoleKey() {
  return process.env.SUPABASE_SERVICE_ROLE_KEY;
}
const SUPABASE_STORAGE_BUCKET = 'signed-documents'; // bucket name used for signed files

if (!getSupabaseUrl() || !getSupabaseServiceRoleKey()) {
  // For type-time safety this check exists, but functions will still guard at runtime.
  // Do not throw here because imports in non-server contexts may read file.
}

/**
 * Refresh Zoho OAuth2 access token using the refresh token.
 * Returns access_token string.
 */
export async function getZohoAccessToken(): Promise<string> {
  if (!ZOHO_INTEGRATION_ENABLED) {
    // mock token
    return 'mock-zoho-access-token';
  }

  if (!ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET || !ZOHO_REFRESH_TOKEN) {
    throw new Error('Missing Zoho OAuth environment variables (client id/secret/refresh token).');
  }

  const tokenEndpoint = 'https://accounts.zoho.com/oauth/v2/token';
  const params = new URLSearchParams();
  params.append('refresh_token', ZOHO_REFRESH_TOKEN);
  params.append('client_id', ZOHO_CLIENT_ID);
  params.append('client_secret', ZOHO_CLIENT_SECRET);
  params.append('grant_type', 'refresh_token');

  const res = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Failed to refresh Zoho token (${res.status}): ${body}`);
  }

  const json = await res.json();
  if (!json.access_token) {
    throw new Error(`Zoho token response missing access_token: ${JSON.stringify(json)}`);
  }
  return json.access_token;
}

/**
 * Create an agreement (sign request) from a Zoho Sign template for a single recipient.
 * Returns transaction id and signing URL when available.
 */
export async function createAgreementFromTemplate(
  templateId: string,
  recipientName: string,
  recipientEmail: string
): Promise<ZohoCreateAgreementResult> {
  if (!ZOHO_INTEGRATION_ENABLED) {
    // Mock response for dev/test
    return {
      transactionId: `mock-tx-${Date.now()}`,
      signUrl: `https://example.com/mock-sign/${encodeURIComponent(recipientEmail)}`,
      rawResponse: { mock: true },
    };
  }

  const accessToken = await getZohoAccessToken();

  // Zoho Sign endpoint to create request from template.
  // Exact API shape can vary; we attempt a generic POST to /api/v1/requests with a template payload.
  const url = 'https://sign.zoho.com/api/v1/requests';

  const payload = {
    data: {
      TEMPLATES: [
        {
          TEMPLATE_ID: templateId,
        },
      ],
      // recipients expects objects per Zoho Sign API. This is a reasonably generic shape.
      RECIPIENTS: [
        {
          RECIPIENT_EMAIL: recipientEmail,
          RECIPIENT_NAME: recipientName,
          RECIPIENT_ROLE: 'Signer',
        },
      ],
      // set options to send signing link immediately
      ACTION: 'send',
    },
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text().catch(() => '');
  let json;
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    json = { raw: text };
  }

  if (!res.ok) {
    throw new Error(`Zoho create agreement failed (${res.status}): ${JSON.stringify(json)}`);
  }

  // Parse known response fields where possible. Zoho may return a transaction id and sign url(s).
  // We'll attempt multiple possible locations to be tolerant.
  const transactionId = json?.data?.transaction_id || json?.data?.request_id || json?.request_id || json?.transactionId;
  const signUrl =
    json?.data?.sign_url ||
    json?.data?.signing_url ||
    (Array.isArray(json?.data?.signing_urls) && json.data.signing_urls[0]) ||
    json?.sign_url;

  return { transactionId, signUrl, rawResponse: json };
}

/**
 * Download the signed document (PDF) bytes for a given transaction/agreement id.
 * Returns Uint8Array of bytes.
 */
export async function downloadSignedDocumentBytes(agreementId: string): Promise<Uint8Array> {
  if (!ZOHO_INTEGRATION_ENABLED) {
    // Return a tiny dummy PDF (simple %PDF header) so it can be uploaded and inspected in dev.
    const dummy = '%PDF-1.4\n%âãÏÓ\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n';
    return new TextEncoder().encode(dummy);
  }

  const accessToken = await getZohoAccessToken();

  // Zoho API for downloading signed document - endpoint may vary; many Zoho APIs use /api/v1/requests/{request_id}/documents
  // We'll attempt a best-effort endpoint and return raw bytes.
  const url = `https://sign.zoho.com/api/v1/requests/${encodeURIComponent(agreementId)}/documents`;

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      Accept: 'application/pdf',
    },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Failed to download signed document (${res.status}): ${body}`);
  }

  const arrayBuffer = await res.arrayBuffer();
  return new Uint8Array(arrayBuffer);
}

/**
 * Insert a row into public.zoho_sign_documents via Supabase PostgREST.
 * Returns inserted row (first element).
 */
export async function insertZohoDocument(record: ZohoDocumentRecord): Promise<any> {
  if (!getSupabaseUrl() || !getSupabaseServiceRoleKey()) {
    throw new Error('Missing Supabase URL or service role key in environment');
  }

  const endpoint = `${getSupabaseUrl()!.replace(/\/$/, '')}/rest/v1/zoho_sign_documents`;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: getSupabaseServiceRoleKey()!,
      Authorization: `Bearer ${getSupabaseServiceRoleKey()!}`,
      Prefer: 'return=representation',
    },
    body: JSON.stringify(record),
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
  return Array.isArray(json) ? json[0] : json;
}

/**
 * Upload a signed file buffer to Supabase Storage (service role).
 * Returns public or signed URL (depends on storage config). We'll return the object's path.
 */
export async function uploadSignedFile(objectPath: string, fileBytes: Uint8Array, contentType = 'application/pdf') {
  if (!getSupabaseUrl() || !getSupabaseServiceRoleKey()) {
    throw new Error('Missing Supabase URL or service role key in environment');
  }

  // Supabase Storage upload endpoint:
  // POST {SUPABASE_URL}/storage/v1/object/{bucket}/{path}
  const uploadUrl = `${getSupabaseUrl()!.replace(/\/$/, '')}/storage/v1/object/${encodeURIComponent(
    SUPABASE_STORAGE_BUCKET
  )}/${objectPath}`;

  const res = await fetch(uploadUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getSupabaseServiceRoleKey()!}`,
      apikey: getSupabaseServiceRoleKey()!,
      'Content-Type': contentType,
    },
    body: Buffer.from(fileBytes),
  });

  if (!res.ok) {
    let bodyText = await res.text().catch(() => '');
    throw new Error(`Supabase storage upload failed (${res.status}): ${bodyText}`);
  }

  // Construct a storage path that can be used later to sign a URL or reference.
  const publicPath = `${SUPABASE_STORAGE_BUCKET}/${objectPath}`;
  return { path: publicPath };
}

/**
 * High-level workflow:
 *  - createAgreementFromTemplateAndPersist: create agreement, persist DB record
 *  - processWebhookPayload: update DB record on events, download/upload file when completed
 */

export async function createAgreementFromTemplateAndPersist(opts: {
  templateId?: string;
  recipientName: string;
  recipientEmail: string;
}) {
  const templateId = opts.templateId || ZOHO_SIGN_TEMPLATE_ID;
  if (!templateId) {
    throw new Error('Missing template id (ZOHO_SIGN_TEMPLATE_ID)');
  }

  const createRes = await createAgreementFromTemplate(templateId, opts.recipientName, opts.recipientEmail);

  const record: ZohoDocumentRecord = {
    template_id: templateId,
    recipient_email: opts.recipientEmail,
    recipient_name: opts.recipientName,
    status: 'sent',
    zoho_transaction_id: createRes.transactionId || null,
    zoho_sign_url: createRes.signUrl || null,
    metadata: { createdBy: 'server' },
  };

  const inserted = await insertZohoDocument(record);
  return { inserted, createRes };
}

/**
 * Process incoming webhook payload from Zoho Sign.
 * - expected fields (best-effort): request_id / transaction_id, status
 * - when status indicates completed, download signed document and upload to Supabase storage and update DB record
 */
export async function processZohoWebhook(payload: any) {
  // Try to find transaction/agreement id
  const txId =
    payload?.data?.transaction_id ||
    payload?.data?.request_id ||
    payload?.transaction_id ||
    payload?.request_id ||
    payload?.request?.request_id ||
    payload?.request?.id;

  const status =
    payload?.data?.status || payload?.status || payload?.request_status || payload?.request?.status || null;

  if (!txId) {
    throw new Error('Webhook payload missing transaction/request id');
  }

  // Update status in DB
  // Find record by zoho_transaction_id
  // Using PostgREST RPC-like filter: ?zoho_transaction_id=eq.{txId}
  if (!getSupabaseUrl() || !getSupabaseServiceRoleKey()) {
    throw new Error('Missing Supabase URL or service role key in environment');
  }

  const findEndpoint = `${getSupabaseUrl()!.replace(/\/$/, '')}/rest/v1/zoho_sign_documents?zoho_transaction_id=eq.${encodeURIComponent(
    txId
  )}`;

  const findRes = await fetch(findEndpoint, {
    method: 'GET',
    headers: {
      apikey: getSupabaseServiceRoleKey()!,
      Authorization: `Bearer ${getSupabaseServiceRoleKey()!}`,
    },
  });

  if (!findRes.ok) {
    const body = await findRes.text().catch(() => '');
    throw new Error(`Failed to query Zoho document record (${findRes.status}): ${body}`);
  }

  const rows = await findRes.json();
  const existing = Array.isArray(rows) && rows[0] ? rows[0] : null;

  // If no record found, optionally create a new record
  let recordId: string | null = existing?.id ?? null;
  if (!existing) {
    const newRec = await insertZohoDocument({
      template_id: null,
      recipient_email: null,
      recipient_name: null,
      status: status || 'unknown',
      zoho_transaction_id: txId,
      metadata: { webhookCreated: true, payload: payload },
    });
    recordId = newRec.id;
  }

  // Update status
  const updateEndpoint = `${getSupabaseUrl()!.replace(/\/$/, '')}/rest/v1/zoho_sign_documents?id=eq.${encodeURIComponent(
    recordId!
  )}`;

  const updateRes = await fetch(updateEndpoint, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      apikey: getSupabaseServiceRoleKey()!,
      Authorization: `Bearer ${getSupabaseServiceRoleKey()!}`,
      Prefer: 'return=representation',
    },
    body: JSON.stringify({ status }),
  });

  if (!updateRes.ok) {
    const body = await updateRes.text().catch(() => '');
    throw new Error(`Failed to update Zoho document status (${updateRes.status}): ${body}`);
  }

  // If completed, download signed file and upload
  const completedStates = ['completed', 'signed', 'finished'];
  if (status && completedStates.includes(String(status).toLowerCase())) {
    try {
      const fileBytes = await downloadSignedDocumentBytes(txId);
      const objectPath = `${recordId}/signed.pdf`;
      await uploadSignedFile(objectPath, fileBytes, 'application/pdf');

      // Update DB with signed file path (and optionally public URL)
      const signedFilePath = objectPath;
      const signedFileUrl = `${getSupabaseUrl()!.replace(/\/$/, '')}/storage/v1/object/public/${encodeURIComponent(
        SUPABASE_STORAGE_BUCKET
      )}/${encodeURIComponent(objectPath)}`;

      const finalUpdate = await fetch(updateEndpoint, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          apikey: getSupabaseServiceRoleKey()!,
          Authorization: `Bearer ${getSupabaseServiceRoleKey()!}`,
          Prefer: 'return=representation',
        },
        body: JSON.stringify({ signed_file_path: signedFilePath, signed_file_url: signedFileUrl, status }),
      });

      if (!finalUpdate.ok) {
        const body = await finalUpdate.text().catch(() => '');
        throw new Error(`Failed to update Zoho document with file info (${finalUpdate.status}): ${body}`);
      }
    } catch (err) {
      // Log but do not throw further to avoid webhook retries blocking
      console.error('Error processing signed document:', err);
    }
  }

  return { ok: true, txId, status, recordId };
}
