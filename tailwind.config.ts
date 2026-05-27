import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#00BE9D',
          hover: '#00D4AE',
          bg: 'rgba(0,190,157,.06)',
          bd: 'rgba(0,190,157,.15)',
          glow: 'rgba(0,190,157,.08)',
        },
        dk: {
          DEFAULT: '#0F1314',
          2: '#161a1b',
          3: '#1D2637',
        },
        wh: '#FFFFFF',
        off: '#F7F7F7',
        tx: {
          DEFAULT: '#1a1a1a',
          2: '#444',
          3: '#777',
        },
        bd: 'rgba(0,0,0,.07)',
        glass: 'rgba(255,255,255,.55)',
        glassborder: 'rgba(255,255,255,.25)',
        glassdark: 'rgba(255,255,255,.06)',
        glassdborder: 'rgba(255,255,255,.1)',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '16px',
        l: '24px',
        s: '12px',
      },
      maxWidth: {
        mx: '1200px',
      },
      animation: {
        pu: 'pu 2s infinite',
        brandscroll: 'brandscroll 35s linear infinite',
        subtlePulse: 'subtlePulse 3s ease infinite',
        gr: 'gr 1.8s ease-out forwards',
      },
      keyframes: {
        pu: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.3' },
        },
        brandscroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        subtlePulse: {
          '0%, 100%': { boxShadow: '0 6px 24px rgba(0,190,157,.15)' },
          '50%': { boxShadow: '0 6px 32px rgba(0,190,157,.3)' },
        },
        gr: {
          from: { width: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
