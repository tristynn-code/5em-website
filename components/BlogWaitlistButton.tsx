'use client';

import { useEffect, useRef, useState } from 'react';

export function WaitlistButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const { show } = useToast();
  return (
    <button type="button" onClick={show} className={className}>
      {children}
    </button>
  );
}

function useToast() {
  return {
    show: () => {
      window.dispatchEvent(new CustomEvent('5em:show-newsletter-toast'));
    },
  };
}

export function NewsletterToast() {
  const [visible, setVisible] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onShow = () => {
      setVisible(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setVisible(false), 5000);
    };
    window.addEventListener('5em:show-newsletter-toast', onShow);
    return () => {
      window.removeEventListener('5em:show-newsletter-toast', onShow);
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] transition-all pointer-events-none"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        maxWidth: 'calc(100vw - 48px)',
      }}
    >
      <div
        className="flex items-start gap-3.5 rounded-2xl px-5 py-4 pl-5 max-w-[380px] relative pointer-events-auto"
        style={{
          background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)',
          border: '1px solid rgba(0,190,157,.3)',
          boxShadow: '0 20px 60px rgba(0,0,0,.25),0 0 0 1px rgba(0,190,157,.1)',
        }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-[18px] flex-shrink-0"
          style={{ background: 'rgba(0,190,157,.18)', color: '#00BE9D' }}
        >
          🔒
        </div>
        <div className="flex-1 min-w-0 pr-2">
          <div className="text-[15px] font-extrabold text-white mb-1" style={{ letterSpacing: '-.01em' }}>
            Coming Soon!
          </div>
          <div className="text-[13px] leading-[1.45] font-medium" style={{ color: 'rgba(255,255,255,.7)' }}>
            The Franchise Marketing Insider newsletter launches soon. Stay tuned - it&apos;ll be worth the wait.
          </div>
        </div>
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Close"
          className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full flex items-center justify-center text-[15px] leading-none transition-all"
          style={{ background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.6)', border: 'none' }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
