import type { APIRoute } from 'astro'
import { initSentry, captureException, redactPII } from '../../lib/sentry'
initSentry()

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json().catch(() => null)
    // Best-effort: redact any obvious PII before sending to error tracker
    const safe = redactPII(typeof body === 'object' && body ? (body as Record<string, unknown>) : {})
    // Send to Sentry (if configured) as a breadcrumb / warning
    captureException(new Error('CSP violation reported'), { report: safe })
    // Optionally also log to server console (development / audit)
    // eslint-disable-next-line no-console
    console.info('CSP report received (redacted):', JSON.stringify(safe))

    // Respond 204 (no content) as recommended for CSP report endpoints
    return new Response(null, { status: 204 })
  } catch (err: any) {
    captureException(err, { phase: 'csp-report', error: String(err?.message || err) })
    return new Response(JSON.stringify({ ok: false }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }
}
