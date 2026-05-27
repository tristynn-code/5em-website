import { jsonLd } from '@/lib/seo';

/** Render arbitrary JSON-LD as a server-rendered <script> tag in the document. */
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={jsonLd(data)}
    />
  );
}
