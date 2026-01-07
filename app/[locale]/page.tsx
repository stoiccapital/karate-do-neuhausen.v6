import { cookies } from 'next/headers';
import { loadPageCopy } from '../../lp-system/locales';
import { LandingPageTemplate } from '../../lp-system/templates/LandingPage';
import { THEME_COOKIE_KEY, isValidTheme, type Theme } from '../../lp-system/config/preferences';
import { DEFAULT_LP_ID } from '../../lp-system/config/lp-config';

const FIXED_LP_ID = DEFAULT_LP_ID;

type Props = {
  params: Promise<{ locale: 'en' | 'de' }>;
};

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  const copy = loadPageCopy(locale, FIXED_LP_ID);
  
  if (!copy) {
    throw new Error(`Copy not found for LP ID: ${FIXED_LP_ID} and locale: ${locale}`);
  }

  // Read theme from cookie, but fallback to default theme
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get(THEME_COOKIE_KEY);
  let theme: Theme = 'light';
  if (themeCookie?.value && isValidTheme(themeCookie.value)) {
    theme = themeCookie.value;
  }

  return (
    <LandingPageTemplate 
      theme={theme} 
      copy={copy} 
      locale={locale} 
    />
  );
}

