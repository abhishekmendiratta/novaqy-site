import type { APIRoute } from 'astro';

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Log headers and read raw body to diagnose empty-body issue on dev server.
    try {
      const headersObj: Record<string, string> = {};
      // request.headers is a Headers-like object; iterate if available
      if (request.headers && typeof request.headers[Symbol.iterator] === 'function') {
        for (const [k, v] of request.headers as any) {
          headersObj[k] = String(v);
        }
      } else if (request.headers && (request.headers as any).entries) {
        for (const [k, v] of (request.headers as any).entries()) {
          headersObj[k] = String(v);
        }
      }
      console.info('signup headers:', headersObj);
    } catch (hdrErr) {
      console.info('signup headers: <unavailable>', hdrErr);
    }

    // Read raw body (may be empty in certain dev/static output modes)
    const raw = await request.text().catch(() => '');
    console.info('signup raw body (first 200 chars):', raw ? raw.slice(0, 200) : '<empty>');

    let email = '';
    let password = '';

    if (raw) {
      // If looks like URL-encoded form data
      if (raw.includes('=') && !raw.trim().startsWith('{')) {
        try {
          const params = new URLSearchParams(raw);
          email = String(params.get('email') || '').trim();
          password = String(params.get('password') || '').trim();
        } catch (e) {
          // ignore
        }
      } else {
        // Try JSON parse
        try {
          const parsed = JSON.parse(raw);
          email = String((parsed as any).email || '').trim();
          password = String((parsed as any).password || '').trim();
        } catch (e) {
          // ignore
        }
      }
    }

    // Fallback: attempt formData (some environments support it)
    if (!email && !password) {
      try {
        const form = await request.formData();
        if (form) {
          email = String(form.get('email') || '').trim();
          password = String(form.get('password') || '').trim();
        }
      } catch (e) {
        // ignore
      }
    }

    if (!email || !validateEmail(email)) {
      return new Response(JSON.stringify({ error: 'Valid email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!password || password.length < 8) {
      return new Response(JSON.stringify({ error: 'Password must be at least 8 characters' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.info('Signup request received for', email);

    return new Response(
      JSON.stringify({
        ok: true,
        message: 'Signup received. Account creation is handled by the backend in production.'
      }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (err: any) {
    console.error('signup API error', err);
    return new Response(JSON.stringify({ error: err?.message || 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
