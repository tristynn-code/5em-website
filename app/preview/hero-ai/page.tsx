import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Hero AI Engine Variants (Preview)',
  description: 'Internal preview - 3 variants of the homepage hero AI element.',
  path: '/preview/hero-ai',
  noindex: true,
});

const variants = [
  {
    href: '/preview/hero-ai/variant-a-light',
    label: 'Variant A · Light (latest)',
    title: 'Split layout - rebuilt light theme',
    description:
      "Tristynn's feedback iteration. Crisp white card, teal accents, larger type. Each insight drives a brand-specific visualization on the left so the AI claim is visibly supported. Stripe-clean.",
  },
  {
    href: '/preview/hero-ai/variant-a',
    label: 'Variant A · Dark (original)',
    title: 'Split layout - original',
    description:
      "Dark theme version. Data view on the left cycles through Lead Flow / Creative Library / Audience Targeting / Performance. AI agent panel on the right types out the insight.",
  },
  {
    href: '/preview/hero-ai/variant-b',
    label: 'Variant B',
    title: 'Stacked (closest to current)',
    description:
      "Keeps the original 4-tile metric grid + live bar chart on top, then adds a dark AI agent ribbon below. Minimal disruption.",
  },
  {
    href: '/preview/hero-ai/variant-c',
    label: 'Variant C',
    title: 'Closed-loop ecosystem',
    description:
      "The full machine. Ingest → Think → Create → Deploy → Feedback. Each station lights up in sequence. Most ambitious.",
  },
];

export default function HeroAIPreviewIndex() {
  return (
    <main className="min-h-screen bg-off px-6 py-24">
      <div className="max-w-[1100px] mx-auto">
        <Link href="/" className="text-[13px] font-bold text-tx-3 hover:text-teal transition-colors inline-flex items-center gap-1 mb-8">
          ← Back to homepage
        </Link>
        <div className="stag inline-block">Internal preview</div>
        <h1
          className="font-extrabold text-tx mb-4"
          style={{ fontSize: 'clamp(34px,4.5vw,52px)', letterSpacing: '-.03em', lineHeight: 1.05 }}
        >
          Hero AI Engine - 3 variants to pick from
        </h1>
        <p className="text-tx-2 max-w-[720px] mb-12" style={{ fontSize: 17, lineHeight: 1.6 }}>
          Each version replaces the hero dashboard element on the homepage with a richer animation that shows the 5EM AI machine in action - cycling between data, insights, and creative variants. Click into each, watch one full loop (~25-40 seconds), then tell me which feels right.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {variants.map(v => (
            <Link
              key={v.href}
              href={v.href}
              className="group block bg-wh border border-bd rounded-l p-7 transition-all hover:-translate-y-1 hover:border-teal-bd hover:shadow-[0_16px_48px_rgba(0,190,157,.08)]"
            >
              <div className="text-[10px] uppercase font-extrabold text-teal mb-2" style={{ letterSpacing: '.14em' }}>
                {v.label}
              </div>
              <h2 className="font-extrabold text-tx mb-3" style={{ fontSize: 22, letterSpacing: '-.02em' }}>
                {v.title}
              </h2>
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
