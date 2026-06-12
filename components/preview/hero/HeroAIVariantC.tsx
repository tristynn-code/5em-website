'use client';

import { useEffect, useState } from 'react';
import FifthElementMark from './FifthElementMark';
import { insights } from './insights';

/**
 * Variant C - Closed-loop ecosystem.
 * Central dashboard panel surrounded by 4 satellite "stations" representing the
 * machine: INGEST (data in), THINK (AI insight), CREATE (spawn variant), DEPLOY
 * (push back into ads). Pulsing arc connects them. Reads as a complete loop.
 */
export default function HeroAIVariantC() {
  const [idx, setIdx] = useState(0);
  const [stage, setStage] = useState(0); // 0=ingest, 1=think, 2=create, 3=deploy
  const cycle = insights.length;

  useEffect(() => {
    const advance = setInterval(() => {
      setStage(s => {
        const next = (s + 1) % 4;
        if (next === 0) setIdx(i => (i + 1) % cycle);
        return next;
      });
    }, 1750);
    return () => clearInterval(advance);
  }, [cycle]);

  const current = insights[idx];
  const stages = ['Ingest', 'Think', 'Create', 'Deploy'] as const;

  return (
    <div
      className="max-w-[1080px] mx-auto rounded-l p-7 lg:p-9 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)',
        border: '1px solid rgba(255,255,255,.08)',
        boxShadow: '0 24px 80px rgba(0,0,0,.18)',
        minHeight: 520,
      }}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6 relative">
        <div className="flex items-center gap-3">
          <FifthElementMark size={36} animated background="rgba(0,190,157,.12)" />
          <div>
            <div className="text-white font-extrabold text-[14px]" style={{ letterSpacing: '-.01em' }}>
              5EM AI Machine
            </div>
            <div className="text-[10px] text-teal font-bold uppercase" style={{ letterSpacing: '.12em' }}>
              {stages[stage]} · cycle {idx + 1}/{cycle}
            </div>
          </div>
        </div>
        <div className="text-[10px] font-bold text-white/45 uppercase" style={{ letterSpacing: '.12em' }}>
          Live · always-on
        </div>
      </div>

      {/* THE LOOP */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-4 items-stretch">
        {/* LEFT COLUMN = INGEST + DEPLOY */}
        <div className="flex flex-col gap-3">
          <Satellite
            label="Ingest"
            active={stage === 0}
            corner="tl"
          >
            <div className="text-[10px] text-white/55 uppercase font-bold mb-1.5" style={{ letterSpacing: '.1em' }}>
              Lead flow · Meta + Google
            </div>
            <div className="flex items-end gap-[2px] h-[40px]">
              {[28, 42, 32, 50, 60, 45, 65, 70, 58, 78, 88, 72, 90].map((h, i) => (
                <div key={i} className="flex-1 bg-teal rounded-t-[1.5px]" style={{ height: `${h}%`, opacity: 0.5 + h / 200 }} />
              ))}
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-white font-extrabold tabular-nums text-[15px]" style={{ letterSpacing: '-.02em' }}>2,847</span>
              <span className="text-[10px] font-bold text-teal">▲ 23%</span>
            </div>
          </Satellite>

          <Satellite
            label="Deploy"
            active={stage === 3}
            corner="bl"
          >
            <div className="text-[10px] text-white/55 uppercase font-bold mb-1.5" style={{ letterSpacing: '.1em' }}>
              Pushed to live campaigns
            </div>
            <div className="flex flex-col gap-1.5">
              {['Phoenix · UGC-12', 'Austin · UGC-024', 'Dallas · Barber-3'].map(c => (
                <div
                  key={c}
                  className="flex items-center gap-2 px-2 py-1 rounded-[5px]"
                  style={{ background: 'rgba(0,190,157,.08)', border: '1px solid rgba(0,190,157,.2)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pu" />
                  <span className="text-[10px] text-white/80 font-semibold flex-1">{c}</span>
                  <span className="text-[9px] text-teal font-bold">LIVE</span>
                </div>
              ))}
            </div>
          </Satellite>
        </div>

        {/* CENTER COLUMN = THINK (the insight) */}
        <Satellite label="Think" active={stage === 1} large>
          <div className="flex items-center gap-2.5 mb-3">
            <FifthElementMark size={28} animated background="rgba(0,190,157,.12)" />
            <div className="text-[10px] uppercase font-extrabold text-teal" style={{ letterSpacing: '.14em' }}>
              {current.brand}
            </div>
          </div>
          <p
            key={`text-${idx}`}
            className="view-in text-white/90 leading-relaxed mb-4"
            style={{ fontSize: 14 }}
          >
            {current.text}
          </p>
          <div className="flex items-center justify-between pt-3 mt-auto" style={{ borderTop: '1px solid rgba(255,255,255,.08)' }}>
            <div>
              <div className="text-[9px] text-white/45 uppercase font-bold" style={{ letterSpacing: '.12em' }}>
                {current.metric.label}
              </div>
              <div className="text-white font-extrabold tabular-nums text-[18px]" style={{ letterSpacing: '-.02em' }}>
                {current.metric.value}
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-teal font-bold uppercase" style={{ letterSpacing: '.1em' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pu" />
              Reasoning
            </div>
          </div>
        </Satellite>

        {/* RIGHT COLUMN = CREATE (spawn variants) */}
        <div className="flex flex-col gap-3">
          <Satellite
            label="Create"
            active={stage === 2}
            corner="tr"
          >
            <div className="text-[10px] text-white/55 uppercase font-bold mb-2" style={{ letterSpacing: '.1em' }}>
              Spawning variants
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <div
                key={`spawn-${idx}`}
                className="view-in rounded-[8px] aspect-[3/4] flex items-end p-1.5 text-white text-[7px] font-extrabold uppercase"
                style={{
                  background: current.spawned.gradient,
                  border: '1px solid rgba(255,255,255,.18)',
                  letterSpacing: '.04em',
                  textShadow: '0 1px 3px rgba(0,0,0,.5)',
                }}
              >
                {current.spawned.label}
              </div>
              {[1, 2].map(n => (
                <div
                  key={n}
                  className="rounded-[8px] aspect-[3/4] flex items-center justify-center text-white/30 text-[10px] font-bold"
                  style={{
                    background: 'rgba(255,255,255,.03)',
                    border: '1px dashed rgba(255,255,255,.12)',
                  }}
                  aria-hidden
                >
                  +{n}
                </div>
              ))}
            </div>
            <div className="mt-2 text-[10px] text-teal font-bold flex items-center gap-1.5">
              <span>via Higgsfield</span>
              <span className="text-white/30">·</span>
              <span className="text-white/55">3 queued</span>
            </div>
          </Satellite>

          <Satellite
            label="Feedback"
            active={false}
            corner="br"
            ghost
          >
            <div className="text-[10px] text-white/55 uppercase font-bold mb-1.5" style={{ letterSpacing: '.1em' }}>
              Closing the loop
            </div>
            <svg viewBox="0 0 100 60" className="w-full">
              <path d="M5,30 C 25,5 50,5 75,15 S 95,40 95,55" stroke="rgba(0,190,157,.5)" strokeWidth="1.2" fill="none" strokeDasharray="3 2" />
              <circle cx="95" cy="55" r="2.5" fill="#00BE9D" className="animate-pu" />
              <text x="50" y="34" textAnchor="middle" fontSize="6.5" fill="rgba(255,255,255,.55)" fontWeight="700" style={{ letterSpacing: '.5px' }}>NEW DATA → NEW INSIGHTS</text>
            </svg>
          </Satellite>
        </div>
      </div>

      {/* PROGRESS DOTS */}
      <div className="mt-6 flex items-center justify-center gap-1.5 relative">
        {insights.map((_, i) => (
          <span
            key={i}
            className="rounded-full transition-all"
            style={{
              width: i === idx ? 18 : 5,
              height: 5,
              background: i === idx ? '#00BE9D' : 'rgba(255,255,255,.18)',
              transitionDuration: '.4s',
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Satellite({
  label,
  active,
  large,
  ghost,
  corner,
  children,
}: {
  label: string;
  active: boolean;
  large?: boolean;
  ghost?: boolean;
  corner?: 'tl' | 'tr' | 'bl' | 'br';
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative rounded-[14px] p-4 flex flex-col transition-all"
      style={{
        background: active
          ? 'rgba(0,190,157,.06)'
          : ghost
            ? 'rgba(255,255,255,.015)'
            : 'rgba(255,255,255,.03)',
        border: active ? '1px solid rgba(0,190,157,.4)' : '1px solid rgba(255,255,255,.07)',
        minHeight: large ? 240 : 140,
        boxShadow: active ? '0 0 0 4px rgba(0,190,157,.06), 0 8px 24px rgba(0,190,157,.08)' : 'none',
        transitionDuration: '.6s',
      }}
    >
      <div className="flex items-center justify-between mb-2.5">
        <span
          className="text-[9px] font-extrabold uppercase"
          style={{ letterSpacing: '.14em', color: active ? '#00BE9D' : 'rgba(255,255,255,.45)' }}
        >
          {label}
        </span>
        {corner && (
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: active ? '#00BE9D' : 'rgba(255,255,255,.25)', boxShadow: active ? '0 0 8px #00BE9D' : 'none' }}
          />
        )}
      </div>
      {children}
    </div>
  );
}
