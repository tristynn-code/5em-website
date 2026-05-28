'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navLinks, servicesNav, services, auditCTA, brand } from '@/lib/site';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
        <Link href="/about" className="hidden md:inline text-sm font-medium text-tx-2 hover:text-tx transition-colors">
          About
        </Link>
        <Link href="/case-studies" className="hidden md:inline text-sm font-medium text-tx-2 hover:text-tx transition-colors">
          Case Studies
        </Link>

        {/* SERVICES — click goes to /services overview, hover opens dropdown */}
        <div
          className="hidden md:block relative"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
          onFocus={() => setServicesOpen(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setServicesOpen(false);
          }}
        >
          <Link
            href={servicesNav.href}
            className="text-sm font-medium text-tx-2 hover:text-tx transition-colors inline-flex items-center gap-1"
            aria-haspopup="menu"
            aria-expanded={servicesOpen}
          >
            {servicesNav.label}
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
              aria-hidden
            >
              <path d="M2 4 L5 7 L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* Invisible hover bridge so the menu doesn't disappear when you move down */}
          <div
            className="absolute left-0 top-full h-3 w-full"
            style={{ pointerEvents: servicesOpen ? 'auto' : 'none' }}
          />

          <div
            role="menu"
            aria-label="Services menu"
            className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%+12px)] w-[440px] bg-wh border border-bd rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,.12)] transition-all origin-top ${
              servicesOpen
                ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                : 'opacity-0 invisible -translate-y-1 pointer-events-none'
            }`}
            style={{ transitionDuration: '180ms', padding: '12px' }}
          >
            <div className="flex flex-col">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-off transition-colors group"
                  role="menuitem"
                >
                  <span className="text-[15px] font-bold text-tx group-hover:text-teal transition-colors">
                    {s.label}
                  </span>
                  <span className="text-[13px] text-tx-3 leading-snug">{s.description}</span>
                </Link>
              ))}
              <div className="mt-1 mx-4 my-1 border-t border-bd" />
              <Link
                href={servicesNav.href}
                className="px-4 py-3 text-[13px] font-bold text-teal hover:gap-2 inline-flex items-center gap-1 transition-all"
                role="menuitem"
              >
                See all services →
              </Link>
            </div>
          </div>
        </div>

        {navLinks
          .filter((l) => l.label !== 'About' && l.label !== 'Case Studies')
          .map((link) => (
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
