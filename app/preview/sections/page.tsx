import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Homepage Section Variants - Preview Sandbox',
  description: 'Internal preview of A/B variants for the 5EM homepage. Not indexed.',
  path: '/preview/sections',
  noindex: true,
});

const variants = [
  {
    href: '/preview/sections/problem-a',
    section: 'Problem',
    label: 'Variant 1A',
    title: 'Split-screen agency comparison',
    blurb: 'Two live-ticking CPL dashboards side-by-side - "Generic Agency" (red, climbing) vs "5EM Hyper-Local" (teal, optimized). The 3 problem cards sit below the visual.',
  },
  {
    href: '/preview/sections/problem-b',
    section: 'Problem',
    label: 'Variant 1B',
    title: '3 broken-state mockup cards',
    blurb: 'Three large cards, each with its own purpose-built mockup: identical ads across cities, a dashboard full of "?", and a wasted-spend bar chart.',
  },
  {
    href: '/preview/sections/pillars-a',
    section: 'Pillars',
    label: 'Variant 2A',
    title: 'Premium dark cards, larger interactive mockups',
    blurb: 'Same 3-card layout as today, but cards are taller with real interactive mini-mockups: animated lead-flow chart, UGC reel carousel, live insights bars.',
  },
  {
    href: '/preview/sections/pillars-b',
    section: 'Pillars',
    label: 'Variant 2B',
    title: 'Tabbed full-width demo',
    blurb: 'Three tabs at top, one giant dark demo panel below that swaps content. Auto-advances every 6s. Each pillar gets a full-width interactive demo on the right.',
  },
  {
    href: '/preview/sections/howit-a',
    section: 'How It Works',
    label: 'Variant 3A',
    title: 'Rich step cards with mini-mockups',
    blurb: 'Each of the 3 steps gets a mockup: booking calendar (step 1), strategy doc with checked items (step 2), live leads dashboard with rolling names (step 3).',
  },
  {
    href: '/preview/sections/howit-b',
    section: 'How It Works',
    label: 'Variant 3B',
    title: 'Scroll-fill vertical timeline',
    blurb: 'Alternating-side timeline with progress line that fills as you scroll. Day badges, checkmarks on completion, ping indicators, mini mockups in each card.',
  },
];

export default function PreviewIndex() {
  return (
    <>
      <section className="pt-[140px] pb-12 px-6 text-center bg-off">
        <div className="mx">
          <div className="stag inline-block">Internal Preview · Not Indexed</div>
          <h1
            className="font-extrabold mb-6 max-w-[860px] mx-auto"
            style={{ fontSize: 'clamp(36px,5vw,56px)', lineHeight: 1.06, letterSpacing: '-.035em' }}
          >
            Homepage Section <em className="not-italic text-teal">Variants</em>
          </h1>
          <p className="text-tx-2 mx-auto max-w-[640px] mb-2" style={{ fontSize: 17, lineHeight: 1.6 }}>
            6 variants across 3 homepage sections. Each opens in isolation so you can scan one at a time. Pick winners and we&apos;ll wire them into the live homepage in a follow-up.
          </p>
          <div className="mt-6">
            <Link href="/" className="bs">← Back to live homepage</Link>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6 bg-off">
        <div className="mx">
          {['Problem', 'Pillars', 'How It Works'].map(section => {
            const items = variants.filter(v => v.section === section);
            return (
              <div key={section} className="mb-12">
                <div className="text-[12px] uppercase font-extrabold text-teal mb-4" style={{ letterSpacing: '.14em' }}>
                  {section} Section
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {items.map(v => (
                    <Link
                      key={v.href}
                      href={v.href}
                      className="block rounded-l bg-wh border border-bd p-7 transition-all hover:border-teal-bd hover:-translate-y-0.5 group"
                      style={{ boxShadow: '0 6px 24px rgba(0,0,0,.04)', transition: 'all .3s' }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="px-2.5 py-1 rounded-full text-[10px] uppercase font-extrabold bg-teal-bg text-teal border border-teal-bd" style={{ letterSpacing: '.08em' }}>
                          {v.label}
                        </div>
                      </div>
                      <h3 className="text-lg font-extrabold text-tx leading-tight mb-2" style={{ letterSpacing: '-.02em' }}>
                        {v.title}
                      </h3>
                      <p className="text-sm text-tx-2 leading-relaxed mb-4">{v.blurb}</p>
                      <div className="text-teal font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Open preview <span>→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
