import type { Metadata } from 'next';
import ProblemSectionA from '@/components/preview/ProblemSectionA';
import PreviewShell from '@/components/preview/PreviewShell';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Variant 1A - Split-screen agency comparison',
  description: 'Preview of homepage Problem section, variant 1A. Not indexed.',
  path: '/preview/sections/problem-a',
  noindex: true,
});

export default function Page() {
  return (
    <PreviewShell label="Variant 1A · Problem" title="Split-screen agency comparison">
      <ProblemSectionA />
    </PreviewShell>
  );
}
