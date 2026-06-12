'use client';

import { useEffect, useState } from 'react';
import type { Insight } from './insights';

interface Props {
  insight: Insight;
  /** Optional override on chars-per-tick. Higher = faster. Default 3. */
  charsPerTick?: number;
  /** Optional override on tick interval ms. Default 25. */
  tickMs?: number;
}

/**
 * Types out an insight string one chunk at a time, then settles.
 * Restarts whenever the `insight` prop changes (key on the parent works too).
 * Shows a blinking caret while typing.
 */
export default function InsightTyper({ insight, charsPerTick = 3, tickMs = 25 }: Props) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    setShown(0);
    const id = setInterval(() => {
      setShown(prev => {
        const next = prev + charsPerTick;
        if (next >= insight.text.length) {
          clearInterval(id);
          return insight.text.length;
        }
        return next;
      });
    }, tickMs);
    return () => clearInterval(id);
  }, [insight, charsPerTick, tickMs]);

  const typing = shown < insight.text.length;

  return (
    <div>
      <div
        className="text-[10px] uppercase font-extrabold text-teal mb-2"
        style={{ letterSpacing: '.14em' }}
      >
        {insight.brand}
      </div>
      <p className="text-white/85 leading-relaxed" style={{ fontSize: 14 }}>
        {insight.text.slice(0, shown)}
        <span
          className="inline-block w-[2px] h-[14px] bg-teal align-middle ml-0.5"
          style={{
            opacity: typing ? undefined : 0,
            animation: typing ? 'cursorBlink 1s steps(2) infinite' : undefined,
            transform: 'translateY(-1px)',
          }}
        />
      </p>
    </div>
  );
}
