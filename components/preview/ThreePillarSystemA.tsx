'use client';

import { useEffect, useState } from 'react';
import { getPillars, type Pillar } from '@/lib/content';

/**
 * Variant 2A — Larger, premium dark pillar cards.
 * Each card gets a real interactive mini-mockup.
 */
export default function ThreePillarSystemA() {
  const pillars = getPillars();

  return (
    <section className="py-[100px] px-6 bg-off">
      <div className="mx">
        <div className="text-center mb-14">
          <div className="stag inline-block">Our System</div>
          <h2 className="sttl text-center">The 3-Pillar Franchise Growth System</h2>
          <p className="ssub mx-auto text-center" style={{ maxWidth: 680 }}>
            Every franchise gets the same proven framework - customized to their brand, market, and goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-mx mx-auto">
          {pillars.map(p => (
            <PillarCardLarge key={p.id} pillar={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCardLarge({ pillar }: { pillar: Pillar }) {
  return (
    <div
      className="rounded-[20px] p-8 flex flex-col relative overflow-hidden border transition-all hover:-translate-y-1 group"
      style={{
        background: 'linear-gradient(135deg, #0F1314 0%, #1D2637 100%)',
        borderColor: 'rgba(255,255,255,.08)',
        minHeight: 540,
        boxShadow: '0 12px 40px rgba(0,0,0,.08)',
      }}
    >
      {/* Subtle radial accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60 transition-opacity group-hover:opacity-100"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,190,157,.08) 0%, transparent 60%)' }}
      />

      <div className="flex items-center justify-between mb-4 relative z-[1]">
        <div className="text-[11px] font-extrabold text-teal uppercase" style={{ letterSpacing: '.14em' }}>
          {pillar.label}
        </div>
        <div
          className="text-[44px] font-extrabold leading-none"
          style={{ letterSpacing: '-.04em', color: 'rgba(0,190,157,.18)' }}
        >
          {pillar.number}
        </div>
      </div>

      <div
        className="rounded-[14px] p-4 mb-6 flex items-center justify-center relative z-[1]"
        style={{
          minHeight: 230,
          background: 'rgba(255,255,255,.03)',
          border: '1px solid rgba(255,255,255,.08)',
        }}
      >
        {pillar.viz === 'line' && <MockLeadFlow />}
        {pillar.viz === 'creative' && <MockUgcReel />}
        {pillar.viz === 'bars' && <MockInsights />}
      </div>

      <h3 className="text-[22px] font-extrabold text-white leading-tight mb-3 relative z-[1]" style={{ letterSpacing: '-.02em' }}>
        {pillar.title}
      </h3>
      <p className="text-sm leading-relaxed font-medium text-white/65 relative z-[1]">{pillar.description}</p>
    </div>
  );
}

/* Mock 1: Animated lead flow chart with live ticking counter */
function MockLeadFlow() {
  const baseHeights = [22, 30, 26, 38, 42, 50, 48, 58, 62, 70, 78, 88];
  const [heights, setHeights] = useState<number[]>(baseHeights);
  const [leads, setLeads] = useState(2847);

  useEffect(() => {
    const id = setInterval(() => {
      setHeights(prev => prev.map((h, i) => Math.min(98, Math.max(15, h + (Math.random() - 0.4) * 6))));
      setLeads(l => Math.round(2847 + (Math.random() - 0.5) * 30));
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between items-baseline mb-3">
        <div>
          <div className="text-[9px] uppercase font-bold text-white/45 mb-0.5" style={{ letterSpacing: '.1em' }}>Leads / 30 days</div>
          <div className="text-white font-extrabold text-2xl tabular-nums leading-none" style={{ letterSpacing: '-.02em' }}>
            {leads.toLocaleString()}
          </div>
        </div>
        <span className="text-xs font-bold text-teal bg-teal-bg px-2 py-0.5 rounded">▲ 23%</span>
      </div>
      <div className="flex items-end gap-1 h-[110px]">
        {heights.map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-teal rounded-t-[3px] transition-all duration-[1200ms]"
            style={{
              height: `${h}%`,
              opacity: 0.55 + (h / 100) * 0.45,
              boxShadow: i === heights.length - 1 ? '0 0 12px rgba(0,190,157,.6)' : undefined,
            }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-2 text-[9px] text-white/35 font-medium">
        <span>30d ago</span>
        <span>15d</span>
        <span>Today</span>
      </div>
    </div>
  );
}

/* Mock 2: Phone reel with playing indicator */
function MockUgcReel() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % 3), 2200);
    return () => clearInterval(id);
  }, []);

  const reels = [
    { g: 'linear-gradient(135deg,#00be9d,#1D2637)', city: 'Phoenix', likes: '14.2K' },
    { g: 'linear-gradient(135deg,#667eea,#00be9d)', city: 'Austin', likes: '11.8K' },
    { g: 'linear-gradient(135deg,#fa709a,#00be9d)', city: 'Miami', likes: '9.4K' },
  ];

  return (
    <div className="w-full flex items-center justify-center gap-3 relative">
      {reels.map((r, i) => (
        <div
          key={i}
          className="rounded-[10px] overflow-hidden relative transition-all duration-500 flex flex-col justify-end"
          style={{
            width: i === active ? 80 : 56,
            aspectRatio: '9/16',
            background: r.g,
            border: i === active ? '2px solid #00BE9D' : '1.5px solid rgba(255,255,255,.15)',
            transform: i === active ? 'translateY(-6px)' : 'translateY(0)',
            boxShadow: i === active ? '0 12px 28px rgba(0,190,157,.3)' : '0 4px 12px rgba(0,0,0,.2)',
          }}
        >
          {/* Top tag */}
          <div className="absolute top-1.5 left-1.5 right-1.5 flex justify-between items-center">
            <div className="text-[7px] font-bold text-white px-1.5 py-0.5 rounded" style={{ background: 'rgba(0,0,0,.4)' }}>
              {r.city}
            </div>
            {i === active && (
              <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pu" style={{ boxShadow: '0 0 6px #00BE9D' }} />
            )}
          </div>
          {/* Play icon center */}
          {i === active && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center text-dk text-[10px] pl-0.5">▶</div>
            </div>
          )}
          {/* Likes */}
          <div className="p-1.5 text-[8px] font-bold text-white" style={{ textShadow: '0 1px 2px rgba(0,0,0,.6)' }}>
            ♡ {r.likes}
          </div>
        </div>
      ))}
    </div>
  );
}

/* Mock 3: Insights bars with live numbers */
function MockInsights() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 2000);
    return () => clearInterval(id);
  }, []);

  const rows = [
    { name: 'Phoenix', val: 9.4 + Math.sin(tick) * 0.3 },
    { name: 'Austin', val: 11.2 + Math.sin(tick + 1) * 0.4 },
    { name: 'Dallas', val: 13.8 + Math.sin(tick + 2) * 0.5 },
    { name: 'Miami', val: 15.6 + Math.sin(tick + 3) * 0.6 },
  ];
  const max = 18;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-3">
        <div className="text-[9px] uppercase font-bold text-white/45" style={{ letterSpacing: '.1em' }}>Network CPL</div>
        <div className="flex items-center gap-1.5 text-[9px] font-bold text-teal uppercase" style={{ letterSpacing: '.06em' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pu" />
          Live
        </div>
      </div>
      <div className="space-y-2.5">
        {rows.map((r, i) => (
          <div key={i} className="grid items-center gap-2.5" style={{ gridTemplateColumns: '54px 1fr 42px' }}>
            <div className="text-white/65 text-[10px] font-semibold">{r.name}</div>
            <div className="h-1.5 rounded overflow-hidden" style={{ background: 'rgba(255,255,255,.06)' }}>
              <div
                className="h-full bg-teal rounded transition-all duration-[1500ms]"
                style={{
                  width: `${(r.val / max) * 100}%`,
                  boxShadow: '0 0 6px rgba(0,190,157,.4)',
                }}
              />
            </div>
            <div className="text-teal text-[10px] font-extrabold tabular-nums text-right">${r.val.toFixed(2)}</div>
          </div>
        ))}
      </div>
      <div
        className="mt-3 pt-2.5 flex items-center gap-1.5 text-[9px] font-semibold text-white/55"
        style={{ borderTop: '1px solid rgba(255,255,255,.06)' }}
      >
        <span className="text-teal">✓</span>
        <span>UGC-047 outperforming network by 42%</span>
      </div>
    </div>
  );
}
