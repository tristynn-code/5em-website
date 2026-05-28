'use client';

import { useEffect, useRef, useState } from 'react';
import { getPillars, type Pillar } from '@/lib/content';

/**
 * Variant 2B — Tabbed system.
 * One pillar selected at a time, full-width interactive demo on the right.
 */
export default function ThreePillarSystemB() {
  const pillars = getPillars();
  const [active, setActive] = useState(0);
  const current = pillars[active];

  // Auto-advance every 6s; pause on user click
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive(a => (a + 1) % pillars.length), 6000);
    return () => clearInterval(id);
  }, [paused, pillars.length]);

  // Sliding active-tab indicator - measures the active button's position and
  // animates a single pill element between tabs so the user gets a visual
  // prompt that the section is interactive (per Tristynn's feedback).
  const tabBarRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicator, setIndicator] = useState<{ left: number; top: number; width: number; height: number } | null>(null);

  useEffect(() => {
    const measure = () => {
      const bar = tabBarRef.current;
      const btn = buttonRefs.current[active];
      if (!bar || !btn) return;
      const barRect = bar.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      setIndicator({
        left: btnRect.left - barRect.left,
        top: btnRect.top - barRect.top,
        width: btnRect.width,
        height: btnRect.height,
      });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [active]);

  return (
    <section className="py-[100px] px-6 bg-off">
      <div className="mx">
        <div className="text-center mb-12">
          <div className="stag inline-block">Our System</div>
          <h2 className="sttl text-center">The 3-Pillar Franchise Growth System</h2>
          <p className="ssub mx-auto text-center" style={{ maxWidth: 680 }}>
            Every franchise gets the same proven framework - customized to their brand, market, and goals.
          </p>
        </div>

        {/* Tab bar with sliding active indicator */}
        <div
          ref={tabBarRef}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-2 mb-6 p-2 rounded-l"
          style={{
            background: 'rgba(0,0,0,.02)',
            border: '1px solid rgba(0,0,0,.05)',
          }}
        >
          {/* Sliding pill that visually moves between tabs */}
          {indicator && (
            <div
              aria-hidden
              className="absolute pointer-events-none rounded bg-wh overflow-hidden"
              style={{
                left: indicator.left,
                top: indicator.top,
                width: indicator.width,
                height: indicator.height,
                border: '1px solid rgba(0,190,157,.25)',
                boxShadow: '0 6px 24px rgba(0,190,157,.1)',
                transition: 'left .55s cubic-bezier(.65,.05,.36,1), top .55s cubic-bezier(.65,.05,.36,1), width .55s cubic-bezier(.65,.05,.36,1), height .55s cubic-bezier(.65,.05,.36,1)',
                zIndex: 0,
              }}
            >
              {!paused && (
                <div
                  key={active}
                  className="absolute bottom-0 left-0 h-[2px] bg-teal"
                  style={{ animation: 'gr 6s linear forwards', width: '100%' }}
                />
              )}
            </div>
          )}

          {pillars.map((p, i) => (
            <button
              key={p.id}
              ref={(el) => { buttonRefs.current[i] = el; }}
              onClick={() => {
                setActive(i);
                setPaused(true);
              }}
              className="text-left rounded p-4 transition-colors relative bg-transparent z-[1]"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-[10px] flex items-center justify-center text-[13px] font-extrabold flex-shrink-0 transition-colors ${
                    i === active ? 'bg-teal text-dk' : 'bg-teal-bg text-teal'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase font-extrabold text-teal mb-0.5" style={{ letterSpacing: '.1em' }}>
                    {p.label}
                  </div>
                  <div
                    className={`text-sm font-extrabold leading-tight transition-colors ${i === active ? 'text-tx' : 'text-tx-2'}`}
                    style={{ letterSpacing: '-.01em' }}
                  >
                    {p.title}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Demo panel - fixed height so the tallest pillar (#2) doesn't shift the page;
            tab-panel-in keyframe runs on each active change via the key remount. */}
        <div
          key={current.id}
          className="rounded-l overflow-hidden grid grid-cols-1 lg:grid-cols-5 tab-panel-in"
          style={{
            background: 'linear-gradient(135deg, #0F1314 0%, #1D2637 100%)',
            border: '1px solid rgba(255,255,255,.08)',
            height: 520,
            boxShadow: '0 16px 48px rgba(0,0,0,.12)',
          }}
        >
          {/* Left copy */}
          <div className="lg:col-span-2 p-10 flex flex-col justify-center relative">
            <div className="text-[11px] uppercase font-extrabold text-teal mb-3" style={{ letterSpacing: '.14em' }}>
              {current.label}
            </div>
            <h3 className="text-[28px] font-extrabold text-white leading-tight mb-4" style={{ letterSpacing: '-.02em' }}>
              {current.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-white/70 font-medium">{current.description}</p>

            {/* Mini stat row */}
            <div className="mt-7 grid grid-cols-2 gap-3">
              {current.viz === 'line' && (
                <>
                  <StatPill label="Avg CPL" value="$11.40" />
                  <StatPill label="Locations" value="100+" />
                </>
              )}
              {current.viz === 'creative' && (
                <>
                  <StatPill label="Outperform" value="30-50%" />
                  <StatPill label="Active Creatives" value="142" />
                </>
              )}
              {current.viz === 'bars' && (
                <>
                  <StatPill label="Refresh" value="Live" />
                  <StatPill label="Markets" value="All Active" />
                </>
              )}
            </div>
          </div>

          {/* Right demo - overflow-hidden so Pillar 2's UGC grid doesn't push panel taller */}
          <div className="lg:col-span-3 p-8 flex items-center justify-center relative overflow-hidden" style={{ background: 'rgba(0,0,0,.15)' }}>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,190,157,.08) 0%, transparent 70%)' }}
            />
            <div className="w-full max-h-full flex items-center justify-center">
              {current.viz === 'line' && <DemoLeadFlow />}
              {current.viz === 'creative' && <DemoUgcGrid />}
              {current.viz === 'bars' && <DemoInsight />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="p-3 rounded-[10px]"
      style={{
        background: 'rgba(255,255,255,.04)',
        border: '1px solid rgba(255,255,255,.08)',
      }}
    >
      <div className="text-[10px] uppercase font-bold text-white/45 mb-1" style={{ letterSpacing: '.08em' }}>{label}</div>
      <div className="text-white font-extrabold text-lg" style={{ letterSpacing: '-.02em' }}>{value}</div>
    </div>
  );
}

/* Demo 1: Full lead flow dashboard */
function DemoLeadFlow() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 2000);
    return () => clearInterval(id);
  }, []);

  const rows = [
    { name: 'Phoenix, AZ', base: 92, val: 9.4 },
    { name: 'Austin, TX', base: 88, val: 11.2 },
    { name: 'Dallas, TX', base: 82, val: 13.8 },
    { name: 'Miami, FL', base: 76, val: 15.6 },
    { name: 'Denver, CO', base: 71, val: 14.4 },
  ];

  return (
    <div
      className="w-full max-w-[480px] relative z-[1] rounded-l p-6"
      style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)' }}
    >
      <div className="flex justify-between items-center mb-5 pb-3 border-b border-white/10">
        <div>
          <div className="text-white font-extrabold text-sm" style={{ letterSpacing: '-.01em' }}>Network CPL</div>
          <div className="text-[10px] text-white/40 mt-0.5">Last 30 days · 5 locations</div>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-teal uppercase" style={{ letterSpacing: '.06em' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pu" />
          Live
        </div>
      </div>
      {rows.map((r, i) => {
        const v = +(r.val + Math.sin(tick + i) * 0.4).toFixed(2);
        return (
          <div key={i} className="grid items-center gap-3 mb-3" style={{ gridTemplateColumns: '110px 1fr 56px' }}>
            <div className="text-white text-[12px] font-semibold">{r.name}</div>
            <div className="h-2 rounded overflow-hidden" style={{ background: 'rgba(255,255,255,.06)' }}>
              <div
                className="h-full bg-teal rounded transition-all duration-[1600ms]"
                style={{ width: `${r.base}%`, boxShadow: '0 0 10px rgba(0,190,157,.4)' }}
              />
            </div>
            <div className="text-teal text-[12px] font-extrabold tabular-nums text-right">${v.toFixed(2)}</div>
          </div>
        );
      })}
    </div>
  );
}

