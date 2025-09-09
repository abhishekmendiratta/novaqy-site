Zoho Sign Integration — Implementation & Test Guide
===================================================

Overview
--------
This repository includes a Zoho Sign integration scaffold:
- DB migration: `supabase/migrations/010_create_zoho_sign_documents.sql`
- Server helper: `web/src/lib/zoho.ts`
- API to start signing: `web/src/pages/api/sign-contract.ts`
- Webhook receiver: `web/src/pages/api/zoho/callback.ts`
- Frontend page: `web/src/pages/sign-contract.astro`
- Example env variables: `.env.example`

Design decisions
----------------
- Tokens (client secret + refresh token) are stored in server environment variables only.
- Signed document metadata and files are persisted in Supabase (PostgREST + Storage).
- Mock/dev mode controlled by `ZOHO_INTEGRATION_ENABLED` (default false in `.env.example`).
  - When false, APIs return deterministic mock responses and a dummy PDF for local testing.

Required environment variables (server-only)
--------------------------------------------
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY
- ZOHO_CLIENT_ID
- ZOHO_CLIENT_SECRET
- ZOHO_REFRESH_TOKEN
- ZOHO_SIGN_TEMPLATE_ID
- ZOHO_REDIRECT_URI (used when obtaining refresh token)
- ZOHO_WEBHOOK_SECRET (optional — used to HMAC-verify webhooks)
- ZOHO_INTEGRATION_ENABLED ("true" to enable real Zoho calls, "false" for mock)

Supabase setup
--------------
1. Run the migration `supabase/migrations/010_create_zoho_sign_documents.sql` to create the `zoho_sign_documents` table.
2. Create a storage bucket named `signed-documents` (private recommended).
   - Via Supabase UI: Storage → Create new bucket → name `signed-documents` → public: false
   - Or via Supabase CLI: `supabase storage create-bucket signed-documents --public false`
3. Ensure the server has `SUPABASE_SERVICE_ROLE_KEY` set (server-only) for PostgREST/Storage operations.

Zoho developer setup (high-level)
-------------------------------
1. Register an application in Zoho Developer Console (https://api-console.zoho.com/).
   - Provide Redirect URI (use your public URL + `/api/zoho/callback` or a temporary redirect for token generation).
   - Note Client ID and Client Secret.
2. Obtain a refresh token:
   - Use OAuth2 consent with `access_type=offline` / appropriate Zoho Sign scopes.
   - Example authorize URL (replace {client_id} and {redirect_uri}):
     https://accounts.zoho.com/oauth/v2/auth?scope=AaaServer.profile.READ,ZohoSign.documents.CREATE,ZohoSign.requests.CREATE&client_id={client_id}&response_type=code&access_type=offline&redirect_uri={redirect_uri}
   - Exchange the authorization code for a refresh token via:
     POST https://accounts.zoho.com/oauth/v2/token
     body (x-www-form-urlencoded): grant_type=authorization_code&client_id=...&client_secret=...&code=...&redirect_uri=...
   - Save the returned `refresh_token` to `ZOHO_REFRESH_TOKEN` (server env).
3. Configure Zoho Sign webhook:
   - Point to `https://<your-public-domain>/api/zoho/callback`
   - If possible, configure a webhook secret and set the same value in `ZOHO_WEBHOOK_SECRET`.

Local development & mock mode
----------------------------
- For local dev without Zoho credentials, set `ZOHO_INTEGRATION_ENABLED=false` (default in `.env.example`).
- Mock mode behavior:
  - `createAgreementFromTemplate` returns a mock transaction id and a mock signing URL.
  - `downloadSignedDocumentBytes` returns a tiny dummy PDF so the webhook processing path can upload a file to Supabase storage.

API usage examples
------------------
1. Create a signing request (POST)
   - URL: `POST https://<your-site>/api/sign-contract`
   - Body (JSON):
     {
       "recipientName": "Alice Example",
       "recipientEmail": "alice@example.com",
       "templateId": "<optional-override>"
     }
   - Response: { ok: true, signUrl: "...", record: { ... } }
   - In mock mode, `signUrl` will be a deterministic example URL.

2. Simulate webhook (POST)
   - URL: `POST https://<your-site>/api/zoho/callback`
   - Body: a Zoho-like payload; minimal example:
     {
       "data": {
         "transaction_id": "mock-tx-12345",
         "status": "completed"
       }
     }
   - If `ZOHO_WEBHOOK_SECRET` is set, include `x-zoho-signature` header containing HMAC-SHA256 hex digest of the raw payload using that secret.

Testing steps (manual)
----------------------
1. Mock mode end-to-end
   - Ensure `.env` contains SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY and `ZOHO_INTEGRATION_ENABLED=false`.
   - Start the dev server.
   - POST to `/api/sign-contract` with recipientName and recipientEmail.
   - Confirm a record is created in `zoho_sign_documents` (via Supabase UI or PostgREST).
   - Simulate a webhook POST to `/api/zoho/callback` with payload containing the mock `transaction_id`.
   - Confirm the record's status updates and a file appears in storage at `{recordId}/signed.pdf`.

2. Real Zoho flow (requires credentials)
   - Configure all ZOHO_* env vars and set `ZOHO_INTEGRATION_ENABLED=true`.
   - POST to `/api/sign-contract` to create a real request (Zoho will send email to recipient).
   - When the user completes signing, Zoho will POST to your webhook. Confirm DB update and file download.

Scripts for simulation
----------------------
A helper script is provided in `scripts/simulate-zoho-webhook.sh` to POST a payload and optional HMAC signature.

Security considerations
-----------------------
- Never commit `ZOHO_CLIENT_SECRET` or `ZOHO_REFRESH_TOKEN`.
- Keep `SUPABASE_SERVICE_ROLE_KEY` server-only.
- Validate recipient inputs server-side to avoid injection/abuse.
- If using public signed URLs for documents, ensure links expire or require auth.

Next recommended tasks
----------------------
- Add automated unit tests for `web/src/lib/zoho.ts` (mock fetch).
- Add integration/e2e tests that run in mock mode.
- Add a migration or script to create the Supabase storage bucket automatically (requires Supabase CLI and admin creds).
- Optionally add an admin UI to view sign requests and download signed files.

Troubleshooting
---------------
- If `createAgreementFromTemplate` fails: check ZOHO client/refresh token, and ensure scopes are correct.
- If webhook requests are not received: verify public webhook URL (use ngrok for local testing) and webhook secret match.
- If storage upload fails: confirm `SUPABASE_SERVICE_ROLE_KEY` has Storage privileges and the bucket exists.
