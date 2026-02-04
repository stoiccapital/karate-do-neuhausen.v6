import type { Metadata } from 'next';
import { loadPageCopy } from '../../lp-system/locales';
import { LandingPageTemplate } from '../../lp-system/templates/LandingPage';
import { DEFAULT_THEME, LOCALES } from '../../lp-system/config/preferences';
import { DEFAULT_LP_ID } from '../../lp-system/config/lp-config';

const FIXED_LP_ID = DEFAULT_LP_ID;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }));
}

type Props = {
  params: Promise<{ locale: 'en' | 'de' }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = loadPageCopy(locale, FIXED_LP_ID);
  
  return {
    title: copy?.metadata?.title || 'Karate Do Neuhausen',
    description: copy?.metadata?.description || 'Traditional Shotokan Karate',
  };
}

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  const copy = loadPageCopy(locale, FIXED_LP_ID);
  
  if (!copy) {
    throw new Error(`Copy not found for LP ID: ${FIXED_LP_ID} and locale: ${locale}`);
  }

  // For static export, use default theme (theme switching will be handled client-side)
  const theme = DEFAULT_THEME;

  return (
    <LandingPageTemplate 
      theme={theme} 
      copy={copy} 
      locale={locale}
      lpId={FIXED_LP_ID}
    />
  );
}

