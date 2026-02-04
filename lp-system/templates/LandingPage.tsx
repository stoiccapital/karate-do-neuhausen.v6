import React from 'react';
import { ThemeName, themes } from '../config/theme';
import { PageCopyConfig } from '../config/types';
import { getMessages } from '../locales';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Hero } from '../sections/Hero';
import { HeroAgencyLp } from '../sections/HeroAgencyLp';
import { ValueProps } from '../sections/ValueProps';
import { Features } from '../sections/Features';
import { DeepDive } from '../sections/DeepDive';
import { Metrics } from '../sections/Metrics';
import { UseCases } from '../sections/UseCases';
import { Security } from '../sections/Security';
import { Testimonials } from '../sections/Testimonials';
import { Pricing } from '../sections/Pricing';
import { FAQ } from '../sections/FAQ';
import { FinalCTA } from '../sections/FinalCTA';

export type LandingPageTemplateProps = {
  theme: ThemeName;
  copy: PageCopyConfig;
  locale: 'en' | 'de';
  lpId?: string;
};

/**
 * Landing Page Template
 * Pure orchestration + composition
 * Canonical section order:
 * 1. Navbar
 * 2. Hero
 * 3. Value Proposition
 * 4. Features
 * 5. Deep Dive
 * 6. Use Cases
 * 7. Testimonials
 * 8. Pricing (optional)
 * 9. FAQ
 * 10. Final CTA
 * 11. Footer
 */
export function LandingPageTemplate({
  theme,
  copy,
  locale,
  lpId,
}: LandingPageTemplateProps) {
  const themeConfig = themes[theme];
  const messages = getMessages(locale);
  const useAgencyHero = lpId === 'agency-lp';

  return (
    <div className={`min-h-screen ${themeConfig.background} ${themeConfig.font}`}>
      {/* 1. Navbar */}
      <Navbar theme={theme} labels={copy.navbar || messages.navbar} locale={locale} />
      
      {/* Main content */}
      <main>
      {/* 2. Hero */}
      {useAgencyHero ? (
        <HeroAgencyLp copy={copy.hero} theme={theme} />
      ) : (
        <Hero copy={copy.hero} theme={theme} />
      )}
      
      {/* 3. Value Proposition */}
      <ValueProps copy={copy.valueProps} theme={theme} />
      
      {/* 4. Features */}
      <Features copy={copy.features} theme={theme} />
      
      {/* 5. Deep Dive */}
      <DeepDive copy={copy.deepDive || { eyebrow: 'Placeholder', heading: 'Deep Dive', subtitle: 'Learn more', steps: [] }} theme={theme} />

      {/* 6. Metrics */}
      <Metrics copy={copy.metrics || { heading: 'Training Times', subtitle: 'Regular training sessions', metrics: [] }} theme={theme} />

      {/* 7. Integrations *
      
      <Integrations copy={copy.integrations || { heading: 'Integrations', subtitle: 'Works with your tools', integrations: [] }} theme={theme} />
      /}

      {/* 7. Use Cases */}
      <UseCases copy={copy.useCases || { heading: 'Use Cases', subtitle: 'Built for your workflows', items: [] }} theme={theme} />

      
      {/* 8. Security *
      <Security copy={copy.security || { heading: 'Security', subtitle: 'Enterprise-grade protection', items: [] }} theme={theme} />
      /}
      {/* 9. Testimonials */}
      <Testimonials copy={copy.testimonials || { heading: 'What customers say', subtitle: 'Trusted by teams worldwide', testimonials: [] }} theme={theme} />
      
      {/* 10. Pricing (optional) */}
      <Pricing copy={copy.pricing || { heading: 'Simple pricing', subtitle: 'Choose the plan that works for you', plans: [] }} theme={theme} />
      
      {/* 11. FAQ */}
      <FAQ theme={theme} content={copy.faq || { heading: 'Frequently asked questions', subtitle: 'Everything you need to know', items: [] }} />
      
      {/* 12. Final CTA */}
      <FinalCTA copy={copy.finalCta} theme={theme} />
      </main>
      
      {/* 13. Footer */}
      <Footer theme={theme} labels={copy.footer || messages.footer} locale={locale} />
    </div>
  );
}
