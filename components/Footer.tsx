import Link from 'next/link';
import { footerLinks, brand, contact, auditCTA } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="py-14 px-8 border-t border-bd bg-wh">
      <div className="max-w-mx mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* BRAND COLUMN */}
        <div className="md:col-span-4">
          <img
            src={brand.logo}
            alt={brand.name}
            className="h-6 mb-4"
            style={{ filter: 'brightness(0)' }}
          />
          <p className="text-sm text-tx-3 leading-relaxed mb-5 max-w-[320px]">
            {brand.description}
          </p>
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2 text-[15px] font-bold text-tx hover:text-teal transition-colors"
          >
            <span aria-hidden>📞</span> {contact.phone}
          </a>
          <div className="mt-5">
            <a href={auditCTA.href} className="bp text-[13px]" style={{ padding: '10px 18px' }}>
              {auditCTA.label} →
            </a>
          </div>
        </div>

        {/* LINK COLUMNS */}
        <FooterColumn className="md:col-span-2" title="Company" links={footerLinks.company} />
        <FooterColumn className="md:col-span-3" title="Services" links={footerLinks.services} />
        <FooterColumn className="md:col-span-3" title="Industries" links={footerLinks.industries} />
      </div>

      {/* WHO WE SERVE — standalone row, prominent */}
      <div className="max-w-mx mx-auto mt-12 pt-8 border-t border-bd">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h4 className="text-xs text-tx-3 font-semibold uppercase tracking-wider mb-1.5">Who We Serve</h4>
            <p className="text-sm text-tx-3">
              Built for both sides of the franchise. Pick your role.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {footerLinks.audience.map(a => (
              <Link
                key={a.href}
                href={a.href}
                className="inline-flex items-center gap-2 px-5 py-3 border border-bd rounded-s text-sm font-bold text-tx hover:border-teal hover:text-teal hover:-translate-y-0.5 transition-all bg-off"
              >
                {a.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-mx mx-auto mt-12 pt-6 border-t border-bd flex flex-col md:flex-row md:justify-between items-center gap-4 text-[13px] text-tx-3">
        <div>© {new Date().getFullYear()} 5th Element Media LLC. All Rights Reserved.</div>
        <div className="flex gap-5">
          {footerLinks.connect.map(link => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  className = '',
}: {
  title: string;
  links: readonly { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h4 className="text-xs text-tx-3 font-semibold uppercase tracking-wider mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-tx-2 hover:text-teal transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
