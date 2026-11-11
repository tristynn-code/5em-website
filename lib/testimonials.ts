/**
 * Single source of truth for every client testimonial on the site.
 *
 * Two kinds, two files:
 *  - content/testimonials-video.json   vertical video testimonials recorded by
 *    owners in the Fifth Element client portal, transcoded for the web and
 *    served from Supabase storage. Each has a poster frame and a square
 *    avatar crop pulled from the owner's own video, so every card can show a
 *    face without us chasing headshots.
 *  - content/testimonials-written.json written reviews (Pulse CSAT responses
 *    plus the archive of owner quotes we've collected since 2024).
 *
 * Every entry carries the owner's name and the studio they run, which is the
 * thing that makes a testimonial credible on a franchise marketing site.
 */
import videoData from '@/content/testimonials-video.json';
import writtenData from '@/content/testimonials-written.json';
import partners from '@/content/partners.json';

export interface VideoTestimonial {
  id: string;
  /** Owner's name as they consented to have it shown (some chose first-name only). */
  name: string;
  /** The studio/location they run, e.g. "IMAGE Studios Bakersfield". */
  business: string;
  /** Franchise brand, matched to content/partners.json for the accent colour. */
  brand: string;
  seconds: number;
  vertical: boolean;
  video: string;
  poster: string;
  avatar: string;
}

export interface WrittenTestimonial {
  id: string;
  name: string;
  brand: string;
  /** City, State - blank string when we only know the brand. */
  location: string;
  quote: string;
  /** Real headshot URL, or null to fall back to an initials chip. */
  avatar: string | null;
  featured: boolean;
}

const videos = videoData as VideoTestimonial[];
const written = writtenData as WrittenTestimonial[];

/** Brand accent lookup, reusing the partner palette so colours never drift. */
const ACCENTS: Record<string, string> = Object.fromEntries(
  (partners as Array<{ name: string; accent: string }>).map(p => [p.name, p.accent])
);

export function brandAccent(brand: string): string {
  return ACCENTS[brand] ?? '#00BE9D';
}

/**
 * Videos, shortest first. A 40-second clip is what gets someone to watch a
 * second one; the nine-minute deep dives sit further down the feed.
 */
export function getVideoTestimonials(): VideoTestimonial[] {
  return [...videos].sort((a, b) => a.seconds - b.seconds);
}

/** The homepage rail - short, punchy, one per studio. */
export function getFeaturedVideos(limit = 8): VideoTestimonial[] {
  return getVideoTestimonials().slice(0, limit);
}

export function getWrittenTestimonials(): WrittenTestimonial[] {
  // Entries with a real headshot read better, so they lead.
  return [...written].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    if (!!a.avatar !== !!b.avatar) return a.avatar ? -1 : 1;
    return 0;
  });
}

export function getFeaturedWritten(limit?: number): WrittenTestimonial[] {
  const f = getWrittenTestimonials().filter(t => t.featured);
  return limit ? f.slice(0, limit) : f;
}

/** Every brand that actually has a testimonial, for the page's filter row. */
export function getTestimonialBrands(): string[] {
  const seen = new Set<string>();
  [...videos, ...written].forEach(t => seen.add(t.brand));
  // Keep partners.json order so the filters match the rest of the site.
  const ordered = (partners as Array<{ name: string }>)
    .map(p => p.name)
    .filter(n => seen.has(n));
  const extras = [...seen].filter(n => !ordered.includes(n));
  return [...ordered, ...extras];
}

export function testimonialCounts() {
  return {
    video: videos.length,
    written: written.length,
    total: videos.length + written.length,
    brands: getTestimonialBrands().length,
  };
}

/** "1:42" / "9:48" - duration badge on every video card. */
export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}
