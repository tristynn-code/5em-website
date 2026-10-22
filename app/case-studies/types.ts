/**
 * Case study content model. Each study lives in its own file under
 * app/case-studies/studies/ and is registered in studies.ts. The index page,
 * the /case-studies/[slug] detail pages, the homepage grid, and the sitemap
 * all read from that one list.
 *
 * Inline text in any string field supports **bold** (rendered as <strong>).
 */

export type BrandId =
  | 'pilates-addiction'
  | 'body20'
  | 'iflex'
  | 'image-studios'
  | 'beem-light-sauna'
  | 'ultimate-longevity-center'
  | 'scramblers-golf'
  | 'network';

export interface Stat {
  value: string;
  label: string;
  sub?: string;
}

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string; kicker?: string }
  | { type: 'h3'; text: string }
  | { type: 'list'; items: { title?: string; text: string }[] }
  | { type: 'steps'; items: { title: string; text: string }[] }
  | { type: 'quote'; text: string; name: string; role: string }
  | { type: 'stats'; items: Stat[] }
  | { type: 'callout'; title: string; text: string }
  | {
      type: 'chart';
      title: string;
      subtitle?: string;
      /** Prefix for values in labels and the table, e.g. "$". */
      prefix?: string;
      /** Suffix for values, e.g. " leads". */
      suffix?: string;
      data: { label: string; value: number; highlight?: boolean }[];
      note?: string;
    }
  | { type: 'table'; columns: string[]; rows: string[][]; caption?: string }
  | { type: 'cta' };

export interface CaseStudy {
  slug: string;
  /** "result" = one account's outcome. "playbook" = a learning across many accounts. */
  kind: 'result' | 'playbook';
  brand: BrandId;
  brandName: string;
  vertical: string;
  /** e.g. "Houston, TX". Omit for network-wide studies. */
  location?: string;
  /** H1. Wrap the part to highlight in teal with [[double brackets]]. */
  title: string;
  /** One or two sentences under the title. */
  dek: string;
  /** Short title for cards. Falls back to title. */
  cardTitle?: string;
  /** 1-2 sentence card summary. */
  summary: string;
  /** ISO date. */
  published: string;
  readTime: string;
  /** 3-4 headline numbers shown under the hero. */
  heroStats: Stat[];
  /** Card chips. */
  tags: string[];
  timeline?: { when: string; title: string; text: string }[];
  stack?: string[];
  body: Block[];
  /** Data provenance line shown at the end of the article. */
  sources: string;
  /** Featured rank: 1 is the lead card on the index and homepage. Omit if not featured. */
  featured?: number;
  /** Lower number sorts first within a brand. */
  order?: number;
  seoKeywords?: string[];
}
