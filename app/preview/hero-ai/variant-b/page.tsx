import type { Metadata } from 'next';
import Link from 'next/link';
import HeroAIVariantB from '@/components/preview/hero/HeroAIVariantB';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Hero AI - Variant B (Stacked)',
  description: 'Internal preview - Variant B of the homepage AI hero element.',
  path: '/preview/hero-ai/variant-b',
  noindex: true,
});

export default function VariantBPreview() {
  return (
    <main className="min-h-screen bg-off">
      <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-12">
        <Link href="/preview/hero-ai" className="text-[13px] font-bold text-tx-3 hover:text-teal transition-colors inline-flex items-center gap-1 mb-6">
          ← All hero variants
        </Link>
        <div className="stag inline-block">Variant B</div>
        <h1
          className="font-extrabold text-tx mb-4"
          style={{ fontSize: 'clamp(34px,4.5vw,52px)', letterSpacing: '-.03em', lineHeight: 1.05 }}
        >
          Stacked (closest to current)
        </h1>
        <p className="text-tx-2 max-w-[680px] mb-12" style={{ fontSize: 16, lineHeight: 1.55 }}>
          Keeps the original metric grid + live bar chart on top. Adds an AI agent ribbon underneath that types out insights and shows the spawning creative variant. Lowest visual change vs the live homepage.
        </p>
      </div>
      <div className="px-6 pb-32">
        <HeroAIVariantB />
      </div>
    </main>
  );
}