/* Demo 2: UGC grid */
function DemoUgcGrid() {
  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPulse(p => (p + 1) % 6), 1400);
    return () => clearInterval(id);
  }, []);

  const tiles = [
    { g: 'linear-gradient(135deg,#00be9d,#1D2637)', city: 'Phoenix' },
    { g: 'linear-gradient(135deg,#667eea,#00be9d)', city: 'Austin' },
    { g: 'linear-gradient(135deg,#fa709a,#00be9d)', city: 'Dallas' },
    { g: 'linear-gradient(135deg,#4facfe,#00be9d)', city: 'Miami' },
    { g: 'linear-gradient(135deg,#f093fb,#00be9d)', city: 'Denver' },
    { g: 'linear-gradient(135deg,#fee140,#00be9d)', city: 'Tampa' },
  ];

  return (
    <div className="w-full max-w-[460px] relative z-[1]">
      <div className="flex justify-between items-center mb-4 px-1">
        <div className="text-white font-extrabold text-sm" style={{ letterSpacing: '-.01em' }}>UGC Library</div>
        <div className="text-[10px] font-bold text-white/45 uppercase" style={{ letterSpacing: '.08em' }}>6 of 142 active</div>
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {tiles.map((t, i) => (
          <div
            key={i}
            className="aspect-[9/13] rounded-[12px] overflow-hidden relative flex flex-col justify-end transition-all duration-500"
            style={{
              background: t.g,
              border: i === pulse ? '2px solid #00BE9D' : '1.5px solid rgba(255,255,255,.15)',
              transform: i === pulse ? 'scale(1.04)' : 'scale(1)',
              boxShadow: i === pulse ? '0 8px 24px rgba(0,190,157,.3)' : '0 4px 12px rgba(0,0,0,.2)',
            }}
          >
            <div className="absolute top-1.5 left-1.5 right-1.5 flex justify-between items-center">
              <div className="text-[8px] font-bold text-white px-1.5 py-0.5 rounded uppercase" style={{ background: 'rgba(0,0,0,.4)', letterSpacing: '.04em' }}>
                {t.city}
              </div>
              {i === pulse && <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pu" />}
            </div>
            {i === pulse && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-white/95 flex items-center justify-center text-dk text-[10px] pl-0.5">▶</div>
              </div>
            )}
            <div className="p-1.5 text-[8px] font-bold text-white flex justify-between" style={{ textShadow: '0 1px 2px rgba(0,0,0,.6)' }}>
              <span>♡ {(10 + i * 1.4).toFixed(1)}K</span>
              <span>↗ {(2 + i * 0.3).toFixed(1)}K</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Demo 3: Insights with KPIs + ticker */
function DemoInsight() {
  const [leads, setLeads] = useState(2847);
  const [cpl, setCpl] = useState(11.4);
  useEffect(() => {
    const id = setInterval(() => {
      setLeads(Math.round(2847 + (Math.random() - 0.5) * 28));
      setCpl(+(11.4 + (Math.random() - 0.5) * 0.5).toFixed(2));
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="w-full max-w-[460px] relative z-[1] rounded-l p-6"
      style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)' }}
    >
      <div className="flex justify-between items-center mb-5 pb-3 border-b border-white/10">
        <div className="text-white font-extrabold text-sm" style={{ letterSpacing: '-.01em' }}>5E Insight Engine</div>
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-teal uppercase" style={{ letterSpacing: '.06em' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pu" />
          Live
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2.5 mb-4">
        <KpiCard label="Total Leads" value={leads.toLocaleString()} delta="▲ 24%" />
        <KpiCard label="Avg CPL" value={`$${cpl.toFixed(2)}`} delta="▼ 31%" />
        <KpiCard label="Show Rate" value="68%" delta="▲ 6%" />
        <KpiCard label="Active Creatives" value="142" delta="8 new" />
      </div>
      <div
        className="flex items-center gap-2 text-white text-xs font-semibold p-3 rounded-[10px]"
        style={{ background: 'rgba(0,190,157,.1)', border: '1px solid rgba(0,190,157,.25)' }}
      >
        <span className="text-teal text-base">✓</span>
        <span>Top creative: UGC-047 outperforming network by 42%</span>
      </div>
    </div>
  );
}

function KpiCard({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div
      className="p-3.5 rounded-[10px]"
      style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)' }}
    >
      <div className="text-[9px] uppercase font-bold text-white/40 mb-1.5" style={{ letterSpacing: '.08em' }}>{label}</div>
      <div className="text-white font-extrabold text-xl tabular-nums leading-none mb-1.5" style={{ letterSpacing: '-.02em' }}>{value}</div>
      <div className="text-teal text-[10px] font-bold">{delta}</div>
    </div>
  );
}
