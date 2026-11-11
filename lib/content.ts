import brandsData from '@/content/brands.json';
import verticalsData from '@/content/verticals.json';
import problemsData from '@/content/problems.json';
import pillarsData from '@/content/pillars.json';
import audiencesData from '@/content/audiences.json';
import valuesData from '@/content/values.json';
import teamData from '@/content/team.json';

export interface Brand {
  id: string;
  name: string;
  category: string;
  logo: string;
  tag: string;
  displaySize: 'standard' | 'xl';
}

export interface Vertical {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
}

export interface Problem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Pillar {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  viz: 'line' | 'creative' | 'bars';
}

export interface Audience {
  id: string;
  title: string;
  description: string;
}

export interface Value {
  number: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

export function getBrands(): Brand[] {
  return brandsData as Brand[];
}

export function getVerticals(): Vertical[] {
  return verticalsData as Vertical[];
}

export function getProblems(): Problem[] {
  return problemsData as Problem[];
}

export function getPillars(): Pillar[] {
  return pillarsData as Pillar[];
}

export function getAudiences(): Audience[] {
  return audiencesData as Audience[];
}

export function getValues(): Value[] {
  return valuesData as Value[];
}

export function getTeam(): TeamMember[] {
  return teamData as TeamMember[];
}
