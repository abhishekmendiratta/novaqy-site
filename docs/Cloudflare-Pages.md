# Cloudflare Pages — Onboarding & Repository Setup

Purpose
- Prepare this repository to be connected to Cloudflare Pages later (no account actions or deployments performed).
- Provide step-by-step instructions for connecting GitHub, configuring build settings and environment variables, integrating Pages Functions (edge functions), cache policies, and email notifications for build/deploy events.

Prerequisites
- Maintainer access to the GitHub repository.
- Cloudflare account with Pages & Workers access (do not perform Cloudflare-side steps until explicitly requested).
- Project build: Node 18+ recommended. Build command: `npm run build`. Output directory: `dist`.
- Refer to `docs/ENV_VARS.md` for a complete environment variable inventory and per-file mapping.

1) Build settings (Cloudflare Pages project)
- Build command: npm run build
- Build directory / Output directory: dist
- Node version: select Node 18.x (or the version used in CI)
- Install command: npm ci
- Install dependencies caching: enable default cache in Pages settings

2) GitHub integration (Cloudflare)
- Ensure the Cloudflare GitHub App is installed and authorized for this repository.
  - Recommended installation scope: Repository access for this repo only (least privilege).
  - If organization-level installation is used, ensure Pages GitHub app has access to the target repo.
- Cloudflare Pages -> Create a project -> Connect to Git -> choose this repo -> set branch (e.g., main) -> set build settings above.
- Do NOT complete this step until explicitly authorized.

3) Environment variables (preview vs production)
- Keep secrets out of the client bundle. Any env used server-side must be set in Cloudflare Pages "Environment Variables" and marked as secret.
- Recommended separation:
  - Preview (pull-request) environment: use lower-privilege test credentials where possible.
  - Production environment: real credentials (only in production).
- Required secrets (examples, see docs/ENV_VARS.md for full list):
  - SUPABASE_URL
  - SUPABASE_SERVICE_ROLE_KEY (server-only, never expose)
  - STRIPE_SECRET_KEY
  - ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, ZOHO_REFRESH_TOKEN, ZOHO_SIGN_TEMPLATE_ID, ZOHO_WEBHOOK_SECRET
  - SENDGRID_API_KEY, EMAIL_FROM, NOTIFY_EMAIL
  - ADMIN_API_KEY
- How to add env vars in Pages:
  - Project -> Settings -> Environment variables & secrets -> Add variables for Preview and Production separately.
  - For preview values, use sandbox/test accounts and toggles (e.g., ZOHO_INTEGRATION_ENABLED=false).

4) Pages Functions (edge functions) — repository layout & examples
- Functions folder: place Cloudflare Pages Functions in `web/functions/`. Use TypeScript for server-like code.
- Entry naming: files (or directories) map to routes. Example: `web/functions/_set-cache.ts` or `web/functions/api/hello.ts`.
- Example snippet (TypeScript) to set Cache-Control headers for dynamic responses:

```typescript
// TypeScript
export async function onRequest(context: any) {
  const { request } = context;
  const res = new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store", // for dynamic responses
      // For static assets use "public, max-age=3600, stale-while-revalidate=60"
    },
  });
  return res;
}
```

- When implementing functions that use server-side secrets, always access them via process.env and ensure they are set as Pages secrets (not exposed to client-side code).

5) Caching policy recommendations
- Static assets (CSS/JS/images):
  - Use immutable versioning in filenames (already done via build tooling).
  - Cache-Control: public, max-age=31536000, immutable
  - Serve from `/_astro` or your build's static directory; set appropriate header via Pages settings or a function that proxies those assets.
- HTML / dynamic server responses:
  - For responses that must be fresh: Cache-Control: no-store
  - For SSR or edge-rendered pages with short freshness: Cache-Control: public, max-age=60, stale-while-revalidate=300
- Implementation options:
  - Add headers at build time (if static).
  - Use Pages Functions: set header per route as shown above.
  - Use Cloudflare cache rules in the Pages project dashboard to match routes and set Edge TTLs.

6) Email notifications for build & deployment (requested)
- Options:
  - Use Cloudflare Pages built-in notifications (in Pages settings) — supports email on deploy failure/success.
  - Use a GitHub Actions workflow to validate builds and send richer email notifications (recommended for flexibility).
- Recommended approach (repo-side):
  - Add GitHub Actions workflow that runs on PR and push to main, performs `npm ci` and `npm run build`. On failure send email using SendGrid.
  - Required secrets for Actions: SENDGRID_API_KEY, EMAIL_FROM, NOTIFY_EMAIL.
- Example high-level flow:
  1. PR opens -> workflow runs -> build succeeds -> no email
  2. Build fails -> workflow posts status to GitHub and sends an email to NOTIFY_EMAIL with logs (use small Node script or action that calls SendGrid API).
- Note: The repository will include a validation workflow (`.github/workflows/validate-build.yml`) created separately.

7) Monitoring & post-deploy validation
- Enable Pages build logs in Cloudflare and link to GitHub commit statuses.
- Recommended: enable GitHub checks, and add a simple status badge in the README showing Pages build status (add after connecting Pages).
- For runtime monitoring: enable Cloudflare Analytics and optionally integrate build or runtime alerts into Slack/Email using Cloudflare webhooks.

8) Security & best practices
- Never commit secrets.
- Use least-privilege credentials in preview environment.
- Rotate service keys periodically and use short-lived tokens where possible.
- Audit Pages Function code for data leakage (never log secrets).

9) What this documentation creates in the repo (planned)
- docs/Cloudflare-Pages.md (this file)
- web/functions/_set-cache.ts (example Pages Function) — created in a follow-up operation
- .github/workflows/validate-build.yml — CI workflow to validate builds and trigger email notifications (created in a follow-up operation)
- docs/ENV_VARS.md — inventory of environment variables (already present)

Appendix: Quick checklist for maintainer (pre-connect)
- [ ] Confirm which email address will receive notifications (NOTIFY_EMAIL).
- [ ] Decide whether to use SendGrid for outgoing notification emails.
- [ ] Prepare preview/test credentials for third-party services.
- [ ] Confirm branch to connect for Pages (main or production branch).
