import { SITE } from './seo';
import testimonialsData from '@/content/testimonials.json';

/** ProfessionalService schema = how Google + AI classify the agency itself. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE.url}#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: SITE.shortName,
    description: SITE.description,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: SITE.logo,
    },
    image: SITE.logo,
    telephone: SITE.phoneE164,
    email: SITE.email,
    foundingDate: SITE.foundingDate,
    founder: {
      '@type': 'Person',
      name: SITE.founder.name,
      jobTitle: SITE.founder.role,
      worksFor: { '@id': `${SITE.url}#organization` },
      sameAs: [SITE.founder.sameAs],
    },
    address: {
      '@type': 'PostalAddress',
      ...SITE.address,
    },
    areaServed: {
      '@type': 'Country',
      name: SITE.areaServed,
    },
    sameAs: [SITE.social.linkedin, SITE.social.instagram, SITE.social.youtube],
    knowsAbout: [
      'Franchise marketing',
      'Franchise lead generation',
      'Multi-location advertising',
      'Meta Ads for franchises',
      'Google Ads for franchises',
      'UGC creative production',
      'Marketing for franchisors',
      'Marketing for franchisees',
      'Franchise growth systems',
      'CRM automations',
    ],
    serviceArea: {
      '@type': 'Country',
      name: 'United States',
    },
    slogan: SITE.tagline,
    aggregateRating: aggregateRatingSchema(),
  };
}

/** WebSite schema enables sitelinks search box in Google. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': `${SITE.url}#organization` },
    inLanguage: 'en-US',
  };
}

/** Aggregate the testimonials into a single review-summary number. */
export function aggregateRatingSchema() {
  const testimonials = testimonialsData as Array<{ featured: boolean }>;
  const count = testimonials.length;
  return {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '5',
    reviewCount: String(count),
    itemReviewed: { '@id': `${SITE.url}#organization` },
  };
}

/** Render all testimonials as individual Review entries. */
export function reviewsSchema() {
  const testimonials = testimonialsData as Array<{
    id: string;
    name: string;
    role: string;
    location: string;
    quote: string;
  }>;
  return testimonials.map(t => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': `${SITE.url}#review-${t.id}`,
    author: {
      '@type': 'Person',
      name: t.name,
      jobTitle: t.role,
      address: {
        '@type': 'PostalAddress',
        addressLocality: t.location,
      },
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    reviewBody: t.quote,
    itemReviewed: { '@id': `${SITE.url}#organization` },
  }));
}

/** Breadcrumb trail. Pass an ordered list of { name, path } items. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.path.startsWith('http') ? item.path : `${SITE.url}${item.path}`,
    })),
  };
}

/** Service schema for service pages. */
export function serviceSchema({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}${path}#service`,
    name,
    description,
    serviceType,
    provider: { '@id': `${SITE.url}#organization` },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    url: `${SITE.url}${path}`,
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Franchise brands and franchisees',
    },
  };
}

/** Person schema for the founder bio on /about. */
export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.url}/about#tristynn`,
    name: SITE.founder.name,
    jobTitle: SITE.founder.role,
    worksFor: { '@id': `${SITE.url}#organization` },
    description:
      'Founder and CEO of 5th Element Media. Built the agency from a college dorm into a franchise marketing firm serving 100+ franchise locations across the United States.',
    sameAs: [SITE.founder.sameAs, SITE.social.youtube],
    image: 'https://cdn.prod.website-files.com/68f669a6d79edc75f34470f3/693381ab68f812e3e12cf6fa__DSC1638%20Large.jpeg',
    url: `${SITE.url}/about`,
  };
}

/** FAQPage schema. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}
