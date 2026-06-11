import type { Metadata } from 'next';
import Link from 'next/link';
import PartnerSpotlightA from '@/components/preview/partners/PartnerSpotlightA';
import ShowcaseSectionFrame from '@/components/preview/partners/ShowcaseSectionFrame';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Partner Showcase - Variant B (Spotlight, taller)',
  description: 'Internal preview - partner showcase variant B.',
  path: '/preview/partner-showcase/variant-b',
  noindex: true,
});

export default function VariantBPreview() {
  return (
    <main className="min-h-screen bg-wh">
      <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-6">
        <Link href="/preview/partner-showcase" className="text-[13px] font-bold text-tx-3 hover:text-teal transition-colors inline-flex items-center gap-1 mb-6">
          ← All showcase variants
        </Link>
        <div className="stag inline-block">Variant B</div>
        <h1 className="font-extrabold text-tx mb-3" style={{ fontSize: 'clamp(30px,4vw,44px)', letterSpacing: '-.03em', lineHeight: 1.05 }}>
          The final Spotlight - a little taller
        </h1>
        <p className="text-tx-2 max-w-[680px] mb-6" style={{ fontSize: 15, lineHeight: 1.55 }}>
          Identical to Variant A in every way - same photos, logos, brand colors - but the window is 520px tall instead of 440px, so more of each photo breathes. Same width, so it stays in line with the rest of the site.
        </p>
      </div>
      <ShowcaseSectionFrame>
        <PartnerSpotlightA height={520} />
      </ShowcaseSectionFrame>
      <div className="h-24" />
    </main>
  );
}
