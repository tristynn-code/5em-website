import partners from '@/content/partners.json';
import type { BrandId } from './types';

export interface BrandMeta {
  id: BrandId;
  name: string;
  vertical: string;
  logo?: string;
  logoWhite?: string;
  logoHeight: number;
  photo?: string;
  photoPosition?: string;
  accent: string;
}

/** Brand display order on the index page. */
export const BRAND_ORDER: BrandId[] = [
  'pilates-addiction',
  'iflex',
  'ultimate-longevity-center',
  'body20',
  'image-studios',
  'beem-light-sauna',
  'scramblers-golf',
  'network',
];

const NETWORK: BrandMeta = {
  id: 'network',
  name: 'Across the Network',
  vertical: 'Learnings from every account we run',
  logoHeight: 0,
  accent: '#00BE9D',
};

export function getBrandMeta(id: BrandId): BrandMeta {
  if (id === 'network') return NETWORK;
  const p = partners.find(x => x.id === id);
  if (!p) throw new Error(`Unknown case study brand: ${id}`);
  return {
    id,
    name: p.name,
    vertical: p.vertical,
    logo: p.logo,
    logoWhite: p.logoWhite,
    logoHeight: p.logoHeight,
    photo: p.photo,
    photoPosition: p.photoPosition,
    accent: p.accent,
  };
}
