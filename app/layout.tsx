import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '5th Element Media | #1 Franchise Marketing Agency | 100+ Locations Managed',
  description:
    '5th Element Media is the franchise marketing agency behind 100+ franchise locations. We deliver predictable local lead flow, UGC-powered creative, and AI-driven insights for franchisors and franchisees. Book your free Franchise Lead Engine Audit today.',
  openGraph: {
    title: '5th Element Media | #1 Franchise Marketing Agency | 100+ Locations Managed',
    description:
      '5th Element Media is the franchise marketing agency behind 100+ franchise locations. Book your free Franchise Lead Engine Audit today.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
