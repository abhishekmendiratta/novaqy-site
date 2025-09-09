/**
 * Gmail helper using OAuth2 refresh token to obtain an access token
 * and send email via Gmail REST API (users.messages.send).
 *
 * This is a minimal implementation that constructs a raw MIME message
 * and sends it base64url-encoded. Designed for server-side use only.
 *
 * Required env vars:
 * - GMAIL_CLIENT_ID
 * - GMAIL_CLIENT_SECRET
 * - GMAIL_REFRESH_TOKEN
 * - GMAIL_SENDER
 *
 * Usage:
 *  import { sendEmail } from '../lib/gmail'
 *  await sendEmail('to@example.com', 'Subject', 'plain text', '<p>html</p>')
 */

async function getAccessToken(): Promise<string> {
  const clientId = process.env.GMAIL_CLIENT_ID
  const clientSecret = process.env.GMAIL_CLIENT_SECRET
  const refreshToken = process.env.GMAIL_REFRESH_TOKEN

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Missing Gmail OAuth2 credentials in environment')
  }

  const params = new URLSearchParams()
  params.set('client_id', clientId)
  params.set('client_secret', clientSecret)
  params.set('refresh_token', refreshToken)
  params.set('grant_type', 'refresh_token')

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString()
  })

  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`Failed to refresh Gmail access token: ${res.status} ${body}`)
  }

  const json = await res.json()
  if (!json.access_token) throw new Error('No access_token returned from token endpoint')
  return json.access_token as string
}

function makeRawMessage(from: string, to: string, subject: string, text: string, html?: string) {
  // Basic MIME message. Keep headers simple and use UTF-8.
  const boundary = '----=_NovaqyBoundary_' + Date.now()
  const lines: string[] = []

  lines.push(`From: ${from}`)
  lines.push(`To: ${to}`)
  lines.push(`Subject: ${subject}`)
  lines.push('MIME-Version: 1.0')
  if (html) {
    lines.push(`Content-Type: multipart/alternative; boundary="${boundary}"`)
    lines.push('')
    lines.push(`--${boundary}`)
    lines.push('Content-Type: text/plain; charset="UTF-8"')
    lines.push('Content-Transfer-Encoding: 7bit')
    lines.push('')
    lines.push(text)
    lines.push(`--${boundary}`)
    lines.push('Content-Type: text/html; charset="UTF-8"')
    lines.push('Content-Transfer-Encoding: 7bit')
    lines.push('')
    lines.push(html)
    lines.push(`--${boundary}--`)
  } else {
    lines.push('Content-Type: text/plain; charset="UTF-8"')
    lines.push('Content-Transfer-Encoding: 7bit')
    lines.push('')
    lines.push(text)
  }

  const raw = lines.join('\r\n')
  // base64url encode (replace +/ with -_ and remove padding)
  const b64 = Buffer.from(raw, 'utf8').toString('base64')
  const b64url = b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
  return b64url
}

export async function sendEmail(to: string, subject: string, text: string, html?: string) {
  const sender = process.env.GMAIL_SENDER
  if (!sender) throw new Error('GMAIL_SENDER not configured')

  const accessToken = await getAccessToken()
  const raw = makeRawMessage(sender, to, subject, text, html)

  const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ raw })
  })

  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`Gmail send failed (${res.status}): ${body}`)
  }

  return
}
