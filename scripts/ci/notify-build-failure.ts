// TypeScript
/**
 * Notify build failure via SendGrid
 *
 * This script is intended to be run in the GitHub Actions `notify` job when a build fails.
 * It reads required environment variables (SENDGRID_API_KEY, EMAIL_FROM, NOTIFY_EMAIL, and
 * GitHub run metadata provided by the workflow) and posts a simple HTML email with a link
 * to the failing Actions run.
 *
 * Note:
 * - This file is purposely TypeScript to comply with repository TypeScript standards.
 * - The workflow calls this via `npx ts-node` (ensure the workflow uses `npx ts-node`).
 * - The script avoids fetching Action logs (which would require a GitHub token) and instead
 *   links directly to the run for maintainers to review logs.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

async function main(): Promise<void> {
  const SENDGRID_API_KEY = (globalThis as any).process?.env?.SENDGRID_API_KEY;
  const EMAIL_FROM = (globalThis as any).process?.env?.EMAIL_FROM;
  const NOTIFY_EMAIL = (globalThis as any).process?.env?.NOTIFY_EMAIL;
  const GITHUB_REPOSITORY = (globalThis as any).process?.env?.GITHUB_REPOSITORY || '';
  const GITHUB_RUN_ID = (globalThis as any).process?.env?.GITHUB_RUN_ID || '';
  const GITHUB_RUN_NUMBER = (globalThis as any).process?.env?.GITHUB_RUN_NUMBER || '';
  const GITHUB_SHA = (globalThis as any).process?.env?.GITHUB_SHA || '';
  const GITHUB_REF = (globalThis as any).process?.env?.GITHUB_REF || '';
  const GITHUB_WORKFLOW = (globalThis as any).process?.env?.GITHUB_WORKFLOW || '';

  if (!SENDGRID_API_KEY || !EMAIL_FROM || !NOTIFY_EMAIL) {
    console.error("Missing SendGrid configuration. Please set SENDGRID_API_KEY, EMAIL_FROM, and NOTIFY_EMAIL in secrets.");
    // Do not fail the workflow because the notification is best-effort
    return;
  }

  const runUrl = `https://github.com/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}`;
  const subject = `🚨 Build failed: ${GITHUB_REPOSITORY} (run #${GITHUB_RUN_NUMBER})`;
  const html = `
    <p>The CI build for <strong>${GITHUB_REPOSITORY}</strong> failed.</p>
    <p><strong>Workflow:</strong> ${GITHUB_WORKFLOW}<br/>
    <strong>Run number:</strong> ${GITHUB_RUN_NUMBER} — <a href="${runUrl}">View run details</a></p>
    <p><strong>Commit:</strong> ${GITHUB_SHA}<br/>
    <strong>Ref:</strong> ${GITHUB_REF}</p>
    <hr/>
    <p>This is an automated notification. Check the Actions run for full logs and failure details.</p>
  `;

  const payload = {
    personalizations: [
      {
        to: [{ email: NOTIFY_EMAIL }],
      },
    ],
    from: { email: EMAIL_FROM },
    subject,
    content: [
      {
        type: "text/html",
        value: html,
      },
    ],
  };

  try {
    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`SendGrid API responded with status ${res.status}: ${text}`);
    } else {
      console.log(`Notification email sent to ${NOTIFY_EMAIL}`);
    }
  } catch (err: any) {
    console.error("Failed to send notification email:", String(err));
  }
}

main().catch((err) => {
  console.error("Unhandled error in notify script:", String(err));
});
