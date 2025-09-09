# Environment variables inventory

This document lists environment variables used by the `web/` project, where they are referenced, why they are required, and guidance for configuring them for Cloudflare Pages (preview vs production).

## Summary (required for Pages project)

- Build command: `npm run build` (runs `astro build`)
- Output directory: `dist` (Astro default)
- Node version: Use an LTS (>=18). Cloudflare Pages allows selecting Node version in project settings — prefer 20 if available.

## Required environment variables (observed in repo)

These variables were discovered by scanning the codebase. Mark variables that are server-only (must never be exposed to the browser).

- SUPABASE_URL
  - Where: `web/src/lib/supabase.ts`, tests
  - Purpose: Supabase REST endpoint used by server helpers (PostgREST)
  - Type: URL
  - Scope: Server-only (preview + production)
  - Example: `https://xyzcompany.supabase.co`
  - Notes: Required for server-side inserts; must be paired with service role key for some operations.

- SUPABASE_SERVICE_ROLE_KEY
  - Where: `web/src/lib/supabase.ts`, tests
  - Purpose: Supabase service role key used by server helpers (high-privilege)
  - Type: Secret
  - Scope: Server-only (production + preview if you run server-side tests). NEVER exposed to client.
  - Example: `eyJhbGci...`
  - Notes: Treat as secret; do not commit to repo or .env files.

- ZOHO_INTEGRATION_ENABLED
  - Where: `web/tests/zoho.unit.test.ts`
  - Purpose: Toggle Zoho integration / mock mode
  - Type: boolean-like string (`'true'` / `'false'`)
  - Scope: Build/test / preview
  - Notes: Tests set this to `'false'` to enable mock behavior.

- STRIPE_SECRET_KEY (expected)
  - Where: likely used by server API routes that integrate Stripe (search recommended)
  - Purpose: Stripe API secret key for creating checkout sessions and handling webhooks
  - Type: Secret
  - Scope: Server-only (production + preview)
  - Notes: Use Stripe webhooks secret additionally for webhook verification.

- Other service keys / URLs (audit note)
  - The codebase references services such as Zoho and Stripe; please run a repo-wide grep for `process.env` or service-specific prefixes to capture every variable (if you want, I can generate a full list).
  - Pattern examples to search for: `_URL`, `_KEY`, `_SECRET`, `STRIPE_`, `SUPABASE_`, `ZOHO_`.

## How to configure in Cloudflare Pages

1. In the Cloudflare dashboard > Pages > Your project:
   - Set the Build command to `npm run build`.
   - Set the Build output directory to `dist`.
   - Add environment variables under "Environment variables" in Project Settings.
     - Use the **Production** environment for live site secrets.
     - Use the **Preview** environment for PR / branch previews (use test / mock values).
   - For server-only secrets (e.g., `SUPABASE_SERVICE_ROLE_KEY`, `STRIPE_SECRET_KEY`), set them in Pages' environment variables (they are masked and not accessible to client bundles, but ensure your code does not leak them to the browser).

2. Using GitHub:
   - If you prefer, store secrets in GitHub Actions as repository secrets and use Actions to validate builds. For Pages connection, you typically add secrets directly in Pages project settings.

## Best practices

- NEVER expose service role keys or secret keys to client-side code. Ensure server-only helpers run in server-side runtime (Pages Functions / Worker) or separate backend.
- Use different values for preview vs production. Preview should use stub/mock/test credentials where possible.
- Rotate keys periodically and use least-privilege credentials.
- Add a `README` note and document responsibilities for rotating keys.

## Example .env snippet (DO NOT COMMIT)
This is for local development only. Add a `.env` to your local dev environment and do not commit.

```bash
SUPABASE_URL="https://xyzcompany.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="service_role_key_here"
ZOHO_INTEGRATION_ENABLED="false"
STRIPE_SECRET_KEY="sk_test_xxx"
```

## Next steps I can perform (choose one)

- Produce a complete repo scan for all `process.env` and `import.meta.env` usages and create a precise `docs/ENV_VARS.md` with file-by-file references.
- Create a sample Cloudflare Pages Function that demonstrates setting Cache-Control headers for static and dynamic routes.
- Create a `docs/Cloudflare-Pages.md` step-by-step onboarding guide and a CI workflow file to validate builds (no deployments).
