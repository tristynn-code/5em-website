'use client';

import { useEffect, useState } from 'react';
import FifthElementMark from './FifthElementMark';
import InsightTyper from './InsightTyper';
import type { Insight } from './insights';

/* ============ Per-insight LIGHT visualizations ============ */
/* Each visualization is a self-contained, simple, Stripe-clean view that
   directly supports the insight text. The visualization name is the slug. */

type VizName =
  | 'pilates-strip-mall'
  | 'image-barber-niche'
  | 'body20-ugc-spike'
  | 'beem-skin-vs-lifestyle'
  | 'iflex-stretch-cut'
  | 'scramblers-tee-time';

interface VizInsight extends Omit<Insight, 'view'> {
  viz: VizName;
  /** Big headline label that anchors the left-side visualization. */
  vizTitle: string;
  /** Sub-line explaining what the user is looking at. */
  vizSubtitle: string;
}

/** Rewritten insights with tightly-coupled per-brand visualizations. */
const insights: VizInsight[] = [
  {
    viz: 'pilates-strip-mall',
    vizTitle: 'Top Performing Creative',
    vizSubtitle: 'Pilates Addiction · Vintage Park',
    brand: 'Pilates Addiction · Vintage Park',
    text: 'Top hook is the strip-mall entrance reveal in the first 2 seconds. That hyper-local visual cue stops the scroll. Spinning 8 more landmark-first variants for nearby franchisees.',
    metric: { label: 'CPL', value: '$9.40' },
    spawned: { gradient: 'linear-gradient(135deg,#00be9d,#1D2637)', label: 'PILATES · 0:02' },
  },
  {
    viz: 'image-barber-niche',
    vizTitle: 'Audience Lift',
    vizSubtitle: 'IMAGE Studios · Houston',
    brand: 'IMAGE Studios · Houston',
    text: 'Barber-specific creative outperformed the brand spot by 47%. Audience-narrative match plus the barber-suite reveal. Generating 6 vertical-niche variants for nail and esthetician markets.',
    metric: { label: 'Lift', value: '+47%' },
    spawned: { gradient: 'linear-gradient(135deg,#f093fb,#764ba2)', label: 'IMAGE · BARBER' },
  },
  {
    viz: 'body20-ugc-spike',
    vizTitle: 'Lead Volume This Week',
    vizSubtitle: 'BODY20 · Austin',
    brand: 'BODY20 · Austin',
    text: 'UGC-024 (founder talking sweat science) drove 31% of new leads this week. Auto-deploying as variant in 4 sister markets. CSM notified for franchisee shoot brief.',
    metric: { label: 'Volume', value: '+31%' },
    spawned: { gradient: 'linear-gradient(135deg,#c1272d,#8b1a1f)', label: 'BODY20 · UGC-024' },
  },
  {
    viz: 'beem-skin-vs-lifestyle',
    vizTitle: 'Click-Through Comparison',
    vizSubtitle: 'beem Light Sauna · Boynton',
    brand: 'beem Light Sauna · Boynton',
    text: 'Skin-close-up creative outperformed wellness lifestyle shots 3.2x on click-through. Synthesizing 4 dermatology-angle variants via Higgsfield. Franchisee tagged for talking-head capture.',
    metric: { label: 'CTR', value: '3.2x' },
    spawned: { gradient: 'linear-gradient(135deg,#fa709a,#fee140)', label: 'BEEM · SKIN' },
  },
  {
    viz: 'iflex-stretch-cut',
    vizTitle: 'View-Through By Duration',
    vizSubtitle: 'iFlex · Phoenix',
    brand: 'iFlex · Phoenix',
    text: 'Stretch-pose clip works but only after 30 seconds of view time. Cutting 4 short-form retargeting variants, same pose, sub-15-second runtime. Deploying tomorrow.',
    metric: { label: 'VTR', value: '+18%' },
    spawned: { gradient: 'linear-gradient(135deg,#4facfe,#00f2fe)', label: 'IFLEX · 0:14' },
  },
  {
    viz: 'scramblers-tee-time',
    vizTitle: 'Audience Targeting',
    vizSubtitle: 'Scramblers Golf · Tampa',
    brand: 'Scramblers Golf · Tampa',
    text: 'Membership ad with 8am tee-time visual converted 2.1x against the generic. Local sunrise plus the course shot is the scroll stopper. Coaching 3 franchisees for similar local-time captures.',
    metric: { label: 'Conv', value: '2.1x' },
    spawned: { gradient: 'linear-gradient(135deg,#667eea,#764ba2)', label: 'SCRAM · 8AM' },
  },
];

