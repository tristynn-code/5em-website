'use client';

import { useEffect, useRef, useState } from 'react';

const BAR_HEIGHTS = [18, 35, 28, 42, 55, 48, 38, 52, 60, 45, 58, 50, 65, 55, 72, 62, 48, 58, 68, 95, 78, 65, 55, 70, 60, 52, 75, 68, 58, 72];
const BAR_OPACITY = (h: number) => (h >= 70 ? 0.85 : h >= 55 ? 0.8 : h >= 35 ? 0.75 : 0.7);

export default function HeroDashboard() {
  const [metrics, setMetrics] = useState({
    leads: 8347,
    cpl: 9.84,
    showRate: 81,
    locations: 312,
    speedToLead: 42,
    booked: 6761,
  });
  const [heights, setHeights] = useState<number[]>(BAR_HEIGHTS);
  const [dateLabels, setDateLabels] = useState<string[]>([]);
  const chartRef = useRef<HTMLDivElement>(null);
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    const now = new Date();
    const labels = [30, 20, 10, 0].map(daysAgo => {
      const d = new Date(now);
      d.setDate(d.getDate() - daysAgo);
      const month = d.toLocaleString('en-US', { month: 'short' });
      return `${month} ${d.getDate()}`;
    });
    setDateLabels(labels);
  }, []);

  useEffect(() => {
    const metricsTick = setInterval(() => {
      setMetrics(() => ({
        leads: Math.round(8347 + (Math.random() - 0.5) * 60),
        cpl: +(9.84 + (Math.random() - 0.5) * 0.5).toFixed(2),
        showRate: Math.round(81 + (Math.random() - 0.5) * 4),
        locations: 312,
        speedToLead: Math.round(42 + (Math.random() - 0.5) * 8),
        booked: Math.round(6761 + (Math.random() - 0.5) * 50),
      }));
    }, 2800);

    const barsTick = setInterval(() => {
      setHeights(prev => prev.map(h => Math.min(100, Math.max(5, h + (Math.random() - 0.5) * 6))));
    }, 3000);

    return () => {
      clearInterval(metricsTick);
      clearInterval(barsTick);
    };
  }, []);

  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setBarsVisible(true);
        });
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="max-w-[1000px] mx-auto rounded-l overflow-hidden bg-wh relative border border-bd" style={{ boxShadow: '0 24px 80px rgba(0,0,0,.07)' }}>
      <div className="flex items-center justify-between px-7 py-[18px] border-b border-bd">
        <h3 className="text-tx text-[15px] font-bold flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-teal animate-pu" style={{ boxShadow: '0 0 8px #00BE9D' }} />
          5E Insight Engine
        </h3>
        <span className="text-xs font-semibold text-tx-3">LIVE DASHBOARD</span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3">
        <MetricCell label="Total Leads (30d)" value={metrics.leads.toLocaleString()} delta="+34%" deltaDir="up" />
        <MetricCell label="Avg Cost Per Lead" value={`$${metrics.cpl.toFixed(2)}`} delta="↓38%" deltaDir="dn" />
        <MetricCell label="Active Locations" value={`${metrics.locations}`} delta="+41%" deltaDir="up" />
        <MetricCell label="Appointments Booked" value={metrics.booked.toLocaleString()} delta="+29%" deltaDir="up" />
        <MetricCell label="Show Rate" value={`${metrics.showRate}%`} delta="+12%" deltaDir="up" />
        <MetricCell label="Avg Speed to Lead" value={`${metrics.speedToLead}s`} delta="↓64%" deltaDir="dn" />
      </div>
      <div className="px-7 py-5">
        <div className="flex items-center justify-between mb-5">
          <span className="text-[13px] font-semibold text-tx-2">Lead Flow — Last 30 Days</span>
          <div className="flex items-center gap-2">
            <span className="text-[22px] font-extrabold text-tx">{metrics.leads.toLocaleString()}</span>
            <span className="text-xs font-bold text-teal bg-teal-bg px-2 py-0.5 rounded">▲ 34%</span>
          </div>
        </div>
        <div ref={chartRef} className="flex items-end gap-1 h-28">
          {heights.map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-teal rounded-t-[3px] origin-bottom transition-all"
              style={{
                height: barsVisible ? `${h}%` : '0%',
                opacity: BAR_OPACITY(h),
                transitionDuration: barsVisible ? '1.5s' : '1s',
                transitionDelay: barsVisible ? `${i * 20}ms` : '0ms',
              }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1.5">
          {dateLabels.map(label => (
            <span key={label} className="text-[10px] text-tx-3">{label}</span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between px-7 py-3.5 border-t border-bd">
        <span className="text-[11px] text-tx-3 font-medium">Fifth Element © 2026</span>
        <span className="text-[11px] text-tx-3 font-medium">Powered by Fifth Element</span>
      </div>
    </div>
  );
}

/** Every cell carries a right + bottom hairline; the card's overflow-hidden
    clips the ones that land on the outer edge, so this works at any column count. */
function MetricCell({ label, value, delta, deltaDir }: { label: string; value: string; delta?: string; deltaDir?: 'up' | 'dn' }) {
  return (
    <div className="p-6 border-b border-r border-bd">
      <div className="text-[10px] text-tx-3 uppercase font-semibold mb-2.5" style={{ letterSpacing: '.12em' }}>
        {label}
      </div>
      <div className="text-[32px] font-extrabold text-tx leading-none flex items-baseline gap-2 flex-wrap" style={{ letterSpacing: '-.025em' }}>
        {value}
        {delta && (
          <em className={`not-italic text-xs font-bold px-2 py-0.5 rounded text-teal bg-teal-bg ${deltaDir === 'dn' ? '' : ''}`}>
            {delta}
          </em>
        )}
      </div>
    </div>
  );
}
