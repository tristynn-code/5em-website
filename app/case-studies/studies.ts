/**
 * Single source of truth for all case studies. Used by the /case-studies index,
 * each /case-studies/[slug] page, the homepage grid, and the sitemap.
 *
 * To add a study: create app/case-studies/studies/<slug>.ts exporting a
 * CaseStudy, then import it into STUDIES below. Every number in a study must
 * trace to a source (the research files behind it live outside this repo).
 */
import { BRAND_ORDER } from './brands';
import type { BrandId, CaseStudy } from './types';
import { study as beemLightSaunaVancouverSwitch } from './studies/beem-light-sauna-vancouver-switch';
import { study as body20HoustonGalleriaTurnaround } from './studies/body20-houston-galleria-turnaround';
import { study as body20PonteVedraHalfTheBrandMedian } from './studies/body20-ponte-vedra-half-the-brand-median';
import { study as budgetSprintsPlaybook } from './studies/budget-sprints-playbook';
import { study as contentCoachingPlaybook } from './studies/content-coaching-playbook';
import { study as fourMetricsDiagnosticPlaybook } from './studies/four-metrics-diagnostic-playbook';
import { study as iflexHighlandGreenspotLaunch } from './studies/iflex-highland-greenspot-launch';
import { study as iflexLocalContentAndFatigue } from './studies/iflex-local-content-and-fatigue';
import { study as imageStudiosBakersfieldFullBeforeGrandOpening } from './studies/image-studios-bakersfield-full-before-grand-opening';
import { study as imageStudiosHoustonMemorialCypress } from './studies/image-studios-houston-memorial-cypress';
import { study as imageStudiosRichardsonWest37Of38 } from './studies/image-studios-richardson-west-37-of-38';
import { study as imageStudiosRockHillMyrtleBeach } from './studies/image-studios-rock-hill-myrtle-beach';
import { study as imageStudiosSmallBudgetPlaybook } from './studies/image-studios-small-budget-playbook';
import { study as landingPageTestsPlaybook } from './studies/landing-page-tests-playbook';
import { study as pilatesAddictionAfterFoundersDay } from './studies/pilates-addiction-after-founders-day';
import { study as pilatesAddictionAnnArborAgencySwitch } from './studies/pilates-addiction-ann-arbor-agency-switch';
import { study as pilatesAddictionFoundersDayPlaybook } from './studies/pilates-addiction-founders-day-playbook';
import { study as pilatesAddictionInstantFormsConversionFix } from './studies/pilates-addiction-instant-forms-conversion-fix';
import { study as pilatesAddictionPacifica165Members31k } from './studies/pilates-addiction-pacifica-165-members-31k';
import { study as pilatesAddictionVintagePark170Memberships } from './studies/pilates-addiction-vintage-park-170-memberships';
import { study as sequelBrandsFranchisorPlaybook } from './studies/sequel-brands-franchisor-playbook';
import { study as ultimateLongevityCenterCherryKnollsFastestStart } from './studies/ultimate-longevity-center-cherry-knolls-fastest-start';
import { study as ultimateLongevityCenterEastBocaFoundingWeek } from './studies/ultimate-longevity-center-east-boca-founding-week';
import { study as ultimateLongevityCenterLandingPageThatTeaches } from './studies/ultimate-longevity-center-landing-page-that-teaches';
import { study as ultimateLongevityCenterPresaleLaunches } from './studies/ultimate-longevity-center-presale-launches';

const STUDIES: CaseStudy[] = [
  beemLightSaunaVancouverSwitch,
  body20HoustonGalleriaTurnaround,
  body20PonteVedraHalfTheBrandMedian,
  budgetSprintsPlaybook,
  contentCoachingPlaybook,
  fourMetricsDiagnosticPlaybook,
  iflexHighlandGreenspotLaunch,
  iflexLocalContentAndFatigue,
  imageStudiosBakersfieldFullBeforeGrandOpening,
  imageStudiosHoustonMemorialCypress,
  imageStudiosRichardsonWest37Of38,
  imageStudiosRockHillMyrtleBeach,
  imageStudiosSmallBudgetPlaybook,
  landingPageTestsPlaybook,
  pilatesAddictionAfterFoundersDay,
  pilatesAddictionAnnArborAgencySwitch,
  pilatesAddictionFoundersDayPlaybook,
  pilatesAddictionInstantFormsConversionFix,
  pilatesAddictionPacifica165Members31k,
  pilatesAddictionVintagePark170Memberships,
  sequelBrandsFranchisorPlaybook,
  ultimateLongevityCenterCherryKnollsFastestStart,
  ultimateLongevityCenterEastBocaFoundingWeek,
  ultimateLongevityCenterLandingPageThatTeaches,
  ultimateLongevityCenterPresaleLaunches,
];

export const studies: CaseStudy[] = [...STUDIES].sort(
  (a, b) =>
    BRAND_ORDER.indexOf(a.brand) - BRAND_ORDER.indexOf(b.brand) ||
    (a.order ?? 99) - (b.order ?? 99) ||
    b.published.localeCompare(a.published),
);

export function getStudy(slug: string) {
  return studies.find(s => s.slug === slug);
}

export function getStudiesByBrand(brand: BrandId) {
  return studies.filter(s => s.brand === brand);
}

export function getFeaturedStudies() {
  return studies.filter(s => s.featured).sort((a, b) => (a.featured ?? 99) - (b.featured ?? 99));
}

/** Up to 3 other studies: same brand first, then featured ones. */
export function getRelatedStudies(slug: string, limit = 3) {
  const current = getStudy(slug);
  if (!current) return [];
  const sameBrand = studies.filter(s => s.slug !== slug && s.brand === current.brand);
  const others = studies.filter(s => s.slug !== slug && s.brand !== current.brand && s.featured);
  return [...sameBrand, ...others].slice(0, limit);
}
