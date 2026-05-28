'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: 1,
    title: 'Book Your Free Audit',
    description: '45-minute call where we screen-share your ad accounts and identify 3+ improvements. If we can’t, we send you $100.',
    badge: 'Day 0',
    cta: 'Audit booked',
    icon: 'cal',
  },
  {
    number: 2,
    title: 'Get Your Custom Plan',
    description: 'We build a hyper-local strategy for every location - custom creative, targeted audiences, and automated follow-up.',
    badge: 'Days 1-7',
    cta: 'Plan delivered',
    icon: 'doc',
  },
  {
    number: 3,
    title: 'Watch Leads Roll In',
    description: 'Campaigns launch within 2 weeks. Dedicated CSM, real-time dashboard, monthly strategy calls. Results from day one.',
    badge: 'Day 14+',
    cta: 'Leads flowing',
    icon: 'chart',
  },
];

/**
 * Variant 3B — Vertical timeline / journey.
 * Animated progress line that fills as user scrolls; each step has badge, icon, mini-mockup, and an active "ping" indicator.
 */
export default function HowItWorksB() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Begin filling when top of container enters viewport, finish when bottom passes top of viewport
      const start = vh * 0.85;
      const end = -rect.height + vh * 0.3;
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, raw));
      setProgress(clamped);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

        <div ref={containerRef} className="relative max-w-[920px] mx-auto">
          {/* Vertical track */}
          <div
            className="absolute left-7 md:left-1/2 top-2 bottom-2 w-[3px] -translate-x-1/2 rounded-full"
            style={{ background: 'rgba(0,0,0,.06)' }}
          />
          {/* Filled progress */}
          <div
            className="absolute left-7 md:left-1/2 top-2 w-[3px] -translate-x-1/2 rounded-full transition-all duration-200"
            style={{
              height: `calc(${progress * 100}% - 4px)`,
              background: 'linear-gradient(180deg, #00BE9D, #00D4AE)',
              boxShadow: '0 0 12px rgba(0,190,157,.4)',
            }}
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {steps.map((s, i) => {
              const localProgress = Math.max(0, Math.min(1, (progress - i / steps.length) * steps.length));
              const reached = localProgress > 0.1;
              const completed = localProgress > 0.6;
              const side = i % 2 === 0 ? 'left' : 'right';
              return (
                <div key={s.number} className="relative grid md:grid-cols-2 gap-6 items-center">
                  {/* Dot */}
                  <div
                    className="absolute left-7 md:left-1/2 top-8 -translate-x-1/2 z-[2] flex items-center justify-center transition-all duration-500"
                    style={{
                      width: reached ? 36 : 28,
                      height: reached ? 36 : 28,
                      borderRadius: '50%',
                      background: completed ? '#00BE9D' : reached ? '#fff' : '#fff',
                      border: reached ? '3px solid #00BE9D' : '3px solid rgba(0,0,0,.1)',
                      boxShadow: reached ? '0 0 0 6px rgba(0,190,157,.15), 0 6px 18px rgba(0,190,157,.25)' : 'none',
                    }}
                  >
                    {completed && <span className="text-dk text-xs font-extrabold">✓</span>}
                    {reached && !completed && <span className="text-teal text-xs font-extrabold">{s.number}</span>}
                  </div>

                  {/* Card */}
                  <div
                    className={`pl-20 md:pl-0 ${side === 'right' ? 'md:col-start-2' : ''}`}
                    style={{ paddingLeft: undefined }}
                  >
                    <div
                      className="rounded-l p-7 transition-all"
                      style={{
                        background: reached ? '#fff' : '#fff',
                        border: reached ? '1px solid rgba(0,190,157,.25)' : '1px solid rgba(0,0,0,.07)',
                        boxShadow: reached ? '0 12px 36px rgba(0,190,157,.12)' : '0 6px 20px rgba(0,0,0,.04)',
                      }}
                    >
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div
                          className={`px-2.5 py-1 rounded-full text-[10px] uppercase font-extrabold ${
                            reached ? 'bg-teal text-dk' : 'bg-teal-bg text-teal border border-teal-bd'
                          }`}
                          style={{ letterSpacing: '.08em' }}
                        >
                          {s.badge}
                        </div>
                        {completed && (
                          <div className="flex items-center gap-1.5 text-teal text-[10px] font-bold uppercase" style={{ letterSpacing: '.06em' }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pu" />
                            {s.cta}
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-extrabold text-tx leading-tight mb-2" style={{ letterSpacing: '-.02em' }}>{s.title}</h3>
                      <p className="text-sm text-tx-2 leading-relaxed mb-4">{s.description}</p>
                      {/* Mini mockup row */}
                      <div className="pt-4" style={{ borderTop: '1px solid rgba(0,0,0,.05)' }}>
                        {s.icon === 'cal' && <MiniCal />}
                        {s.icon === 'doc' && <MiniDoc />}
                        {s.icon === 'chart' && <MiniChart active={completed} />}
                      </div>
                    </div>
                  </div>

                  {/* Spacer column to keep alternating layout */}
                  <div className={`hidden md:block ${side === 'right' ? 'md:col-start-1 md:row-start-1' : ''}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniCal() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1 flex-1">
        {[3, 4, 5, 6, 7].map(d => (
          <div
            key={d}
            className={`flex-1 aspect-square rounded-[6px] flex items-center justify-center text-[11px] font-bold ${
              d === 5 ? 'bg-teal text-dk' : 'bg-off text-tx-2'
            }`}
            style={d === 5 ? { boxShadow: '0 4px 10px rgba(0,190,157,.25)' } : undefined}
          >
            {d}
          </div>
        ))}
      </div>
      <div className="text-[10px] text-tx-3 font-bold uppercase whitespace-nowrap" style={{ letterSpacing: '.06em' }}>11:30 AM</div>
    </div>
  );
}

function MiniDoc() {
  const items = [
    { label: 'Audience audit', done: true },
    { label: 'Creative library spec', done: true },
    { label: 'Tracking + dashboard', done: true },
    { label: 'Launch calendar', done: false },
  ];
  return (
    <div className="space-y-1.5">
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className={`w-3.5 h-3.5 rounded-[4px] flex items-center justify-center text-[8px] font-extrabold ${
              it.done ? 'bg-teal text-dk' : 'bg-off text-tx-3'
            }`}
            style={{ border: it.done ? '1px solid #00BE9D' : '1px solid rgba(0,0,0,.07)' }}
          >
            {it.done ? '✓' : ''}
          </div>
          <div className={`text-[11px] ${it.done ? 'text-tx font-semibold' : 'text-tx-2'}`}>{it.label}</div>
        </div>
      ))}
    </div>
  );
}

function MiniChart({ active }: { active: boolean }) {
  const baseHeights = [22, 30, 28, 42, 50, 58, 68, 78, 88];
  const [heights, setHeights] = useState<number[]>(baseHeights);

  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setHeights(prev => prev.map(h => Math.min(98, Math.max(20, h + (Math.random() - 0.4) * 5))));
    }, 1800);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div className="flex items-end gap-1 h-12">
      {heights.map((h, i) => (
        <div
          key={i}
          className="flex-1 bg-teal rounded-t-[2px] transition-all duration-[1200ms]"
          style={{
            height: active ? `${h}%` : '12%',
            opacity: 0.55 + (h / 100) * 0.45,
            boxShadow: i === heights.length - 1 && active ? '0 0 10px rgba(0,190,157,.5)' : undefined,
          }}
        />
      ))}
    </div>
  );
}
