'use client';

import { useEffect, useState } from 'react';

/**
 * Compact ~120px-tall interactive visual that represents each service.
 * Used on the /services overview page so each card has a unique
 * live mini-mockup, matching the polish of the individual service pages.
 *
 * Keyed by service href so the mapping is single-source-of-truth.
 */
export default function ServiceMiniMockup({ href }: { href: string }) {
  switch (href) {
    case '/paid-ads':
      return <PaidAdsViz />;
    case '/creative-production':
      return <CreativeViz />;
    case '/crm-automations':
      return <CrmViz />;
    case '/email-sms':
      return <EmailSmsViz />;
    case '/reporting-and-analytics':
      return <AnalyticsViz />;
    case '/franchise-growth-systems':
      return <GrowthSystemViz />;
    default:
      return null;
  }
}

const wrapperBase: React.CSSProperties = {
  width: '100%',
  height: 120,
  borderRadius: 12,
  padding: 14,
  border: '1px solid rgba(255,255,255,.08)',
  background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)',
  position: 'relative',
  overflow: 'hidden',
};

/* ============ 1. PAID ADS — per-location CPL bar list ============ */
function PaidAdsViz() {
  const cities = [
    { name: 'Phoenix', w: 92, val: '$9.40' },
    { name: 'Austin', w: 70, val: '$11.20' },
    { name: 'Dallas', w: 58, val: '$13.80' },
  ];
  return (
    <div style={wrapperBase}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">Network CPL</span>
        <span className="text-[9px] text-teal font-semibold">live</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {cities.map((c, i) => (
          <div key={c.name} className="flex items-center gap-2">
            <span className="text-[10px] font-medium text-white/70 w-12">{c.name}</span>
            <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-teal animate-subtlePulse"
                style={{ width: `${c.w}%`, animationDelay: `${i * 0.3}s` }}
              />
            </div>
            <span className="text-[10px] font-bold text-teal w-10 text-right">{c.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ 2. CREATIVE — phone with reel thumbnails ============ */
function CreativeViz() {
  return (
    <div style={{ ...wrapperBase, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
      <div
        className="relative flex items-center justify-center flex-shrink-0"
        style={{
          width: 42,
          height: 70,
          borderRadius: 8,
          background: 'linear-gradient(135deg,#f093fb 0%,#00BE9D 100%)',
          border: '1.5px solid rgba(255,255,255,.15)',
        }}
      >
        <div className="w-4 h-4 rounded-full bg-white/95 flex items-center justify-center">
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: '4px solid transparent',
              borderBottom: '4px solid transparent',
              borderLeft: '6px solid #0F1314',
              marginLeft: 2,
            }}
          />
        </div>
        <div className="absolute bottom-1.5 left-1.5 right-1.5 h-1 bg-white/40 rounded-full overflow-hidden">
          <div className="h-full bg-white animate-pu" style={{ width: '60%' }} />
        </div>
      </div>
      {[
        { from: '#667eea', to: '#764ba2' },
        { from: '#4facfe', to: '#00f2fe' },
        { from: '#fa709a', to: '#fee140' },
      ].map((g, i) => (
        <div
          key={i}
          style={{
            width: 22,
            height: 34,
            borderRadius: 4,
            background: `linear-gradient(135deg,${g.from},${g.to})`,
          }}
        />
      ))}
    </div>
  );
}

/* ============ 3. CRM — kanban with active card pulsing ============ */
function CrmViz() {
  return (
    <div style={wrapperBase}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">Pipeline</span>
        <span className="text-[9px] text-teal font-semibold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pu" /> auto
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { label: 'New', count: 7 },
          { label: 'Booked', count: 4, active: true },
          { label: 'Won', count: 2 },
        ].map((col) => (
          <div
            key={col.label}
            className="rounded-md p-1.5 flex flex-col gap-1"
            style={{ background: col.active ? 'rgba(0,190,157,.1)' : 'rgba(255,255,255,.04)', border: `1px solid ${col.active ? 'rgba(0,190,157,.35)' : 'rgba(255,255,255,.06)'}` }}
          >
            <div className="flex items-center justify-between text-[9px] font-bold">
              <span className={col.active ? 'text-teal' : 'text-white/50'}>{col.label}</span>
              <span className="text-white/40">{col.count}</span>
            </div>
            <div className="h-1 bg-white/10 rounded-full" />
            <div className="h-1 bg-white/10 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ 4. EMAIL/SMS — live notification stack ============ */
function EmailSmsViz() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setTick((t) => t + 1), 2200);
    return () => clearInterval(i);
  }, []);
  const notifs = [
    { icon: 'SMS', tint: '#34c759', text: 'New lead - texted in 3s' },
    { icon: '@', tint: '#00BE9D', text: 'Confirmation sent' },
    { icon: '⏰', tint: '#EF9F27', text: 'Reminder fires in 24h' },
  ];
  return (
    <div style={wrapperBase}>
      <div className="flex flex-col gap-1.5">
        {notifs.map((n, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-md px-2 py-1.5 transition-all"
            style={{
              background: 'rgba(255,255,255,.04)',
              border: '1px solid rgba(255,255,255,.08)',
              opacity: tick % 3 === i ? 1 : 0.55,
              transform: tick % 3 === i ? 'translateX(2px)' : 'translateX(0)',
            }}
          >
            <span
              className="text-[9px] font-extrabold flex-shrink-0 flex items-center justify-center"
              style={{ width: 18, height: 18, borderRadius: 4, background: n.tint, color: '#0F1314' }}
            >
              {n.icon}
            </span>
            <span className="text-[10px] text-white/75 truncate">{n.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ 5. ANALYTICS — animated bar chart ============ */
function AnalyticsViz() {
  const [heights, setHeights] = useState([30, 50, 45, 70, 55, 80, 65, 90]);
  useEffect(() => {
    const i = setInterval(() => {
      setHeights((prev) =>
        prev.map((h) => Math.min(100, Math.max(20, h + (Math.random() - 0.5) * 14))),
      );
    }, 2400);
    return () => clearInterval(i);
  }, []);
  return (
    <div style={wrapperBase}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">Lead Flow</span>
        <span className="text-[10px] font-bold text-teal">▲ 23%</span>
      </div>
      <div className="flex items-end gap-1 h-[58px]">
        {heights.map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-teal rounded-t-[2px] transition-all"
            style={{ height: `${h}%`, opacity: 0.5 + h / 200, transitionDuration: '1.5s' }}
          />
        ))}
      </div>
    </div>
  );
}

/* ============ 6. GROWTH SYSTEMS — connected node grid ============ */
function GrowthSystemViz() {
  const nodes = [
    { x: 20, y: 25, label: 'Ads' },
    { x: 80, y: 25, label: 'UGC' },
    { x: 50, y: 50, label: '5E' },
    { x: 20, y: 75, label: 'CRM' },
    { x: 80, y: 75, label: 'Insights' },
  ];
  return (
    <div style={wrapperBase}>
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
        {/* Lines connecting all nodes to center */}
        {nodes.slice(0, 4).map((n, i) => (
          <line
            key={i}
            x1={n.x}
            y1={n.y}
            x2={50}
            y2={50}
            stroke="rgba(0,190,157,.4)"
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
        ))}
        <line x1={80} y1={75} x2={50} y2={50} stroke="rgba(0,190,157,.4)" strokeWidth="0.5" strokeDasharray="2 2" />
        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={n.label}>
            <circle
              cx={n.x}
              cy={n.y}
              r={i === 2 ? 6 : 4}
              fill={i === 2 ? '#00BE9D' : 'rgba(0,190,157,.25)'}
              stroke={i === 2 ? '#00BE9D' : 'rgba(0,190,157,.6)'}
              strokeWidth="0.4"
              className={i === 2 ? 'animate-pu' : ''}
            />
            <text
              x={n.x}
              y={n.y + (i === 2 ? 1.5 : 0)}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#fff"
              fontSize={i === 2 ? '4' : '3.5'}
              fontWeight="700"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
