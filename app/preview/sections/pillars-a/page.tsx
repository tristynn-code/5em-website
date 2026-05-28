import type { Metadata } from 'next';
import ThreePillarSystemA from '@/components/preview/ThreePillarSystemA';
import PreviewShell from '@/components/preview/PreviewShell';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Variant 2A - Premium dark pillar cards',
  description: 'Preview of homepage 3-Pillar section, variant 2A. Not indexed.',
  path: '/preview/sections/pillars-a',
  noindex: true,
});

export default function Page() {
  return (
    <PreviewShell label="Variant 2A · Pillars" title="Premium dark cards with larger interactive mockups">
      <ThreePillarSystemA />
    </PreviewShell>
  );
}
