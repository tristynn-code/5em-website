import type { Metadata } from 'next';
import { auditCTA } from '@/lib/site';
import data from '@/content/case-studies.json';

export const metadata: Metadata = {
  title: 'Franchise Marketing Case Studies | Real Results from Real Brands | 5th Element Media',
  description:
    'See how 5th Element Media helps franchise brands generate leads, fill locations, and lower CPL. Real case studies from IMAGE Studios, BODY20, Pilates Addiction, beem Light Sauna, iFlex, Scramblers Golf, and Sequel Brands.',
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-[160px] pb-[60px] px-6 text-center">
        <div className="stag inline-block">Case Studies</div>
        <h1
          className="font-extrabold mb-5"
          style={{ fontSize: 'clamp(36px,5.5vw,56px)', letterSpacing: '-.03em', lineHeight: 1.08 }}
        >
          Real Brands.<br />
          <em className="not-italic text-teal">Real Results.</em>
        </h1>
        <p className="ssub mx-auto" style={{ maxWidth: 600 }}>
          We don&apos;t do hypotheticals. Every result on this page comes from franchise brands we work with right now. Real campaigns, real lead numbers, real franchise owners.
        </p>
      </section>

      {/* BRAND LOGOS */}
      <div className="flex justify-center items-center gap-5 md:gap-10 flex-wrap py-10 px-6 bg-off">
        {data.logos.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="opacity-80 hover:opacity-100 transition-opacity object-contain h-auto"
            style={{
              width: logo.big ? 160 : 120,
              maxHeight: logo.big ? 50 : 40,
            }}
          />
        ))}
      </div>

      {/* CASE STUDIES GRID */}
      <section className="py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1100px] mx-auto">
          {/* FEATURED: IMAGE Studios */}
          <div
            className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 border border-bd rounded-l overflow-hidden transition-all bg-wh hover:-translate-y-[3px] hover:shadow-[0_16px_48px_rgba(0,190,157,.08)] hover:border-teal-bd"
          >
            <div className="px-9 py-10 flex flex-col justify-center">
              <img
                src="https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69c61c11861524201c5c5c6b.png"
                alt="IMAGE Studios"
                style={{ width: 140, marginBottom: 16 }}
              />
              <div className="text-xs text-tx-3 font-medium mb-5">Salon Suites Franchise</div>
              <div className="text-base text-tx leading-[1.7] italic mb-4">
                &ldquo;Fifth Element got us to <strong className="not-italic font-bold">100% leased before we even opened.</strong> Their ability to generate leads and identify the right pros in our market was the best part.&rdquo;
              </div>
              <div className="text-[13px] text-tx-3 mb-5">
                <strong className="text-tx font-semibold">Jared Jamison</strong> - Bakersfield, CA
              </div>
              <div className="flex gap-3 flex-wrap">
                {['100% Occupancy', '900+ Leads in 5 Months', '$11.40 CPL'].map(h => (
                  <Highlight key={h}>{h}</Highlight>
                ))}
              </div>
            </div>
            <div
              className="px-9 py-10 flex flex-col justify-center gap-4"
              style={{ background: '#0F1314' }}
            >
              <div className="text-center">
                <div
                  className="text-teal font-extrabold leading-none"
                  style={{ fontSize: 72, letterSpacing: '-.04em' }}
                >
                  100+
                </div>
                <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,.5)' }}>
                  Studios Managed Across the United States
                </div>
              </div>
            </div>
          </div>

          {/* Standard cards */}
          {data.cards.slice(0, 3).map(c => (
            <CardWithQuote key={c.id} {...c} />
          ))}

          {/* iFlex (description-only) */}
          <CardWithDescription {...data.cards[3]} />

          {/* Sequel Brands - full width split card */}
          <div
            className="md:col-span-2 border border-bd rounded-l overflow-hidden bg-wh transition-all hover:-translate-y-[3px] hover:shadow-[0_16px_48px_rgba(0,190,157,.08)] hover:border-teal-bd"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="px-7 py-8 md:border-r border-bd">
                <img
                  src="https://assets.cdn.filesafe.space/Bvl8985Bn5drFTi6qZJM/media/69c61ced5ebd49328a7ad413.png"
                  alt="Sequel Brands"
                  style={{ width: 140, marginBottom: 12 }}
                />
                <div className="text-xs text-tx-3 font-medium mb-4">Multi-Brand Franchise Portfolio</div>
                <p className="text-sm text-tx-2 leading-[1.6]">
                  Sequel Brands operates multiple franchise concepts across wellness and fitness. We manage centralized ad campaigns across their entire portfolio with unified reporting and brand-specific creative strategies.
                </p>
              </div>
              <div className="px-7 py-8 flex flex-col justify-center">
                <div className="flex flex-col gap-2.5">
                  {[
                    'Pilates Addiction',
                    'BODY20',
                    'beem Light Sauna',
                    'iFlex',
                    'Ultimate Longevity Center',
                  ].map(b => (
                    <Highlight key={b} center>{b}</Highlight>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scramblers Golf - description-only */}
          <CardWithDescription {...data.cards[4]} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-off">
        <h2
          className="font-extrabold tracking-tight mb-3"
          style={{ fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '-.02em' }}
        >
          Want to Be Our Next Case Study?
        </h2>
        <p className="text-base text-tx-2 mb-8">
          Book your free 45-minute audit. We&apos;ll show you exactly what we&apos;d do for your franchise brand.
        </p>
        <a href={auditCTA.href} className="bp bpl">
          Book Your Free Audit →
        </a>
      </section>
    </>
  );
}

