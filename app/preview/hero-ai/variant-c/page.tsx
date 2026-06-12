import type { Metadata } from 'next';
import Link from 'next/link';
import HeroAIVariantC from '@/components/preview/hero/HeroAIVariantC';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Hero AI - Variant C (Closed Loop)',
  description: 'Internal preview - Variant C of the homepage AI hero element.',
  path: '/preview/hero-ai/variant-c',
  noindex: true,
});

export default function VariantCPreview() {
  return (
    <main className="min-h-screen bg-off">
      <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-12">
        <Link href="/preview/hero-ai" className="text-[13px] font-bold text-tx-3 hover:text-teal transition-colors inline-flex items-center gap-1 mb-6">
          ← All hero variants
        </Link>
        <div className="stag inline-block">Variant C</div>
        <h1
          className="font-extrabold text-tx mb-4"
          style={{ fontSize: 'clamp(34px,4.5vw,52px)', letterSpacing: '-.03em', lineHeight: 1.05 }}
        >
          Closed-loop ecosystem
        </h1>
        <p className="text-tx-2 max-w-[680px] mb-12" style={{ fontSize: 16, lineHeight: 1.55 }}>
          The full machine. Four stations - Ingest, Think, Create, Deploy - light up in sequence with their own mini-mockup, plus a Feedback panel showing how new data feeds the next cycle. Each station ~1.75s. Full insight loop ~42 seconds.
        </p>
      </div>
      <div className="px-6 pb-32">
        <HeroAIVariantC />
      </div>
    </main>
  );
}
