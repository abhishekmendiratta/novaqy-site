/**
 * Integration test for Zoho Sign endpoints (mock mode).
 *
 * Requirements:
 * - Dev server running (default: http://localhost:4321)
 * - .env should enable mock mode: ZOHO_INTEGRATION_ENABLED=false (or leave unset)
 *
 * This script:
 * 1. POST /api/sign-contract with a test recipient
 * 2. Reads returned record and transaction id
 * 3. POST /api/zoho/callback with a "completed" event for that transaction id
 * 4. Verifies HTTP 200 responses for each step
 *
 * Usage:
 *   node scripts/integration/test-zoho-integration.js
 */

const SITE = process.env.SITE_URL || 'http://localhost:4321';

async function postJson(path, body, headers = {}) {
  const res = await fetch(`${SITE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body),
  });
  const text = await res.text().catch(() => '');
  let json;
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    json = { raw: text };
  }
  return { status: res.status, body: json };
}

(async () => {
  console.log('Zoho integration test (integration) starting against', SITE);

  // 1) create signing request
  const recipientName = 'Test Recipient';
  const recipientEmail = `test+${Date.now()}@example.com`;

  console.log('Creating sign request...');
  const createResp = await postJson('/api/sign-contract', { recipientName, recipientEmail });

  if (createResp.status !== 200) {
    console.error('Failed to create sign request:', createResp.status, createResp.body);
    process.exit(2);
  }
  console.log('Create response OK:', createResp.body);

  const record = createResp.body?.record;
  const signUrl = createResp.body?.signUrl;
  if (!record) {
    console.error('No record returned from /api/sign-contract');
    process.exit(3);
  }

  const txId = record?.zoho_transaction_id || record?.zoho_transaction_id || null;
  console.log('Record id:', record?.id, 'txId:', txId, 'signUrl:', signUrl);

  // 2) simulate webhook if we have a txId
  if (txId) {
    const payload = {
      data: {
        transaction_id: txId,
        status: 'completed',
      },
    };
    console.log('Posting webhook simulation for txId:', txId);
    const webhookResp = await postJson('/api/zoho/callback', payload);
    if (webhookResp.status !== 200) {
      console.error('Webhook handler failed:', webhookResp.status, webhookResp.body);
      process.exit(4);
    }
    console.log('Webhook processed OK:', webhookResp.body);
  } else {
    console.warn('No transaction id available; skipping webhook simulation.');
  }

  console.log('Integration test completed successfully.');
  process.exit(0);
})().catch((err) => {
  console.error('Integration test error', err);
  process.exit(1);
});
