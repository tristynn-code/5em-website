import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Partner Showcase Variants (Preview)',
  description: 'Internal preview - partner showcase carousel variants.',
  path: '/preview/partner-showcase',
  noindex: true,
});

const variants = [
  {
    href: '/preview/partner-showcase/variant-a',
    label: 'Variant A',
    title: 'Final Spotlight - current height (440px)',
    description:
      'All edits applied: your curated brand photos with subject-centered crops, official brand logos normalized to equal visual size, and every "Partnered with" eyebrow in that brand\'s own color. Same aspect ratio as the version you picked.',
  },
  {
    href: '/preview/partner-showcase/variant-b',
    label: 'Variant B',
    title: 'Same thing, a skosh taller (520px)',
    description:
      'Identical to Variant A - same photos, logos, colors, width - but the window is 80px taller so you can see more of each photo. Pick whichever height feels right.',
  },
];

export default function PartnerShowcaseIndex() {
  return (
    <main className="min-h-screen bg-off px-6 py-24">
      <div className="max-w-[1100px] mx-auto">
        <Link href="/" className="text-[13px] font-bold text-tx-3 hover:text-teal transition-colors inline-flex items-center gap-1 mb-8">
          ← Back to homepage
        </Link>
        <div className="stag inline-block">Internal preview</div>
        <h1 className="font-extrabold text-tx mb-4" style={{ fontSize: 'clamp(34px,4.5vw,52px)', letterSpacing: '-.03em', lineHeight: 1.05 }}>
          Partner Showcase - 2 variants
        </h1>
        <p className="text-tx-2 max-w-[720px] mb-4" style={{ fontSize: 17, lineHeight: 1.6 }}>
          The wide photo-background partner card for the &ldquo;Franchise Brands That Trust Us&rdquo; section. Each preview shows the carousel in context with the existing logo marquee below it, the way it would actually sit on the homepage.
        </p>
        <p className="text-tx-3 max-w-[720px] mb-12" style={{ fontSize: 14 }}>
          Now using your curated brand photography and the official logo lockups from each brand&apos;s kit. Scramblers Golf wears their white wordmark for now - easy swap when the new logo lands.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {variants.map(v => (
            <Link
              key={v.href}
              href={v.href}
              className="group block bg-wh border border-bd rounded-l p-7 transition-all hover:-translate-y-1 hover:border-teal-bd hover:shadow-[0_16px_48px_rgba(0,190,157,.08)]"
            >
              <div className="text-[10px] uppercase font-extrabold text-teal mb-2" style={{ letterSpacing: '.14em' }}>{v.label}</div>
              <h2 className="font-extrabold text-tx mb-3" style={{ fontSize: 22, letterSpacing: '-.02em' }}>{v.title}</h2>
              <p className="text-[14px] text-tx-2 leading-relaxed mb-5">{v.description}</p>
              <span className="inline-flex items-center gap-1 text-[14px] font-bold text-teal group-hover:gap-2 transition-all">
                View this variant →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
