import type { Metadata } from 'next';
import Link from 'next/link';
import PartnerSpotlightA from '@/components/preview/partners/PartnerSpotlightA';
import ShowcaseSectionFrame from '@/components/preview/partners/ShowcaseSectionFrame';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Partner Showcase - Variant A (Spotlight)',
  description: 'Internal preview - partner showcase variant A.',
  path: '/preview/partner-showcase/variant-a',
  noindex: true,
});

export default function VariantAPreview() {
  return (
    <main className="min-h-screen bg-wh">
      <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-6">
        <Link href="/preview/partner-showcase" className="text-[13px] font-bold text-tx-3 hover:text-teal transition-colors inline-flex items-center gap-1 mb-6">
          ← All showcase variants
        </Link>
        <div className="stag inline-block">Variant A</div>
        <h1 className="font-extrabold text-tx mb-3" style={{ fontSize: 'clamp(30px,4vw,44px)', letterSpacing: '-.03em', lineHeight: 1.05 }}>
          Spotlight - one card, cinematic cross-fade
        </h1>
        <p className="text-tx-2 max-w-[680px] mb-6" style={{ fontSize: 15, lineHeight: 1.55 }}>
          Auto-advances every 6 seconds with a slow photo drift. Hover for arrows; dots bottom-right. Shown below in full homepage context with the logo marquee.
        </p>
      </div>
      <ShowcaseSectionFrame>
        <PartnerSpotlightA />
      </ShowcaseSectionFrame>
      <div className="h-24" />
    </main>
  );
}
