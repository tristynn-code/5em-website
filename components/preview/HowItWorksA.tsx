'use client';

import { useEffect, useState } from 'react';

const steps = [
  {
    number: 1,
    title: 'Book Your Free Audit',
    description: '45-minute call where we screen-share your ad accounts and identify 3+ improvements. If we can’t, we send you $100.',
  },
  {
    number: 2,
    title: 'Get Your Custom Plan',
    description: 'We build a hyper-local strategy for every location - custom creative, targeted audiences, and automated follow-up.',
  },
  {
    number: 3,
    title: 'Watch Leads Roll In',
    description: 'Campaigns launch within 2 weeks. Dedicated CSM, real-time dashboard, monthly strategy calls. Results from day one.',
  },
];

/**
 * Variant 3A — Premium step cards.
 * Each card carries a real mini-mockup (calendar, strategy doc, leads dashboard).
 */
export default function HowItWorksA() {
  return (
    <section className="py-[100px] px-6 bg-wh">
      <div className="mx">
        <div className="text-center mb-14">
          <div className="stag inline-block">How It Works</div>
          <h2 className="sttl text-center">From Audit to Results in 3 Steps</h2>
          <p className="ssub mx-auto text-center" style={{ maxWidth: 680 }}>
            No long onboarding. No months of &ldquo;ramp-up.&rdquo; We move fast because franchise owners don&apos;t have time to wait.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1180px] mx-auto">
          {steps.map((s, i) => (
            <div
              key={s.number}
              className="rounded-l border bg-wh overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:border-teal-bd"
              style={{
                borderColor: i === 2 ? 'rgba(0,190,157,.25)' : 'rgba(0,0,0,.07)',
                boxShadow: i === 2 ? '0 12px 40px rgba(0,190,157,.1)' : '0 8px 28px rgba(0,0,0,.04)',
                transition: 'all .3s',
              }}
            >
              {/* Mockup - fixed height so the copy block below aligns across all 3 cards */}
              <div
                className="relative px-6 py-7 flex items-center justify-center overflow-hidden"
                style={{
                  height: 320,
                  background: i === 2
                    ? 'linear-gradient(135deg, #0F1314 0%, #1D2637 100%)'
                    : 'linear-gradient(135deg, #FAFAFA 0%, #F2F2F2 100%)',
                  borderBottom: '1px solid rgba(0,0,0,.06)',
                }}
              >
                <div className="w-full max-h-full flex items-center justify-center">
                  {i === 0 && <MockCalendar />}
                  {i === 1 && <MockStrategyDoc />}
                  {i === 2 && <MockLeadsDash />}
                </div>
              </div>

              {/* Copy */}
              <div className="p-7 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-base font-extrabold flex-shrink-0 ${
                      i === 2 ? 'bg-teal text-dk' : 'bg-teal-bg text-teal border border-teal-bd'
                    }`}
                  >
                    {s.number}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-extrabold text-teal mb-0.5" style={{ letterSpacing: '.12em' }}>
                      Step {s.number}
                    </div>
                    <h3 className="text-lg font-extrabold text-tx leading-tight" style={{ letterSpacing: '-.02em' }}>{s.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-tx-2 leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Step 1: Booking calendar with selected slot */
function MockCalendar() {
  const days = [
    ['M', 'T', 'W', 'T', 'F'],
  ][0];
  const dates = [
    [3, 4, 5, 6, 7],
    [10, 11, 12, 13, 14],
    [17, 18, 19, 20, 21],
  ];
  const SELECTED = '12';

  return (
    <div
      className="w-full max-w-[260px] rounded-[14px] p-4 bg-wh"
      style={{
        border: '1px solid rgba(0,0,0,.07)',
        boxShadow: '0 8px 24px rgba(0,0,0,.06)',
      }}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="text-tx font-extrabold text-xs" style={{ letterSpacing: '-.01em' }}>Book your audit</div>
        <div className="text-[9px] text-teal font-bold uppercase" style={{ letterSpacing: '.08em' }}>June</div>
      </div>
      <div className="grid grid-cols-5 gap-1 mb-1.5">
        {days.map(d => (
          <div key={d} className="text-center text-[9px] font-bold text-tx-3 uppercase">{d}</div>
        ))}
      </div>
      {dates.map((row, ri) => (
        <div key={ri} className="grid grid-cols-5 gap-1 mb-1">
          {row.map(d => {
            const sel = String(d) === SELECTED;
            return (
              <div
                key={d}
                className={`aspect-square rounded-[6px] flex items-center justify-center text-[11px] font-bold transition-all ${
                  sel ? 'bg-teal text-dk' : 'bg-off text-tx hover:bg-teal-bg hover:text-teal'
                }`}
                style={sel ? { boxShadow: '0 4px 12px rgba(0,190,157,.25)' } : undefined}
              >
                {d}
              </div>
            );
          })}
        </div>
      ))}
      <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(0,0,0,.07)' }}>
        <div className="text-[9px] uppercase font-bold text-tx-3 mb-1.5" style={{ letterSpacing: '.08em' }}>Available · Wed Jun 12</div>
        <div className="grid grid-cols-3 gap-1">
          {['10:00', '11:30', '2:00'].map((t, i) => (
            <div
              key={t}
              className={`text-center text-[10px] font-bold py-1.5 rounded-[6px] ${
                i === 1 ? 'bg-teal-bg text-teal border border-teal-bd' : 'bg-off text-tx'
              }`}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Step 2: Strategy doc preview with checked items */
function MockStrategyDoc() {
  const items = [
    { label: 'Phoenix - lookalike from purchases', done: true },
    { label: 'Austin - UGC-047 scaled to $200/d', done: true },
    { label: 'Dallas - new geo radius (3mi)', done: true },
    { label: 'Miami - retarget cart abandons', done: false },
    { label: 'All markets - speed-to-lead SMS', done: false },
  ];
  return (
    <div
      className="w-full max-w-[260px] rounded-[14px] p-4 bg-wh relative"
      style={{
        border: '1px solid rgba(0,0,0,.07)',
        boxShadow: '0 8px 24px rgba(0,0,0,.06)',
      }}
    >
      {/* "doc" header */}
      <div className="flex justify-between items-center mb-3 pb-2.5" style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-7 rounded-[4px] flex items-center justify-center text-[8px] font-extrabold text-white" style={{ background: '#00BE9D' }}>
            5E
          </div>
          <div>
            <div className="text-tx font-extrabold text-[11px]" style={{ letterSpacing: '-.01em' }}>Growth Plan</div>
            <div className="text-tx-3 text-[8px]">Custom · 5 locations</div>
          </div>
        </div>
        <div className="text-[8px] text-teal font-bold uppercase px-1.5 py-0.5 rounded bg-teal-bg" style={{ letterSpacing: '.06em' }}>v1.2</div>
      </div>

      <div className="space-y-1.5">
        {items.map((it, i) => (
          <div key={i} className="flex items-start gap-2">
            <div
              className={`w-3.5 h-3.5 rounded-[4px] flex items-center justify-center text-[8px] font-extrabold flex-shrink-0 mt-0.5 ${
                it.done ? 'bg-teal text-dk' : 'bg-off text-tx-3'
              }`}
              style={{ border: it.done ? '1px solid #00BE9D' : '1px solid rgba(0,0,0,.07)' }}
            >
              {it.done ? '✓' : ''}
            </div>
            <div className={`text-[10px] leading-tight ${it.done ? 'text-tx font-semibold' : 'text-tx-2'}`}>
              {it.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-2.5" style={{ borderTop: '1px solid rgba(0,0,0,.07)' }}>
        <div className="grid grid-cols-3 gap-1.5 text-center">
          <div>
            <div className="text-tx font-extrabold text-sm tabular-nums" style={{ letterSpacing: '-.02em' }}>5</div>
            <div className="text-[8px] text-tx-3 uppercase font-bold" style={{ letterSpacing: '.05em' }}>Markets</div>
          </div>
          <div>
            <div className="text-tx font-extrabold text-sm tabular-nums" style={{ letterSpacing: '-.02em' }}>14</div>
            <div className="text-[8px] text-tx-3 uppercase font-bold" style={{ letterSpacing: '.05em' }}>Tactics</div>
          </div>
          <div>
            <div className="text-teal font-extrabold text-sm tabular-nums" style={{ letterSpacing: '-.02em' }}>14d</div>
            <div className="text-[8px] text-tx-3 uppercase font-bold" style={{ letterSpacing: '.05em' }}>To launch</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Step 3: Live leads dashboard */
function MockLeadsDash() {
  const [leads, setLeads] = useState(2847);
  const [recent, setRecent] = useState([
    { name: 'Sarah M.', city: 'Phoenix', time: '0:47s' },
    { name: 'Marcus T.', city: 'Austin', time: '1:12s' },
    { name: 'Janelle P.', city: 'Dallas', time: '2:38s' },
  ]);

  useEffect(() => {
    const id = setInterval(() => {
      setLeads(l => l + 1);
      setRecent(prev => {
        const names = ['Alex K.', 'Riley B.', 'Jordan F.', 'Drew M.', 'Casey L.', 'Quinn S.'];
        const cities = ['Miami', 'Denver', 'Tampa', 'Phoenix', 'Austin', 'Dallas'];
        const next = {
          name: names[Math.floor(Math.random() * names.length)],
          city: cities[Math.floor(Math.random() * cities.length)],
          time: `${Math.floor(Math.random() * 3)}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}s`,
        };
        return [next, prev[0], prev[1]];
      });
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="w-full max-w-[260px] rounded-[14px] p-4 relative overflow-hidden"
      style={{
        background: 'rgba(255,255,255,.04)',
        border: '1px solid rgba(255,255,255,.12)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="flex justify-between items-center mb-3 pb-2.5 border-b border-white/10">
        <div>
          <div className="text-white font-extrabold text-[11px]" style={{ letterSpacing: '-.01em' }}>Leads / Today</div>
          <div className="text-teal font-extrabold text-xl tabular-nums leading-none mt-1" style={{ letterSpacing: '-.02em' }}>
            {leads.toLocaleString()}
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-bold text-teal uppercase" style={{ letterSpacing: '.06em' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pu" />
          Live
        </div>
      </div>
      <div className="text-[8px] uppercase font-bold text-white/40 mb-1.5" style={{ letterSpacing: '.1em' }}>Recent inbound</div>
      <div className="space-y-1.5">
        {recent.map((r, i) => (
          <div
            key={`${r.name}-${i}`}
            className="flex items-center gap-2 p-1.5 rounded-[6px] transition-all"
            style={{
              background: i === 0 ? 'rgba(0,190,157,.12)' : 'rgba(255,255,255,.03)',
              border: i === 0 ? '1px solid rgba(0,190,157,.25)' : '1px solid rgba(255,255,255,.05)',
              opacity: 1 - i * 0.25,
            }}
          >
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-extrabold flex-shrink-0" style={{ background: 'linear-gradient(135deg,#00be9d,#1D2637)', color: '#fff' }}>
              {r.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-[10px] font-bold leading-tight truncate">{r.name}</div>
              <div className="text-white/50 text-[8px] truncate">{r.city}</div>
            </div>
            <div className="text-teal text-[9px] font-extrabold tabular-nums">{r.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
