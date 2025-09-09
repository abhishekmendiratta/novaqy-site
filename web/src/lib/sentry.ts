/**
 * Minimal Sentry integration helper.
 * - Dynamically imports @sentry/node when SENTRY_DSN is present to avoid runtime errors when not installed.
 * - Exposes initSentry(), captureException(), and redactPII().
 *
 * redactPII(obj) will shallow-scan strings and redact emails and phone-like values.
 */

type SentryClient = any

let Sentry: SentryClient | null = null
let sentryInitialized = false

export function initSentry() {
  if (sentryInitialized) return
  const dsn = process.env.SENTRY_DSN
  if (!dsn) {
    sentryInitialized = true
    return
  }

  try {
    // Dynamic import to avoid hard dependency if not installed
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    // Use require here for ESM/CJS compatibility in Astro server runtime
    // @ts-ignore
    const _sentry = require('@sentry/node')
    Sentry = _sentry
    Sentry.init({
      dsn,
      environment: process.env.SENTRY_ENV || process.env.NODE_ENV || 'development',
      tracesSampleRate: Number(process.env.SENTRY_TRACES_SAMPLE_RATE || 0.0)
    })
    sentryInitialized = true
  } catch (err) {
    // If import fails, keep Sentry null but mark initialized to avoid retrying
    // Logging is acceptable here because this is server-side initialization
    // eslint-disable-next-line no-console
    console.warn('Sentry not available or failed to initialize:', (err as any)?.message || err)
    sentryInitialized = true
  }
}

/**
 * Safe wrapper to capture exceptions. Falls back to console.error if Sentry not available.
 */
export function captureException(err: unknown, context?: Record<string, unknown>) {
  try {
    if (!sentryInitialized) initSentry()
    if (Sentry && Sentry.captureException) {
      Sentry.captureException(err, { extra: context })
      return
    }
  } catch (e) {
    // ignore sentry errors
  }
  // eslint-disable-next-line no-console
  console.error('Captured exception (fallback):', err, context || '')
}

/**
 * Redact PII from an object for safe logging / error context.
 * This does a best-effort shallow redact of strings that look like emails or phones.
 */
export function redactPII(obj: Record<string, unknown> | null | undefined) {
  if (!obj) return obj
  const redacted: Record<string, unknown> = {}
  const emailRe = /([a-zA-Z0-9._%+-]{2})[a-zA-Z0-9._%+-]*@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/
  const phoneRe = /(\+?\d{1,3}[-.\s]?)?(\(?\d{2,4}\)?[-.\s]?)?[\d-.\s]{6,12}/

  for (const [k, v] of Object.entries(obj)) {
    if (typeof v === 'string') {
      let s = v
      // redact emails
      if (emailRe.test(s)) {
        s = s.replace(emailRe, (_m, p1, domain) => `${p1}***@${domain}`)
      }
      // redact phones
      if (phoneRe.test(s)) {
        s = s.replace(phoneRe, (m) => {
          const visible = m.slice(0, 2)
          return `${visible}***REDACTED***`
        })
      }
      // truncate long messages to avoid leaking large content
      if (s.length > 1000) {
        s = s.slice(0, 1000) + '...[truncated]'
      }
      redacted[k] = s
    } else if (typeof v === 'object' && v !== null) {
      try {
        redacted[k] = '[object]'
      } catch {
        redacted[k] = '[unserializable]'
      }
    } else {
      redacted[k] = v
    }
  }

  return redacted
}
