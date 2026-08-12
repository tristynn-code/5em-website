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
    image: `${SITE.url}/team/tristynn-headshot.jpg`,
    url: `${SITE.url}/about`,
  };
}

/** JobPosting schema - makes a role eligible for Google's job rich results. */
export function jobPostingSchema(role: {
  slug: string;
  title: string;
  description: string;
  datePosted: string;
  closeDate?: string;
  employmentTypeSchema: string;
  workStyle: 'In-person' | 'Hybrid' | 'Remote';
  location: string;
  payMin?: number;
  payMax?: number;
  payUnit?: 'YEAR' | 'MONTH' | 'HOUR';
}) {
  // Google strongly recommends validThrough so it retires the listing on time.
  // Default to 60 days after datePosted when no explicit close date is set.
  const validThrough =
    role.closeDate ??
    new Date(new Date(role.datePosted).getTime() + 60 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10);

  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    '@id': `${SITE.url}/careers/${role.slug}#jobposting`,
    title: role.title,
    description: role.description,
    datePosted: role.datePosted,
    validThrough,
    // Stable per-role id helps Google de-duplicate the posting across crawls.
    identifier: {
      '@type': 'PropertyValue',
      name: SITE.name,
      value: role.slug,
    },
    employmentType: role.employmentTypeSchema,
    hiringOrganization: {
      '@type': 'Organization',
      name: SITE.name,
      sameAs: SITE.url,
      logo: SITE.logo,
    },
    directApply: true,
    url: `${SITE.url}/careers/${role.slug}`,
  };

  // Remote roles use applicantLocationRequirements + TELECOMMUTE; on-site/hybrid
  // get a physical jobLocation built from the company address.
  if (role.workStyle === 'Remote') {
    base.jobLocationType = 'TELECOMMUTE';
    base.applicantLocationRequirements = {
      '@type': 'Country',
      name: 'United States',
    };
  } else {
    base.jobLocation = {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.address.addressLocality,
        addressRegion: SITE.address.addressRegion,
        postalCode: SITE.address.postalCode,
        addressCountry: SITE.address.addressCountry,
      },
    };
  }

  if (role.payMin && role.payUnit) {
    base.baseSalary = {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: {
        '@type': 'QuantitativeValue',
        minValue: role.payMin,
        maxValue: role.payMax ?? role.payMin,
        unitText: role.payUnit,
      },
    };
  }

  return base;
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
