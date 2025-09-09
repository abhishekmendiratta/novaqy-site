## Copilot instructions for contributors and automated agents

Purpose: give an AI agent the minimum, high-value context to be productive in this repo quickly.

1) Big picture (the "why" and components)
- Frontend: Astro 4+ (static-first) + TypeScript (strict) + Tailwind (senior-first config). Aim: tiny runtime JS, prebuilt pages for performance and accessibility.
- Backend/integrations: Supabase (DB, RLS, edge functions), Stripe (Checkout sessions), Zoho Sign (contract signing), Google Workspace for notifications.
- Hosting & infra: Cloudflare Pages + edge functions; Jenkins for CI (typecheck, lint, Lighthouse CI, axe-core accessibility).

2) Key files and where to look
- Project PRD and context: `prd.txt`, `MVP-Context.md` (primary source for requirements and architecture). Read before changing behavior.
- Tasks / planning: `.taskmaster/config.json`, `.taskmaster/tasks/tasks.json`, and generated per-task files under `.taskmaster/tasks/`.
- Dev web skeleton: `web/` (Astro project). Look in `web/src/pages/`, `web/src/layouts/`, and `web/src/styles/` for UI patterns.
- Env examples: `.env.example` (canonical list of required variables such as SUPABASE_*, STRIPE_*, ZOHO_SIGN_TEMPLATE_ID, PUBLIC_SITE_URL).
- CI/Deployment: `Jenkinsfile` (pipeline stages) and Cloudflare Pages settings (configured via Cloudflare dashboard).

3) Developer workflows an agent can run (concrete commands)
- Start local Astro dev server (from repo root):
```bash
npm --prefix ./web install
npm --prefix ./web run dev -- --port 3001
```
- Taskmaster (task orchestration / AI helpers):
  - Parse a PRD: `task-master parse-prd prd.txt --tag master` (creates tasks.json)
  - Analyze complexity: `task-master analyze-complexity --tag master --output .taskmaster/reports/complexity-master.json --research`
  - Expand tasks: `task-master expand --all --tag master --force --research`
  - Generate per-task files: `task-master generate --tag master`
  - Update a single task (append implementation notes):
```bash
task-master update-task -i 2 -p "Append implementation notes: use Astro SSG, supabase client at src/lib/supabase.ts, ensure accessibility" --append --research --tag master
```
Note: Taskmaster needs API keys or a local model; use environment variables (see `.vscode/mcp.json`) or export inline for a single command.

4) Project-specific conventions and patterns
- TypeScript strict-only: all new code should be authored in TypeScript; run `tsc --noEmit` in CI to validate.
- Minimal runtime JS: prefer server/SSG and zero or minimal client bundles. Avoid introducing React/Vue runtime unless justified.
- Senior-first UI: base font-size 18px, 44px touch targets, high contrast palette (see `prd.txt` color section). Accessibility (axe-core) checks are required in CI.
- Supabase usage: tables described in `prd.txt` (contact_submissions, plan_purchases, call_notifications) and RLS is enforced; DB schema changes must include RLS policy updates and tests.
- Payment flow: Stripe Checkout (hosted). Frontend triggers Checkout session then backend records purchase in Supabase and surfaces /success with "Call Now" CTA.

5) Integration points & secrets
- Important env vars (do NOT commit secrets): SUPABASE_URL, SUPABASE_SERVICE_KEY, STRIPE_SECRET_KEY, STRIPE_PUBLISHABLE_KEY, STRIPE_PRICE_ID_*, ZOHO_SIGN_TEMPLATE_ID, GA4_MEASUREMENT_ID.
- Recommended pattern: use `.env` for local dev (gitignored), `.env.example` lists variable names. For single-command AI runs use inline export: `GOOGLE_API_KEY=... PERPLEXITY_API_KEY=... task-master ...`.

6) Testing, linting & CI hints
- CI sequence (see `Jenkinsfile`): install, `tsc --noEmit`, `npm run lint`, unit tests, `npm run build`, Lighthouse CI, axe-core scan, deploy to Cloudflare Pages.
- Accessibility target: axe-core zero violations and Lighthouse accessibility 100 as enforced by CI.

7) How an automated agent should behave when editing
- Read `prd.txt` and `MVP-Context.md` first — changes must map to explicit PRD items.
- When updating implementation tasks, append notes (use `--append`) rather than replacing, preserve human edits.
- When running AI-backed commands, don't persist API keys into the repo; prefer inline exports or instruct the human to add them to `.env` / `.vscode/mcp.json`.

8) Quick examples pulled from this repo
- The task manifest lives at: `.taskmaster/tasks/tasks.json` — use Taskmaster commands to keep it in sync with changes to `prd.txt`.
- Astro dev server for Task 2 skeleton is under `web/` and runs with `npm --prefix ./web run dev`.
- Supabase schema snippets exist in `prd.txt` (SQL block) — use them as the canonical schema source when creating migrations.

9) When in doubt
- Ask for clarification and point to the PRD section (line references) you used. Create minimal reproducible changes with tests (`tsc`, unit tests, accessibility checks) and then update the task with `task-master update-subtask` to log the implementation.

Please review this file and tell me any missing items or project-specific workflows you want included; I'll iterate quickly.
