import type { Metadata } from 'next';
import Link from 'next/link';
import HeroAIVariantA from '@/components/preview/hero/HeroAIVariantA';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Hero AI - Variant A (Split)',
  description: 'Internal preview - Variant A of the homepage AI hero element.',
  path: '/preview/hero-ai/variant-a',
  noindex: true,
});

export default function VariantAPreview() {
  return (
    <main className="min-h-screen bg-off">
      <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-12">
        <Link href="/preview/hero-ai" className="text-[13px] font-bold text-tx-3 hover:text-teal transition-colors inline-flex items-center gap-1 mb-6">
          ← All hero variants
        </Link>
        <div className="stag inline-block">Variant A</div>
        <h1
          className="font-extrabold text-tx mb-4"
          style={{ fontSize: 'clamp(34px,4.5vw,52px)', letterSpacing: '-.03em', lineHeight: 1.05 }}
        >
          Split layout
        </h1>
        <p className="text-tx-2 max-w-[680px] mb-12" style={{ fontSize: 16, lineHeight: 1.55 }}>
          Data on the left, AI agent on the right. Both panels stay synchronized. Each insight cycles every 7 seconds, full loop in ~42 seconds.
        </p>
      </div>
      <div className="px-6 pb-32">
        <HeroAIVariantA />
      </div>
    </main>
  );
}
