/**
 * Illustrative AI insight examples for the hero-ai preview variants.
 * NOT REAL DATA - these are hand-crafted to show what the 5E Insight Engine
 * is supposed to feel like when it ships: hyper-specific, brand-named,
 * actionable, and looped back into creative + deployment decisions.
 */

export type DataView = 'leadFlow' | 'creative' | 'audience' | 'performance';

export interface Insight {
  /** Which dashboard "view" lights up while this insight types. */
  view: DataView;
  /** Brand + location stamp on the insight card. */
  brand: string;
  /** The body of the insight - what the AI agent "says". */
  text: string;
  /** Headline metric paired with the insight in the dashboard area. */
  metric: { label: string; value: string };
  /** Mock ad creative spawned by this insight (gradient + label). */
  spawned: { gradient: string; label: string };
}

export const insights: Insight[] = [
  {
    view: 'creative',
    brand: 'Pilates Addiction · Vintage Park',
    text:
      'Top hook is the strip-mall entrance reveal in the first 2 seconds. That hyper-local visual cue stops the scroll. Spinning 8 more landmark-first variants for nearby franchisees.',
    metric: { label: 'CPL', value: '$9.40' },
    spawned: { gradient: 'linear-gradient(135deg,#00be9d,#1D2637)', label: 'PILATES · 0:02' },
  },
  {
    view: 'audience',
    brand: 'IMAGE Studios · Houston',
    text:
      'Barber-specific creative outperformed brand spot by 47%. Audience-narrative match + barber-suite reveal. Generating 6 vertical-niche variants for nail and esthetician markets.',
    metric: { label: 'Lift', value: '+47%' },
    spawned: { gradient: 'linear-gradient(135deg,#f093fb,#764ba2)', label: 'IMAGE · BARBER' },
  },
  {
    view: 'leadFlow',
    brand: 'BODY20 · Austin',
    text:
      'UGC-024 (founder talking sweat science) drove 31% of new leads this week. Auto-deploying as variant in 4 sister markets. CSM notified for franchisee shoot brief.',
    metric: { label: 'Volume', value: '+31%' },
    spawned: { gradient: 'linear-gradient(135deg,#c1272d,#8b1a1f)', label: 'BODY20 · UGC-024' },
  },
  {
    view: 'performance',
    brand: 'beem Light Sauna · Boynton',
    text:
      'Skin-close-up creative outperformed wellness lifestyle shots 3.2x. Synthesizing 4 dermatology-angle variants via Higgsfield. Franchisee tagged for talking-head capture.',
    metric: { label: 'CTR', value: '3.2x' },
    spawned: { gradient: 'linear-gradient(135deg,#fa709a,#fee140)', label: 'BEEM · SKIN' },
  },
  {
    view: 'creative',
    brand: 'iFlex · Phoenix',
    text:
      'Stretch-pose clip works but only after 30s view time. Cutting 4 short-form retargeting variants, same pose, sub-15-second runtime. Deploying tomorrow.',
    metric: { label: 'View Through', value: '+18%' },
    spawned: { gradient: 'linear-gradient(135deg,#4facfe,#00f2fe)', label: 'IFLEX · STRETCH' },
  },
  {
    view: 'audience',
    brand: 'Scramblers Golf · Tampa',
    text:
      'Membership ad with 8am tee-time visual converted 2.1x against the generic. Local sunrise + course shot = scroll stopper. Coaching 3 franchisees for similar local-time captures.',
    metric: { label: 'Conv', value: '2.1x' },
    spawned: { gradient: 'linear-gradient(135deg,#667eea,#764ba2)', label: 'SCRAM · 8AM' },
  },
];

export const dataViewLabel: Record<DataView, string> = {
  leadFlow: 'Lead Flow',
  creative: 'Creative Library',
  audience: 'Audience Targeting',
  performance: 'Performance',
};
