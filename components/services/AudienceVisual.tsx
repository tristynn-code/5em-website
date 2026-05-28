'use client';

/**
 * Two illustrative visuals - one for franchisors ("multi-location oversight")
 * and one for franchisees ("single-location growth"). Used on the /services
 * "Who Each Service Is For" cards.
 */

export function FranchisorVisual() {
  return (
    <div
      className="w-full h-[120px] rounded-xl relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)',
        border: '1px solid rgba(0,190,157,.18)',
        padding: 14,
      }}
    >
      <svg viewBox="0 0 200 90" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* HQ node at top */}
        <g>
          <rect x="80" y="6" width="40" height="14" rx="3" fill="rgba(0,190,157,.18)" stroke="#00BE9D" strokeWidth="0.6" />
          <text x="100" y="15" textAnchor="middle" fill="#00BE9D" fontSize="6" fontWeight="800">
            HQ BRAND
          </text>
        </g>

        {/* Connecting lines */}
        {[20, 60, 100, 140, 180].map((x) => (
          <line key={x} x1="100" y1="20" x2={x} y2={42} stroke="rgba(0,190,157,.3)" strokeWidth="0.4" />
        ))}

        {/* Location nodes */}
        {[20, 60, 100, 140, 180].map((x, i) => (
          <g key={x}>
            <rect
              x={x - 12}
              y={42}
              width={24}
              height={16}
              rx={2.5}
              fill="rgba(255,255,255,.04)"
              stroke="rgba(255,255,255,.12)"
              strokeWidth="0.4"
            />
            <circle cx={x} cy={50} r="1.5" fill="#00BE9D" className="animate-pu" style={{ animationDelay: `${i * 0.2}s` }} />
          </g>
        ))}

        {/* Dashboard strip at bottom */}
        <g>
          <rect x="6" y="66" width="188" height="18" rx="2" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.08)" strokeWidth="0.4" />
          {[10, 35, 60, 85, 110, 135, 160, 185].map((x, i) => (
            <rect
              key={x}
              x={x}
              y={84 - (i % 3) * 3 - 4}
              width="2"
              height={4 + (i % 3) * 3}
              fill="#00BE9D"
              opacity={0.5 + (i % 3) * 0.2}
            />
          ))}
          <text x="100" y="78" textAnchor="middle" fill="rgba(255,255,255,.5)" fontSize="4.5" fontWeight="600">
            BRAND-WIDE PERFORMANCE
          </text>
        </g>
      </svg>
    </div>
  );
}

export function FranchiseeVisual() {
  return (
    <div
      className="w-full h-[120px] rounded-xl relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg,#0F1314 0%,#1D2637 100%)',
        border: '1px solid rgba(0,190,157,.18)',
        padding: 14,
      }}
    >
      <svg viewBox="0 0 200 90" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Single location card on left */}
        <g>
          <rect x="6" y="20" width="60" height="50" rx="4" fill="rgba(255,255,255,.05)" stroke="rgba(0,190,157,.35)" strokeWidth="0.5" />
          <text x="36" y="32" textAnchor="middle" fill="#00BE9D" fontSize="5" fontWeight="800">
            YOUR LOCATION
          </text>
          <circle cx="36" cy="48" r="9" fill="rgba(0,190,157,.12)" stroke="#00BE9D" strokeWidth="0.6" className="animate-pu" />
          <text x="36" y="51" textAnchor="middle" fill="#00BE9D" fontSize="6" fontWeight="800">
            1
          </text>
          <text x="36" y="63" textAnchor="middle" fill="rgba(255,255,255,.5)" fontSize="3.5">
            Austin South
          </text>
        </g>

        {/* Arrow */}
        <g>
          <line x1="72" y1="45" x2="92" y2="45" stroke="#00BE9D" strokeWidth="0.8" />
          <path d="M88,42 L92,45 L88,48" fill="none" stroke="#00BE9D" strokeWidth="0.8" />
        </g>

        {/* Growing lead chart on right */}
        <g>
          <rect x="98" y="20" width="96" height="50" rx="4" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" strokeWidth="0.4" />
          <text x="146" y="30" textAnchor="middle" fill="rgba(255,255,255,.5)" fontSize="4" fontWeight="600">
            LOCAL LEAD FLOW
          </text>
          <polyline
            points="105,62 115,58 125,52 135,48 145,42 155,38 165,32 175,28 185,22"
            fill="none"
            stroke="#00BE9D"
            strokeWidth="1.2"
          />
          {[105, 125, 145, 165, 185].map((x, i) => {
            const ys = [62, 52, 42, 32, 22];
            return <circle key={x} cx={x} cy={ys[i]} r="1.5" fill="#00BE9D" />;
          })}
          <text x="146" y="66" textAnchor="middle" fill="#00BE9D" fontSize="5" fontWeight="800">
            ▲ Up and to the right
          </text>
        </g>

        {/* Caption below */}
        <text x="100" y="84" textAnchor="middle" fill="rgba(255,255,255,.5)" fontSize="4" fontWeight="500">
          Hyper-local ads, UGC, follow-up
        </text>
      </svg>
    </div>
  );
}
