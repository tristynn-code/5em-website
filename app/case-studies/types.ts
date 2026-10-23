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

/** One piece of real work shown inside a study: an ad, a coaching doc page, a landing page. */
export interface CreativeItem {
  /** video = an ad video (shown in a phone frame); image = a static ad or photo;
      document = a coaching doc or report page; page = a landing page screenshot. */
  kind: 'video' | 'image' | 'document' | 'page';
  /** Path under /public, e.g. "/case-studies/<slug>/ad-1.mp4". */
  src: string;
  /** Still frame for videos (also used in the PDF). */
  poster?: string;
  alt: string;
  /** Short name, e.g. "Coming Soon flyer ad". */
  label: string;
  /** The result, e.g. "409 leads at $7.84". */
  stat?: string;
  /** Window or context for the stat. */
  note?: string;
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
  | { type: 'creative'; title: string; caption?: string; items: CreativeItem[] }
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
  /** Study-specific cover photo (card + hero). Falls back to the brand photo. */
  cover?: { src: string; alt: string; position?: string };
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
