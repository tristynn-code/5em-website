import { ReactNode } from 'react';

export type MediaSize = 'sm' | 'md' | 'lg';

interface Props {
  /** YouTube URL/ID, Loom URL/ID, or absolute image URL. */
  src: string;
  /** Alt text for images / accessible title for videos. */
  alt: string;
  /** Width preset. sm = inset, md = column-width (default), lg = wider than body. */
  size?: MediaSize;
  /** Optional caption rendered below the embed. */
  caption?: ReactNode;
  /** Override aspect ratio. Defaults: 16/9 for video, 16/10 for images. */
  aspectRatio?: string;
}

/**
 * Reusable media embed for blog + case study content.
 * - YouTube URLs (`youtube.com/watch?v=`, `youtu.be/`, `youtube.com/embed/`) → responsive iframe
 * - Loom URLs (`loom.com/share/` or `loom.com/embed/`) → responsive iframe
 * - Anything else → treated as image URL
 *
 * All three flavors share the same rounded-corner / shadow treatment so videos
 * and photos feel consistent inline.
 */
export default function MediaEmbed({ src, alt, size = 'md', caption, aspectRatio }: Props) {
  const kind = detectKind(src);
  const embedUrl = kind === 'youtube' ? toYouTubeEmbed(src) : kind === 'loom' ? toLoomEmbed(src) : src;
  const defaultAspect = kind === 'image' ? '16 / 10' : '16 / 9';
  const finalAspect = aspectRatio ?? defaultAspect;

  const sizeClass: Record<MediaSize, string> = {
    sm: 'max-w-[420px]',
    md: 'max-w-[760px]',
    lg: 'max-w-[1040px]',
  };

  return (
    <figure className={`${sizeClass[size]} mx-auto my-10`}>
      <div
        className="rounded-l overflow-hidden bg-off border border-bd shadow-[0_24px_60px_rgba(0,0,0,.08)]"
        style={{ aspectRatio: finalAspect }}
      >
        {kind === 'image' ? (
          <img src={embedUrl} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <iframe
            src={embedUrl}
            title={alt}
            className="w-full h-full block"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
          />
        )}
      </div>
      {caption && (
        <figcaption className="text-[13px] text-tx-3 text-center mt-3 italic">{caption}</figcaption>
      )}
    </figure>
  );
}

function detectKind(src: string): 'youtube' | 'loom' | 'image' {
  if (/(?:youtube\.com|youtu\.be)/i.test(src)) return 'youtube';
  if (/loom\.com/i.test(src)) return 'loom';
  return 'image';
}

function toYouTubeEmbed(url: string): string {
  // Already an embed URL
  if (/youtube\.com\/embed\//.test(url)) return url;
  // Short youtu.be/<id>
  const shortMatch = url.match(/youtu\.be\/([A-Za-z0-9_-]+)/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
  // youtube.com/watch?v=<id>
  const watchMatch = url.match(/[?&]v=([A-Za-z0-9_-]+)/);
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
  return url;
}

function toLoomEmbed(url: string): string {
  // Already an embed URL
  if (/loom\.com\/embed\//.test(url)) return url;
  // loom.com/share/<id>
  const match = url.match(/loom\.com\/share\/([A-Za-z0-9]+)/);
  if (match) return `https://www.loom.com/embed/${match[1]}`;
  return url;
}
