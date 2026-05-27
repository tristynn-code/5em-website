import type { Metadata } from 'next';
import { auditCTA } from '@/lib/site';
import ServicePageLayout from '@/components/ServicePageLayout';
import data from '@/content/services/franchise-growth-systems.json';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Franchise Growth Systems | Complete Lead Engine for Multi-Location Brands',
  description:
    'The complete franchise growth system: paid ads, UGC creative, CRM automation, dashboards, and dedicated CSM support. One integrated engine built for multi-location franchise brands.',
  path: '/franchise-growth-systems',
  keywords: ['franchise growth system', 'multi-location marketing engine', 'integrated franchise marketing', 'franchise lead engine', 'full-stack franchise marketing'],
});

const serviceLd = serviceSchema({
  name: 'Franchise Growth Systems',
  description:
    'Complete integrated franchise marketing engine: paid ads, UGC creative, CRM automation, dashboards, and dedicated CSM.',
  path: '/franchise-growth-systems',
  serviceType: 'Integrated Franchise Marketing System',
});

function HeroSystemGrid() {
  const cells = [
    { icon: '🎯', name: 'Paid Ads' },
    { icon: '🎥', name: 'UGC Creative' },
    { icon: '⚡', name: 'CRM' },
    { icon: '📧', name: 'Email & SMS' },
    { icon: '📈', name: 'Dashboards' },
    { icon: '👥', name: 'CSM Support' },
  ];
  return (
    <div
      className="w-full"
      style={{
        maxWidth: 420,
        background: 'rgba(255,255,255,.04)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 16,
        padding: 22,
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="text-white font-extrabold text-sm" style={{ letterSpacing: '-.01em', marginBottom: 2 }}>
        Franchise Lead Engine
      </div>
      <div
        className="font-semibold mb-4 pb-3.5"
        style={{
          fontSize: 11,
          color: 'rgba(255,255,255,.55)',
          borderBottom: '1px solid rgba(255,255,255,.08)',
        }}
      >
        All 6 systems running
      </div>
      <div className="grid grid-cols-3 gap-2">
        {cells.map((c, i) => (
          <div
            key={i}
            className="text-center"
            style={{
              padding: '12px 8px',
              background: 'rgba(255,255,255,.03)',
              border: '1px solid rgba(255,255,255,.06)',
              borderRadius: 10,
            }}
          >
            <div className="text-teal mb-1.5" style={{ fontSize: 18 }}>
              {c.icon}
            </div>
            <div
              className="text-white font-extrabold mb-1.5"
              style={{ fontSize: 10, letterSpacing: '-.01em', lineHeight: 1.1 }}
            >
              {c.name}
            </div>
            <div
              className="flex items-center justify-center gap-1 text-teal font-bold uppercase"
              style={{ fontSize: 9, letterSpacing: '.03em' }}
            >
              <span className="w-1 h-1 rounded-full bg-teal animate-pu" /> Active
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PillarCards() {
  return (
    <div className="mx-auto" style={{ maxWidth: 1040, padding: '0 4px', margin: '56px auto 0' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.pillars.map((p, i) => {
          const viz = renderPillarViz(i);
          return (
            <div
              key={i}
              className="bg-wh overflow-hidden transition-all relative hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,.08)]"
              style={{
                border: '1px solid rgba(0,0,0,.07)',
                borderRadius: 14,
              }}
            >
              <div
                className="flex items-center justify-center p-4 relative overflow-hidden"
                style={{
                  height: 140,
                  background: 'linear-gradient(135deg,#0f1314 0%,#141b1d 100%)',
                  borderBottom: '1px solid rgba(0,0,0,.07)',
                }}
              >
                {viz}
              </div>
              <div className="p-5">
                <div
                  className="text-teal font-extrabold uppercase mb-2"
                  style={{ fontSize: 10, letterSpacing: '.14em' }}
                >
                  {p.eb}
                </div>
                <div
                  className="text-tx font-extrabold mb-2"
                  style={{ fontSize: 18, letterSpacing: '-.02em', lineHeight: 1.2 }}
                >
                  {p.title}
                </div>
                <div className="text-tx-2 font-medium" style={{ fontSize: 13, lineHeight: 1.5 }}>
                  {p.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function renderPillarViz(i: number) {
  if (i === 0) {
    // Paid Ads chart
    return (
      <div className="flex flex-col w-full gap-2">
        <div className="flex gap-1.5">
          <div
            className="flex items-center gap-1.5 text-teal font-extrabold uppercase"
            style={{
              padding: '4px 9px',
              background: 'rgba(0,190,157,.12)',
              border: '1px solid rgba(0,190,157,.3)',
              borderRadius: 20,
              fontSize: 9,
              letterSpacing: '.04em',
            }}
          >
            Meta <span className="w-1 h-1 rounded-full bg-teal animate-pu" />
          </div>
          <div
            className="flex items-center gap-1.5 uppercase"
            style={{
              padding: '4px 9px',
              background: 'rgba(255,255,255,.04)',
              border: '1px solid rgba(255,255,255,.08)',
              borderRadius: 20,
              fontSize: 9,
              fontWeight: 800,
              color: 'rgba(255,255,255,.55)',
              letterSpacing: '.04em',
            }}
          >
            Google <span className="w-1 h-1 rounded-full" style={{ background: 'rgba(255,255,255,.2)' }} />
          </div>
        </div>
        <div className="flex-1" style={{ minHeight: 36 }}>
          <svg viewBox="0 0 160 48" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
            <defs>
              <linearGradient id="pvag-gs" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00BE9D" stopOpacity=".45" />
                <stop offset="100%" stopColor="#00BE9D" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,38 L16,34 L32,30 L48,32 L64,22 L80,18 L96,20 L112,12 L128,8 L144,10 L160,4 L160,48 L0,48 Z"
              fill="url(#pvag-gs)"
            />
            <path
              d="M0,38 L16,34 L32,30 L48,32 L64,22 L80,18 L96,20 L112,12 L128,8 L144,10 L160,4"
              fill="none"
              stroke="#00BE9D"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <circle cx="160" cy="4" r="3" fill="#00BE9D" />
          </svg>
        </div>
        <div
          className="flex items-center gap-2.5 pt-1"
          style={{ borderTop: '1px solid rgba(255,255,255,.06)' }}
        >
          {[
            { val: '$12.40', lbl: 'CPL' },
            { val: '4.8%', lbl: 'CTR' },
            { val: '↑ 23%', lbl: 'MoM', teal: true },
          ].map((m, j) => (
            <div key={j} className="flex-1 pt-1.5">
              <div
                className="font-extrabold leading-none tabular-nums"
                style={{
                  fontSize: 13,
                  letterSpacing: '-.02em',
                  color: m.teal ? '#00BE9D' : '#fff',
                  fontFamily: "'JetBrains Mono','SF Mono',Consolas,monospace",
                }}
              >
                {m.val}
              </div>
              <div
                className="font-extrabold uppercase mt-1"
                style={{
                  fontSize: 8,
                  color: 'rgba(255,255,255,.45)',
                  letterSpacing: '.14em',
                }}
              >
                {m.lbl}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (i === 1) {
    // Creative phone
    return (
      <div className="flex flex-row gap-3.5 items-center justify-center">
        <div
          className="relative flex-shrink-0 overflow-hidden"
          style={{
            width: 58,
            height: 90,
            borderRadius: 10,
            background: 'linear-gradient(180deg,#1a1f21 0%,#0f1314 100%)',
            border: '2px solid rgba(255,255,255,.12)',
            boxShadow: '0 6px 20px rgba(0,0,0,.4)',
          }}
        >
          <div
            className="absolute flex justify-center items-center z-[3]"
            style={{ top: 0, left: 0, right: 0, height: 10, background: '#0a0c0d' }}
          >
            <div style={{ width: 20, height: 3, borderRadius: 2, background: 'rgba(255,255,255,.25)' }} />
          </div>
          <div
            className="absolute"
            style={{
              top: 10,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg,#f093fb 0%,#f5576c 50%,#00BE9D 100%)',
              opacity: 0.75,
            }}
          />
          <div
            className="absolute z-[2] flex items-center justify-center rounded-full"
            style={{
              top: '45%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: 22,
              height: 22,
              background: 'rgba(255,255,255,.95)',
              color: '#0f1314',
              fontSize: 8,
              paddingLeft: 2,
              boxShadow: '0 2px 8px rgba(0,0,0,.3)',
            }}
          >
            ▶
          </div>
          <div
            className="absolute z-[2] flex flex-col"
            style={{ bottom: 14, left: 4, right: 4, gap: 2 }}
          >
            <div className="text-white font-extrabold" style={{ fontSize: 7, letterSpacing: '-.02em', textShadow: '0 1px 2px rgba(0,0,0,.6)' }}>
              @body20_austin
            </div>
            <div className="font-bold" style={{ fontSize: 6, color: 'rgba(255,255,255,.9)', letterSpacing: '.02em', textShadow: '0 1px 2px rgba(0,0,0,.6)' }}>
              ❤ 2.4K
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 items-center">
          {['linear-gradient(135deg,#667eea,#764ba2)', 'linear-gradient(135deg,#4facfe,#00f2fe)', 'linear-gradient(135deg,#43e97b,#38f9d7)'].map((bg, j) => (
            <div
              key={j}
              style={{
                width: 28,
                height: 22,
                borderRadius: 3,
                background: bg,
                border: '1px solid rgba(255,255,255,.15)',
                boxShadow: '0 2px 6px rgba(0,0,0,.3)',
              }}
            />
          ))}
          <div
            className="text-teal font-extrabold"
            style={{
              fontSize: 9,
              letterSpacing: '.04em',
              padding: '2px 6px',
              background: 'rgba(0,190,157,.1)',
              border: '1px solid rgba(0,190,157,.25)',
              borderRadius: 4,
              fontFamily: "'JetBrains Mono','SF Mono',Consolas,monospace",
            }}
          >
            +9
          </div>
        </div>
      </div>
    );
  }
  if (i === 2) {
    // CRM stack
    const rows = [
      { icon: '⚡', time: '0.8s', teal: false },
      { icon: '🔔', time: '2.1s', teal: true },
      { icon: '✓', time: '4.4s', teal: true },
    ];
    return (
      <div className="flex flex-col gap-2.5 w-full" style={{ maxWidth: 220 }}>
        {rows.map((r, j) => (
          <div key={j} className="flex items-center gap-2.5">
            <div
              className="rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                width: 24,
                height: 24,
                background: r.teal ? 'rgba(0,190,157,.15)' : 'rgba(255,255,255,.08)',
                border: r.teal ? '1px solid rgba(0,190,157,.5)' : '1px solid rgba(255,255,255,.15)',
                color: r.teal ? '#00BE9D' : 'rgba(255,255,255,.7)',
                fontSize: 11,
              }}
            >
              {r.icon}
            </div>
            <div
              className="flex-1 rounded"
              style={{ height: 2, background: r.teal ? '#00BE9D' : 'rgba(255,255,255,.1)' }}
            />
            <div
              className="text-teal font-extrabold tabular-nums text-right"
              style={{
                fontSize: 10,
                letterSpacing: '-.01em',
                minWidth: 30,
                fontFamily: "'JetBrains Mono','SF Mono',Consolas,monospace",
              }}
            >
              {r.time}
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (i === 3) {
    // Email message stack
    return (
      <div className="flex flex-col w-full">
        {[
          { icon: '📱', bg: '#34c759', barWidth: '100%' },
          { icon: '✉', bg: '#00BE9D', color: '#0F1314', barWidth: '65%' },
          { icon: '⏰', bg: '#EF9F27', barWidth: '35%' },
        ].map((m, j) => (
          <div
            key={j}
            className="flex items-center gap-2.5 mb-2"
            style={{ maxWidth: 220 }}
          >
            <div
              className="rounded flex items-center justify-center flex-shrink-0 text-white"
              style={{
                width: 26,
                height: 26,
                background: m.bg,
                color: m.color || '#fff',
                fontSize: 12,
              }}
            >
              {m.icon}
            </div>
            <div
              className="flex-1 rounded relative overflow-hidden"
              style={{ height: 10, background: 'rgba(255,255,255,.08)' }}
            >
              <div
                className="absolute top-0 left-0 h-full rounded"
                style={{
                  width: m.barWidth,
                  background: 'linear-gradient(90deg,rgba(0,190,157,.3),rgba(0,190,157,.1))',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (i === 4) {
    // Insights
    return (
      <div className="flex flex-col gap-2.5 w-full" style={{ padding: 18 }}>
        <div className="flex gap-3.5 w-full justify-around">
          {[
            { val: '847', lbl: 'Leads' },
            { val: '$14', lbl: 'CPL' },
            { val: '72%', lbl: 'Show' },
          ].map((k, j) => (
            <div key={j} className="text-center">
              <div className="text-white font-extrabold tabular-nums leading-none" style={{ fontSize: 16, letterSpacing: '-.02em' }}>
                {k.val}
              </div>
              <div
                className="font-extrabold uppercase mt-1"
                style={{
                  fontSize: 8,
                  color: 'rgba(255,255,255,.5)',
                  letterSpacing: '.14em',
                }}
              >
                {k.lbl}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-end gap-1 w-full" style={{ height: 40 }}>
          {[40, 55, 45, 70, 60, 85, 95].map((h, j) => (
            <div
              key={j}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                background: j === 6 ? '#00BE9D' : 'rgba(0,190,157,.25)',
                boxShadow: j === 6 ? '0 0 12px rgba(0,190,157,.5)' : undefined,
                minHeight: 6,
              }}
            />
          ))}
        </div>
      </div>
    );
  }
  // i === 5 — CSM
  return (
    <div className="flex flex-row gap-2.5 items-start justify-start w-full" style={{ padding: 16 }}>
      <div
        className="rounded-full flex items-center justify-center flex-shrink-0 font-extrabold"
        style={{
          width: 28,
          height: 28,
          background: '#00BE9D',
          color: '#0F1314',
          fontSize: 12,
          marginTop: 14,
        }}
      >
        J
      </div>
      <div className="flex-1 min-w-0 flex flex-col gap-1.5">
        <div
          className="font-extrabold"
          style={{ fontSize: 10, color: 'rgba(255,255,255,.7)', letterSpacing: '.02em' }}
        >
          Justin · Your CSM
        </div>
        <div
          style={{
            fontSize: 10,
            color: 'rgba(255,255,255,.9)',
            background: 'rgba(255,255,255,.08)',
            border: '1px solid rgba(255,255,255,.1)',
            borderRadius: '10px 10px 10px 2px',
            padding: '7px 10px',
            lineHeight: 1.4,
          }}
        >
          Austin North just hit a new monthly record. Sending recap now.
        </div>
        <div
          className="inline-flex gap-1 self-start"
          style={{
            padding: '6px 10px',
            background: 'rgba(255,255,255,.06)',
            borderRadius: 10,
          }}
        >
          {[0, 1, 2].map(d => (
            <span
              key={d}
              className="rounded-full inline-block"
              style={{
                width: 5,
                height: 5,
                background: 'rgba(255,255,255,.5)',
                animation: `pu 1.4s ease-in-out ${d * 0.15}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============ Stage system mockups (per feature) ============ */
function StageWrap({ children, icon, title, badge }: { children: React.ReactNode; icon: string; title: string; badge: string }) {
  return (
    <div
      className="w-full bg-wh relative"
      style={{
        maxWidth: 400,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 22,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div
        className="flex items-center gap-2.5 mb-4 pb-3.5"
        style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        <div
          className="rounded-lg flex items-center justify-center flex-shrink-0 text-teal"
          style={{
            width: 36,
            height: 36,
            background: 'rgba(0,190,157,.06)',
            border: '1px solid rgba(0,190,157,.15)',
            fontSize: 18,
          }}
        >
          {icon}
        </div>
        <div className="flex-1 text-tx font-extrabold text-[13px]" style={{ letterSpacing: '-.01em' }}>
          {title}
        </div>
        <div
          className="flex items-center gap-1.5 text-teal font-bold uppercase"
          style={{ fontSize: 10, letterSpacing: '.04em' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pu" /> {badge}
        </div>
      </div>
      {children}
    </div>
  );
}

function StageAds() {
  return (
    <StageWrap icon="🎯" title="Paid Ads" badge="Running">
      <div
        className="mb-2.5"
        style={{
          padding: 14,
          background: '#F7F7F7',
          border: '1px solid rgba(0,0,0,.07)',
          borderRadius: 10,
        }}
      >
        <div
          className="text-tx-3 font-bold uppercase"
          style={{ fontSize: 10, letterSpacing: '.04em' }}
        >
          Leads this month
        </div>
        <div className="text-tx font-extrabold" style={{ fontSize: 28, letterSpacing: '-.03em', lineHeight: 1, marginTop: 4 }}>
          847
        </div>
        <div className="text-teal font-bold mt-1" style={{ fontSize: 11 }}>
          ↑ 23% vs last month
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        {[
          { name: 'Meta', val: '$11.20 CPL' },
          { name: 'Google', val: '$16.40 CPL' },
        ].map((p, i) => (
          <div
            key={i}
            className="flex justify-between items-center"
            style={{
              padding: '8px 12px',
              background: 'rgba(0,190,157,.06)',
              border: '1px solid rgba(0,190,157,.15)',
              borderRadius: 8,
            }}
          >
            <span className="text-tx font-extrabold" style={{ fontSize: 11, letterSpacing: '-.01em' }}>
              {p.name}
            </span>
            <span className="text-teal font-bold" style={{ fontSize: 11 }}>
              {p.val}
            </span>
          </div>
        ))}
      </div>
    </StageWrap>
  );
}

function StageCreative() {
  return (
    <StageWrap icon="🎥" title="UGC Creative Engine" badge="Shipping">
      <div className="grid grid-cols-4 gap-1.5 mb-2.5">
        {[
          { bg: 'linear-gradient(135deg,#667eea,#764ba2)', name: 'Sarah intro' },
          { bg: 'linear-gradient(135deg,#f093fb,#f5576c)', name: 'Jake tour' },
          { bg: 'linear-gradient(135deg,#4facfe,#00f2fe)', name: 'Studio life' },
          { bg: 'linear-gradient(135deg,#43e97b,#38f9d7)', name: 'Member win' },
        ].map((c, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div
              style={{
                aspectRatio: '9/14',
                borderRadius: 6,
                background: c.bg,
              }}
            />
            <div
              className="text-tx-3 font-bold text-center uppercase"
              style={{ fontSize: 8, letterSpacing: '.02em' }}
            >
              {c.name}
            </div>
          </div>
        ))}
      </div>
      <div
        className="text-tx-3 text-center font-semibold pt-2.5"
        style={{ fontSize: 11, borderTop: '1px solid rgba(0,0,0,.07)' }}
      >
        Shipping 3-4 new clips · every 2 weeks
      </div>
    </StageWrap>
  );
}

function StageCRM() {
  const steps = [
    { num: '1', text: 'Lead submits form', good: false },
    { num: '2', text: 'Routed to location · 2s', good: true },
    { num: '3', text: 'Team notified · 4s', good: true },
    { num: '4', text: 'Pipeline updated · 5s', good: true },
  ];
  return (
    <StageWrap icon="⚡" title="CRM & Automations" badge="Live">
      <div className="flex flex-col gap-0">
        {steps.map((s, i) => (
          <div key={i}>
            <div
              className="flex items-center gap-2.5"
              style={{
                padding: '8px 12px',
                background: s.good ? 'rgba(0,190,157,.06)' : '#F7F7F7',
                border: s.good ? '1px solid rgba(0,190,157,.15)' : '1px solid rgba(0,0,0,.07)',
                borderRadius: 8,
              }}
            >
              <div
                className="rounded-full flex items-center justify-center font-extrabold flex-shrink-0"
                style={{
                  width: 22,
                  height: 22,
                  background: s.good ? '#00BE9D' : '#fff',
                  color: s.good ? '#0F1314' : '#1a1a1a',
                  border: s.good ? '1px solid #00BE9D' : '1px solid rgba(0,0,0,.07)',
                  fontSize: 11,
                }}
              >
                {s.num}
              </div>
              <div className="text-tx font-bold" style={{ fontSize: 11, letterSpacing: '-.01em' }}>
                {s.text}
              </div>
            </div>
            {i < steps.length - 1 && <div className="w-0.5 h-2 ml-[22px] bg-bd" />}
          </div>
        ))}
      </div>
    </StageWrap>
  );
}

function StageEmail() {
  const rows = [
    { name: 'New Lead Confirmation', meta: '847 sent · 94% open' },
    { name: '24h Appointment Reminder', meta: '624 sent · 89% open' },
    { name: 'No-Show Recovery', meta: '87 sent · 42% recovered' },
    { name: 'Review Request', meta: '412 sent · 48 reviews' },
  ];
  return (
    <StageWrap icon="📧" title="Email & SMS Nurture" badge="Sending">
      <div className="flex flex-col gap-1.5">
        {rows.map((r, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5"
            style={{
              padding: '8px 12px',
              background: 'rgba(0,190,157,.06)',
              border: '1px solid rgba(0,190,157,.15)',
              borderRadius: 8,
            }}
          >
            <div className="w-2 h-2 rounded-full bg-teal animate-pu flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-tx font-extrabold leading-tight" style={{ fontSize: 11, letterSpacing: '-.01em' }}>
                {r.name}
              </div>
              <div className="text-tx-3 font-semibold mt-0.5" style={{ fontSize: 10 }}>
                {r.meta}
              </div>
            </div>
          </div>
        ))}
      </div>
    </StageWrap>
  );
}

function StageInsights() {
  return (
    <StageWrap icon="📈" title="5E Insight Engine" badge="Live">
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { lbl: 'Leads', val: '847' },
          { lbl: 'CPL', val: '$14.20' },
          { lbl: 'Show', val: '72%' },
        ].map((k, i) => (
          <div
            key={i}
            className="text-center"
            style={{
              padding: 10,
              background: 'rgba(0,190,157,.06)',
              border: '1px solid rgba(0,190,157,.15)',
              borderRadius: 8,
            }}
          >
            <div
              className="text-tx-3 font-bold uppercase"
              style={{ fontSize: 9, letterSpacing: '.04em' }}
            >
              {k.lbl}
            </div>
            <div
              className="text-teal font-extrabold mt-1"
              style={{ fontSize: 16, letterSpacing: '-.02em', lineHeight: 1 }}
            >
              {k.val}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          padding: 8,
          background: '#F7F7F7',
          border: '1px solid rgba(0,0,0,.07)',
          borderRadius: 8,
        }}
      >
        <svg viewBox="0 0 240 50" preserveAspectRatio="none" style={{ width: '100%', height: 50 }}>
          <defs>
            <linearGradient id="sig-gs" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#00BE9D" stopOpacity=".35" />
              <stop offset="100%" stopColor="#00BE9D" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,40 L20,36 L40,38 L60,30 L80,26 L100,22 L120,24 L140,16 L160,12 L180,14 L200,8 L220,5 L240,3 L240,50 L0,50 Z"
            fill="url(#sig-gs)"
          />
          <path
            d="M0,40 L20,36 L40,38 L60,30 L80,26 L100,22 L120,24 L140,16 L160,12 L180,14 L200,8 L220,5 L240,3"
            fill="none"
            stroke="#00BE9D"
            strokeWidth="2"
          />
        </svg>
      </div>
    </StageWrap>
  );
}

function StageCSM() {
  return (
    <StageWrap icon="👥" title="Dedicated CSM" badge="Online">
      <div
        className="flex items-center gap-3 mb-3"
        style={{
          padding: 12,
          background: 'rgba(0,190,157,.06)',
          border: '1px solid rgba(0,190,157,.15)',
          borderRadius: 10,
        }}
      >
        <div
          className="rounded-full flex items-center justify-center font-extrabold flex-shrink-0"
          style={{
            width: 44,
            height: 44,
            background: '#00BE9D',
            color: '#0F1314',
            fontSize: 18,
            letterSpacing: '-.02em',
          }}
        >
          J
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-tx font-extrabold" style={{ fontSize: 13, letterSpacing: '-.01em' }}>
            Justin M.
          </div>
          <div className="text-tx-3 font-semibold mt-0.5" style={{ fontSize: 11 }}>
            Your dedicated CSM
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        {[
          { icon: '📅', text: 'Monthly strategy call' },
          { icon: '📹', text: 'Personalized Loom recaps' },
          { icon: '💬', text: 'Slack + AI real-time support' },
          { icon: '📈', text: 'Performance reviews & planning' },
        ].map((it, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5"
            style={{
              padding: '8px 12px',
              background: '#F7F7F7',
              border: '1px solid rgba(0,0,0,.07)',
              borderRadius: 8,
            }}
          >
            <span className="flex-shrink-0" style={{ fontSize: 14 }}>
              {it.icon}
            </span>
            <span className="text-tx font-bold" style={{ fontSize: 11, letterSpacing: '-.01em' }}>
              {it.text}
            </span>
          </div>
        ))}
      </div>
    </StageWrap>
  );
}

function ClosingDark() {
  return (
    <section
      className="text-white"
      style={{ padding: '120px 24px', background: '#0F1314' }}
    >
      <div className="mx max-w-mx mx-auto text-center" style={{ maxWidth: 780 }}>
        <div className="stag inline-block" style={{ color: '#00BE9D' }}>
          All Six Systems. One Engine.
        </div>
        <h2
          className="font-extrabold text-white"
          style={{
            fontSize: 'clamp(32px,5vw,52px)',
            letterSpacing: '-.03em',
            lineHeight: 1.05,
            margin: '14px 0 20px',
          }}
        >
          This is what a Franchise Lead Engine looks like when it&apos;s actually built right.
        </h2>
        <p
          className="mb-9"
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: 'rgba(255,255,255,.7)',
          }}
        >
          Every piece connected. Every lead tracked. Every franchisee supported. Installed once, managed forever, scaled across every location. No more stitching together five vendors. No more dashboards that don&apos;t talk to each other. One team. One system. One outcome.
        </p>
        <a href={auditCTA.href} className="bp bpl">
          Book Your Free Audit →
        </a>
      </div>
    </section>
  );
}

export default function FranchiseGrowthSystemsPage() {
  const visuals = [
    <StageAds key="0" />,
    <StageCreative key="1" />,
    <StageCRM key="2" />,
    <StageEmail key="3" />,
    <StageInsights key="4" />,
    <StageCSM key="5" />,
  ];
  const features = data.features.map((f, i) => ({ ...f, visual: visuals[i] }));

  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/franchise-growth-systems' },
          { name: 'Franchise Growth Systems', path: '/franchise-growth-systems' },
        ])}
      />
      <ServicePageLayout
        hero={{
          eyebrow: data.hero.eyebrow,
          headline: (
            <>
              One Integrated System.<br />
              <em className="not-italic text-teal">Every Piece Connected.</em>
            </>
          ),
          sub: data.hero.sub,
          visual: <HeroSystemGrid />,
        }}
      why={data.why}
      introHeader={{ ...data.introHeader, extra: <PillarCards /> }}
      features={features}
      closing={<ClosingDark />}
      testimonial={data.testimonial}
      cta={data.cta}
    />
    </>
  );
}
