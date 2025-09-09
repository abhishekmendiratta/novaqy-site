import type { APIRoute } from 'astro'
import Stripe from 'stripe'
import { PLANS } from '../../data/plans'

const stripeSecret = process.env.STRIPE_SECRET_KEY

export const POST: APIRoute = async ({ request }) => {
  try {
    if (!stripeSecret) {
      return new Response(JSON.stringify({ error: 'Stripe secret key not configured' }), { status: 500 })
    }

    const body = await request.json()
    const planId = body?.planId as string | undefined
    const acceptedTerms = body?.acceptedTerms as boolean | undefined
    if (!planId) {
      return new Response(JSON.stringify({ error: 'Missing planId' }), { status: 400 })
    }
    if (!acceptedTerms) {
      return new Response(JSON.stringify({ error: 'Terms not accepted' }), { status: 400 })
    }

    const plan = PLANS.find((p) => p.id === planId)
    if (!plan) {
      return new Response(JSON.stringify({ error: 'Invalid planId' }), { status: 400 })
    }

    const priceEnvName = plan.stripePriceEnv
    const priceId = process.env[priceEnvName as keyof NodeJS.ProcessEnv]
    if (!priceId) {
      return new Response(JSON.stringify({ error: `Missing Stripe price id for ${priceEnvName}` }), { status: 500 })
    }

    const stripe = new Stripe(stripeSecret)

    const successUrl = `${new URL('/', request.url).origin}success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${new URL('/', request.url).origin}cancel`

    // Record acceptance details and include them in Stripe session metadata for dispute defense
    const acceptedAt = new Date().toISOString()
    const acceptIp =
      (request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '').split(',')[0].trim()
    const acceptUA = request.headers.get('user-agent') || ''
    const termsVersion = process.env.TERMS_VERSION || 'v1'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: priceId,
          quantity: 1
        }
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        plan_id: plan.id,
        plan_title: plan.title,
        terms_accepted: 'true',
        terms_version: termsVersion,
        accepted_at: acceptedAt,
        accepted_ip: acceptIp,
        accepted_user_agent: acceptUA
      }
    })

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (err: any) {
    console.error('create-checkout-session error', err)
    return new Response(JSON.stringify({ error: err?.message || 'Server error' }), { status: 500 })
  }
}
