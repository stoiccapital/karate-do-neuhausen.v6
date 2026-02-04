'use client';
import React from 'react';
import type { SectionPricingCopy, PricingPlanCopy } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { PricingCard } from '../components/ui/PricingCard';
import { spacing, typography, globalBackground, ColorTheme, components } from '../config/design-system';

export type PricingProps = {
  copy: SectionPricingCopy;
  theme: ColorTheme;
};

/**
 * Pricing Section
 * Layout: CenteredLayout
 * Alignment: Heading + subtitle CENTER, PricingCards: content LEFT inside each card
 * Section spacing: section.y.xl
 * Internal: H2 → subtitle block.y.md, Subtitle → cards grid block.y.md
 * Grid: 1 col mobile, 2–3 desktop, gaps via grid tokens
 */
export function Pricing({ copy, theme }: PricingProps) {
  const plans: PricingPlanCopy[] = copy.plans && copy.plans.length > 0 ? copy.plans : [];

  const pricingCards = plans.map((plan, index) => {
    const activeBilling = plan.billing.monthly;
    return (
    <PricingCard
      key={index}
      title={plan.title}
      body={plan.body}
      features={plan.features}
      teamPrice={activeBilling.price}
      teamPriceSub={activeBilling.subPrice}
      teamPriceDetail={activeBilling.detail}
      singleUserMonthly={plan.singleUser?.monthly}
      singleUserYearly={plan.singleUser?.yearly}
      billingMode="monthly"
      singleUserLabel={copy.singleUserLabel}
      singleUserModeLabel={copy.singleUserLabels?.monthly}
      ctaLabel={plan.ctaLabel}
      theme={theme}
      isHighlighted={plan.isPopular}
    />
    );
  });

  return (
    <section id="pricing" data-section-id="pricing" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <div className={`${typography.sectionHeader} ${spacing.block.y.lg}`}>
          <h2 className={`${typography.h2} text-text-primary ${spacing.block.y.md}`}>
            {copy.heading}
          </h2>
          <p className={`${typography.body} text-text-secondary ${spacing.block.y.sm}`}>
            {copy.subtitle}
          </p>
          {copy.helper && (
            <p className={`${typography.textXs} text-text-muted`}>
              {copy.helper}
            </p>
          )}
        </div>
        <div className={`grid grid-cols-1 ${plans.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} ${spacing.grid.x.md} ${spacing.grid.y.md}`}>
          {pricingCards}
        </div>
        {copy.footerNote && (
          <p className={`${typography.textXs} text-text-muted ${spacing.block.y.md}`}>
            {copy.footerNote}
          </p>
        )}
      </CenteredLayout>
    </section>
  );
}
