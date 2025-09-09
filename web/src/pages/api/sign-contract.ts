import type { APIRoute } from 'astro';
import { createAgreementFromTemplateAndPersist } from '../../lib/zoho';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { recipientName, recipientEmail, templateId } = body;

    if (!recipientName || !recipientEmail) {
      return new Response(JSON.stringify({ error: 'recipientName and recipientEmail are required' }), { status: 400 });
    }

    // Allow optionally overriding templateId for this request
    const result = await createAgreementFromTemplateAndPersist({
      templateId,
      recipientName,
      recipientEmail,
    });

    const signUrl = result?.createRes?.signUrl || result?.inserted?.zoho_sign_url || null;

    return new Response(JSON.stringify({ ok: true, signUrl, record: result.inserted }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('sign-contract error', err);
    return new Response(JSON.stringify({ error: err?.message || 'Server error' }), { status: 500 });
  }
};