/* ============ Main hero element ============ */

export default function HeroAIVariantALight() {
  const [idx, setIdx] = useState(0);
  const cycle = insights.length;

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % cycle), 8500);
    return () => clearInterval(id);
  }, [cycle]);

  const current = insights[idx];

  return (
    <div
      className="max-w-[1080px] mx-auto rounded-l overflow-hidden grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] bg-wh"
      style={{
        border: '1px solid rgba(0,0,0,.06)',
        boxShadow: '0 32px 100px rgba(0,0,0,.06), 0 8px 32px rgba(0,0,0,.04)',
        minHeight: 560,
      }}
    >
      {/* LEFT - data visualization */}
      <div className="relative p-9 lg:p-10 flex flex-col" style={{ borderRight: '1px solid rgba(0,0,0,.05)' }}>
        {/* View header */}
        <div key={`hd-${idx}`} className="view-in mb-6">
          <div
            className="text-[11px] font-extrabold text-teal uppercase mb-1.5"
            style={{ letterSpacing: '.14em' }}
          >
            {current.vizSubtitle}
          </div>
          <h3
            className="text-tx font-extrabold"
            style={{ fontSize: 22, letterSpacing: '-.02em', lineHeight: 1.15 }}
          >
            {current.vizTitle}
          </h3>
        </div>

        {/* The brand-specific visualization */}
        <div key={`viz-${idx}`} className="view-in flex-1 flex flex-col justify-center">
          {current.viz === 'pilates-strip-mall' && <VizPilates />}
          {current.viz === 'image-barber-niche' && <VizImage />}
          {current.viz === 'body20-ugc-spike' && <VizBody20 />}
          {current.viz === 'beem-skin-vs-lifestyle' && <VizBeem />}
          {current.viz === 'iflex-stretch-cut' && <VizIflex />}
          {current.viz === 'scramblers-tee-time' && <VizScramblers />}
        </div>
      </div>

      {/* RIGHT - AI agent */}
      <div
        className="relative p-9 lg:p-10 flex flex-col"
        style={{ background: '#FAFAFA' }}
      >
        {/* Faint teal accent on the right side to differentiate without going dark */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 100% 0%, rgba(0,190,157,.06) 0%, transparent 55%)',
          }}
        />

        {/* Header */}
        <div className="relative flex items-center gap-3 mb-7">
          <FifthElementMark size={44} animated color="#00BE9D" background="rgba(0,190,157,.1)" />
          <div>
            <div className="text-tx font-extrabold" style={{ fontSize: 16, letterSpacing: '-.01em' }}>
              5EM AI Agent
            </div>
            <div className="text-[11px] text-teal font-bold uppercase flex items-center gap-1.5" style={{ letterSpacing: '.12em' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pu" />
              Analyzing live
            </div>
          </div>
        </div>

        {/* Insight body */}
        <div className="relative flex-1 flex flex-col justify-center min-h-[200px]">
          <InsightTyperLight key={idx} insight={current} />
        </div>

        {/* Bottom: paired metric + spawning variant */}
        <div className="relative mt-7 pt-6 border-t border-bd flex items-center gap-4">
          {/* Metric */}
          <div className="flex-1">
            <div
              className="text-[10px] text-tx-3 uppercase font-extrabold mb-1"
              style={{ letterSpacing: '.12em' }}
            >
              {current.metric.label}
            </div>
            <div
              className="text-tx font-extrabold tabular-nums"
              style={{ fontSize: 28, letterSpacing: '-.025em', lineHeight: 1 }}
            >
              {current.metric.value}
            </div>
          </div>

          {/* Spawning variant + queue */}
          <div className="flex flex-col items-end gap-1.5">
            <div
              className="text-[10px] text-tx-3 uppercase font-extrabold"
              style={{ letterSpacing: '.12em' }}
            >
              Spawning
            </div>
            <div className="flex gap-1.5">
              <div
                key={`spawn-${idx}`}
                className="view-in flex-shrink-0 rounded-[8px] flex items-end p-1.5 text-white text-[8px] font-extrabold uppercase"
                style={{
                  width: 50,
                  height: 68,
                  background: current.spawned.gradient,
                  border: '1px solid rgba(0,0,0,.06)',
                  letterSpacing: '.05em',
                  textShadow: '0 1px 3px rgba(0,0,0,.4)',
                  boxShadow: '0 4px 16px rgba(0,0,0,.08)',
                }}
              >
                {current.spawned.label}
              </div>
              {[1, 2].map(n => (
                <div
                  key={n}
                  className="flex-shrink-0 rounded-[8px] flex items-center justify-center text-tx-3 text-xs font-bold"
                  style={{
                    width: 50,
                    height: 68,
                    background: 'rgba(0,0,0,.02)',
                    border: '1px dashed rgba(0,0,0,.12)',
                  }}
                  aria-hidden
                >
                  +{n}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="relative mt-5 flex items-center justify-center gap-1.5">
          {insights.map((_, i) => (
            <span
              key={i}
              className="rounded-full transition-all"
              style={{
                width: i === idx ? 20 : 5,
                height: 5,
                background: i === idx ? '#00BE9D' : 'rgba(0,0,0,.1)',
                transitionDuration: '.5s',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============ Light theme version of the InsightTyper ============ */

function InsightTyperLight({ insight }: { insight: VizInsight }) {
  return (
    <div>
      <div
        className="text-[10px] uppercase font-extrabold text-teal mb-3"
        style={{ letterSpacing: '.14em' }}
      >
        {insight.brand}
      </div>
      <p
        className="text-tx-2 leading-relaxed"
        style={{ fontSize: 16, lineHeight: 1.6 }}
      >
        <InsightTextLight text={insight.text} />
      </p>
    </div>
  );
}

function InsightTextLight({ text }: { text: string }) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    setShown(0);
    const id = setInterval(() => {
      setShown(prev => {
        const next = prev + 3;
        if (next >= text.length) {
          clearInterval(id);
          return text.length;
        }
        return next;
      });
    }, 22);
    return () => clearInterval(id);
  }, [text]);

  const typing = shown < text.length;

  return (
    <>
      {text.slice(0, shown)}
      <span
        className="inline-block w-[2px] h-[16px] bg-teal align-middle ml-0.5"
        style={{
          opacity: typing ? undefined : 0,
          animation: typing ? 'cursorBlink 1s steps(2) infinite' : undefined,
          transform: 'translateY(-2px)',
        }}
      />
    </>
  );
}

/* ============ Per-brand visualizations (light, clean, large) ============ */

/* Pilates Addiction - 4 creative tiles, "strip mall" highlighted as the winner */
function VizPilates() {
  const tiles = [
    { label: 'Strip mall reveal', winner: true, cpl: '$9.40', stillImage: 'pilates-strip' },
    { label: 'Studio interior', winner: false, cpl: '$14.20', stillImage: 'pilates-studio' },
    { label: 'Instructor close-up', winner: false, cpl: '$16.80', stillImage: 'pilates-instructor' },
    { label: 'Class footage', winner: false, cpl: '$19.30', stillImage: 'pilates-class' },
  ];
  return (
    <div className="grid grid-cols-2 gap-3.5">
      {tiles.map((t, i) => (
        <div
          key={t.label}
          className="rounded-[12px] p-3.5 transition-all relative"
          style={{
            background: t.winner ? 'rgba(0,190,157,.06)' : '#FAFAFA',
            border: t.winner ? '1.5px solid #00BE9D' : '1px solid rgba(0,0,0,.06)',
            boxShadow: t.winner ? '0 8px 24px rgba(0,190,157,.12)' : 'none',
          }}
        >
          {t.winner && (
            <div
              className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-teal text-dk text-[9px] font-extrabold uppercase"
              style={{ letterSpacing: '.08em' }}
            >
              ▲ Top
            </div>
          )}
          {/* Faux thumbnail */}
          <div
            className="rounded-[8px] mb-3 relative overflow-hidden"
            style={{
              aspectRatio: '4 / 3',
              background:
                t.stillImage === 'pilates-strip'
                  ? 'linear-gradient(135deg,#00be9d 0%,#1D2637 100%)'
                  : t.stillImage === 'pilates-studio'
                    ? 'linear-gradient(135deg,#FFE5C9,#FFC8A8)'
                    : t.stillImage === 'pilates-instructor'
                      ? 'linear-gradient(135deg,#E8C4B8,#A67C65)'
                      : 'linear-gradient(135deg,#D8E8E0,#9BB8AA)',
            }}
          >
            {t.stillImage === 'pilates-strip' && (
              <>
                {/* Stylized "strip mall" silhouette */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 75" preserveAspectRatio="none">
                  <rect x="10" y="40" width="80" height="20" fill="rgba(255,255,255,.18)" />
                  <rect x="20" y="48" width="6" height="8" fill="rgba(255,255,255,.4)" />
                  <rect x="30" y="48" width="6" height="8" fill="rgba(255,255,255,.4)" />
                  <rect x="40" y="48" width="6" height="8" fill="rgba(255,255,255,.4)" />
                  <text x="50" y="56" textAnchor="middle" fontSize="3.5" fill="#fff" fontWeight="800" letterSpacing="0.2px">PILATES ADDICTION</text>
                </svg>
                <div className="absolute top-1.5 left-1.5 text-[8px] font-extrabold text-white uppercase bg-black/30 px-1.5 py-0.5 rounded backdrop-blur" style={{ letterSpacing: '.06em' }}>
                  0:02
                </div>
              </>
            )}
          </div>
          <div className="flex items-center justify-between">
            <span
              className={`text-[12px] font-bold ${t.winner ? 'text-tx' : 'text-tx-3'}`}
              style={{ letterSpacing: '-.01em' }}
            >
              {t.label}
            </span>
            <span
              className={`text-[12px] font-extrabold tabular-nums ${t.winner ? 'text-teal' : 'text-tx-3'}`}
            >
              {t.cpl}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* IMAGE Studios - Audience lift bar comparison */
function VizImage() {
  return (
    <div className="flex flex-col gap-5">
      {/* Two comparison rows with horizontal bars */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[13px] font-semibold text-tx-3">Brand spot · all audiences</span>
          <span className="text-[14px] font-extrabold text-tx-3 tabular-nums">1.0x</span>
        </div>
        <div className="h-3 rounded-full bg-off overflow-hidden">
          <div className="h-full rounded-full" style={{ width: '32%', background: '#CCCCCC' }} />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[13px] font-bold text-tx">Barber-specific creative</span>
          <span className="text-[18px] font-extrabold text-teal tabular-nums" style={{ letterSpacing: '-.02em' }}>
            1.47x
          </span>
        </div>
        <div className="h-3 rounded-full bg-off overflow-hidden">
          <div className="h-full rounded-full bg-teal" style={{ width: '47%', boxShadow: '0 0 12px rgba(0,190,157,.5)' }} />
        </div>
      </div>

      {/* Audience tags - what makes the barber audience distinct */}
      <div
        className="mt-2 p-4 rounded-[12px]"
        style={{
          background: 'rgba(0,190,157,.04)',
          border: '1px solid rgba(0,190,157,.18)',
        }}
      >
        <div className="text-[10px] font-extrabold text-teal uppercase mb-2.5" style={{ letterSpacing: '.12em' }}>
          Audience-narrative match
        </div>
        <div className="flex flex-wrap gap-1.5">
          {['Barber license holders', 'Buzz tools mentioned', 'Barber suite reveal', 'Chair clientele'].map(t => (
            <span
              key={t}
              className="text-[11px] font-bold text-tx bg-wh px-2.5 py-1 rounded-md border border-bd"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* BODY20 - Lead spike with UGC-024 labeled */
function VizBody20() {
  // Bars + an annotated spike at index 8 representing the UGC-024 deployment
  const heights = [22, 28, 24, 31, 27, 32, 30, 38, 88, 78, 72, 68, 76];
  const spike = 8;
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex items-baseline justify-between mb-3">
          <span className="text-[13px] font-semibold text-tx-3">Daily leads · last 13 days</span>
          <div className="flex items-baseline gap-2">
            <span className="text-tx font-extrabold tabular-nums" style={{ fontSize: 28, letterSpacing: '-.02em' }}>
              2,847
            </span>
            <span className="text-[12px] font-bold text-teal bg-teal-bg px-1.5 py-0.5 rounded">▲ 31%</span>
          </div>
        </div>
        <div className="relative h-[130px] flex items-end gap-1.5">
          {heights.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-[3px] relative"
              style={{
                height: `${h}%`,
                background: i === spike ? '#00BE9D' : 'rgba(0,0,0,.08)',
                boxShadow: i === spike ? '0 6px 16px rgba(0,190,157,.4)' : 'none',
              }}
            >
              {i === spike && (
                <div
                  className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded-md bg-teal text-dk text-[9px] font-extrabold uppercase"
                  style={{ letterSpacing: '.08em', boxShadow: '0 4px 12px rgba(0,190,157,.3)' }}
                >
                  UGC-024 deployed
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Sister-market badges */}
      <div>
        <div className="text-[10px] font-extrabold text-tx-3 uppercase mb-2" style={{ letterSpacing: '.12em' }}>
          Auto-deploying to 4 sister markets
        </div>
        <div className="flex flex-wrap gap-1.5">
          {['Houston', 'Phoenix', 'Denver', 'Charlotte'].map(c => (
            <span
              key={c}
              className="text-[11px] font-bold text-teal bg-teal-bg border border-teal-bd px-2.5 py-1 rounded-md"
            >
              {c} ✓
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* beem - skin close-up vs lifestyle CTR comparison */
function VizBeem() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Lifestyle - lower */}
      <div
        className="rounded-[12px] p-4 flex flex-col"
        style={{ background: '#FAFAFA', border: '1px solid rgba(0,0,0,.06)' }}
      >
        <div
          className="rounded-[8px] mb-3"
          style={{ aspectRatio: '1 / 1', background: 'linear-gradient(135deg,#D8E0E8,#A8B0B8)' }}
        />
        <div className="text-[11px] font-bold text-tx-3 mb-1">Lifestyle hero</div>
        <div className="text-[10px] uppercase font-extrabold text-tx-3 mb-1" style={{ letterSpacing: '.12em' }}>CTR</div>
        <div className="flex items-baseline gap-1">
          <span className="text-tx-3 font-extrabold tabular-nums" style={{ fontSize: 22, letterSpacing: '-.02em' }}>1.0x</span>
          <span className="text-[11px] text-tx-3">baseline</span>
        </div>
      </div>
      {/* Skin close-up - the winner */}
      <div
        className="rounded-[12px] p-4 flex flex-col relative"
        style={{
          background: 'rgba(0,190,157,.06)',
          border: '1.5px solid #00BE9D',
          boxShadow: '0 12px 32px rgba(0,190,157,.12)',
        }}
      >
        <div
          className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-teal text-dk text-[9px] font-extrabold uppercase"
          style={{ letterSpacing: '.08em' }}
        >
          ▲ Winner
        </div>
        <div
          className="rounded-[8px] mb-3 relative overflow-hidden"
          style={{ aspectRatio: '1 / 1', background: 'linear-gradient(135deg,#fa709a,#fee140)' }}
        >
          {/* Skin-close-up stylized */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="22" fill="rgba(255,255,255,.18)" />
            <circle cx="30" cy="30" r="8" fill="rgba(255,255,255,.3)" />
          </svg>
        </div>
        <div className="text-[11px] font-bold text-tx mb-1">Skin close-up</div>
        <div className="text-[10px] uppercase font-extrabold text-teal mb-1" style={{ letterSpacing: '.12em' }}>CTR</div>
        <div className="flex items-baseline gap-1">
          <span className="text-teal font-extrabold tabular-nums" style={{ fontSize: 26, letterSpacing: '-.02em' }}>3.2x</span>
        </div>
      </div>
    </div>
  );
}

/* iFlex - view-through drop-off curve and short-form solution */
function VizIflex() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[13px] font-semibold text-tx-3">View-through · 60s ad</span>
          <span className="text-[12px] font-bold text-tx-3">Current</span>
        </div>
        <div
          className="relative w-full h-[100px] rounded-[12px] overflow-hidden"
          style={{ background: '#FAFAFA', border: '1px solid rgba(0,0,0,.06)' }}
        >
          {/* Decay curve */}
          <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="iflex-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#00BE9D" stopOpacity=".22" />
                <stop offset="1" stopColor="#00BE9D" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,15 C 30,18 50,30 80,55 S 130,82 200,90 L 200,100 L 0,100 Z" fill="url(#iflex-fill)" />
            <path d="M0,15 C 30,18 50,30 80,55 S 130,82 200,90" stroke="#00BE9D" strokeWidth="1.6" fill="none" />
            {/* 30s drop-off marker */}
            <line x1="100" y1="0" x2="100" y2="100" stroke="rgba(0,0,0,.15)" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="100" cy="62" r="3.5" fill="#00BE9D" />
          </svg>
          <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-tx-3 uppercase" style={{ letterSpacing: '.08em' }}>0s</div>
          <div className="absolute bottom-1.5 left-[49%] text-[9px] font-bold text-tx uppercase" style={{ letterSpacing: '.08em' }}>30s drop</div>
          <div className="absolute bottom-1.5 right-2 text-[9px] font-bold text-tx-3 uppercase" style={{ letterSpacing: '.08em' }}>60s</div>
        </div>
      </div>

      {/* Solution: short cuts */}
      <div>
        <div className="text-[10px] font-extrabold text-tx-3 uppercase mb-2" style={{ letterSpacing: '.12em' }}>
          Cutting 4 short-form retargeting variants
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['0:08', '0:10', '0:12', '0:14'].map((d, i) => (
            <div
              key={d}
              className="rounded-[8px] aspect-[4/5] flex items-end p-2 text-white text-[10px] font-extrabold"
              style={{
                background: 'linear-gradient(135deg,#4facfe,#00f2fe)',
                border: '1px solid rgba(0,0,0,.06)',
                boxShadow: '0 4px 12px rgba(79,172,254,.18)',
                textShadow: '0 1px 3px rgba(0,0,0,.4)',
              }}
            >
              {d}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Scramblers - Tampa map with 8am tee-time audience pin + conversion lift */
function VizScramblers() {
  return (
    <div className="flex flex-col gap-5">
      <div
        className="relative w-full rounded-[12px] overflow-hidden"
        style={{
          height: 200,
          background: '#FAFAFA',
          border: '1px solid rgba(0,0,0,.06)',
        }}
      >
        {/* Stylized map grid */}
        <svg viewBox="0 0 200 140" className="w-full h-full" preserveAspectRatio="none">
          {/* Streets */}
          {[20, 50, 80, 110, 140, 170].map(x => (
            <line key={`v${x}`} x1={x} y1={0} x2={x} y2={140} stroke="rgba(0,0,0,.05)" strokeWidth="0.6" />
          ))}
          {[25, 55, 85, 115].map(y => (
            <line key={`h${y}`} x1={0} y1={y} x2={200} y2={y} stroke="rgba(0,0,0,.05)" strokeWidth="0.6" />
          ))}
          {/* Course as a teal-tinted park area */}
          <ellipse cx="100" cy="70" rx="48" ry="32" fill="rgba(0,190,157,.06)" stroke="rgba(0,190,157,.25)" strokeWidth="0.6" />
          {/* Reach radius */}
          <circle cx="100" cy="70" r="44" fill="none" stroke="rgba(0,190,157,.3)" strokeWidth="0.6" strokeDasharray="3 2" />
          {/* Pin */}
          <circle cx="100" cy="70" r="5" fill="#00BE9D" className="animate-pu" />
          <circle cx="100" cy="70" r="2" fill="#fff" />
        </svg>
        {/* Overlays */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1.5 rounded-[8px] bg-wh text-[10px] font-extrabold text-tx uppercase shadow-sm"
          style={{ letterSpacing: '.1em', border: '1px solid rgba(0,0,0,.06)' }}
        >
          Tampa · 6mi radius
        </div>
        <div
          className="absolute bottom-3 right-3 px-2.5 py-1.5 rounded-[8px] text-[10px] font-extrabold uppercase"
          style={{
            letterSpacing: '.1em',
            background: 'rgba(0,190,157,.1)',
            border: '1px solid rgba(0,190,157,.3)',
            color: '#00BE9D',
          }}
        >
          8AM TEE TIME · 12,400 in-market
        </div>
      </div>

      {/* Conversion comparison */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-[10px] p-3" style={{ background: '#FAFAFA', border: '1px solid rgba(0,0,0,.06)' }}>
          <div className="text-[10px] font-extrabold text-tx-3 uppercase mb-1" style={{ letterSpacing: '.12em' }}>
            Generic creative
          </div>
          <div className="text-tx-3 font-extrabold tabular-nums" style={{ fontSize: 20, letterSpacing: '-.02em' }}>1.0x</div>
        </div>
        <div
          className="rounded-[10px] p-3"
          style={{
            background: 'rgba(0,190,157,.06)',
            border: '1.5px solid #00BE9D',
            boxShadow: '0 8px 24px rgba(0,190,157,.12)',
          }}
        >
          <div className="text-[10px] font-extrabold text-teal uppercase mb-1" style={{ letterSpacing: '.12em' }}>
            8AM tee-time
          </div>
          <div className="text-teal font-extrabold tabular-nums" style={{ fontSize: 22, letterSpacing: '-.02em' }}>2.1x</div>
        </div>
      </div>
    </div>
  );
}
