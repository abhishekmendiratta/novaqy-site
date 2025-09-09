# Missing Information & Required Assets — Project Audit (Novaqy MVP)

Generated: 2025-09-09T00:48:00+05:30

This report lists missing information, secrets, visual assets, content, and operational details required to complete the project end-to-end. It maps each missing item to where it is used in the codebase and why it matters, and it provides recommended next steps and priorities.

---

## A. Visual assets (branding & UX)
Required assets
- Logo (SVG, PNG 512px)
  - Where used: header/layout (web/src/layouts/Base.astro), seo (web/src/lib/seo.ts), meta/OG
  - Why: branding, structured data Organization.logo, social previews
- OG / Social preview image (1200×630)
  - Where used: seo.ts, meta tags
  - Why: social share previews for LinkedIn/Facebook/Twitter
- Hero illustration (SVG or optimized raster)
  - Where used: web/src/pages/index.astro (hero)
  - Why: primary visual for homepage; must be responsive and optimized
- Plan icons (SVG) — for 4 plans (mobile, individual, family, family+)
  - Where used: web/src/pages/plans.astro
- Team photos (optional)
  - Where used: about page (if added)
- Trust/security badge images (optional)
  - Where used: homepage, checkout, marketing sections
- Favicon variants / Apple touch icons (confirm)
  - Where used: web/public/favicon.ico (exists) and meta tags
  - Why: proper cross-device icons and PWA compatibility

Notes: Prefer SVG for icons/illustrations; provide WebP/AVIF or source rasters for CI optimization.

---

## B. Icons & UI assets (small)
- Full icon set expected but missing: phone (exists), check (exists), additional icons (secure, features, social, menu).
  - Where: web/src/components/Icon.astro currently includes phone/check only.
  - Why: consistent iconography avoids layout shifts and "skeleton" look.

---

## C. Environment variables & API keys (critical)
Populate real values (or test keys) in hosting/CI env:

Payment / Stripe
- STRIPE_SECRET_KEY — server-only; used in:
  - web/src/pages/api/create-checkout-session.ts
  - web/src/pages/api/finalize-order.ts (if present)
- STRIPE_PUBLISHABLE_KEY — client
- STRIPE_PRICE_ID_MOBILE
- STRIPE_PRICE_ID_INDIVIDUAL
- STRIPE_PRICE_ID_FAMILY
- STRIPE_PRICE_ID_FAMILY_PLUS
- STRIPE_WEBHOOK_SECRET (if webhook handling in CI or server)

Database / Supabase
- SUPABASE_URL
- SUPABASE_ANON_KEY (client) — referenced in web/src/lib/supabase.ts
- SUPABASE_SERVICE_ROLE_KEY (server-only) — migrations, server functions

Zoho Sign
- ZOHO_CLIENT_ID
- ZOHO_CLIENT_SECRET
- ZOHO_REFRESH_TOKEN (long-lived)
- ZOHO_SIGN_TEMPLATE_ID
- ZOHO_WEBHOOK_SECRET (optional)
- ZOHO_INTEGRATION_ENABLED (true/false) — toggles real Zoho calls in web/src/lib/zoho.ts and api/sign-contract.ts

Email (Gmail/Workspace)
- GMAIL_CLIENT_ID
- GMAIL_CLIENT_SECRET
- GMAIL_REFRESH_TOKEN
- GMAIL_SENDER — used in web/src/lib/gmail.ts and server email flows

Analytics / Tracking
- GA4_MEASUREMENT_ID — web/src/lib/seo.ts
- GTM_CONTAINER_ID (optional)

CI / Deployment / Infra
- GITHUB_API_KEY (if automating actions)
- CLOUDFLARE_API_TOKEN / ACCOUNT_ID / ZONE_ID (Cloudflare Pages integration + cache invalidation)
- JENKINS credentials / secret store config (Jenkinsfile references)
- LHCI token (if running Lighthouse CI in CI)

Optional ML / Research keys (only if used)
- OPENAI_API_KEY, ANTHROPIC_API_KEY, PERPLEXITY_API_KEY, etc. (present in .env.example)

Why: Without Stripe/Supabase/Gmail/Zoho keys the payment flow, persistence, email notifications, and contract-signing features cannot be tested or used in staging/production.

---

