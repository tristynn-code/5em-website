import type { Metadata } from 'next';
import ProblemSectionB from '@/components/preview/ProblemSectionB';
import PreviewShell from '@/components/preview/PreviewShell';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Variant 1B - 3 broken-state mockup cards',
  description: 'Preview of homepage Problem section, variant 1B. Not indexed.',
  path: '/preview/sections/problem-b',
  noindex: true,
});

export default function Page() {
  return (
    <PreviewShell label="Variant 1B · Problem" title="3 broken-state mockup cards">
      <ProblemSectionB />
    </PreviewShell>
  );
}
