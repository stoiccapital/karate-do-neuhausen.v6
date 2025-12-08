export type LandingPageConfig = {
  id: string;                 // e.g. "example-lp"
  vertical: string;           // e.g. "saas"
  slug: string;               // e.g. "fleet"
  theme: 'light' | 'dark';
};

export const landingPages: LandingPageConfig[] = [
  { id: 'example-lp', vertical: 'saas', slug: 'fleet', theme: 'dark' },
];

export function findLandingPageConfig(
  locale: 'en' | 'de',
  vertical: string,
  slug: string
): LandingPageConfig | null {
  const config = landingPages.find(
    (lp) => lp.vertical === vertical && lp.slug === slug
  );
  return config || null;
}

