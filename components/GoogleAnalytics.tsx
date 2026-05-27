'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

interface Props {
  gaId: string;
}

/**
 * Google Analytics 4 wrapper.
 *
 * Loads gtag with `afterInteractive` so it doesn't block render. Tracks
 * page_view manually on route changes (Next.js App Router doesn't fire
 * a new pageview on client-side navigation by default).
 *
 * Wrap in a Suspense boundary because useSearchParams() forces a Suspense
 * boundary in Next 15 for static pages.
 */
export default function GoogleAnalytics({ gaId }: Props) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { send_page_view: false });
        `}
      </Script>
      <Suspense fallback={null}>
        <PageviewTracker gaId={gaId} />
      </Suspense>
    </>
  );
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function PageviewTracker({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    const search = searchParams?.toString();
    const path = search ? `${pathname}?${search}` : pathname;
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
      send_to: gaId,
    });
  }, [pathname, searchParams, gaId]);

  return null;
}
