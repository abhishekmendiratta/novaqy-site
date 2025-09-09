import type { APIRoute } from 'astro'
import { insertCallRequest } from '../../lib/supabase'

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json()
    const { order_id, customer_email, phone, notes } = body

    if (!order_id && !customer_email) {
      return new Response(JSON.stringify({ error: 'order_id or customer_email required' }), { status: 400 })
    }

    const callRequest = {
      order_id: order_id ?? null,
      customer_email: customer_email ?? null,
      phone: phone ?? null,
      status: 'pending',
      notes: notes ?? null
    }

    const inserted = await insertCallRequest(callRequest)

    return new Response(JSON.stringify({ callRequest: inserted }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (err: any) {
    console.error('request-call error', err)
    return new Response(JSON.stringify({ error: err?.message || 'Server error' }), { status: 500 })
  }
}
