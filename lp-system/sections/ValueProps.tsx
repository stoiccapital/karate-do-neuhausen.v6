import React from 'react';
import type { SectionValuePropsCopy } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { FeatureCard } from '../components/ui/FeatureCard';
import { spacing, typography, colors, globalBackground, ColorTheme } from '../config/design-system';

export type ValuePropsProps = {
  copy: SectionValuePropsCopy;
  theme: ColorTheme;
};

/**
 * Value Props Section
 * Layout: CenteredLayout
 * Alignment: LEFT
 * Section spacing: section.y.xl top/bottom
 * Internal: H2 → subtitle block.y.md, Subtitle → FeatureCard grid block.y.md
 * Grid: 3 columns on desktop, 1 on mobile, gaps via grid tokens
 */
export function ValueProps({ copy, theme }: ValuePropsProps) {
  const themeColors = colors[theme];

  const featureCards = copy.items.map((item, index) => (
    <FeatureCard
      key={index}
      icon={<div className={`${typography.textXs}`}>⚡</div>}
      title={item.title}
      body={item.body}
      theme={theme}
    />
  ));

  return (
    <section id="value-props" data-section-id="value-props" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <h2 className={`${typography.h2} ${theme === 'dark' ? colors.dark.text.primary : themeColors.text.primary} ${spacing.block.y.md}`}>
          {copy.heading}
        </h2>
        <p className={`${typography.body} ${theme === 'dark' ? colors.dark.text.secondary : themeColors.text.secondary} ${spacing.block.y.md}`}>
          {copy.subtitle}
        </p>
        <div className={`grid grid-cols-1 md:grid-cols-3 ${spacing.grid.x.md} ${spacing.grid.y.md}`}>
          {featureCards}
        </div>
      </CenteredLayout>
    </section>
  );
}
