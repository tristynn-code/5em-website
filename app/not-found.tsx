import type { Metadata } from 'next';
import Link from 'next/link';
import { auditCTA } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Page Not Found | 5th Element Media',
  description:
    'The page you are looking for could not be found. Back to home or book a free franchise marketing audit.',
};

const links = [
  { label: 'For Franchisors →', href: '/franchisors' },
  { label: 'For Franchisees →', href: '/franchisees' },
  { label: 'Paid Ads →', href: '/paid-ads' },
  { label: 'Case Studies →', href: '/case-studies' },
  { label: 'About Us →', href: '/about' },
  { label: 'Contact →', href: '/contact' },
];

export default function NotFound() {
  return (
    <section
      className="px-6 bg-wh flex items-center justify-center"
      style={{ padding: '120px 24px', minHeight: 'calc(100vh - 180px)' }}
    >
      <div className="max-w-[720px] mx-auto text-center">
        <div
          className="font-extrabold leading-none mb-6"
          style={{
            fontSize: 'clamp(120px,22vw,220px)',
            letterSpacing: '-.05em',
            background: 'linear-gradient(135deg,#00BE9D 0%,#00d4ae 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            opacity: 0.92,
          }}
        >
          404
        </div>
        <div className="stag inline-block mb-4">Page Not Found</div>
        <h1
          className="font-extrabold text-tx mb-5"
          style={{ fontSize: 'clamp(32px,5vw,52px)', letterSpacing: '-.03em', lineHeight: 1.1 }}
        >
          This page took a wrong turn.
        </h1>
        <p
          className="text-[18px] leading-[1.5] text-tx-2 font-medium max-w-[540px] mx-auto mb-9"
        >
          The page you&apos;re looking for doesn&apos;t exist, moved, or got lost somewhere between franchise locations. Let&apos;s get you back on track.
        </p>
        <div className="flex gap-3 justify-center flex-wrap mb-14">
          <Link href="/" className="bp bpl">
            ← Back to Home
          </Link>
          <a href={auditCTA.href} className="bp">
            Book a Free Audit
          </a>
        </div>
        <div className="border-t border-bd pt-9">
          <div
            className="font-extrabold text-tx-3 mb-5 uppercase"
            style={{ fontSize: 11, letterSpacing: '.14em' }}
          >
            Or try one of these:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-[600px] mx-auto">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-3.5 bg-off border border-bd rounded-[10px] text-tx text-[13px] font-bold transition-all hover:bg-teal-bg hover:border-teal-bd hover:text-teal hover:-translate-y-px"
                style={{ letterSpacing: '-.01em' }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
