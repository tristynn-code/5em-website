'use client';

import { useEffect, useState } from 'react';
import { getProblems } from '@/lib/content';

/**
 * Split-screen "Generic Agency vs 5EM Hyper-Local"
 * Live-ticking CPL comparison with animated bars, plus the 3 problem cards below.
 */
export default function ProblemSection() {
  const problems = getProblems();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 2200);
    return () => clearInterval(id);
  }, []);

  // Generic agency CPLs trend high and noisy
  const genericRows = [
    { name: 'Phoenix, AZ', base: 38.4 },
    { name: 'Austin, TX', base: 41.2 },
    { name: 'Dallas, TX', base: 36.9 },
    { name: 'Miami, FL', base: 44.1 },
  ];
  // 5EM hyper-local CPLs trend low and stable
  const localRows = [
    { name: 'Phoenix, AZ', base: 9.4 },
    { name: 'Austin, TX', base: 11.2 },
    { name: 'Dallas, TX', base: 10.6 },
    { name: 'Miami, FL', base: 12.4 },
  ];

  const jitter = (v: number, amp = 0.5) => +(v + (Math.sin(tick * 1.3 + v) * amp)).toFixed(2);

  return (
    <section className="sec bg-off">
      <div className="mx">
        <div className="stag">The Problem</div>
        <h2 className="sttl">Most Franchise Marketing Is Broken</h2>
        <p className="ssub">If any of these sound familiar, you&apos;re not alone.</p>

        {/* Split comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12">
          {/* Left: Generic Agency */}
          <div
            className="rounded-l p-7 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1a1010 0%, #2a1818 100%)',
              border: '1px solid rgba(255,80,80,.18)',
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-[10px] font-extrabold uppercase mb-1.5" style={{ letterSpacing: '.14em', color: 'rgba(255,140,140,.85)' }}>
                  Generic Agency
                </div>
                <div className="text-white font-extrabold text-lg" style={{ letterSpacing: '-.02em' }}>
                  Same ad, every market
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase" style={{ letterSpacing: '.08em', color: 'rgba(255,140,140,.85)' }}>
                <span className="w-2 h-2 rounded-full" style={{ background: '#ff5a5a', boxShadow: '0 0 8px rgba(255,90,90,.6)' }} />
                Climbing
              </div>
            </div>

            {/* Generic ad preview - same creative repeated */}
            <div className="grid grid-cols-4 gap-1.5 mb-5">
              {[0, 1, 2, 3].map(i => (
                <div
                  key={i}
                  className="aspect-square rounded-[8px] flex items-center justify-center text-[9px] font-bold text-white/50 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #2a2020 0%, #3a2828 100%)',
                    border: '1px solid rgba(255,255,255,.06)',
                  }}
                >
                  <span className="z-[1]">IDENTICAL</span>
                  <div className="absolute inset-0 opacity-30" style={{ background: 'repeating-linear-gradient(45deg, transparent 0, transparent 4px, rgba(255,255,255,.04) 4px, rgba(255,255,255,.04) 8px)' }} />
                </div>
              ))}
            </div>

            {/* Bars */}
            <div className="space-y-2.5">
              {genericRows.map((r, i) => {
                const v = jitter(r.base, 1.4);
                const pct = Math.min(98, (v / 45) * 100);
                return (
                  <div key={i} className="grid items-center gap-3" style={{ gridTemplateColumns: '90px 1fr 60px' }}>
                    <div className="text-white/70 text-[11px] font-semibold">{r.name}</div>
                    <div className="h-2 rounded overflow-hidden" style={{ background: 'rgba(255,255,255,.06)' }}>
                      <div
                        className="h-full rounded transition-all duration-[1800ms]"
                        style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #ff5a5a, #ff8a5a)' }}
                      />
                    </div>
                    <div className="text-[13px] font-extrabold tabular-nums text-right" style={{ color: '#ff8a8a' }}>
                      ${v.toFixed(2)}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 pt-4 border-t border-white/5 flex justify-between items-baseline">
              <span className="text-[11px] uppercase font-bold text-white/40" style={{ letterSpacing: '.1em' }}>Avg CPL</span>
              <span className="text-[28px] font-extrabold tabular-nums" style={{ color: '#ff8a8a', letterSpacing: '-.03em' }}>
                ${jitter(40.15, 0.8).toFixed(2)}
              </span>
            </div>
          </div>

          {/* Right: 5EM Hyper-Local */}
          <div
            className="rounded-l p-7 relative overflow-hidden bg-dk"
            style={{
              border: '1px solid rgba(0,190,157,.25)',
              boxShadow: '0 12px 48px rgba(0,190,157,.12)',
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-[10px] font-extrabold text-teal uppercase mb-1.5" style={{ letterSpacing: '.14em' }}>
                  5EM Hyper-Local
                </div>
                <div className="text-white font-extrabold text-lg" style={{ letterSpacing: '-.02em' }}>
                  Built for each market
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-teal uppercase" style={{ letterSpacing: '.08em' }}>
                <span className="w-2 h-2 rounded-full bg-teal animate-pu" style={{ boxShadow: '0 0 8px #00BE9D' }} />
                Optimized
              </div>
            </div>

            {/* Local creatives - varied per market */}
            <div className="grid grid-cols-4 gap-1.5 mb-5">
              {[
                { city: 'PHX', g: 'linear-gradient(135deg,#00be9d,#1D2637)' },
                { city: 'ATX', g: 'linear-gradient(135deg,#667eea,#00be9d)' },
                { city: 'DAL', g: 'linear-gradient(135deg,#fa709a,#00be9d)' },
                { city: 'MIA', g: 'linear-gradient(135deg,#4facfe,#00be9d)' },
              ].map((c, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-[8px] flex items-center justify-center text-[10px] font-extrabold text-white relative overflow-hidden"
                  style={{ background: c.g, border: '1px solid rgba(255,255,255,.15)' }}
                >
                  <span className="z-[1]" style={{ textShadow: '0 1px 4px rgba(0,0,0,.5)' }}>{c.city}</span>
                </div>
              ))}
            </div>

            {/* Bars */}
            <div className="space-y-2.5">
              {localRows.map((r, i) => {
                const v = jitter(r.base, 0.3);
                const pct = Math.min(98, (v / 45) * 100);
                return (
                  <div key={i} className="grid items-center gap-3" style={{ gridTemplateColumns: '90px 1fr 60px' }}>
                    <div className="text-white/70 text-[11px] font-semibold">{r.name}</div>
                    <div className="h-2 rounded overflow-hidden" style={{ background: 'rgba(255,255,255,.06)' }}>
                      <div
                        className="h-full bg-teal rounded transition-all duration-[1800ms]"
                        style={{ width: `${pct}%`, boxShadow: '0 0 12px rgba(0,190,157,.4)' }}
                      />
                    </div>
                    <div className="text-teal text-[13px] font-extrabold tabular-nums text-right">${v.toFixed(2)}</div>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 pt-4 border-t border-white/5 flex justify-between items-baseline">
              <span className="text-[11px] uppercase font-bold text-white/40" style={{ letterSpacing: '.1em' }}>Avg CPL</span>
              <span className="text-[28px] font-extrabold text-teal tabular-nums" style={{ letterSpacing: '-.03em' }}>
                ${jitter(10.9, 0.2).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Floating 3.2x bridge between the two */}
        <div className="flex justify-center -mt-3 mb-12 relative z-[2]">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-wh"
            style={{
              border: '1px solid rgba(0,0,0,.07)',
              boxShadow: '0 12px 40px rgba(0,0,0,.08)',
            }}
          >
            <span className="text-[28px] font-extrabold text-teal leading-none" style={{ letterSpacing: '-.03em' }}>3.2x</span>
            <span className="text-[13px] font-semibold text-tx-2">overspend with generic creative</span>
          </div>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {problems.map(p => (
            <div
              key={p.id}
              className="bg-wh border border-bd rounded p-6 flex flex-col gap-3 transition-all hover:border-teal-bd hover:-translate-y-0.5"
              style={{ transition: 'all .3s' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-[10px] bg-teal-bg border border-teal-bd flex items-center justify-center text-[15px] font-extrabold text-teal flex-shrink-0">
                  {p.number}
                </div>
                <h3 className="text-base font-bold text-tx leading-tight">{p.title}</h3>
              </div>
              <p className="text-sm text-tx-2 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
