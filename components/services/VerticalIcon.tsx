/**
 * Tiny mono-line SVG icons for each industry vertical.
 * Used on the /services "Verticals We Dominate" strip so each link has
 * a distinguishing glyph instead of being plain text.
 */

const common = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export default function VerticalIcon({ href }: { href: string }) {
  switch (href) {
    case '/fitness-franchises':
      // Dumbbell
      return (
        <svg {...common} aria-hidden>
          <line x1="3" y1="12" x2="21" y2="12" />
          <rect x="2" y="8" width="3" height="8" rx="1" />
          <rect x="19" y="8" width="3" height="8" rx="1" />
          <rect x="6" y="10" width="2" height="4" rx="0.5" />
          <rect x="16" y="10" width="2" height="4" rx="0.5" />
        </svg>
      );
    case '/salon-suites':
      // Scissors
      return (
        <svg {...common} aria-hidden>
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      );
    case '/wellness-franchises':
      // Heart pulse / lotus
      return (
        <svg {...common} aria-hidden>
          <path d="M3 12h4l2-6 4 12 2-6h6" />
          <circle cx="3" cy="12" r="0.5" fill="currentColor" />
        </svg>
      );
    case '/beauty-aesthetics':
      // Sparkle
      return (
        <svg {...common} aria-hidden>
          <path d="M12 2v6M12 16v6M2 12h6M16 12h6" />
          <path d="M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
        </svg>
      );
    case '/home-services':
      // House with wrench
      return (
        <svg {...common} aria-hidden>
          <path d="M3 11l9-8 9 8" />
          <path d="M5 9.5V21h14V9.5" />
          <path d="M10 21v-6h4v6" />
        </svg>
      );
    case '/lifestyle-entertainment':
      // Flag / star
      return (
        <svg {...common} aria-hidden>
          <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
        </svg>
      );
    default:
      return null;
  }
}
