import { plainText } from './RichText';

interface Props {
  title: string;
  subtitle?: string;
  prefix?: string;
  suffix?: string;
  data: { label: string; value: number; highlight?: boolean }[];
  note?: string;
}

const W = 720;
const H = 300;
const PAD = { top: 28, right: 8, bottom: 44, left: 44 };
const BAR_MAX = 24;

function niceMax(v: number) {
  if (v <= 0) return 1;
  const pow = 10 ** Math.floor(Math.log10(v));
  const n = v / pow;
  // Quarter ticks stay round at each of these tops.
  const step = [1, 1.2, 1.6, 2, 2.4, 3, 4, 5, 6, 8, 10].find(t => n <= t) ?? 10;
  return step * pow;
}

function compact(v: number) {
  if (v >= 1000) return `${(v / 1000).toFixed(v % 1000 === 0 ? 0 : 1)}K`;
  return `${v}`;
}

/**
 * Single-series column chart, server-rendered SVG. Teal marks with 4px rounded
 * tops, hairline grid, value labels on highlighted columns only, native hover
 * titles on every column, and a data table under a disclosure so every value
 * is readable without relying on color.
 */
export default function BarChart({ title, subtitle, prefix = '', suffix = '', data, note }: Props) {
  const max = niceMax(Math.max(...data.map(d => d.value)));
  const ticks = [0, max / 4, max / 2, (max * 3) / 4, max];
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;
  const band = innerW / data.length;
  const barW = Math.min(BAR_MAX, Math.max(4, band - 2));
  const y = (v: number) => PAD.top + innerH - (v / max) * innerH;
  // Thin the x labels so they never collide.
  const every = Math.max(1, Math.ceil(data.length / 12));
  const fmt = (v: number) => `${prefix}${v.toLocaleString('en-US')}${suffix}`;

  return (
    <figure className="my-12 rounded-l border border-bd bg-wh p-5 md:p-7">
      <figcaption className="mb-4">
        <div className="text-[17px] font-extrabold text-tx" style={{ letterSpacing: '-.01em' }}>
          {plainText(title)}
        </div>
        {subtitle && <div className="text-[13px] text-tx-3 mt-1">{plainText(subtitle)}</div>}
      </figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={plainText(title)}>
        {ticks.map(t => (
          <g key={t}>
            <line x1={PAD.left} x2={W - PAD.right} y1={y(t)} y2={y(t)} stroke="#EBEDF0" strokeWidth={1} />
            <text
              x={PAD.left - 8}
              y={y(t) + 4}
              textAnchor="end"
              fontSize={11}
              fill="#6B7585"
              style={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {prefix}
              {compact(t)}
            </text>
          </g>
        ))}
        {data.map((d, i) => {
          const cx = PAD.left + band * i + band / 2;
          const top = y(d.value);
          const h = Math.max(0, PAD.top + innerH - top);
          const r = Math.min(4, h, barW / 2);
          const x0 = cx - barW / 2;
          const base = PAD.top + innerH;
          // Rounded data end, square at the baseline.
          const path =
            h <= 0
              ? ''
              : `M${x0},${base} V${top + r} Q${x0},${top} ${x0 + r},${top} H${x0 + barW - r} Q${x0 + barW},${top} ${x0 + barW},${top + r} V${base} Z`;
          return (
            <g key={i} className="group">
              <title>{`${d.label}: ${fmt(d.value)}`}</title>
              {/* Hit target wider than the mark. */}
              <rect x={PAD.left + band * i} y={PAD.top} width={band} height={innerH} fill="transparent" />
              <path
                d={path}
                fill={d.highlight ? '#00BE9D' : '#9FE3D5'}
                className="transition-opacity group-hover:opacity-80"
              />
              {d.highlight && (
                <text
                  x={cx}
                  y={top - 8}
                  textAnchor="middle"
                  fontSize={12}
                  fontWeight={800}
                  fill="#0F1314"
                >
                  {fmt(d.value)}
                </text>
              )}
              {i % every === 0 && (
                <text x={cx} y={H - PAD.bottom + 18} textAnchor="middle" fontSize={11} fill="#6B7585">
                  {d.label}
                </text>
              )}
            </g>
          );
        })}
        <line x1={PAD.left} x2={W - PAD.right} y1={PAD.top + innerH} y2={PAD.top + innerH} stroke="#D5D9DE" strokeWidth={1} />
      </svg>
      {note && <p className="text-[13px] text-tx-3 mt-3 leading-relaxed">{plainText(note)}</p>}
      <details className="mt-3 text-[13px] text-tx-3">
        <summary className="cursor-pointer font-semibold hover:text-teal">View the data</summary>
        <table className="mt-3 w-full text-left" style={{ fontVariantNumeric: 'tabular-nums' }}>
          <tbody>
            {data.map((d, i) => (
              <tr key={i} className="border-t border-bd">
                <td className="py-1.5 pr-4">{d.label}</td>
                <td className="py-1.5 text-tx font-semibold">{fmt(d.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
