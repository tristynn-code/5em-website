import { auditCTA } from '@/lib/site';

interface Props {
  /** Override the default headline. */
  headline?: string;
  /** Override the supporting line. */
  body?: string;
}

/**
 * The "Want us to audit your franchise ad account?" card that goes in the
 * middle of every blog post and case study. Reusable so the wording stays
 * consistent and the styling is one place.
 */
export default function MidArticleCTA({
  headline = 'Want us to audit your franchise ad account?',
  body = "45 minutes. 3+ improvements. $100 gift card guarantee if we can't find them.",
}: Props) {
  return (
    <div
      className="my-14 rounded-l p-8 md:p-10 relative overflow-hidden"
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
            {headline}
          </div>
          <div className="text-white/70 text-[15px] leading-snug">{body}</div>
        </div>
        <a href={auditCTA.href} className="bp bpl flex-shrink-0">
          Book Free Audit →
        </a>
      </div>
    </div>
  );
}
