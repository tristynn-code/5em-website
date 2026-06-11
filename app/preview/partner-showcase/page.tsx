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
    title: 'Spotlight - one card, cross-fade',
    description:
      'One wide rounded card at a time. Full-bleed brand photo with a slow cinematic drift, gradient anchored bottom-left with the white logo + "Partnered with X" + tagline. Cross-fades every 6s. Arrows on hover, progress dots bottom-right.',
  },
  {
    href: '/preview/partner-showcase/variant-b',
    label: 'Variant B',
    title: 'Peek - track physically slides',
    description:
      'Active card centered with the next/previous cards peeking in from the edges, so it is obvious there is more. The whole track slides left-to-right on auto-advance - real lateral motion, like he described. Click a peeking card to jump.',
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
          Photos are placeholders from the existing CDN library - swap-ready the moment you hand over the curated brand photography. ULC uses the typographic stand-in wordmark until the real logo lands.
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
