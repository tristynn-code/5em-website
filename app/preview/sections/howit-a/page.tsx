import type { Metadata } from 'next';
import HowItWorksA from '@/components/preview/HowItWorksA';
import PreviewShell from '@/components/preview/PreviewShell';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Variant 3A - Rich step cards with mockups',
  description: 'Preview of homepage How It Works section, variant 3A. Not indexed.',
  path: '/preview/sections/howit-a',
  noindex: true,
});

export default function Page() {
  return (
    <PreviewShell label="Variant 3A · How It Works" title="Rich step cards with mini-mockups">
      <HowItWorksA />
    </PreviewShell>
  );
}
