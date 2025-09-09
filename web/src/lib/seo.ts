/**
 * SEO helper for Astro + TypeScript
 *
 * Exports:
 * - SITE: site-level defaults
 * - type Meta
 * - getDefaultMeta(meta?: Partial<Meta>) => Meta
 * - organizationSchema, serviceSchema: functions that return JSON-LD objects
 */

export type Meta = {
  title: string;
  description: string;
  canonical: string;
  image: string;
  robots?: string;
  // allow arbitrary structured data entry per-page
  structuredData?: unknown;
};

const SITE_TITLE = 'Novaqy';
const SITE_DESCRIPTION = 'Patient technical support for seniors across United States and Canada. One-time plans with immediate support.';
const SITE_URL = (import.meta.env.PUBLIC_SITE_URL as string) || 'https://novaqy.com';
const SITE_TWITTER = '@novaqy'; // placeholder
const SITE_PHONE = '+1-800-330-1234';

export const SITE = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  twitter: SITE_TWITTER,
  phone: SITE_PHONE,
};

export function getDefaultMeta(meta?: Partial<Meta>): Meta {
  const defaults: Meta = {
    title: `${SITE_TITLE} — Patient tech support for seniors`,
    description: SITE_DESCRIPTION,
    canonical: SITE.url,
    image: `${SITE.url}/favicon.ico`,
    robots: 'index,follow',
  };

  return {
    ...defaults,
    ...meta,
  };
}

/**
 * Organization JSON-LD
 */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Novaqy Cloud LLP',
    alternateName: 'Novaqy',
    description: SITE_DESCRIPTION,
    url: SITE.url,
    telephone: SITE.phone,
    sameAs: [], // add social profiles if available
    address: {
      '@type': 'PostalAddress',
      addressCountry: ['US', 'CA'],
    },
    serviceArea: ['United States', 'Canada'],
  };
}

/**
 * Service JSON-LD
 */
export function serviceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Senior Technical Support',
    provider: {
      '@type': 'Organization',
      name: 'Novaqy Cloud LLP',
    },
    serviceType: 'Technical Support',
    audience: {
      '@type': 'Audience',
      audienceType: 'Seniors aged 55+',
    },
    description: SITE_DESCRIPTION,
  };
}
