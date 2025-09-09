// TypeScript
/**
 * Cloudflare Pages Function: _set-cache.ts
 *
 * Purpose:
 * - Example Pages Function to demonstrate setting Cache-Control and Surrogate-Control
 *   headers for different route types (static assets vs dynamic responses).
 * - Designed as a repository-side example only (no Cloudflare API calls).
 *
 * Usage:
 * - Place this file in `web/functions/` so Pages maps it to a route.
 * - Example: a request to `/api/_set-cache` will execute this function.
 *
 * Security:
 * - Access server-side secrets via process.env only. Ensure secrets are configured
 *   in Cloudflare Pages Project Settings (Preview / Production) and NOT leaked to client bundles.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function onRequest(context: any) {
  const { request } = context;
  try {
    const url = new URL(request.url);
    const path = url.pathname;

    // Default headers for JSON responses
    const defaultJsonHeaders = {
      "Content-Type": "application/json; charset=utf-8",
      // Surrogate-Control instructs edge (Cloudflare) caching policy separately from browser
      "Surrogate-Control": "max-age=60",
      // Browser cache: short; edge cache: 60s
      "Cache-Control": "public, max-age=0, s-maxage=60, stale-while-revalidate=300",
    };

    // Static asset rules (adjust to your build output path, e.g., /_astro, /assets, /dist/_static)
    if (path.startsWith("/_astro/") || path.startsWith("/assets/") || path.match(/\\.(js|css|png|jpg|svg|webp|avif)$/i)) {
      const headers = new Headers({
        "Content-Type": "application/octet-stream",
        // Immutable long-lived caching for fingerprinted assets
        "Cache-Control": "public, max-age=31536000, immutable",
        // Edge can keep a longer TTL if desired; Cloudflare Pages cache rules may override
        "Surrogate-Control": "max-age=31536000",
      });
      return new Response(null, {
        status: 204,
        headers,
      });
    }

    // Example route for HTML / dynamic pages that should be short-lived at edge
    if (path === "/" || path.endsWith(".html")) {
      const headers = new Headers({
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
        "Surrogate-Control": "max-age=60",
      });
      // In a real function you'd return rendered HTML here
      return new Response("<!doctype html><meta charset='utf-8'><title>Cache Example</title><body>Cache headers set</body></html>", {
        status: 200,
        headers,
      });
    }

    // Default: JSON API route handling with short edge caching
      const body = JSON.stringify({
      ok: true,
      path,
      msg: "Example response with recommended cache headers",
      envPreview: (globalThis as any).process?.env?.NODE_ENV || null,
    });

    return new Response(body, {
      status: 200,
      headers: defaultJsonHeaders,
    });
  } catch (err) {
    const safeBody = JSON.stringify({
      ok: false,
      error: String(err),
    });
    return new Response(safeBody, {
      status: 500,
      headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
    });
  }
}
