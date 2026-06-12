import type { Metadata } from 'next';
import Link from 'next/link';
import PartnerShowcase from '@/components/PartnerShowcase';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Partner Showcase - Variant B (520px, shipped)',
  description: 'Internal preview - the shipped partner showcase.',
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
        <div className="stag inline-block">Variant B - shipped</div>
        <h1 className="font-extrabold text-tx mb-3" style={{ fontSize: 'clamp(30px,4vw,44px)', letterSpacing: '-.03em', lineHeight: 1.05 }}>
          The Spotlight as it ships - 520px
        </h1>
        <p className="text-tx-2 max-w-[680px] mb-6" style={{ fontSize: 15, lineHeight: 1.55 }}>
          This is exactly what the live homepage renders: Tristynn&apos;s pick. Taller window, curated photos, official brand logos and colors, approved captions.
        </p>
      </div>
      <PartnerShowcase />
      <div className="h-24" />
    </main>
  );
}
