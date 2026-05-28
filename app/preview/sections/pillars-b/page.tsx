import type { Metadata } from 'next';
import ThreePillarSystemB from '@/components/preview/ThreePillarSystemB';
import PreviewShell from '@/components/preview/PreviewShell';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Variant 2B - Tabbed full-width pillar demo',
  description: 'Preview of homepage 3-Pillar section, variant 2B. Not indexed.',
  path: '/preview/sections/pillars-b',
  noindex: true,
});

export default function Page() {
  return (
    <PreviewShell label="Variant 2B · Pillars" title="Tabbed full-width interactive demo">
      <ThreePillarSystemB />
    </PreviewShell>
  );
}
