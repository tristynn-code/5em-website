import type { Stat } from './types';

/**
 * Network-wide proof numbers for the /case-studies index. Every value here is
 * pulled from the Fifth Element reporting database (the same numbers owners
 * see on their dashboards); update the note's date when they are refreshed.
 */
export const NETWORK_STATS: { items: Stat[]; note: string } = {
  items: [
    { value: '102,061', label: 'Leads generated', sub: 'For franchise locations since Jan 2025' },
    { value: '$2.02M', label: 'Paid media managed', sub: 'Meta and Google, on record' },
    { value: '7', label: 'Franchise brands', sub: 'Fitness, wellness, salon suites, longevity' },
    { value: '170', label: 'Memberships in one day', sub: 'A Pilates Addiction record, Jun 2026' },
  ],
  note: 'Source: Fifth Element reporting database, Meta Ads Manager and Google Ads data, January 1, 2025 to October 20, 2026. A lead is a Meta-attributed lead for a franchise location. Membership count reported by the studio owner. Data refreshed October 22, 2026.',
};
