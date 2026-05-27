import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0F1314',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 70% 30%, rgba(0,190,157,.25) 0%, transparent 60%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            color: '#00BE9D',
            fontSize: 120,
            fontWeight: 800,
            letterSpacing: -6,
            lineHeight: 1,
            display: 'flex',
            position: 'relative',
          }}
        >
          5
        </div>
      </div>
    ),
    size,
  );
}
