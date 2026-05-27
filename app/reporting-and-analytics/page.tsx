import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';
import data from '@/content/services/reporting-and-analytics.json';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Franchise Marketing Dashboards & Analytics | AI-Powered Insights',
  description:
    'Real-time franchise marketing dashboards. See CPL, lead volume, creative performance, and ROI across every location with the 5E Insight Engine, built for multi-location brands.',
  path: '/reporting-and-analytics',
  keywords: ['franchise marketing dashboard', 'franchise analytics', '5E Insight Engine', 'multi-location reporting', 'franchise ROI tracking'],
});

const serviceLd = serviceSchema({
  name: 'Franchise Marketing Reporting & Analytics',
  description:
    'Real-time dashboards and AI-driven insights covering every location for multi-location franchise brands.',
  path: '/reporting-and-analytics',
  serviceType: 'Marketing Analytics & Reporting',
});

function HeroDash() {
  return (
    <div
      className="w-full"
      style={{
        maxWidth: 420,
        background: 'rgba(255,255,255,.04)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 16,
        padding: 20,
        backdropFilter: 'blur(12px)',
      }}
    >
      <div
        className="pb-3.5 mb-4"
        style={{ borderBottom: '1px solid rgba(255,255,255,.08)' }}
      >
        <div className="flex justify-between items-center mb-1">
          <div className="text-white font-extrabold text-sm" style={{ letterSpacing: '-.01em' }}>
            5E Insight Engine
          </div>
          <div
            className="flex items-center gap-1.5 text-teal font-bold uppercase"
            style={{ fontSize: 10, letterSpacing: '.04em' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pu" />
            Live
          </div>
        </div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,.55)', fontWeight: 500 }}>
          All locations · Last 30 days
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2.5 mb-3.5">
        {[
          { lbl: 'Total leads', val: '2,847', delta: '↑ 23%' },
          { lbl: 'Avg CPL', val: '$14.20', delta: '↓ 18%' },
          { lbl: 'Show rate', val: '72%', delta: '↑ 8%' },
        ].map((k, i) => (
          <div
            key={i}
            style={{
              padding: 12,
              background: 'rgba(255,255,255,.04)',
              border: '1px solid rgba(255,255,255,.06)',
              borderRadius: 10,
            }}
          >
            <div
              style={{
                fontSize: 9,
                color: 'rgba(255,255,255,.5)',
                fontWeight: 700,
                letterSpacing: '.04em',
                textTransform: 'uppercase',
              }}
            >
              {k.lbl}
            </div>
            <div
              className="text-white font-extrabold"
              style={{ fontSize: 18, letterSpacing: '-.02em', lineHeight: 1, marginTop: 4 }}
            >
              {k.val}
            </div>
            <div className="text-teal font-bold" style={{ fontSize: 10, marginTop: 4 }}>
              {k.delta}
            </div>
          </div>
        ))}
      </div>
      <div className="pt-2">
        <svg viewBox="0 0 280 60" preserveAspectRatio="none" style={{ width: '100%', height: 60 }}>
          <defs>
            <linearGradient id="hdg-rep" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#00BE9D" stopOpacity=".4" />
              <stop offset="100%" stopColor="#00BE9D" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,45 L20,40 L40,42 L60,35 L80,32 L100,28 L120,30 L140,22 L160,18 L180,20 L200,14 L220,10 L240,12 L260,6 L280,4 L280,60 L0,60 Z"
            fill="url(#hdg-rep)"
          />
          <path
            d="M0,45 L20,40 L40,42 L60,35 L80,32 L100,28 L120,30 L140,22 L160,18 L180,20 L200,14 L220,10 L240,12 L260,6 L280,4"
            fill="none"
            stroke="#00BE9D"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

function MockupLiveDash() {
  const kpis = [
    { lbl: 'Total leads', val: '2,847', spark: 'M0,15 L10,13 L20,14 L30,10 L40,11 L50,7 L60,5 L70,6 L80,3', delta: '↑ 23%' },
    { lbl: 'Avg CPL', val: '$14.20', spark: 'M0,5 L10,7 L20,6 L30,10 L40,9 L50,12 L60,14 L70,13 L80,16', delta: '↓ 18%' },
    { lbl: 'Show rate', val: '72%', spark: 'M0,14 L10,12 L20,13 L30,10 L40,9 L50,7 L60,8 L70,5 L80,4', delta: '↑ 8%' },
    { lbl: 'Close rate', val: '38%', spark: 'M0,12 L10,10 L20,11 L30,8 L40,7 L50,9 L60,6 L70,5 L80,3', delta: '↑ 12%' },
  ];
  return (
    <div
      className="w-full bg-wh"
      style={{
        maxWidth: 440,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 22,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div
        className="flex justify-between items-center mb-4 pb-3"
        style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        <div className="text-tx font-extrabold text-[13px]" style={{ letterSpacing: '-.01em' }}>
          Network Overview
        </div>
        <div className="flex items-center gap-1.5 text-teal font-bold" style={{ fontSize: 10 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pu" />
          Live · Updated 2m ago
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2.5 mb-3.5">
        {kpis.map((k, i) => (
          <div
            key={i}
            style={{
              padding: 12,
              background: '#F7F7F7',
              border: '1px solid rgba(0,0,0,.07)',
              borderRadius: 10,
            }}
          >
            <div
              className="text-tx-3 font-bold uppercase"
              style={{ fontSize: 10, letterSpacing: '.04em' }}
            >
              {k.lbl}
            </div>
            <div
              className="text-tx font-extrabold"
              style={{ fontSize: 18, letterSpacing: '-.02em', lineHeight: 1, marginTop: 4 }}
            >
              {k.val}
            </div>
            <div className="mt-2">
              <svg
                viewBox="0 0 80 20"
                preserveAspectRatio="none"
                style={{ width: '100%', height: 20 }}
              >
                <path d={k.spark} fill="none" stroke="#00BE9D" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="text-teal font-bold mt-1" style={{ fontSize: 10 }}>
              {k.delta}
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex items-center gap-2 text-tx font-semibold"
        style={{
          padding: '10px 12px',
          background: 'rgba(239,159,39,.08)',
          border: '1px solid rgba(239,159,39,.2)',
          borderRadius: 8,
          fontSize: 11,
        }}
      >
        <span style={{ color: '#EF9F27', fontSize: 14 }} className="flex-shrink-0">⚠</span>
        <span style={{ lineHeight: 1.3 }}>
          Austin South CPL up 42% in last 48hr — needs review
        </span>
      </div>
    </div>
  );
}

function MockupLocComp() {
  const items = [
    { rank: '1', name: 'Austin North', width: 32, val: '$9.40', kind: 'top' },
    { rank: '2', name: 'Dallas Central', width: 38, val: '$11.20', kind: 'top' },
    { rank: '3', name: 'Miami Beach', width: 45, val: '$13.30', kind: 'normal' },
    { rank: '4', name: 'Houston West', width: 52, val: '$15.40', kind: 'avg' },
    { rank: '5', name: 'Phoenix East', width: 78, val: '$23.10', kind: 'bot' },
  ];
  return (
    <div
      className="w-full bg-wh"
      style={{
        maxWidth: 440,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 22,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div
        className="flex justify-between items-center mb-3.5 pb-3"
        style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        <div className="text-tx font-extrabold text-[13px]" style={{ letterSpacing: '-.01em' }}>
          Locations Ranked · CPL
        </div>
        <div
          className="text-tx-3 font-semibold"
          style={{ fontSize: 10, padding: '3px 8px', background: '#F7F7F7', borderRadius: 6 }}
        >
          Last 30d
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-3.5">
        {items.map((it, i) => (
          <div
            key={i}
            className="grid items-center gap-2.5"
            style={{
              gridTemplateColumns: '24px 1fr 60px',
              padding: '10px 12px',
              background:
                it.kind === 'top'
                  ? 'rgba(0,190,157,.06)'
                  : it.kind === 'bot'
                  ? 'rgba(239,159,39,.08)'
                  : '#F7F7F7',
              border:
                it.kind === 'top'
                  ? '1px solid rgba(0,190,157,.15)'
                  : it.kind === 'bot'
                  ? '1px solid rgba(239,159,39,.2)'
                  : '1px solid rgba(0,0,0,.07)',
              borderRadius: 8,
            }}
          >
            <div
              className="font-extrabold text-center"
              style={{
                fontSize: 14,
                color: it.kind === 'top' ? '#00BE9D' : it.kind === 'bot' ? '#EF9F27' : '#777',
              }}
            >
              {it.rank}
            </div>
            <div className="min-w-0">
              <div
                className="text-tx font-bold mb-1"
                style={{ fontSize: 12, letterSpacing: '-.01em' }}
              >
                {it.name}
              </div>
              <div
                className="rounded overflow-hidden"
                style={{ height: 5, background: 'rgba(0,0,0,.05)' }}
              >
                <div
                  className="h-full rounded"
                  style={{
                    width: `${it.width}%`,
                    background:
                      it.kind === 'avg' ? '#777' : it.kind === 'bot' ? '#EF9F27' : '#00BE9D',
                  }}
                />
              </div>
            </div>
            <div
              className="text-tx font-extrabold text-right"
              style={{ fontSize: 13, letterSpacing: '-.01em' }}
            >
              {it.val}
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex justify-between"
        style={{
          padding: '10px 12px',
          background: 'rgba(0,0,0,.03)',
          borderRadius: 8,
          fontSize: 11,
          fontWeight: 700,
        }}
      >
        <span
          className="text-tx-3 uppercase"
          style={{ letterSpacing: '.04em' }}
        >
          Network avg
        </span>
        <span className="text-tx">$14.20</span>
      </div>
    </div>
  );
}

function MockupCreativePerf() {
  const items = [
    { thumb: 'linear-gradient(135deg,#667eea,#764ba2)', label: 'UGC', name: 'Sarah transformation story', meta: 'UGC · 60s vertical', val: '$8.20', kind: 'winner' },
    { thumb: 'linear-gradient(135deg,#f093fb,#f5576c)', label: 'UGC', name: 'Jake gym routine walkthrough', meta: 'UGC · 45s vertical', val: '$9.80', kind: 'winner' },
    { thumb: 'linear-gradient(135deg,#4facfe,#00f2fe)', label: 'Static', name: 'Intro offer — $49 trial', meta: 'Static · 1:1', val: '$14.40', kind: 'normal' },
    { thumb: 'linear-gradient(135deg,#434343,#000)', label: 'Brand', name: 'Brand intro video — v1', meta: 'Fatiguing · 8 weeks old', val: '$28.90', kind: 'fatigue' },
  ];
  return (
    <div
      className="w-full bg-wh"
      style={{
        maxWidth: 440,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 22,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div
        className="flex justify-between items-center mb-3.5 pb-3"
        style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        <div className="text-tx font-extrabold text-[13px]" style={{ letterSpacing: '-.01em' }}>
          Creative Leaderboard
        </div>
        <div
          className="text-tx-3 font-semibold"
          style={{ fontSize: 10, padding: '3px 8px', background: '#F7F7F7', borderRadius: 6 }}
        >
          Last 14d
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {items.map((it, i) => (
          <div
            key={i}
            className="flex items-center gap-3"
            style={{
              padding: 10,
              background:
                it.kind === 'winner'
                  ? 'rgba(0,190,157,.06)'
                  : it.kind === 'fatigue'
                  ? 'rgba(239,159,39,.08)'
                  : '#F7F7F7',
              border:
                it.kind === 'winner'
                  ? '1px solid rgba(0,190,157,.15)'
                  : it.kind === 'fatigue'
                  ? '1px solid rgba(239,159,39,.2)'
                  : '1px solid rgba(0,0,0,.07)',
              borderRadius: 10,
            }}
          >
            <div
              className="rounded flex items-end justify-center relative overflow-hidden flex-shrink-0"
              style={{ width: 44, height: 56, background: it.thumb, paddingBottom: 4 }}
            >
              <span
                className="text-white font-extrabold uppercase"
                style={{
                  fontSize: 8,
                  background: 'rgba(0,0,0,.4)',
                  padding: '2px 5px',
                  borderRadius: 3,
                  letterSpacing: '.04em',
                }}
              >
                {it.label}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div
                className="text-tx font-bold leading-tight"
                style={{ fontSize: 12, letterSpacing: '-.01em', marginBottom: 2 }}
              >
                {it.name}
              </div>
              <div className="text-tx-3 font-semibold" style={{ fontSize: 10 }}>
                {it.meta}
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div
                className="font-extrabold leading-none"
                style={{
                  fontSize: 13,
                  letterSpacing: '-.01em',
                  color: it.kind === 'fatigue' ? '#EF9F27' : it.kind === 'winner' ? '#00BE9D' : '#1a1a1a',
                }}
              >
                {it.val}
              </div>
              <div
                className="text-tx-3 font-bold uppercase mt-1"
                style={{ fontSize: 9, letterSpacing: '.04em' }}
              >
                CPL
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupLoom() {
  return (
    <div
      className="w-full bg-wh"
      style={{
        maxWidth: 420,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 16,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div className="rounded-lg overflow-hidden mb-3.5" style={{ background: '#0f1314' }}>
        <div
          className="relative flex items-center justify-center"
          style={{
            aspectRatio: '16/10',
            background: 'linear-gradient(135deg,#1D2637 0%,#0f1314 100%)',
            padding: 24,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center z-[2]">
            <div
              className="rounded-full flex items-center justify-center"
              style={{
                width: 56,
                height: 56,
                background: '#00BE9D',
                color: '#0F1314',
                fontSize: 20,
                paddingLeft: 4,
                boxShadow: '0 8px 32px rgba(0,190,157,.4)',
              }}
            >
              ▶
            </div>
          </div>
          <div className="w-full" style={{ opacity: 0.3 }}>
            <div className="flex gap-2 mb-2.5">
              <div className="flex-1 h-6 rounded" style={{ background: 'rgba(255,255,255,.1)' }} />
              <div className="flex-1 h-6 rounded" style={{ background: 'rgba(0,190,157,.2)' }} />
              <div className="flex-1 h-6 rounded" style={{ background: 'rgba(255,255,255,.1)' }} />
            </div>
            <div className="py-2">
              <svg viewBox="0 0 200 40" preserveAspectRatio="none" style={{ width: '100%', height: 40 }}>
                <path
                  d="M0,30 L20,28 L40,25 L60,20 L80,15 L100,18 L120,12 L140,10 L160,8 L180,5 L200,3"
                  fill="none"
                  stroke="#00BE9D"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <div
            className="absolute z-[3] rounded-full"
            style={{
              bottom: 16,
              right: 16,
              width: 56,
              height: 56,
              background: 'linear-gradient(135deg,#00BE9D,#00a789)',
              border: '3px solid rgba(255,255,255,.2)',
            }}
          />
        </div>
        <div
          className="flex items-center gap-2.5"
          style={{ padding: '10px 14px', background: '#1a2021' }}
        >
          <div
            className="flex-1 rounded overflow-hidden"
            style={{ height: 3, background: 'rgba(255,255,255,.15)' }}
          >
            <div className="h-full bg-teal rounded" style={{ width: '32%' }} />
          </div>
          <div
            className="font-semibold tabular-nums flex-shrink-0"
            style={{ fontSize: 10, color: 'rgba(255,255,255,.7)' }}
          >
            2:34 / 8:12
          </div>
        </div>
      </div>
      <div className="px-1">
        <div className="text-tx font-extrabold" style={{ fontSize: 14, letterSpacing: '-.01em', marginBottom: 4 }}>
          March Performance Recap
        </div>
        <div className="text-tx-3 font-semibold" style={{ fontSize: 11 }}>
          Recorded by Justin · CSM · 8 min
        </div>
      </div>
    </div>
  );
}

function MockupROI() {
  const stages = [
    { label: 'Ad spend', val: '$48,200', width: 100, won: false },
    { label: 'Leads generated', val: '2,847', width: 82, won: false },
    { label: 'Booked appts', val: '1,245', width: 58, won: false },
    { label: 'Signed members', val: '472', width: 38, won: true },
  ];
  return (
    <div
      className="w-full bg-wh"
      style={{
        maxWidth: 440,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 22,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div
        className="flex justify-between items-center mb-4 pb-3"
        style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}
      >
        <div className="text-tx font-extrabold text-[13px]" style={{ letterSpacing: '-.01em' }}>
          ROI by Channel
        </div>
        <div
          className="text-tx-3 font-semibold"
          style={{ fontSize: 10, padding: '3px 8px', background: '#F7F7F7', borderRadius: 6 }}
        >
          Q1 2026
        </div>
      </div>
      <div className="flex flex-col gap-1.5 mb-4">
        {stages.map((s, i) => (
          <div key={i} className="flex justify-center">
            <div
              className="flex justify-between items-center"
              style={{
                width: `${s.width}%`,
                background: s.won ? '#00BE9D' : 'rgba(0,190,157,.06)',
                border: s.won ? '1px solid #00BE9D' : '1px solid rgba(0,190,157,.15)',
                borderRadius: 8,
                padding: '12px 16px',
                minHeight: 44,
              }}
            >
              <div
                className="font-bold"
                style={{
                  fontSize: 12,
                  letterSpacing: '-.01em',
                  color: s.won ? '#0F1314' : '#1a1a1a',
                }}
              >
                {s.label}
              </div>
              <div
                className="font-extrabold"
                style={{
                  fontSize: 13,
                  letterSpacing: '-.02em',
                  marginLeft: 16,
                  color: s.won ? '#0F1314' : '#1a1a1a',
                }}
              >
                {s.val}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="grid grid-cols-3 gap-2 pt-3.5"
        style={{ borderTop: '1px solid rgba(0,0,0,.07)' }}
      >
        {[
          { lbl: 'True CAC', val: '$102', good: false },
          { lbl: 'Avg LTV', val: '$1,840', good: false },
          { lbl: 'LTV:CAC', val: '18:1', good: true },
        ].map((m, i) => (
          <div
            key={i}
            className="text-center"
            style={{
              padding: 10,
              background: m.good ? 'rgba(0,190,157,.06)' : '#F7F7F7',
              borderRadius: 8,
              border: m.good ? '1px solid rgba(0,190,157,.15)' : '1px solid rgba(0,0,0,.07)',
            }}
          >
            <div
              className="text-tx-3 font-bold uppercase"
              style={{ fontSize: 9, letterSpacing: '.04em' }}
            >
              {m.lbl}
            </div>
            <div
              className="font-extrabold"
              style={{
                fontSize: 16,
                letterSpacing: '-.02em',
                lineHeight: 1,
                marginTop: 4,
                color: m.good ? '#00BE9D' : '#1a1a1a',
              }}
            >
              {m.val}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupRollup() {
  const markets = [
    { name: 'Texas', count: '8 locations', metric: '$11.40', kind: 'good' },
    { name: 'Florida', count: '6 locations', metric: '$12.80', kind: 'good' },
    { name: 'California', count: '5 locations', metric: '$14.90', kind: 'normal' },
    { name: 'Arizona', count: '3 locations', metric: '$22.10', kind: 'attention' },
  ];
  return (
    <div
      className="w-full bg-wh"
      style={{
        maxWidth: 420,
        border: '1px solid rgba(0,0,0,.07)',
        borderRadius: 24,
        padding: 22,
        boxShadow: '0 12px 40px rgba(0,0,0,.06)',
      }}
    >
      <div className="mb-4 pb-3" style={{ borderBottom: '1px solid rgba(0,0,0,.07)' }}>
        <div className="text-tx font-extrabold text-sm" style={{ letterSpacing: '-.01em' }}>
          Franchisor Network Rollup
        </div>
        <div className="text-tx-3 font-semibold mt-0.5" style={{ fontSize: 11 }}>
          28 locations · 6 markets
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { val: '2,847', lbl: 'Total leads' },
          { val: '$14.20', lbl: 'Network CPL' },
          { val: '18:1', lbl: 'LTV:CAC' },
        ].map((s, i) => (
          <div
            key={i}
            className="text-center"
            style={{
              padding: '12px 8px',
              background: 'rgba(0,190,157,.06)',
              border: '1px solid rgba(0,190,157,.15)',
              borderRadius: 10,
            }}
          >
            <div className="text-teal font-extrabold" style={{ fontSize: 16, letterSpacing: '-.02em', lineHeight: 1 }}>
              {s.val}
            </div>
            <div
              className="text-tx-3 font-bold uppercase mt-1"
              style={{ fontSize: 9, letterSpacing: '.04em' }}
            >
              {s.lbl}
            </div>
          </div>
        ))}
      </div>
      <div className="pt-2" style={{ borderTop: '1px solid rgba(0,0,0,.07)' }}>
        <div
          className="text-tx-3 font-extrabold uppercase mb-2.5 pt-2"
          style={{ fontSize: 10, letterSpacing: '.04em' }}
        >
          Markets
        </div>
        {markets.map((m, i) => (
          <div
            key={i}
            className="grid items-center gap-3 mb-1.5"
            style={{
              gridTemplateColumns: '1fr auto auto',
              padding: '10px 12px',
              background:
                m.kind === 'good'
                  ? 'rgba(0,190,157,.06)'
                  : m.kind === 'attention'
                  ? 'rgba(239,159,39,.08)'
                  : '#F7F7F7',
              border:
                m.kind === 'good'
                  ? '1px solid rgba(0,190,157,.15)'
                  : m.kind === 'attention'
                  ? '1px solid rgba(239,159,39,.2)'
                  : '1px solid rgba(0,0,0,.07)',
              borderRadius: 8,
            }}
          >
            <div className="text-tx font-bold" style={{ fontSize: 12, letterSpacing: '-.01em' }}>
              {m.name}
            </div>
            <div className="text-tx-3 font-semibold" style={{ fontSize: 10 }}>
              {m.count}
            </div>
            <div
              className="font-extrabold"
              style={{
                fontSize: 12,
                letterSpacing: '-.01em',
                color: m.kind === 'good' ? '#00BE9D' : m.kind === 'attention' ? '#EF9F27' : '#1a1a1a',
              }}
            >
              {m.metric}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ReportingAnalyticsPage() {
  const visuals = [
    <MockupLiveDash key="0" />,
    <MockupLocComp key="1" />,
    <MockupCreativePerf key="2" />,
    <MockupLoom key="3" />,
    <MockupROI key="4" />,
    <MockupRollup key="5" />,
  ];
  const features = data.features.map((f, i) => ({ ...f, visual: visuals[i] }));

  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/reporting-and-analytics' },
          { name: 'Reporting & Analytics', path: '/reporting-and-analytics' },
        ])}
      />
      <ServicePageLayout
        hero={{
          eyebrow: data.hero.eyebrow,
          headline: (
            <>
              You Can&apos;t Scale<br />
              <em className="not-italic text-teal">What You Can&apos;t See.</em>
            </>
          ),
          sub: data.hero.sub,
          visual: <HeroDash />,
        }}
      why={data.why}
      introHeader={data.introHeader}
      features={features}
      testimonial={data.testimonial}
      cta={data.cta}
    />
    </>
  );
}
