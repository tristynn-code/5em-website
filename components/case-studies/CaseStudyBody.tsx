import type { Block } from '@/app/case-studies/types';
import { auditCTA } from '@/lib/site';
import BarChart from './BarChart';
import CreativeGallery from './CreativeGallery';
import RichText from './RichText';

const P_STYLE = { fontSize: 18, lineHeight: 1.75 } as const;
const H2_STYLE = { fontSize: 'clamp(28px,3.5vw,40px)', letterSpacing: '-.025em', lineHeight: 1.15 } as const;

/** Renders a case study's body blocks inside the 760px reading column. */
export default function CaseStudyBody({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'p':
            return (
              <p key={i} className="text-tx-2 mb-6" style={P_STYLE}>
                <RichText text={b.text} />
              </p>
            );
          case 'h2':
            return (
              <div key={i} className="mt-16 first:mt-0">
                {b.kicker && <div className="stag">{b.kicker}</div>}
                <h2 className="font-extrabold mb-6 text-tx" style={H2_STYLE}>
                  <RichText text={b.text} />
                </h2>
              </div>
            );
          case 'h3':
            return (
              <h3 key={i} className="text-2xl font-extrabold mb-5 mt-12 text-tx" style={{ letterSpacing: '-.02em' }}>
                <RichText text={b.text} />
              </h3>
            );
          case 'list':
            return (
              <ul key={i} className="space-y-3 text-tx-2 mb-10" style={{ fontSize: 17, lineHeight: 1.6 }}>
                {b.items.map((it, j) => (
                  <li key={j} className="flex gap-4">
                    <span className="text-teal font-extrabold flex-shrink-0">→</span>
                    <span>
                      {it.title && <strong className="font-bold text-tx">{/[.?!:]$/.test(it.title) ? it.title : `${it.title}.`} </strong>}
                      <RichText text={it.text} />
                    </span>
                  </li>
                ))}
              </ul>
            );
          case 'steps':
            return (
              <ol key={i} className="my-10 space-y-4">
                {b.items.map((it, j) => (
                  <li key={j} className="flex gap-5 rounded-l border border-bd bg-wh p-5 md:p-6">
                    <div
                      className="w-9 h-9 rounded-full bg-teal-bg border border-teal-bd text-teal flex items-center justify-center text-[14px] font-extrabold flex-shrink-0"
                      aria-hidden
                    >
                      {j + 1}
                    </div>
                    <div>
                      <div className="font-extrabold text-tx text-[17px] mb-1" style={{ letterSpacing: '-.01em' }}>
                        {it.title}
                      </div>
                      <div className="text-tx-2 text-[16px] leading-[1.65]">
                        <RichText text={it.text} />
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            );
          case 'quote':
            return (
              <blockquote key={i} className="my-12 border-l-4 border-teal pl-7 py-4">
                <p
                  className="font-extrabold mb-5 text-tx"
                  style={{ fontSize: 'clamp(22px,2.5vw,30px)', letterSpacing: '-.02em', lineHeight: 1.3 }}
                >
                  &ldquo;<RichText text={b.text} />&rdquo;
                </p>
                <div className="text-[14px] text-tx-3 font-semibold">
                  <span className="text-tx">{b.name}</span> &middot; {b.role}
                </div>
              </blockquote>
            );
          case 'stats':
            return (
              <div key={i} className="my-12 grid grid-cols-2 md:grid-cols-3 gap-4">
                {b.items.map((s, j) => (
                  <div key={j} className="rounded-l border border-bd bg-off p-5">
                    <div
                      className="font-extrabold text-tx leading-none mb-2"
                      style={{ fontSize: 'clamp(28px,3vw,36px)', letterSpacing: '-.035em' }}
                    >
                      {s.value}
                    </div>
                    <div className="text-[14px] font-bold text-tx">{s.label}</div>
                    {s.sub && <div className="text-[12px] text-tx-3 mt-1">{s.sub}</div>}
                  </div>
                ))}
              </div>
            );
          case 'callout':
            return (
              <aside key={i} className="my-12 rounded-l border border-teal-bd bg-teal-bg p-6 md:p-8">
                <div className="text-[11px] uppercase font-extrabold text-teal mb-2" style={{ letterSpacing: '.14em' }}>
                  {b.title}
                </div>
                <p className="text-tx text-[17px] leading-[1.65] font-medium">
                  <RichText text={b.text} />
                </p>
              </aside>
            );
          case 'chart':
            return <BarChart key={i} {...b} />;
          case 'creative':
            return <CreativeGallery key={i} title={b.title} caption={b.caption} items={b.items} />;
          case 'table':
            return (
              <figure key={i} className="my-12 overflow-x-auto">
                <table className="w-full text-left text-[15px]" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  <thead>
                    <tr>
                      {b.columns.map(c => (
                        <th
                          key={c}
                          className="pb-3 pr-4 text-[11px] uppercase font-semibold text-tx-3 border-b border-bd"
                          style={{ letterSpacing: '.12em' }}
                        >
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j} className="border-b border-bd hover:bg-[#fafbfc]">
                        {r.map((cell, k) => (
                          <td key={k} className={`py-3 pr-4 ${k === 0 ? 'font-semibold text-tx' : 'text-tx-2'}`}>
                            <RichText text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {b.caption && <figcaption className="text-[13px] text-tx-3 mt-3">{b.caption}</figcaption>}
              </figure>
            );
          case 'cta':
            return (
              <div
                key={i}
                className="my-14 rounded-l p-8 md:p-10 relative overflow-hidden print:hidden"
                style={{ background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)' }}
              >
                <div
                  className="absolute -top-20 -right-20 w-[260px] h-[260px] pointer-events-none"
                  style={{ background: 'radial-gradient(circle,rgba(0,190,157,.18) 0%,transparent 70%)' }}
                />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <div className="text-[11px] uppercase font-extrabold text-teal mb-3" style={{ letterSpacing: '.12em' }}>
                      Free Audit
                    </div>
                    <div
                      className="text-white font-extrabold mb-2"
                      style={{ fontSize: 'clamp(22px,2.5vw,28px)', letterSpacing: '-.02em', lineHeight: 1.2 }}
                    >
                      Want us to run this play in your market?
                    </div>
                    <div className="text-white/70 text-[15px] leading-snug">
                      45 minutes. We screen-share your account and show you exactly what we would change.
                    </div>
                  </div>
                  <a href={auditCTA.href} className="bp bpl flex-shrink-0">
                    Book Free Audit →
                  </a>
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
