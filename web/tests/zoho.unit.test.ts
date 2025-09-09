import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import * as zoho from '../src/lib/zoho';

const ORIGINAL_ENV = { ...process.env };

describe('zoho helper (unit)', () => {
  beforeEach(() => {
    // Ensure mock mode for Zoho
    process.env.ZOHO_INTEGRATION_ENABLED = 'false';
    // Minimal supabase envs for PostgREST calls
    process.env.SUPABASE_URL = 'https://supabase.test';
    process.env.SUPABASE_SERVICE_ROLE_KEY = 'service-role-key';
  });

  afterEach(() => {
    // Restore globals and env
    vi.restoreAllMocks();
    // @ts-ignore
    global.fetch = undefined;
    process.env = { ...ORIGINAL_ENV };
  });

  it('createAgreementFromTemplateAndPersist uses mock Zoho and inserts record into Supabase', async () => {
    // Mock fetch for Supabase insert (POST)
    vi.stubGlobal('fetch', vi.fn(async (input: any, init: any) => {
      const url = typeof input === 'string' ? input : input?.url;
      if (url && url.includes('/rest/v1/zoho_sign_documents') && init?.method === 'POST') {
        return {
          ok: true,
          json: async () => [
            {
              id: 'uuid-1',
              template_id: 'tmpl-123',
              recipient_email: 'joe@example.com',
              recipient_name: 'Joe',
              status: 'sent',
              zoho_transaction_id: 'mock-tx',
            },
          ],
        } as any;
      }
      return { ok: false, status: 404, text: async () => 'not found' } as any;
    }));

    const res = await zoho.createAgreementFromTemplateAndPersist({
      templateId: 'tmpl-123',
      recipientName: 'Joe',
      recipientEmail: 'joe@example.com',
    });

    expect(res).toBeDefined();
    expect(res.inserted).toBeDefined();
    expect(res.inserted.id).toBe('uuid-1');
    expect(res.createRes).toBeDefined();
    expect(res.createRes.transactionId).toMatch(/^mock-tx-/);
  });

  it('processZohoWebhook updates status and downloads/uploads file when completed', async () => {
    // Prepare stubs:
    // 1) GET find record by zoho_transaction_id
    // 2) PATCH update status
    // 3) Subsequent PATCH to add signed file info
    const fetchMock = vi.fn(async (input: any, init: any) => {
      const url = typeof input === 'string' ? input : input?.url;
      // find endpoint (GET)
      if (url && url.includes('/rest/v1/zoho_sign_documents?')) {
        return {
          ok: true,
          json: async () => [
            {
              id: 'uuid-1',
              zoho_transaction_id: 'tx-1',
              status: 'sent',
            },
          ],
        } as any;
      }

      // PATCH update status or final update - return representation
      if (url && url.includes('/rest/v1/zoho_sign_documents?id=eq.')) {
        return {
          ok: true,
          json: async () => [
            {
              id: 'uuid-1',
              status: init?.body ? JSON.parse(init.body).status || JSON.parse(init.body).signed_file_path : 'unknown',
            },
          ],
        } as any;
      }

      return { ok: false, status: 404, text: async () => 'not found' } as any;
    });

    vi.stubGlobal('fetch', fetchMock);

    // Spy on downloadSignedDocumentBytes and uploadSignedFile to avoid real network
    const dummyPdf = new Uint8Array([1, 2, 3]);
    vi.spyOn(zoho, 'downloadSignedDocumentBytes').mockResolvedValue(dummyPdf);
    vi.spyOn(zoho, 'uploadSignedFile').mockResolvedValue({ path: 'signed-documents/uuid-1/signed.pdf' } as any);

    const payload = {
      data: {
        transaction_id: 'tx-1',
        status: 'completed',
      },
    };

    const result = await zoho.processZohoWebhook(payload);
    expect(result.ok).toBe(true);
    expect(result.txId).toBe('tx-1');
    expect(result.status).toBe('completed');
    expect(result.recordId).toBe('uuid-1');

    // Validate that fetch was called at least for find + update + final update (>=2 times)
    expect(fetchMock.mock.calls.length).toBeGreaterThanOrEqual(2);
  });
});