## D. Legal & content (high)
- Final copy required for:
  - Terms of Service (web/src/pages/legal/terms.astro)
  - Privacy Policy (web/src/pages/legal/privacy.astro)
  - Refund Policy (web/src/pages/legal/refund.astro)
- Contract template / Zoho agreement content for Zoho Sign

Why: legal pages must be accurate and accessible before production.

---

## E. SEO / Social & site config (medium)
- PUBLIC_SITE_URL or canonical site URL (production)
  - Where: seo.ts and sitemap generation (web/src/pages/sitemap.xml.ts)
- Organization structured-data assets:
  - logo SVG (for schema)
  - telephone and address confirmation
- Robots/sitemap review for staging/production

---

## F. Image optimization & pipeline (medium)
- If you add raster images, provide originals (source) so we can:
  - Generate WebP/AVIF copies and responsive sizes via Sharp (recommended)
  - Commit optimized assets to web/public/optimized or integrate into CI pipeline
- If user-uploaded images are required, confirm storage (Supabase buckets) and transformations.

---

## G. Test data & staging accounts (medium)
- Stripe test keys and test card numbers
- Supabase test project + sample rows for `contact_submissions` and `plan_purchases`
- Gmail test sender and recipient addresses for notification testing

---

## H. Operational & access items (medium)
- GitHub repository access / PAT for CI tasks
- Cloudflare Pages project linkage and build env configuration
- Jenkins credentials for pipeline (if you will run Jenkins)
- Namecheap/Domain owner credentials for DNS automation (optional)

---

## I. Accessibility & QA artifacts (optional)
- Target browser/device matrix
- Acceptability criteria / prioritized WCAG checks beyond PRD
- Any user research or senior user feedback to guide UI adjustments

---

## Quick file -> env mapping (non-exhaustive)
- web/src/pages/api/create-checkout-session.ts
  - STRIPE_SECRET_KEY
  - STRIPE price env names referenced dynamically (e.g., STRIPE_PRICE_ID_MOBILE)
  - TERMS_VERSION (optional)
- web/src/lib/supabase.ts
  - SUPABASE_URL
  - SUPABASE_ANON_KEY
  - SUPABASE_SERVICE_ROLE_KEY (server)
- web/src/lib/zoho.ts and web/src/pages/api/sign-contract.ts
  - ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, ZOHO_REFRESH_TOKEN, ZOHO_SIGN_TEMPLATE_ID
- web/src/lib/gmail.ts
  - GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REFRESH_TOKEN, GMAIL_SENDER
- web/src/lib/seo.ts
  - GA4_MEASUREMENT_ID, PUBLIC_SITE_URL (canonical)
- CI (Jenkinsfile / scripts/ci)
  - LHCI token, CLOUDFLARE_API_TOKEN, GITHUB_API_KEY

---

## Recommended next steps (priority)
1. Provide Stripe test keys and the four STRIPE_PRICE_ID_* values so I can fully test checkout flow.
2. Provide Supabase URL + keys for contact/purchase persistence (or allow a temporary test DB).
3. Provide Zoho and Gmail OAuth credentials if contract signing and email notifications are in-scope now.
4. Provide branding assets: SVG logo, hero illustration, plan icons, OG image.
5. Provide legal copy (TOS, Privacy, Refund).
6. Provide Cloudflare Pages / GitHub tokens if you want deployment automation and CI secrets wired.
7. Optional: Approve creation of CI guard scripts (JS/Cli) for gzipped CSS/JS budgets and Sharp image conversion — I can add these in Act mode.

---

## Actionables I can do immediately (Act mode required)
- Create a JSON file mapping every env var name to referenced files and lines (for CI/hosting upload).
- Implement CI guard script that fails build when gzipped CSS > 50KB or JS > 20KB.
- Add Sharp-based image conversion script + example usage in package.json.
- Wire provided assets into web/public (copying and updating references) and commit changes.
- Wire provided env vars into web/.env (local) and/or configure sample staging env for Cloudflare Pages (requires tokens).

---

## Final notes
- Many values are optional for local dev (mocking possible). However end-to-end features (payments, emails, contract signing, DB) require real/test credentials.
- I can prepare all infrastructure wiring and scripts; to apply secrets and assets I will need you to either paste the values here (not recommended for production secrets) or upload them to your hosting provider/CI secret store and provide access.
