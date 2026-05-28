import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FinalCTA from '@/components/FinalCTA';
import { services, industries, audience } from '@/lib/site';
import { pageMetadata, SITE } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Franchise Marketing Services | All Services',
  description:
    'Every service 5th Element Media offers franchise brands: paid ads, UGC creative, CRM automation, email and SMS, real-time dashboards, and the complete franchise growth system.',
  path: '/services',
  keywords: [
    'franchise marketing services',
    'franchise marketing agency services',
    'franchise paid ads',
    'franchise UGC',
    'franchise CRM',
    'franchise email SMS',
    'franchise analytics',
    'franchise growth system',
  ],
});

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${SITE.url}/services#collection`,
  url: `${SITE.url}/services`,
  name: 'Franchise Marketing Services',
  description: 'All services offered by 5th Element Media.',
  isPartOf: { '@id': `${SITE.url}#website` },
  about: { '@id': `${SITE.url}#organization` },
  hasPart: services.map(s => ({
    '@type': 'Service',
    '@id': `${SITE.url}${s.href}#service`,
    name: s.label,
    description: s.description,
    url: `${SITE.url}${s.href}`,
    provider: { '@id': `${SITE.url}#organization` },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={collectionSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />

      {/* HERO */}
      <section className="pt-[150px] pb-12 px-6 text-center">
        <div className="stag inline-block">Services</div>
        <h1
          className="font-extrabold mb-5 max-w-[900px] mx-auto"
          style={{ fontSize: 'clamp(40px,5.5vw,64px)', letterSpacing: '-.04em', lineHeight: 1.05 }}
        >
          Everything Franchise Brands Need.<br />
          <em className="not-italic text-teal">One Connected Engine.</em>
        </h1>
        <p
          className="text-tx-2 mx-auto max-w-[640px]"
          style={{ fontSize: 'clamp(17px,1.7vw,19px)', lineHeight: 1.6 }}
        >
          Six services, built specifically for franchise systems. Use them individually or as one integrated growth engine.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="px-6 pb-24">
        <div className="max-w-mx mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative flex flex-col p-7 bg-wh border border-bd rounded-l transition-all hover:-translate-y-1 hover:border-teal-bd hover:shadow-[0_16px_48px_rgba(0,190,157,.08)]"
              style={{ transition: 'all .3s' }}
            >
              <div
                className="absolute top-7 right-7 w-9 h-9 rounded-full bg-teal-bg border border-teal-bd flex items-center justify-center text-teal font-bold transition-all group-hover:bg-teal group-hover:text-dk group-hover:border-teal"
                aria-hidden
              >
                →
              </div>
              <div className="text-[40px] font-extrabold text-teal mb-3" style={{ letterSpacing: '-.04em', opacity: 0.3, lineHeight: 1 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h2
                className="font-extrabold text-tx mb-2 leading-tight pr-12"
                style={{ fontSize: 22, letterSpacing: '-.02em' }}
              >
                {s.label}
              </h2>
              <p className="text-[14px] text-tx-2 leading-relaxed flex-1">{s.description}</p>
              <div className="mt-5 text-[13px] font-bold text-teal opacity-0 group-hover:opacity-100 transition-opacity">
                Explore {s.label} →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="sec bg-off">
        <div className="mx max-w-mx mx-auto">
          <div className="text-center mb-12">
            <div className="stag inline-block">Built for the way franchises actually grow</div>
            <h2 className="sttl">Who Each Service Is For</h2>
            <p className="ssub mx-auto">
              Whether you&apos;re a franchisor unifying performance across every market or a franchisee filling a single location, the engine flexes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {audience.map(a => (
              <Link
                key={a.href}
                href={a.href}
                className="block p-8 bg-wh border border-bd rounded-l transition-all hover:border-teal-bd hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,.04)] group"
              >
                <div className="stag">For Your Role</div>
                <h3 className="text-[24px] font-extrabold text-tx mb-2" style={{ letterSpacing: '-.02em' }}>
                  {a.label}
                </h3>
                <p className="text-sm text-tx-2 leading-relaxed mb-4">
                  {a.label === 'For Franchisors'
                    ? 'Unify brand-wide performance, sell more units, and give every franchisee a system that actually generates leads.'
                    : 'Get the local lead engine that fills your location: hyper-local ads, UGC creative, real-time dashboards, automated follow-up.'}
                </p>
                <span className="inline-flex items-center gap-1 text-[14px] font-bold text-teal group-hover:gap-2 transition-all">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES STRIP */}
      <section className="sec">
        <div className="mx max-w-mx mx-auto text-center">
          <div className="stag inline-block">Industries</div>
          <h2 className="sttl">Verticals We Dominate</h2>
          <p className="ssub mx-auto mb-10">
            We don&apos;t do generic. Every vertical has its own audience psychology, offer structure, and creative language. We know what converts in each.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-[820px] mx-auto">
            {industries.map(ind => (
              <Link
                key={ind.href}
                href={ind.href}
                className="block px-5 py-4 border border-bd rounded text-sm font-bold text-tx hover:border-teal hover:text-teal hover:-translate-y-0.5 transition-all"
              >
                {ind.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Not Sure Which Service You Need?"
        subtitle="Book a free 45-minute Franchise Lead Engine Audit and we'll tell you exactly where the gaps are."
      />
    </>
  );
}
