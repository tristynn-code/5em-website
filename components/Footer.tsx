import Link from 'next/link';
import { footerLinks, brand } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="py-12 px-8 border-t border-bd">
      <div className="max-w-mx mx-auto flex justify-between gap-10 flex-wrap">
        <div className="max-w-[320px]">
          <img
            src={brand.logo}
            alt={brand.name}
            className="h-6 mb-3.5"
            style={{ filter: 'brightness(0)' }}
          />
          <p className="text-sm text-tx-3 leading-relaxed">{brand.description}</p>
        </div>
        <FooterColumn title="Company" links={footerLinks.company} />
        <FooterColumn title="Services" links={footerLinks.services} />
        <FooterColumn title="Connect" links={footerLinks.connect} />
      </div>
      <div className="max-w-mx mx-auto mt-8 pt-5 border-t border-bd text-[13px] text-tx-3 text-center">
        © {new Date().getFullYear()} 5th Element Media LLC. All Rights Reserved.
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-xs text-tx-3 font-semibold uppercase tracking-wider mb-3.5">{title}</h4>
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className="block text-sm text-tx-2 mb-2 hover:text-teal transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
