import React from 'react';
import { spacing, typography, colors, components, ColorTheme } from '../../config/design-system';

export type TestimonialCardProps = {
  customer: string;
  outcome: string;
  description: string;
  labels: {
    customer: string;
    outcome: string;
    description: string;
  };
  theme: ColorTheme;
  className?: string;
};

/**
 * TestimonialCard Component
 * Quote + name + role + optional metric card
 * Owns: Quote/name/role/metric layout
 * Does NOT own: Section-level spacing
 */
export function TestimonialCard({
  customer,
  outcome,
  description,
  labels,
  theme,
  className = '',
}: TestimonialCardProps) {
  const themeColors = colors[theme];
  const isDark = theme === 'dark';
  const bgColor = isDark ? colors.dark.surface.default : themeColors.surface.default;
  const borderColor = isDark ? colors.dark.border.subtle : themeColors.border.subtle;

  return (
    <div
      className={`
        flex
        flex-col
        h-full
        ${bgColor}
        ${borderColor}
        border
        ${components.card.base}
        ${spacing.card.px}
        ${spacing.card.pyLg}
        ${components.shadow.surface1}
        ${components.transition.default}
        hover:shadow-card-hover
        ${className}
      `}
    >
      <div className={`${typography.label} text-text-muted ${spacing.block.y.sm}`}>
        {labels.outcome}
      </div>
      <div className={`
        ${typography.h3}
        ${isDark ? colors.dark.accent.primary : themeColors.accent.primary}
        ${spacing.block.y.sm}
      `}>
        {outcome}
      </div>

      <div className={`${typography.label} text-text-muted ${spacing.block.y.sm}`}>
        {labels.description}
      </div>
      <p className={`${typography.body} text-text-secondary ${spacing.block.y.md}`}>
        {description}
      </p>

      <div className={`mt-auto ${spacing.block.y.sm}`}>
        <div className={`${typography.label} text-text-muted ${spacing.block.y.sm}`}>
          {labels.customer}
        </div>
        <div className={`${typography.body} text-text-primary`}>
          {customer}
        </div>
      </div>
    </div>
  );
}
