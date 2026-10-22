import { Fragment } from 'react';

/**
 * Renders the tiny inline markup case study strings use:
 *   **bold**        -> <strong>
 *   [[highlight]]   -> teal accent (titles)
 */
export default function RichText({ text, strongClassName = 'text-tx' }: { text: string; strongClassName?: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[\[[^\]]+\]\])/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className={`font-bold ${strongClassName}`}>
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith('[[') && part.endsWith(']]')) {
          return (
            <em key={i} className="not-italic text-teal">
              {part.slice(2, -2)}
            </em>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

/** Plain-text version for meta tags and JSON-LD. */
export function plainText(text: string) {
  return text.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[\[([^\]]+)\]\]/g, '$1');
}
