import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '5th Element Media — Franchise Marketing Agency';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0F1314',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at 80% 20%, rgba(0,190,157,.18) 0%, transparent 60%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            color: '#00BE9D',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: 'uppercase',
            display: 'flex',
            position: 'relative',
          }}
        >
          5th Element Media
        </div>
        <div style={{ flex: 1, display: 'flex', position: 'relative' }} />
        <div
          style={{
            color: '#FFFFFF',
            fontSize: 84,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -3,
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex' }}>The Franchise</div>
          <div style={{ display: 'flex' }}>
            Marketing Agency.
          </div>
        </div>
        <div
          style={{
            marginTop: 24,
            color: 'rgba(255,255,255,.7)',
            fontSize: 26,
            fontWeight: 500,
            display: 'flex',
            maxWidth: 800,
          }}
        >
          Predictable lead flow, UGC creative, AI-driven insights for 100+ franchise locations.
        </div>
        <div
          style={{
            marginTop: 32,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            color: '#00BE9D',
            fontSize: 22,
            fontWeight: 700,
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              borderRadius: 22,
              background: '#00BE9D',
              color: '#0F1314',
              fontSize: 24,
              fontWeight: 800,
            }}
          >
            5
          </div>
          5them.com
        </div>
      </div>
    ),
    size,
  );
}
