import type { Metadata } from 'next';
import Link from 'next/link';
import HeroAIVariantALight from '@/components/preview/hero/HeroAIVariantALight';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Hero AI - Variant A Light (iteration)',
  description: 'Internal preview - Variant A rebuilt in light theme with tight insight-visualization coupling.',
  path: '/preview/hero-ai/variant-a-light',
  noindex: true,
});

export default function VariantALightPreview() {
  return (
    <main className="min-h-screen bg-wh">
      <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-12">
        <Link
          href="/preview/hero-ai"
          className="text-[13px] font-bold text-tx-3 hover:text-teal transition-colors inline-flex items-center gap-1 mb-6"
        >
          ← All hero variants
        </Link>
        <div className="stag inline-block">Variant A · Light theme iteration</div>
        <h1
          className="font-extrabold text-tx mb-4"
          style={{ fontSize: 'clamp(34px,4.5vw,52px)', letterSpacing: '-.03em', lineHeight: 1.05 }}
        >
          Split layout, lighter, tighter.
        </h1>
        <p className="text-tx-2 max-w-[680px] mb-2" style={{ fontSize: 16, lineHeight: 1.55 }}>
          Light theme on the brand white. Each insight now drives a brand-specific visualization on the left so the right-panel claim is visibly supported - Pilates winning creative, BODY20 lead spike, IMAGE Studios audience lift, beem CTR comparison, iFlex view-through curve, Scramblers Tampa map.
        </p>
        <p className="text-tx-3 max-w-[680px] mb-12" style={{ fontSize: 14 }}>
          Each insight 8.5s. Full loop ~51s. Compare with the original dark Variant A for theme contrast.
        </p>
      </div>
      <div className="px-6 pb-32">
        <HeroAIVariantALight />
      </div>
    </main>
  );
}
