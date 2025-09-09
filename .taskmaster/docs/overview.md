Taskmaster onboarding & project overview

This file was added to bootstrap Taskmaster usage in this repository. It summarizes recommended commands, conventions, and the minimal steps required to run Taskmaster locally. It intentionally avoids committing any API keys or secrets.

Quick checklist
- Confirm .taskmaster/config.json exists (it does).
- Populate model credentials in .vscode/mcp.json or .env before running AI-backed commands.
- Use 'task-master models --setup' to select or change models.

Recommended local commands

Install Taskmaster globally:
npm install -g task-master-ai

Or use npx if you prefer not to install globally:
npm install --save-dev task-master-ai
npx task-master --help

Parse the example PRD (requires models configured):
task-master parse-prd .taskmaster/templates/example_prd.txt --tag master

Model configuration
- Run 'task-master models --setup' to interactively configure 'main', 'research', and 'fallback' models.
- For local development, prefer Ollama or a local model for 'main' and a research provider for 'research'.
- Never commit API keys. Use .env or .vscode/mcp.json for provider credentials.

Developer workflow (recommended)
1. Use 'task-master list' to see tasks.
2. Use 'task-master next' to pick the next actionable task.
3. Use 'task-master show <id>' to view a task before implementation.
4. Use 'task-master update-subtask' to append implementation notes while working.
5. Use 'task-master set-status' to mark tasks done.

CI / Quality gates (suggested)
- TypeScript: 'tsc --noEmit'
- Lint: 'npm run lint'
- Tests: 'npm test'
- Accessibility: axe-core (CI step)
- Performance: Lighthouse CI (CI step)

Environment variables
Populate these locally (see 'prd.txt' and 'MVP-Context.md'):
- SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_KEY
- STRIPE_PUBLISHABLE_KEY, STRIPE_SECRET_KEY, STRIPE_PRICE_ID_*
- ZOHO_SIGN_TEMPLATE_ID
- GA4_MEASUREMENT_ID
- SUPPORT_EMAIL, NOTIFICATION_EMAIL

If you need assistance configuring Taskmaster models or running Taskmaster commands, ask for help and include the provider you plan to use.
