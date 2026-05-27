export const SITE = {
  url: 'https://5them.com',
  name: '5th Element Media',
  legalName: '5th Element Media LLC',
  shortName: 'Fifth Element',
  tagline: 'The franchise marketing agency behind 100+ franchise locations',
  description:
    'Franchise marketing agency for franchisors, multi-unit operators, and franchisees. We deliver predictable local lead flow, UGC-powered creative, and AI-driven insights across every location.',
  logo: 'https://cdn.prod.website-files.com/68f669a6d79edc75f34470f3/6921faef19de659f7d5b81f6_FifthElement%207.png',
  founder: {
    name: 'Tristynn McGowan',
    role: 'Founder & CEO',
    sameAs: 'https://www.linkedin.com/in/tristynnmcgowan',
  },
  address: {
    streetAddress: '40575 California Oaks Rd D2 #234',
    addressLocality: 'Murrieta',
    addressRegion: 'CA',
    postalCode: '92562',
    addressCountry: 'US',
  },
  phone: '(951) 618-1304',
  phoneE164: '+19516181304',
  email: 'hello@5them.com',
  foundingDate: '2020',
  areaServed: 'United States',
  social: {
    linkedin: 'https://www.linkedin.com/company/5th-element-media',
    instagram: 'https://www.instagram.com/5th.element.media',
    youtube: 'https://www.youtube.com/@Tristynn.McGowan',
  },
  ogImage: '/og-default.png',
} as const;

/** Build absolute canonical URL for a path */
export function canonical(path: string): string {
  if (path === '/') return SITE.url;
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Inject JSON-LD as a <script type="application/ld+json"> tag. Safe to use in server components. */
export function jsonLd(data: object) {
  return {
    __html: JSON.stringify(data).replace(/</g, '\\u003c'),
  };
}
