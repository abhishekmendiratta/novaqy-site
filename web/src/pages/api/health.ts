import type { APIRoute } from 'astro'

export const GET: APIRoute = async (): Promise<Response> => {
  try {
    const now = new Date().toISOString()
    const checks = {
      app: 'ok',
      supabase_configured: !!process.env.SUPABASE_URL,
      stripe_configured: !!process.env.STRIPE_SECRET_KEY
    }

    return new Response(
      JSON.stringify({
        ok: true,
        time: now,
        checks
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  } catch (err: any) {
    return new Response(JSON.stringify({ ok: false, error: err?.message || 'health check failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
