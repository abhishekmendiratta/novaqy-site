import type { APIRoute } from 'astro'
import Stripe from 'stripe'

/**
 * Admin-only endpoint to export dispute evidence for an order.
 *
 * Query parameters:
 *  - order_id=<orders.id> OR session_id=<stripe.checkout.session.id>
 *
 * Authentication:
 *  - Require header `x-admin-key` to match process.env.ADMIN_API_KEY
 *
 * Response:
 *  - JSON bundle: { order, stripeSession, paymentIntent, charges, line_items }
 *
 * Notes:
 *  - This endpoint uses the SUPABASE_SERVICE_ROLE_KEY and STRIPE_SECRET_KEY and must
 *    only be available to trusted admin callers. Do NOT expose the ADMIN_API_KEY publicly.
 *  - Consider adding additional attachments (supplier invoices, license activation logs)
 *    in the future by storing attachments in a DB table or object storage and including
 *    their URLs in the returned payload.
 */

const STRIPE_KEY = process.env.STRIPE_SECRET_KEY
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const ADMIN_API_KEY = process.env.ADMIN_API_KEY

if (!STRIPE_KEY) {
  // Fail fast when loaded in dev environment without config; runtime handlers still re-check.
  console.warn('Warning: STRIPE_SECRET_KEY not configured for admin/export-evidence endpoint')
}

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url)
    const adminKey = request.headers.get('x-admin-key') || ''

    if (!ADMIN_API_KEY || adminKey !== ADMIN_API_KEY) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
    }

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      return new Response(JSON.stringify({ error: 'Supabase configuration missing' }), { status: 500 })
    }

    if (!STRIPE_KEY) {
      return new Response(JSON.stringify({ error: 'Stripe configuration missing' }), { status: 500 })
    }

    const orderId = url.searchParams.get('order_id')
    const sessionId = url.searchParams.get('session_id')

    if (!orderId && !sessionId) {
      return new Response(JSON.stringify({ error: 'Provide order_id or session_id' }), { status: 400 })
    }

    // Fetch order row from Supabase using service role key
    const supabaseEndpointBase = SUPABASE_URL.replace(/\/$/, '') + '/rest/v1'
    let ordersEndpoint = ''
    if (orderId) {
      ordersEndpoint = `${supabaseEndpointBase}/orders?id=eq.${encodeURIComponent(orderId)}&select=*`
    } else {
      ordersEndpoint = `${supabaseEndpointBase}/orders?stripe_session_id=eq.${encodeURIComponent(
        sessionId as string
      )}&select=*`
    }

    const supRes = await fetch(ordersEndpoint, {
      method: 'GET',
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        Accept: 'application/json'
      }
    })

    if (!supRes.ok) {
      let body = await supRes.text().catch(() => '')
      return new Response(
        JSON.stringify({
          error: `Supabase query failed (${supRes.status})`,
          details: body
        }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const supJson = await supRes.json()
    const order = Array.isArray(supJson) ? supJson[0] : supJson

    if (!order) {
      return new Response(JSON.stringify({ error: 'Order not found' }), { status: 404 })
    }

    // Use Stripe to fetch session and related objects
    const stripe = new Stripe(STRIPE_KEY)

    const stripeSessionId = order.stripe_session_id || sessionId
    if (!stripeSessionId) {
      return new Response(JSON.stringify({ error: 'Order missing stripe_session_id' }), { status: 400 })
    }

    // Retrieve session and expand payment_intent for convenience
    const session = await stripe.checkout.sessions.retrieve(stripeSessionId as string, {
      expand: ['payment_intent']
    })

    // Payment intent may be expanded or a string
    let paymentIntent: Stripe.PaymentIntent | null = null
    if (typeof session.payment_intent === 'string') {
      try {
        paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent as string, {
          expand: ['charges.data.balance_transaction']
        })
      } catch (e) {
        // ignore retrieval error but record it
        console.warn('Unable to retrieve payment intent:', e)
      }
    } else if (session.payment_intent && typeof session.payment_intent === 'object') {
      paymentIntent = session.payment_intent as Stripe.PaymentIntent
    }

    // Get charges from paymentIntent (if available)
    const charges = (paymentIntent && (paymentIntent as any).charges?.data) ?? []

    // Get line items (up to 100)
    const lineItems = await stripe.checkout.sessions.listLineItems(stripeSessionId as string, {
      limit: 100
    })

    // Bundle result. Do NOT include live secret keys in response.
    const bundle = {
      order,
      stripeSession: session,
      paymentIntent: paymentIntent ?? null,
      charges,
      line_items: lineItems.data ?? []
    }

    return new Response(JSON.stringify({ bundle }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (err: any) {
    console.error('export-evidence error', err)
    return new Response(JSON.stringify({ error: err?.message ?? 'Server error' }), { status: 500 })
  }
}
