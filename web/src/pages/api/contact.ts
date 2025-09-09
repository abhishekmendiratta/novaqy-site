import type { APIRoute } from 'astro'
import { insertContactSubmission, type ContactSubmission } from '../../lib/supabase'
import { initSentry, captureException, redactPII } from '../../lib/sentry'
initSentry()

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const EMAIL_FROM = process.env.EMAIL_FROM
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL

function validateEmail(email: string) {
  // simple but practical validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json().catch(() => ({}))
    const name = (body?.name || '').toString().trim()
    const email = (body?.email || '').toString().trim()
    const phone = body?.phone ? String(body.phone).trim() : null
    const preferred_time = body?.preferred_time ? String(body.preferred_time).trim() : null
    const message = (body?.message || '').toString().trim()

    // Basic validation
    if (!name) {
      return new Response(JSON.stringify({ error: 'Name is required' }), { status: 400 })
    }
    if (!email || !validateEmail(email)) {
      return new Response(JSON.stringify({ error: 'Valid email is required' }), { status: 400 })
    }
    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), { status: 400 })
    }

    const submission: ContactSubmission = {
      name,
      email,
      phone,
      preferred_time,
      message
    }

    // Insert into Supabase (server-side helper uses service role key)
    const inserted = await insertContactSubmission(submission)

    // Send notification email (best-effort; failure does not block request).
    // Prefer Google Workspace (Gmail API via OAuth2) if configured, otherwise fall back to SendGrid if present.
    const NOTIFY_TO = process.env.NOTIFY_EMAIL || process.env.NOTIFICATION_EMAIL || process.env.SUPPORT_EMAIL

    if (NOTIFY_TO) {
      try {
        // Attempt Gmail-based send if OAuth creds are configured
        if (process.env.GMAIL_CLIENT_ID && process.env.GMAIL_CLIENT_SECRET && process.env.GMAIL_REFRESH_TOKEN && process.env.GMAIL_SENDER) {
          try {
            const { sendEmail } = await import('../../lib/gmail')
            const subject = `New contact form submission from ${name}`
            const text = `New contact submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nPreferred time: ${preferred_time || '-'}\n\nMessage:\n${message}\n\nSubmitted ID: ${inserted?.id || '-'}`
            const html = `<p>New contact submission:</p>
<ul>
<li><strong>Name:</strong> ${name}</li>
<li><strong>Email:</strong> ${email}</li>
<li><strong>Phone:</strong> ${phone || '-'}</li>
<li><strong>Preferred time:</strong> ${preferred_time || '-'}</li>
<li><strong>Submitted ID:</strong> ${inserted?.id || '-'}</li>
</ul>
<p><strong>Message:</strong></p>
<p>${(message || '').replace(/\n/g, '<br/>')}</p>`
            await sendEmail(NOTIFY_TO, subject, text, html)
          } catch (err: any) {
            captureException(err, { phase: 'gmail-notification', data: redactPII({ name, email, phone, preferred_time, message, insertedId: inserted?.id }) })
            // fall through to SendGrid attempt if configured
            if (!(SENDGRID_API_KEY && EMAIL_FROM && NOTIFY_EMAIL)) {
              console.info('No SendGrid fallback configured')
            }
          }
        }

        // Fallback to SendGrid if available (keeps previous behavior)
        if (SENDGRID_API_KEY && EMAIL_FROM && NOTIFY_EMAIL) {
          try {
            const mail = {
              personalizations: [
                {
                  to: [{ email: NOTIFY_EMAIL }],
                  subject: `New contact form submission from ${name}`
                }
              ],
              from: { email: EMAIL_FROM },
              content: [
                {
                  type: 'text/plain',
                  value: `New contact submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nPreferred time: ${
                    preferred_time || '-'
                  }\n\nMessage:\n${message}\n\nSubmitted ID: ${inserted?.id || '-'}`
                },
                {
                  type: 'text/html',
                  value: `<p>New contact submission:</p>
  <ul>
  <li><strong>Name:</strong> ${name}</li>
  <li><strong>Email:</strong> ${email}</li>
  <li><strong>Phone:</strong> ${phone || '-'}</li>
  <li><strong>Preferred time:</strong> ${preferred_time || '-'}</li>
  <li><strong>Submitted ID:</strong> ${inserted?.id || '-'}</li>
  </ul>
  <p><strong>Message:</strong></p>
  <p>${(message || '').replace(/\n/g, '<br/>')}</p>`
                }
              ]
            }

            await fetch('https://api.sendgrid.com/v3/mail/send', {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${SENDGRID_API_KEY}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(mail)
            })
          } catch (err: any) {
            captureException(err, { phase: 'sendgrid-notification', data: redactPII({ name, email, phone, preferred_time, message, insertedId: inserted?.id }) })
          }
        } else {
          console.info('No notification provider configured (Gmail or SendGrid). Skipping email.')
        }
      } catch (err: any) {
        captureException(err, { phase: 'notification', data: redactPII({ name, email, phone, preferred_time, message, insertedId: inserted?.id }) })
      }
    } else {
      console.info('No NOTIFY_EMAIL / NOTIFICATION_EMAIL / SUPPORT_EMAIL configured — skipping notification email')
    }

    return new Response(JSON.stringify({ ok: true, row: inserted }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (err: any) {
    captureException(err, { phase: 'contact-api', data: redactPII({}) })
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
