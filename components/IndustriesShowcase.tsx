'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getVerticals } from '@/lib/content';

export default function IndustriesShowcase() {
  const verticals = getVerticals();
  const [activeIdx, setActiveIdx] = useState(0);
  const [imgVisible, setImgVisible] = useState(true);
  const active = verticals[activeIdx];

  const handleSwitch = (i: number) => {
    if (i === activeIdx) return;
    setImgVisible(false);
    setTimeout(() => {
      setActiveIdx(i);
      setImgVisible(true);
    }, 200);
  };

  return (
    <section className="sec bg-dk">
      <div className="mx">
        <div className="stag">Industries</div>
        <h2 className="sttl text-white">Franchise Verticals We Dominate</h2>
        <p className="ssub text-white/50">Click a vertical to see how we approach it.</p>
        <div className="grid md:grid-cols-[.4fr_.6fr] grid-cols-1 gap-8 mt-12 items-stretch" style={{ minHeight: 440 }}>
          <div className="flex flex-col gap-1">
            {verticals.map((v, i) => (
              <button
                key={v.id}
                onClick={() => handleSwitch(i)}
                className={`text-left py-4 px-5 rounded-s cursor-pointer transition-all border-l-[3px] ${
                  i === activeIdx ? 'border-teal' : 'border-transparent hover:bg-white/[.04]'
                }`}
                style={{ background: i === activeIdx ? 'rgba(0,190,157,.06)' : 'transparent', fontFamily: 'inherit' }}
              >
                <span className={`block text-base font-bold transition-colors ${i === activeIdx ? 'text-white' : 'text-white/50'}`}>
                  {v.name}
                </span>
                <span className={`block text-xs mt-0.5 transition-colors ${i === activeIdx ? 'text-white/40' : 'text-white/25'}`}>
                  {v.subtitle}
                </span>
              </button>
            ))}
          </div>
          <div className="rounded-l overflow-hidden relative" style={{ background: '#1a1d1e', minHeight: 440 }}>
            <img
              src={active.image}
              alt={active.name}
              className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300"
              style={{ opacity: imgVisible ? 0.6 : 0 }}
            />
            <div
              className="absolute inset-0 flex flex-col justify-end p-9"
              style={{ background: 'linear-gradient(to top, rgba(15,19,20,.9) 0%, transparent 50%)' }}
            >
              <h3 className="text-2xl font-extrabold text-white mb-2">{active.name}</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5 max-w-[400px]">{active.description}</p>
              <Link href={active.href} className="bp" style={{ width: 'fit-content', fontSize: 14, padding: '10px 20px' }}>
                See Our Approach →
              </Link>
            </div>
          </div>
        </div>
        <div
          className="mt-8 px-6 py-5 rounded-s flex items-center gap-4"
          style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)' }}
        >
          <div
            className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0 text-lg text-teal"
            style={{ background: 'rgba(0,190,157,.1)', border: '1px solid rgba(0,190,157,.15)' }}
          >
            ✓
          </div>
          <div>
            <span className="text-sm font-semibold text-white">Don&apos;t see your vertical?</span>
            <span className="text-[13px] text-white/50 block mt-0.5">
              We work with franchise brands across every industry. If you have multiple locations and need leads, our system works for you. Book a free audit and we&apos;ll show you how.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
