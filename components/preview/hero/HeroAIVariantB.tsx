'use client';

import { useEffect, useState } from 'react';
import FifthElementMark from './FifthElementMark';
import InsightTyper from './InsightTyper';
import { insights } from './insights';

/**
 * Variant B - Stacked.
 * Top stays familiar: the current 4-tile metric grid + live bar chart.
 * Bottom adds an AI insight ribbon - brand mark, typing insight, spawned creative.
 * Minimal disruption to the existing hero feel.
 */
export default function HeroAIVariantB() {
  const [metrics, setMetrics] = useState({ leads: 2847, cpl: 11.4, showRate: 78, locations: 107 });
  const [bars, setBars] = useState<number[]>(BAR_HEIGHTS);
  const [idx, setIdx] = useState(0);
  const cycle = insights.length;

  useEffect(() => {
    const m = setInterval(() => {
      setMetrics(prev => ({
        leads: Math.round(prev.leads + (Math.random() - 0.5) * 20),
        cpl: +(11.4 + (Math.random() - 0.5) * 0.4).toFixed(2),
        showRate: Math.round(78 + (Math.random() - 0.5) * 3),
        locations: 107,
      }));
    }, 2800);
    const b = setInterval(() => {
      setBars(prev => prev.map(h => Math.max(8, Math.min(100, h + (Math.random() - 0.5) * 7))));
    }, 3000);
    return () => {
      clearInterval(m);
      clearInterval(b);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % cycle), 7000);
    return () => clearInterval(id);
  }, [cycle]);

  const current = insights[idx];

  return (
    <div
      className="max-w-[1080px] mx-auto rounded-l overflow-hidden bg-wh"
      style={{
        border: '1px solid rgba(0,0,0,.07)',
        boxShadow: '0 24px 80px rgba(0,0,0,.08)',
      }}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between px-7 py-4 border-b border-bd">
        <div className="flex items-center gap-2.5 text-tx font-bold text-[14px]">
          <span className="w-2 h-2 rounded-full bg-teal animate-pu" style={{ boxShadow: '0 0 8px #00BE9D' }} />
          5E Insight Engine
        </div>
        <span className="text-[11px] font-bold text-tx-3 uppercase" style={{ letterSpacing: '.12em' }}>Live Dashboard</span>
      </div>

      {/* METRICS GRID (white, current style) */}
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <MetricCell label="Total Leads (30d)" value={metrics.leads.toLocaleString()} delta="+23%" />
        <MetricCell label="Avg Cost Per Lead" value={`$${metrics.cpl.toFixed(2)}`} delta="↓31%" />
        <MetricCell label="Show Rate" value={`${metrics.showRate}%`} delta="+12%" />
        <MetricCell label="Active Locations" value={`${metrics.locations}`} last />
      </div>

      {/* BAR CHART */}
      <div className="px-7 py-5">
        <div className="flex items-center justify-between mb-3.5">
          <span className="text-[13px] font-semibold text-tx-2">Lead Flow · Last 30 Days</span>
          <div className="flex items-baseline gap-2">
            <span className="text-[20px] font-extrabold text-tx tabular-nums" style={{ letterSpacing: '-.02em' }}>
              {metrics.leads.toLocaleString()}
            </span>
            <span className="text-[11px] font-bold text-teal bg-teal-bg px-1.5 py-0.5 rounded">▲ 23%</span>
          </div>
        </div>
        <div className="flex items-end gap-[3px] h-[70px]">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-teal rounded-t-[2px] transition-all duration-1000"
              style={{ height: `${h}%`, opacity: 0.55 + h / 220 }}
            />
          ))}
        </div>
      </div>

      {/* AI AGENT RIBBON (dark, contrasts the light dashboard above) */}
      <div
        className="relative px-7 py-6 flex items-center gap-6 flex-wrap"
        style={{
          background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)',
          borderTop: '1px solid rgba(255,255,255,.06)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 90% 50%, rgba(0,190,157,.14) 0%, transparent 60%)' }}
        />

        <FifthElementMark size={48} animated />

        <div className="flex-1 min-w-[280px] relative">
          <div className="text-[10px] uppercase font-bold text-teal mb-2" style={{ letterSpacing: '.14em' }}>
            5EM AI Agent · Generating Insight
          </div>
          <InsightTyper key={idx} insight={current} />
        </div>

        {/* Spawned creative + queue */}
        <div className="relative flex flex-col items-end gap-2 flex-shrink-0">
          <div className="text-[10px] uppercase font-bold text-white/45" style={{ letterSpacing: '.12em' }}>
            Spawning variant
          </div>
          <div className="flex gap-2">
            <div
              key={`spawn-${idx}`}
              className="view-in flex-shrink-0 rounded-[10px] flex items-end justify-start p-2 text-white text-[8px] font-extrabold uppercase"
              style={{
                width: 52,
                height: 72,
                background: current.spawned.gradient,
                border: '1px solid rgba(255,255,255,.15)',
                letterSpacing: '.06em',
                textShadow: '0 1px 4px rgba(0,0,0,.5)',
              }}
            >
              {current.spawned.label}
            </div>
            {[1, 2].map(n => (
              <div
                key={n}
                className="flex-shrink-0 rounded-[10px] flex items-center justify-center text-white/30 text-xs font-bold"
                style={{
                  width: 52,
                  height: 72,
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
      </div>

      {/* FOOTER STRIP */}
      <div className="flex items-center justify-between px-7 py-3.5" style={{ background: '#0F1314' }}>
        <span className="text-[11px] text-white/40 font-medium">5th Element Media © 2026</span>
        <div className="flex items-center gap-1.5">
          {insights.map((_, i) => (
            <span
              key={i}
              className="rounded-full transition-all"
              style={{
                width: i === idx ? 14 : 4,
                height: 4,
                background: i === idx ? '#00BE9D' : 'rgba(255,255,255,.16)',
                transitionDuration: '.4s',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricCell({ label, value, delta, last }: { label: string; value: string; delta?: string; last?: boolean }) {
  return (
    <div className={`p-5 ${last ? '' : 'border-r border-bd'} border-b border-bd`}>
      <div className="text-[10px] text-tx-3 uppercase font-semibold mb-2" style={{ letterSpacing: '.12em' }}>{label}</div>
      <div className="flex items-baseline gap-2">
        <span className="text-[26px] font-extrabold text-tx tabular-nums" style={{ letterSpacing: '-.02em' }}>{value}</span>
        {delta && <em className="not-italic text-[11px] font-bold text-teal bg-teal-bg px-1.5 py-0.5 rounded">{delta}</em>}
      </div>
    </div>
  );
}

const BAR_HEIGHTS = [
  18, 30, 26, 38, 50, 44, 36, 48, 58, 42, 56, 48, 64, 52, 68, 60, 46, 56, 66, 90, 74, 62, 54, 68, 58, 50, 72, 66, 56, 70,
];
