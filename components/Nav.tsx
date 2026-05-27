'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navLinks, auditCTA, brand } from '@/lib/site';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`nav-glass fixed top-3 left-1/2 -translate-x-1/2 z-[100] flex items-center justify-between rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,.04)] transition-all ${
        scrolled ? 'py-2.5 shadow-[0_4px_32px_rgba(0,0,0,.06)]' : 'py-3'
      }`}
      style={{ width: 'calc(100% - 48px)', maxWidth: '1200px', padding: scrolled ? '10px 24px' : '12px 24px' }}
    >
      <Link href="/">
        <img src={brand.logo} alt={brand.name} className="h-[26px]" style={{ filter: 'brightness(0)' }} />
      </Link>
      <div className="flex items-center gap-6">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="hidden md:inline text-sm font-medium text-tx-2 hover:text-tx transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <a href={auditCTA.href} className="bp">
          {auditCTA.label}
        </a>
      </div>
    </nav>
  );
}
