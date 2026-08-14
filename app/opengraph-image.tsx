import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Fifth Element — Franchise Marketing Agency';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Plus Jakarta Sans TTFs from jsDelivr's Fontsource mirror - stable, public,
// version-pinned URLs that work in the Vercel edge runtime.
const JAKARTA_700 =
  'https://cdn.jsdelivr.net/fontsource/fonts/plus-jakarta-sans@latest/latin-700-normal.ttf';
const JAKARTA_800 =
  'https://cdn.jsdelivr.net/fontsource/fonts/plus-jakarta-sans@latest/latin-800-normal.ttf';
const JAKARTA_500 =
  'https://cdn.jsdelivr.net/fontsource/fonts/plus-jakarta-sans@latest/latin-500-normal.ttf';

export default async function OpenGraphImage() {
  // Fetch the actual brand font so the social preview matches the live site.
  const [bold, extraBold, medium] = await Promise.all([
    fetch(JAKARTA_700).then(r => r.arrayBuffer()),
    fetch(JAKARTA_800).then(r => r.arrayBuffer()),
    fetch(JAKARTA_500).then(r => r.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0F1314 0%, #1D2637 100%)',
          display: 'flex',
          flexDirection: 'column',
          padding: 70,
          position: 'relative',
          fontFamily: 'Jakarta',
        }}
      >
        {/* Subtle teal radial accent in upper right corner */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 520,
            height: 520,
            background:
              'radial-gradient(circle, rgba(0,190,157,.18) 0%, transparent 65%)',
            display: 'flex',
          }}
        />

        {/* Bottom-right subtle bar-chart pattern (mirrors the hero dashboard) */}
        <div
          style={{
            position: 'absolute',
            right: 60,
            bottom: 60,
            display: 'flex',
            alignItems: 'flex-end',
            gap: 5,
            opacity: 0.18,
          }}
        >
          {[28, 42, 36, 54, 48, 65, 58, 78, 72, 90, 84, 100].map((h, i) => (
            <div
              key={i}
              style={{
                width: 8,
                height: h * 1.4,
                background: '#00BE9D',
                borderRadius: 2,
                display: 'flex',
              }}
            />
          ))}
        </div>

        {/* TOP ROW - brand mark + wordmark + insight engine pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {/* Real brand "5" mark - extracted from /app/icon.svg paths */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 56,
                height: 56,
                borderRadius: 12,
                background: 'rgba(0,190,157,.12)',
                border: '1px solid rgba(0,190,157,.35)',
              }}
            >
              <svg width="36" height="36" viewBox="0 0 200.976259728 200.976259728">
                <path
                  fill="#00BE9D"
                  d="M145.0135033565,99.3209218249l-6.2964263862,30.5935858894c-.9893382054,4.8070765072-5.2211890558,8.2566708487-10.1290169491,8.2566708487H49.3602187925c-.4626082791,0-.804519058-.422392147-.7079806994-.8729699593l3.6444703507-16.9270141993c.7160337466-3.3226676379,3.6525233979-4.3041573188,7.0516213285-4.3041573188h50.1818762437c.0160815424,0,.0361896085,0,.0522957029-.0040265236.0031993531.0002911731.0063987061.0005612903.0095980592.0008118744,1.7818783275.1395627009,3.4910709437-.9092675379,4.1771394484-2.5596850997,1.3351930324-3.2119620915-.9757127771-6.2898630829-4.0137688563-6.3149955545h-.0402406841c-.0603241982-.0040265236-.1246994719-.0040265236-.1850236701-.0040265236h-53.3975446777c-.5124581948,0-.894303641-.4727279886-.7865243753-.9737240278l2.1357027022-9.9274993875c.7160337466-3.3226676379,3.6525233979-5.6919821562,7.0516213284-5.6919821562h73.4284455863c4.5937969467,0,8.0170294669,4.2358046254,7.0515967765,8.7290121379Z"
                />
                <path
                  fill="#00BE9D"
                  d="M152.3219999065,63.7842305526l-2.5779081576,11.9796022226c-.7236370559,3.3627590871-3.696648793,5.7640612728-7.1363870485,5.7640612728H61.3165522412c-.5124913391,0-.8943439974-.4727855781-.7865073449-.9738031716l2.5945059475-12.0542792886c.7154421079-3.3233757928,3.6522375828-5.6947304228,7.0506052032-5.6947304228h81.3559846997c.5153084939,0,.8992675019.4753731721.7908591598.9791493876Z"
                />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span
                style={{
                  color: '#FFFFFF',
                  fontSize: 22,
                  fontWeight: 800,
                  letterSpacing: -0.5,
                  display: 'flex',
                }}
              >
                Fifth Element
              </span>
              <span
                style={{
                  color: 'rgba(255,255,255,.5)',
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  display: 'flex',
                }}
              >
                Franchise Marketing Agency
              </span>
            </div>
          </div>

          {/* Insight Engine pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 18px',
              borderRadius: 100,
              background: 'rgba(0,190,157,.1)',
              border: '1px solid rgba(0,190,157,.3)',
              position: 'relative',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                background: '#00BE9D',
                boxShadow: '0 0 12px #00BE9D',
                display: 'flex',
              }}
            />
            <span
              style={{
                color: '#00BE9D',
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                display: 'flex',
              }}
            >
              5E Insight Engine
            </span>
          </div>
        </div>

        {/* CENTER - hero headline (matches live homepage) */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              color: '#FFFFFF',
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -3.5,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span style={{ display: 'flex' }}>We Don&apos;t Do Generic.</span>
            <span style={{ display: 'flex' }}>
              We Do{' '}
              <span style={{ color: '#00BE9D', marginLeft: 18, display: 'flex' }}>
                Franchise.
              </span>
            </span>
          </div>
          <div
            style={{
              marginTop: 28,
              color: 'rgba(255,255,255,.65)',
              fontSize: 24,
              fontWeight: 500,
              lineHeight: 1.4,
              display: 'flex',
              maxWidth: 850,
            }}
          >
            Predictable local lead flow, UGC-powered creative, and AI-driven insights for 300+ franchise locations.
          </div>
        </div>

        {/* BOTTOM - URL */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            paddingTop: 28,
            borderTop: '1px solid rgba(255,255,255,.08)',
          }}
        >
          <span
            style={{
              color: '#FFFFFF',
              fontSize: 22,
              fontWeight: 700,
              display: 'flex',
            }}
          >
            5them.com
          </span>
          <span
            style={{
              color: 'rgba(255,255,255,.45)',
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: 2,
              textTransform: 'uppercase',
              display: 'flex',
            }}
          >
            Book Your Free Audit
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Jakarta', data: medium, weight: 500, style: 'normal' },
        { name: 'Jakarta', data: bold, weight: 700, style: 'normal' },
        { name: 'Jakarta', data: extraBold, weight: 800, style: 'normal' },
      ],
    },
  );
}