function Highlight({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div
      className={`px-3.5 py-2 bg-teal-bg border border-teal-bd rounded-lg text-xs font-bold text-teal ${
        center ? 'text-center' : ''
      }`}
    >
      {children}
    </div>
  );
}

function CardWithQuote({
  logo,
  logoSize,
  brand,
  vertical,
  quote,
  attrName,
  attrLoc,
  highlights,
}: {
  logo: string;
  logoSize: number;
  brand: string;
  vertical: string;
  quote: string;
  attrName?: string;
  attrLoc?: string;
  highlights: string[];
}) {
  return (
    <div className="border border-bd rounded-l overflow-hidden bg-wh transition-all hover:-translate-y-[3px] hover:shadow-[0_16px_48px_rgba(0,190,157,.08)] hover:border-teal-bd">
      <div className="px-7 pt-8 pb-6 flex items-center gap-4 border-b border-bd">
        <img
          src={logo}
          alt={brand}
          className="object-contain rounded-[10px] flex-shrink-0"
          style={{ width: logoSize, height: 48 }}
        />
        <div>
          <div className="text-lg font-extrabold" style={{ letterSpacing: '-.02em' }}>
            {brand}
          </div>
          <div className="text-xs text-tx-3 font-medium">{vertical}</div>
        </div>
      </div>
      <div className="px-7 py-6">
        <div
          className="text-[15px] text-tx leading-[1.7] italic mb-4 pl-4 border-l-[3px] border-teal [&_strong]:not-italic [&_strong]:font-bold"
          dangerouslySetInnerHTML={{ __html: `&ldquo;${quote}&rdquo;` }}
        />
        {attrName && (
          <div className="text-[13px] text-tx-3 mb-5">
            <strong className="text-tx font-semibold">{attrName}</strong> - {attrLoc}
          </div>
        )}
        <div className="flex gap-3 flex-wrap">
          {highlights.map(h => (
            <Highlight key={h}>{h}</Highlight>
          ))}
        </div>
      </div>
    </div>
  );
}

function CardWithDescription({
  logo,
  logoSize,
  brand,
  vertical,
  description,
  highlights,
}: {
  logo: string;
  logoSize: number;
  brand: string;
  vertical: string;
  description?: string;
  highlights: string[];
}) {
  return (
    <div className="border border-bd rounded-l overflow-hidden bg-wh transition-all hover:-translate-y-[3px] hover:shadow-[0_16px_48px_rgba(0,190,157,.08)] hover:border-teal-bd">
      <div className="px-7 pt-8 pb-6 flex items-center gap-4 border-b border-bd">
        <img
          src={logo}
          alt={brand}
          className="object-contain rounded-[10px] flex-shrink-0"
          style={{ width: logoSize, height: 48 }}
        />
        <div>
          <div className="text-lg font-extrabold" style={{ letterSpacing: '-.02em' }}>
            {brand}
          </div>
          <div className="text-xs text-tx-3 font-medium">{vertical}</div>
        </div>
      </div>
      <div className="px-7 py-6">
        <p className="text-sm text-tx-2 leading-[1.6] mb-4">{description}</p>
        <div className="flex gap-3 flex-wrap">
          {highlights.map(h => (
            <Highlight key={h}>{h}</Highlight>
          ))}
        </div>
      </div>
    </div>
  );
}
