import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { findLandingPageConfig } from '@/lp-system/config/lp-config';
import { loadPageCopy } from '@/lp-system/locales';
import { LandingPageTemplate } from '@/lp-system/templates/LandingPage';

type PageProps = {
  params: Promise<{
    locale: string;
    vertical: string;
    slug: string;
  }>;
};

// Base URL - should be set via environment variable in production
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, vertical, slug } = await params;

  // Validate locale
  if (locale !== 'en' && locale !== 'de') {
    return {};
  }

  // Find landing page config
  const config = findLandingPageConfig(locale as 'en' | 'de', vertical, slug);
  if (!config) {
    return {};
  }

  // Load copy
  const copy = loadPageCopy(locale as 'en' | 'de', config.id);
  if (!copy) {
    return {};
  }

  // Build canonical URL
  const canonicalUrl = `${BASE_URL}/${locale}/${vertical}/${slug}`;

  return {
    title: copy.hero.title,
    description: copy.hero.subtitle,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function LandingPage({ params }: PageProps) {
  const { locale, vertical, slug } = await params;

  // Validate locale
  if (locale !== 'en' && locale !== 'de') {
    notFound();
  }

  // Find landing page config
  const config = findLandingPageConfig(locale as 'en' | 'de', vertical, slug);
  if (!config) {
    notFound();
  }

  // Load copy
  const copy = loadPageCopy(locale as 'en' | 'de', config.id);
  if (!copy) {
    notFound();
  }

  // Build canonical URL for structured data
  const canonicalUrl = `${BASE_URL}/${locale}/${vertical}/${slug}`;

  // Structured data (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: copy.hero.title,
    description: copy.hero.subtitle,
    url: canonicalUrl,
    mainEntity: {
      '@type': 'Organization',
      name: 'Company Name',
      url: BASE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LandingPageTemplate theme={config.theme} copy={copy} locale={locale as 'en' | 'de'} />
    </>
  );
}

