'use client';

import { useEffect, useState } from 'react';
import { getProblems } from '@/lib/content';

/**
 * Variant 1B — 3 large "broken" cards.
 * Each card has its own purpose-built interactive mockup that shows the problem visually.
 */
export default function ProblemSectionB() {
  const problems = getProblems();

  return (
    <section className="sec bg-off">
      <div className="mx">
        <div className="ctr">
          <div className="stag inline-block">The Problem</div>
          <h2 className="sttl text-center">Most Franchise Marketing Is Broken</h2>
          <p className="ssub mx-auto text-center">If any of these sound familiar, you&apos;re not alone.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12">
          {problems.map((p, i) => (
            <div
              key={p.id}
              className="rounded-l bg-wh border border-bd overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:border-teal-bd"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,.04)', transition: 'all .3s' }}
            >
              {/* Mockup */}
              <div
                className="relative overflow-hidden flex items-center justify-center px-6 py-8"
                style={{
                  minHeight: 220,
                  background: 'linear-gradient(135deg, #0F1314 0%, #1D2637 100%)',
                  borderBottom: '1px solid rgba(0,0,0,.07)',
                }}
              >
                {/* Subtle red overlay denoting "broken" */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255,80,80,.06) 0%, transparent 70%)' }} />
                {i === 0 && <MockGenericAd />}
                {i === 1 && <MockNoData />}
                {i === 2 && <MockWasteChart />}
              </div>

              {/* Copy */}
              <div className="p-7 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center text-base font-extrabold flex-shrink-0"
                    style={{
                      background: 'rgba(255,80,80,.08)',
                      border: '1px solid rgba(255,80,80,.2)',
                      color: '#d05050',
                    }}
                  >
                    {p.number}
                  </div>
                  <h3 className="text-lg font-extrabold text-tx leading-tight" style={{ letterSpacing: '-.02em' }}>{p.title}</h3>
                </div>
                <p className="text-sm text-tx-2 leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Problem 1: 4 identical-looking ads with city labels */
function MockGenericAd() {
  return (
    <div className="w-full max-w-[280px] grid grid-cols-2 gap-2 relative">
      {['Phoenix', 'Austin', 'Dallas', 'Miami'].map((city, i) => (
        <div
          key={i}
          className="aspect-square rounded-[10px] overflow-hidden relative flex flex-col"
          style={{
            background: 'linear-gradient(135deg, #2a2020 0%, #3a2828 100%)',
            border: '1px solid rgba(255,255,255,.06)',
          }}
        >
          <div className="absolute top-1.5 left-1.5 text-[8px] font-bold text-white/40 px-1.5 py-0.5 rounded uppercase" style={{ background: 'rgba(0,0,0,.4)', letterSpacing: '.06em' }}>
            {city}
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
            <div className="w-7 h-7 rounded-full mb-1.5" style={{ background: 'rgba(255,255,255,.1)' }} />
            <div className="text-[8px] font-bold text-white/40 leading-tight">GENERIC AD</div>
            <div className="text-[6px] text-white/30 mt-0.5">— same as below —</div>
          </div>
        </div>
      ))}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-extrabold text-white whitespace-nowrap uppercase" style={{ background: '#d05050', letterSpacing: '.08em', boxShadow: '0 4px 12px rgba(208,80,80,.4)' }}>
        4 markets — 1 creative
      </div>
    </div>
  );
}

/* Problem 2: Dashboard with "?" everywhere */
function MockNoData() {
  return (
    <div
      className="w-full max-w-[280px] rounded-[14px] p-4 relative"
      style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)' }}
    >
      <div className="flex justify-between items-center mb-3 pb-2.5 border-b border-white/10">
        <div className="text-white text-xs font-extrabold" style={{ letterSpacing: '-.01em' }}>Network Dashboard</div>
        <div className="text-[9px] font-bold text-white/40 uppercase" style={{ letterSpacing: '.08em' }}>No data</div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 mb-3">
        {['Leads', 'CPL', 'ROAS'].map(lbl => (
          <div key={lbl} className="p-2 rounded text-center" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)' }}>
            <div className="text-[20px] font-extrabold text-white/30 leading-none mb-1">?</div>
            <div className="text-[8px] font-bold text-white/30 uppercase" style={{ letterSpacing: '.05em' }}>{lbl}</div>
          </div>
        ))}
      </div>
      {/* Fake bar chart with missing data dashes */}
      <div className="flex items-end gap-0.5 h-12">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => (
          <div
            key={i}
            className="flex-1 rounded-t-[2px]"
            style={{
              height: i % 3 === 0 ? '4px' : '0px',
              background: 'rgba(255,255,255,.15)',
              borderTop: i % 3 !== 0 ? '1.5px dashed rgba(255,255,255,.2)' : 'none',
              minHeight: '2px',
            }}
          />
        ))}
      </div>
      <div className="absolute top-2 right-2 w-2 h-2 rounded-full animate-pu" style={{ background: '#ff5a5a', boxShadow: '0 0 6px rgba(255,90,90,.6)' }} />
    </div>
  );
}

/* Problem 3: Budget waste chart - tall red bars */
function MockWasteChart() {
  return (
    <div
      className="w-full max-w-[280px] rounded-[14px] p-4 relative"
      style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)' }}
    >
      <div className="flex justify-between items-center mb-3 pb-2.5 border-b border-white/10">
        <div className="text-white text-xs font-extrabold" style={{ letterSpacing: '-.01em' }}>Ad Spend by Market</div>
        <div className="text-[9px] font-bold uppercase" style={{ letterSpacing: '.08em', color: '#ff8a8a' }}>$ wasted</div>
      </div>
      <div className="space-y-2">
        {[
          { city: 'Phoenix', waste: 78 },
          { city: 'Austin', waste: 62 },
          { city: 'Dallas', waste: 84 },
          { city: 'Miami', waste: 71 },
        ].map(r => (
          <div key={r.city} className="grid items-center gap-2" style={{ gridTemplateColumns: '54px 1fr' }}>
            <div className="text-white/60 text-[10px] font-semibold">{r.city}</div>
            <div className="h-3 rounded overflow-hidden relative" style={{ background: 'rgba(255,255,255,.06)' }}>
              <div
                className="h-full rounded"
                style={{
                  width: `${r.waste}%`,
                  background: 'linear-gradient(90deg, #ff5a5a, #ff8a5a)',
                  boxShadow: '0 0 8px rgba(255,90,90,.3)',
                }}
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] font-extrabold text-white tabular-nums" style={{ textShadow: '0 1px 2px rgba(0,0,0,.6)' }}>
                {r.waste}%
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-2.5 border-t border-white/10 flex justify-between">
        <span className="text-[9px] uppercase font-bold text-white/40" style={{ letterSpacing: '.08em' }}>Avg waste</span>
        <span className="text-[14px] font-extrabold tabular-nums" style={{ color: '#ff8a8a' }}>$3,247 / mo</span>
      </div>
    </div>
  );
}
