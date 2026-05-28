import type { Metadata } from 'next';
import HowItWorksB from '@/components/preview/HowItWorksB';
import PreviewShell from '@/components/preview/PreviewShell';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Variant 3B - Vertical scroll-fill timeline',
  description: 'Preview of homepage How It Works section, variant 3B. Not indexed.',
  path: '/preview/sections/howit-b',
  noindex: true,
});

export default function Page() {
  return (
    <PreviewShell label="Variant 3B · How It Works" title="Scroll-fill vertical timeline">
      <HowItWorksB />
    </PreviewShell>
  );
}
