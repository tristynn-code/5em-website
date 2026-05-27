import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/seo';
import { organizationSchema, websiteSchema, reviewsSchema } from '@/lib/schema';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: '5th Element Media | Franchise Marketing Agency | 100+ Locations Managed',
    template: '%s | 5th Element Media',
  },
  description:
    'Franchise marketing agency behind 100+ franchise locations. Predictable local lead flow, UGC-powered creative, and AI-driven insights for franchisors and franchisees. Book a free Franchise Lead Engine Audit.',
  applicationName: SITE.name,
  authors: [{ name: SITE.founder.name, url: SITE.founder.sameAs }],
  generator: 'Next.js',
  keywords: [
    'franchise marketing agency',
    'franchise marketing',
    'franchise lead generation',
    'multi-location marketing',
    'marketing for franchisees',
    'marketing for franchisors',
    'franchise advertising',
    'franchise Meta Ads',
    'franchise Google Ads',
    'UGC for franchises',
    'franchise growth systems',
    'CRM for franchises',
    'franchise CPL',
    'fitness franchise marketing',
    'salon suites marketing',
    'wellness franchise marketing',
  ],
  referrer: 'origin-when-cross-origin',
  creator: SITE.founder.name,
  publisher: SITE.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: '5th Element Media | Franchise Marketing Agency',
    description:
      'Franchise marketing agency behind 100+ franchise locations. Predictable local lead flow, UGC creative, and AI-driven insights. Book a free audit.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: '5th Element Media — Franchise Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5th Element Media | Franchise Marketing Agency',
    description:
      'Franchise marketing agency behind 100+ franchise locations. Book your free Franchise Lead Engine Audit.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Next.js auto-detects /app/icon.tsx, /app/apple-icon.tsx, /app/manifest.ts
};

export const viewport: Viewport = {
  themeColor: '#00BE9D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <link rel="preconnect" href="https://assets.cdn.filesafe.space" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.prod.website-files.com" crossOrigin="" />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <JsonLd data={reviewsSchema()} />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
