import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { auditCTA } from '@/lib/site';
import { BRAND_ORDER, getBrandMeta } from './brands';
import type { BrandId } from './types';
import { NETWORK_STATS } from './network';
import { getFeaturedStudies, getStudiesByBrand, studies } from './studies';

export const metadata: Metadata = pageMetadata({
  title: 'Franchise Marketing Case Studies | Real Results from Real Brands',
  description:
    'Real numbers from the franchise studios Fifth Element runs: presale records, founding-member launches, cost per lead turnarounds, and the playbooks behind them across Pilates Addiction, iFlex, Ultimate Longevity Center, BODY20, IMAGE Studios, and more.',
  path: '/case-studies',
  keywords: [
    'franchise marketing case studies',
    'Pilates Addiction marketing results',
    'presale marketing franchise',
    'founding member launch',
    'franchise CPL',
    'franchise lead generation results',
    'content coaching franchise',
  ],
});

/** Short names so the brand bar fits on one line. */
const CHIP_LABEL: Partial<Record<BrandId, string>> = {
  iflex: 'iFlex',
  'ultimate-longevity-center': 'Ultimate Longevity',
  'beem-light-sauna': 'beem',
  network: 'Playbooks',
};

export default function CaseStudiesPage() {
  const featured = getFeaturedStudies();
  const brandsWithStudies = BRAND_ORDER.filter(b => getStudiesByBrand(b).length > 0);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Case Studies', path: '/case-studies' },
        ])}
      />

      {/* HERO */}
      <section className="pt-[160px] pb-[56px] px-6 text-center">
        <div className="stag inline-block">Case Studies</div>
        <h1
          className="font-extrabold mb-5"
          style={{ fontSize: 'clamp(36px,5.5vw,60px)', letterSpacing: '-.03em', lineHeight: 1.06 }}
        >
          Real Studios.
          <br />
          <em className="not-italic text-teal">Real Numbers.</em>
        </h1>
        <p className="ssub mx-auto" style={{ maxWidth: 640 }}>
          Every result here comes from a franchise location we run. Presale records, founding-member launches, cost per lead
          turnarounds, and the playbooks we built from them. {studies.length} write-ups and counting.
        </p>
      </section>

      {/* NETWORK PROOF BAND */}
      <section className="px-6 pb-16">
        <div className="max-w-[1100px] mx-auto rounded-l overflow-hidden" style={{ background: '#0F1314' }}>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {NETWORK_STATS.items.map((s, i) => (
              <div key={i} className="p-7 md:p-9 border-white/10 [&:not(:first-child)]:md:border-l">
                <div
                  className="text-teal font-extrabold leading-none mb-2"
                  style={{ fontSize: 'clamp(30px,3.6vw,44px)', letterSpacing: '-.04em' }}
                >
                  {s.value}
                </div>
                <div className="text-[14px] font-bold text-white">{s.label}</div>
                {s.sub && <div className="text-[12px] text-white/50 mt-1">{s.sub}</div>}
              </div>
            ))}
          </div>
          <div className="px-7 md:px-9 py-4 border-t border-white/10 text-[12px] text-white/45">{NETWORK_STATS.note}</div>
        </div>
      </section>

      {/* BRAND JUMP LINKS */}
      <nav aria-label="Case studies by brand" className="px-6 pb-4 md:sticky md:top-[88px] z-20 print:hidden">
        <div className="max-w-[1100px] mx-auto flex gap-2 overflow-x-auto [scrollbar-width:none] md:overflow-visible md:flex-wrap md:justify-center md:w-fit md:p-1.5 md:rounded-full md:border md:border-bd md:bg-wh md:shadow-[0_8px_24px_rgba(15,19,20,.06)]">
          {brandsWithStudies.map(b => {
            const meta = getBrandMeta(b);
            return (
              <a
                key={b}
                href={`#${b}`}
                className="flex-shrink-0 whitespace-nowrap px-4 py-2 rounded-full border border-bd md:border-transparent bg-wh text-[13px] font-semibold text-tx-2 hover:border-teal hover:text-teal transition-colors"
              >
                {CHIP_LABEL[b] ?? meta.name}
                <span className="ml-1.5 text-tx-3">{getStudiesByBrand(b).length}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* FEATURED */}
      {featured.length > 0 && (
        <section className="px-6 pt-12 pb-8">
          <div className="max-w-[1100px] mx-auto">
            <div className="stag">Featured</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {featured.map((s, i) => (
                <CaseStudyCard key={s.slug} study={s} large={i === 0} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BY BRAND */}
      {brandsWithStudies.map(b => {
        const meta = getBrandMeta(b);
        const list = getStudiesByBrand(b);
        return (
          <section key={b} id={b} className="px-6 py-14 scroll-mt-[140px]">
            <div className="max-w-[1100px] mx-auto">
              <div className="flex items-end justify-between gap-6 mb-8 pb-6 border-b border-bd flex-wrap">
                <div className="flex items-center gap-4">
                  {meta.logo ? (
                    <img src={meta.logo} alt={meta.name} className="object-contain" style={{ height: meta.logoHeight * 0.85, width: 'auto' }} />
                  ) : null}
                  <div>
                    <h2 className="text-2xl font-extrabold text-tx" style={{ letterSpacing: '-.02em' }}>
                      {b === 'network' ? 'Playbooks from across the network' : meta.name}
                    </h2>
                    <div className="text-[13px] text-tx-3 font-medium">
                      {b === 'network' ? 'What our franchise locations taught us, written down' : meta.vertical}
                    </div>
                  </div>
                </div>
                <div className="text-[13px] text-tx-3 font-semibold">
                  {list.length} {list.length === 1 ? 'write-up' : 'write-ups'}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {list.map(s => (
                  <CaseStudyCard key={s.slug} study={s} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="mt-10 py-20 px-6 text-center bg-off">
        <h2 className="font-extrabold tracking-tight mb-3" style={{ fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '-.02em' }}>
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
