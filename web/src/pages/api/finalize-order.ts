import type { APIRoute } from 'astro'
import Stripe from 'stripe'
import { insertOrder } from '../../lib/supabase'

const stripeSecret = process.env.STRIPE_SECRET_KEY

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url)
    const sessionId = url.searchParams.get('session_id')
    if (!sessionId) {
      return new Response(JSON.stringify({ error: 'Missing session_id' }), { status: 400 })
    }

    if (!stripeSecret) {
      return new Response(JSON.stringify({ error: 'Stripe secret key not configured' }), { status: 500 })
    }

    const stripe = new Stripe(stripeSecret)

    const session = await stripe.checkout.sessions.retrieve(sessionId)

    const order = {
      stripe_session_id: session.id,
      plan_id: session.metadata?.plan_id ?? null,
      plan_title: session.metadata?.plan_title ?? null,
      amount_cents: (session.amount_total ?? null) as number | null,
      currency: session.currency ?? null,
      customer_email: session.customer_details?.email ?? null,

      // Acceptance metadata from Stripe session.metadata (used for dispute defense)
      terms_accepted:
        session.metadata && typeof session.metadata.terms_accepted === 'string'
          ? session.metadata.terms_accepted === 'true'
          : null,
      terms_version: session.metadata?.terms_version ?? null,
      accepted_at: session.metadata?.accepted_at ?? null,
      accepted_ip: session.metadata?.accepted_ip ?? null,
      accepted_user_agent: session.metadata?.accepted_user_agent ?? null
    }

    const inserted = await insertOrder(order)

    // Send notification email for new order (best-effort).
    const NOTIFY_TO = process.env.NOTIFY_EMAIL || process.env.NOTIFICATION_EMAIL || process.env.SUPPORT_EMAIL

    if (NOTIFY_TO) {
      try {
        // Prefer Gmail (Google Workspace) via OAuth2 if configured
        if (process.env.GMAIL_CLIENT_ID && process.env.GMAIL_CLIENT_SECRET && process.env.GMAIL_REFRESH_TOKEN && process.env.GMAIL_SENDER) {
          try {
            const { sendEmail } = await import('../../lib/gmail')
            const subject = `New order: ${order.plan_title ?? 'purchase'}`
            const text = `New order received:\n\nPlan: ${order.plan_title ?? '-'}\nAmount: ${order.amount_cents ? '$' + (order.amount_cents / 100).toFixed(2) : '-'}\nCustomer email: ${order.customer_email ?? '-'}\nSession: ${order.stripe_session_id}\n\nOrder ID: ${inserted?.id ?? '-'}`
            const html = `<p>New order received:</p>
<ul>
<li><strong>Plan:</strong> ${order.plan_title ?? '-'}</li>
<li><strong>Amount:</strong> ${order.amount_cents ? '$' + (order.amount_cents / 100).toFixed(2) : '-'}</li>
<li><strong>Customer email:</strong> ${order.customer_email ?? '-'}</li>
<li><strong>Stripe session:</strong> ${order.stripe_session_id}</li>
<li><strong>Order ID:</strong> ${inserted?.id ?? '-'}</li>
</ul>`
            await sendEmail(NOTIFY_TO, subject, text, html)
          } catch (err: any) {
            console.error('gmail order notification error', err)
          }
        }

        // Fallback to SendGrid if configured (keeps previous project pattern)
        if (process.env.SENDGRID_API_KEY && process.env.EMAIL_FROM && process.env.NOTIFY_EMAIL) {
          try {
            const mail = {
              personalizations: [
                {
                  to: [{ email: process.env.NOTIFY_EMAIL }],
                  subject: `New order: ${order.plan_title ?? 'purchase'}`
                }
              ],
              from: { email: process.env.EMAIL_FROM },
              content: [
                {
                  type: 'text/plain',
                  value: `New order received:\n\nPlan: ${order.plan_title ?? '-'}\nAmount: ${order.amount_cents ? '$' + (order.amount_cents / 100).toFixed(2) : '-'}\nCustomer email: ${order.customer_email ?? '-'}\nSession: ${order.stripe_session_id}\n\nOrder ID: ${inserted?.id ?? '-'}`
                },
                {
                  type: 'text/html',
                  value: `<p>New order received:</p>
<ul>
<li><strong>Plan:</strong> ${order.plan_title ?? '-'}</li>
<li><strong>Amount:</strong> ${order.amount_cents ? '$' + (order.amount_cents / 100).toFixed(2) : '-'}</li>
<li><strong>Customer email:</strong> ${order.customer_email ?? '-'}</li>
<li><strong>Stripe session:</strong> ${order.stripe_session_id}</li>
<li><strong>Order ID:</strong> ${inserted?.id ?? '-'}</li>
</ul>`
                }
              ]
            }

            await fetch('https://api.sendgrid.com/v3/mail/send', {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(mail)
            })
          } catch (err: any) {
            console.error('sendgrid order notification error', err)
          }
        } else {
          // If neither provider present, log that emails were skipped
          if (!(process.env.GMAIL_CLIENT_ID && process.env.GMAIL_CLIENT_SECRET && process.env.GMAIL_REFRESH_TOKEN && process.env.GMAIL_SENDER)) {
            console.info('No email provider configured (Gmail or SendGrid) — skipping order notification')
          }
        }
      } catch (err: any) {
        console.error('order notification error', err)
      }
    } else {
      console.info('No NOTIFY_EMAIL / NOTIFICATION_EMAIL / SUPPORT_EMAIL configured — skipping order notification')
    }

    return new Response(JSON.stringify({ order: inserted }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (err: any) {
    console.error('finalize-order error', err)
    return new Response(JSON.stringify({ error: err?.message || 'Server error' }), { status: 500 })
  }
}
