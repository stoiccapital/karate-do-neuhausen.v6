import React from 'react';
import { spacing, typography, colors, components, ColorTheme } from '../../config/design-system';
import { CTAButton } from './CTAButton';
import type { BillingMode } from '../../config/types';

export type PricingCardProps = {
  title: string;
  body: string;
  features: string[];
  teamPrice: string;
  teamPriceSub?: string;
  teamPriceDetail: string;
  singleUserMonthly: string;
  singleUserYearly: string;
  billingMode: BillingMode;
  singleUserLabel?: string;
  singleUserModeLabel?: string;
  ctaLabel: string;
  theme: ColorTheme;
  isHighlighted?: boolean;
  className?: string;
};

/**
 * PricingCard Component
 * Pricing plan card with title, price, description, features, and CTA
 * Owns: Internal layout, spacing, card styling
 * Does NOT own: Section-level spacing
 */
export function PricingCard(props: PricingCardProps) {
  const {
    title,
    teamPrice,
    teamPriceSub,
    teamPriceDetail,
    billingMode,
    body,
    features,
    singleUserLabel,
    singleUserModeLabel,
    singleUserMonthly,
    singleUserYearly,
    ctaLabel,
    theme,
    isHighlighted = false,
    className = '',
  } = props;
  const themeColors = colors[theme];
  const isDark = theme === 'dark';
  const bgColor = isDark ? colors.dark.surface.default : themeColors.surface.default;
  const borderColor = isDark ? colors.dark.border.subtle : themeColors.border.subtle;

  return (
    <div
      data-highlighted={isHighlighted ? 'true' : undefined}
      className={`
        ${bgColor}
        ${borderColor}
        border
        ${components.card.base}
        ${spacing.card.padding.md}
        ${components.shadow.surface1}
        flex flex-col h-full
        ${components.transition.default}
        hover:shadow-card-hover
        ${className}
      `}
    >
      <h3 className={`${typography.h3} text-text-primary ${spacing.block.y.sm}`}>
        {title}
      </h3>
      
      <div className={`${typography.h2} text-text-primary ${spacing.element.y.xs}`}>
        {teamPrice}
      </div>
      {teamPriceSub && (
        <div className={`${typography.textXs} text-text-muted ${spacing.element.y.xs}`}>
          {teamPriceSub}
        </div>
      )}

      {teamPriceDetail && (
        <p className={`${typography.textXs} text-text-muted ${spacing.block.y.md}`}>
          {teamPriceDetail}
        </p>
      )}
      
      <div className={`min-h-18 ${spacing.block.y.md}`}>
        <p className={`${typography.body} ${typography.textXs} text-text-muted`}>
          {body}
        </p>
      </div>
      
      <div className={`flex flex-col ${spacing.block.y.md} grow text-text-secondary`}>
        <ul className={`flex flex-col ${spacing.block.y.md} gap-y-2`}>
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">✓</span>
              <span className={typography.body}>{feature}</span>
            </li>
          ))}
        </ul>
        <div className={`${typography.textXs} text-text-muted`}>
          <div className={`grid grid-cols-[1fr_7.5rem] ${spacing.element.y.xs}`}>
            <span>{singleUserLabel}</span>
            <span />
          </div>
          <div className="grid grid-cols-[1fr_7.5rem]">
            <span>{singleUserModeLabel}</span>
            <span className="text-right tabular-nums whitespace-nowrap w-full">
              {billingMode === 'yearly' ? singleUserYearly : singleUserMonthly}
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <CTAButton variant="primary" theme={theme} label={ctaLabel} />
      </div>
    </div>
  );
}
