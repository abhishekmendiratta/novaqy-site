import type { APIRoute } from 'astro';
import * as crypto from 'crypto';
import { processZohoWebhook } from '../../../lib/zoho';

const WEBHOOK_SECRET = process.env.ZOHO_WEBHOOK_SECRET || '';

/**
 * Zoho webhook receiver.
 * - Verifies optional HMAC signature if ZOHO_WEBHOOK_SECRET is provided.
 * - Calls processZohoWebhook to update DB and fetch signed files when completed.
 *
 * Note: Zoho's exact webhook signing header may differ; this implements a generic HMAC-SHA256
 * verification where the provider sends the signature in the `x-zoho-signature` header
 * as a hex string. If Zoho uses a different header/name, update accordingly.
 */
export const POST: APIRoute = async ({ request }) => {
  try {
    const raw = await request.text();
    const payload = raw ? JSON.parse(raw) : {};

    // If a webhook secret is configured, verify the HMAC.
    if (WEBHOOK_SECRET) {
      const headerSig = (request.headers.get('x-zoho-signature') || request.headers.get('x-signature') || '').trim();

      if (!headerSig) {
        console.warn('Zoho webhook signature header missing');
        return new Response(JSON.stringify({ error: 'Missing signature header' }), { status: 400 });
      }

      const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET);
      hmac.update(raw, 'utf8');
      const expected = hmac.digest('hex');

      // Use constant-time compare
      const valid = crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(headerSig));
      if (!valid) {
        console.warn('Zoho webhook signature mismatch');
        return new Response(JSON.stringify({ error: 'Invalid signature' }), { status: 401 });
      }
    }

    // Process the webhook payload
    const result = await processZohoWebhook(payload);

    return new Response(JSON.stringify({ ok: true, result }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('zoho webhook error', err);
    return new Response(JSON.stringify({ error: err?.message || 'Server error' }), { status: 500 });
  }
};
