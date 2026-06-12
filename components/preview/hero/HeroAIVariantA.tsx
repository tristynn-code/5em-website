'use client';

import { useEffect, useState } from 'react';
import FifthElementMark from './FifthElementMark';
import InsightTyper from './InsightTyper';
import { insights, dataViewLabel } from './insights';

/**
 * Variant A - Split layout.
 * Left panel = the data view (cycles through 4 dashboard states).
 * Right panel = the AI agent: brand mark + typing insight + spawned creative.
 * Both panels stay synchronized: when the insight talks about "creative", the
 * left panel is showing creative; about "audience", left shows the map; etc.
 */
export default function HeroAIVariantA() {
  const [idx, setIdx] = useState(0);
  const cycle = insights.length;

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % cycle), 7000);
    return () => clearInterval(id);
  }, [cycle]);

  const current = insights[idx];

  return (
    <div
      className="max-w-[1080px] mx-auto rounded-l overflow-hidden grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]"
      style={{
        background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)',
        border: '1px solid rgba(255,255,255,.08)',
        boxShadow: '0 24px 80px rgba(0,0,0,.18)',
        minHeight: 460,
      }}
    >
      {/* LEFT - data view */}
      <div className="relative p-7 lg:p-9 flex flex-col" style={{ borderRight: '1px solid rgba(255,255,255,.06)' }}>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2 text-[11px] font-bold text-white/50 uppercase" style={{ letterSpacing: '.12em' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pu" style={{ boxShadow: '0 0 8px #00BE9D' }} />
            5E Insight Engine
          </div>
          <div className="text-[10px] font-bold text-teal uppercase" style={{ letterSpacing: '.12em' }}>
            {dataViewLabel[current.view]}
          </div>
        </div>

        {/* The cycling data view */}
        <div key={`${idx}-${current.view}`} className="view-in flex-1 flex flex-col justify-center">
          {current.view === 'leadFlow' && <LeadFlowView />}
          {current.view === 'creative' && <CreativeView />}
          {current.view === 'audience' && <AudienceView />}
          {current.view === 'performance' && <PerformanceView />}
        </div>

        {/* Metric tile pinned bottom-left, refreshes with insight */}
        <div
          key={`metric-${idx}`}
          className="view-in mt-5 inline-flex items-center gap-2.5 self-start px-3.5 py-2 rounded-[10px]"
          style={{
            background: 'rgba(0,190,157,.08)',
            border: '1px solid rgba(0,190,157,.2)',
          }}
        >
          <span className="text-[10px] uppercase font-bold text-teal" style={{ letterSpacing: '.12em' }}>
            {current.metric.label}
          </span>
          <span className="text-white font-extrabold tabular-nums" style={{ fontSize: 18, letterSpacing: '-.02em' }}>
            {current.metric.value}
          </span>
        </div>
      </div>

      {/* RIGHT - AI agent */}
      <div className="relative p-7 lg:p-9 flex flex-col" style={{ background: 'rgba(0,0,0,.18)' }}>
        {/* Faint radial accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 0%, rgba(0,190,157,.12) 0%, transparent 60%)' }}
        />

        {/* Header */}
        <div className="relative flex items-center gap-3 mb-6">
          <FifthElementMark size={42} animated />
          <div>
            <div className="text-white font-extrabold text-[15px]" style={{ letterSpacing: '-.01em' }}>
              5EM AI Agent
            </div>
            <div className="text-[11px] text-teal font-bold uppercase flex items-center gap-1.5" style={{ letterSpacing: '.1em' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pu" />
              Analyzing
            </div>
          </div>
        </div>

        {/* Insight */}
        <div className="relative flex-1 flex flex-col justify-center min-h-[180px]">
          <InsightTyper key={idx} insight={current} />
        </div>

        {/* Spawned creative */}
        <div className="relative mt-6">
          <div className="text-[10px] uppercase font-bold text-white/40 mb-2.5" style={{ letterSpacing: '.12em' }}>
            Auto-spawning variants
          </div>
          <div className="flex gap-2">
            <div
              key={`spawn-${idx}`}
              className="view-in flex-shrink-0 rounded-[10px] flex items-end justify-start p-2.5 text-white text-[9px] font-extrabold uppercase"
              style={{
                width: 60,
                height: 84,
                background: current.spawned.gradient,
                border: '1px solid rgba(255,255,255,.15)',
                letterSpacing: '.06em',
                textShadow: '0 1px 4px rgba(0,0,0,.4)',
              }}
            >
              {current.spawned.label}
            </div>
            {/* placeholder ghosts hinting more are queued */}
            {[1, 2].map(n => (
              <div
                key={n}
                className="flex-shrink-0 rounded-[10px] flex items-center justify-center text-white/30 text-xs font-bold"
                style={{
                  width: 60,
                  height: 84,
                  background: 'rgba(255,255,255,.03)',
                  border: '1px dashed rgba(255,255,255,.12)',
                }}
                aria-hidden
              >
                +{n}
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots showing how many insights are in the loop */}
        <div className="relative mt-5 flex items-center justify-center gap-1.5">
          {insights.map((_, i) => (
            <span
              key={i}
              className="rounded-full transition-all"
              style={{
                width: i === idx ? 16 : 5,
                height: 5,
                background: i === idx ? '#00BE9D' : 'rgba(255,255,255,.18)',
                transitionDuration: '.4s',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============ Dashboard data views ============ */

function LeadFlowView() {
  const heights = [22, 35, 30, 48, 42, 58, 52, 65, 58, 72, 68, 82, 78, 90];
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-white/55 text-[11px] font-semibold">Lead Flow · Last 30 days</span>
        <div className="flex items-baseline gap-2">
          <span className="text-white font-extrabold tabular-nums" style={{ fontSize: 24, letterSpacing: '-.02em' }}>
            2,847
          </span>
          <span className="text-[11px] font-bold text-teal bg-teal-bg px-1.5 py-0.5 rounded">▲ 23%</span>
        </div>
      </div>
      <div className="flex items-end gap-[3px] h-[100px]">
        {heights.map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-teal rounded-t-[2px]"
            style={{ height: `${h}%`, opacity: 0.5 + h / 200 }}
          />
        ))}
      </div>
    </div>
  );
}

function CreativeView() {
  const tiles = [
    { g: 'linear-gradient(135deg,#00be9d,#1D2637)', label: 'PHX · UGC-12', metric: '$9.40' },
    { g: 'linear-gradient(135deg,#f093fb,#764ba2)', label: 'ATX · BARBER', metric: '$11.20' },
    { g: 'linear-gradient(135deg,#c1272d,#8b1a1f)', label: 'BODY20 · 24', metric: '$8.10' },
    { g: 'linear-gradient(135deg,#4facfe,#00f2fe)', label: 'IFLEX · STRETCH', metric: '$10.80' },
  ];
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-white/55 text-[11px] font-semibold">Top creatives this week</span>
        <span className="text-[11px] font-bold text-teal">4 of 142</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {tiles.map(t => (
          <div
            key={t.label}
            className="rounded-[10px] aspect-[3/4] flex flex-col justify-between p-2 text-white"
            style={{ background: t.g, border: '1px solid rgba(255,255,255,.15)' }}
          >
            <span className="text-[8px] font-extrabold uppercase" style={{ letterSpacing: '.06em', textShadow: '0 1px 4px rgba(0,0,0,.4)' }}>
              {t.label}
            </span>
            <span className="text-[10px] font-extrabold tabular-nums" style={{ textShadow: '0 1px 4px rgba(0,0,0,.5)' }}>
              {t.metric}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AudienceView() {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-white/55 text-[11px] font-semibold">Targeting · Houston, TX</span>
        <span className="text-[11px] font-bold text-teal">3.2mi radius</span>
      </div>
      <div
        className="relative w-full rounded-[10px] overflow-hidden"
        style={{
          height: 140,
          background: 'radial-gradient(circle at 50% 60%, rgba(0,190,157,.18) 0%, rgba(0,190,157,.04) 40%, transparent 70%), linear-gradient(135deg, #0a1418 0%, #0f1820 100%)',
          border: '1px solid rgba(0,190,157,.18)',
        }}
      >
        {/* Faux road grid */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 200 140">
          {[20, 50, 80, 110, 140, 170].map(x => (
            <line key={`v${x}`} x1={x} y1={0} x2={x} y2={140} stroke="rgba(255,255,255,.04)" strokeWidth="0.5" />
          ))}
          {[20, 50, 80, 110].map(y => (
            <line key={`h${y}`} x1={0} y1={y} x2={200} y2={y} stroke="rgba(255,255,255,.04)" strokeWidth="0.5" />
          ))}
          <circle cx={100} cy={75} r={48} fill="rgba(0,190,157,.08)" stroke="rgba(0,190,157,.35)" strokeWidth="0.6" />
          <circle cx={100} cy={75} r={3} fill="#00BE9D" className="animate-pu" />
        </svg>
        <div className="absolute bottom-2.5 left-2.5 px-2 py-1 rounded-[6px] bg-black/40 backdrop-blur text-[9px] text-teal font-bold uppercase" style={{ letterSpacing: '.08em' }}>
          26,840 in market
        </div>
        <div className="absolute top-2.5 right-2.5 px-2 py-1 rounded-[6px] bg-black/40 backdrop-blur text-[9px] text-white/70 font-bold">
          IMAGE Studios
        </div>
      </div>
    </div>
  );
}

function PerformanceView() {
  const rows = [
    { name: 'Beem · Boynton', cpl: '$8.20', delta: '↓ 18%' },
    { name: 'BODY20 · Austin', cpl: '$10.40', delta: '↓ 12%' },
    { name: 'iFlex · Phoenix', cpl: '$11.80', delta: '↓ 7%' },
    { name: 'Pilates · Vintage Park', cpl: '$9.40', delta: '↓ 24%' },
  ];
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-white/55 text-[11px] font-semibold">Performance · Week to date</span>
        <span className="text-[11px] font-bold text-teal">Network ▼</span>
      </div>
      <div className="space-y-2">
        {rows.map(r => (
          <div
            key={r.name}
            className="flex items-center justify-between rounded-md py-2 px-3"
            style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.06)' }}
          >
            <span className="text-white/80 text-[12px] font-semibold">{r.name}</span>
            <div className="flex items-center gap-3">
              <span className="text-white font-extrabold tabular-nums" style={{ fontSize: 13 }}>{r.cpl}</span>
              <span className="text-[11px] font-bold text-teal">{r.delta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
