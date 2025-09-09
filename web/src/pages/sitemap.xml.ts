import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const SITE_URL = (import.meta.env.PUBLIC_SITE_URL as string) || 'https://novaqy.com';

  const pages: { path: string; changefreq: string; priority: string }[] = [
    { path: '/', changefreq: 'daily', priority: '1.0' },
    { path: '/plans', changefreq: 'weekly', priority: '0.9' },
    { path: '/contact', changefreq: 'monthly', priority: '0.7' },
    { path: '/business', changefreq: 'monthly', priority: '0.6' },
    { path: '/sign-contract', changefreq: 'monthly', priority: '0.4' },
    { path: '/success', changefreq: 'never', priority: '0.2' },
    { path: '/legal/terms', changefreq: 'yearly', priority: '0.1' },
    { path: '/legal/privacy', changefreq: 'yearly', priority: '0.1' },
    { path: '/legal/refund', changefreq: 'yearly', priority: '0.1' },
  ];

  const lastmod = new Date().toISOString();

  const urlEntries = pages
    .map(
      (p) => `
  <url>
    <loc>${SITE_URL.replace(/\/$/, '')}${p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
};
