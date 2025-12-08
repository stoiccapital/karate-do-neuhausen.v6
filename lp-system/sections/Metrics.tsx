import React from 'react';
import type { SectionMetricsCopy } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { spacing, typography, colors, globalBackground, ColorTheme } from '../config/design-system';

export type MetricsProps = {
  copy: SectionMetricsCopy;
  theme: ColorTheme;
};

/**
 * Metrics Section
 * Layout: CenteredLayout or SingleColumn + grid of numeric metrics
 * Headline/subtitle: left or center depending on copy; prefer left by default
 * Each metric: value + label, left aligned
 */
export function Metrics({ copy, theme }: MetricsProps) {
  const themeColors = colors[theme];

  const metricItems = copy.metrics.map((metric, index) => (
    <div key={index} className={`text-left ${spacing.block.y.md}`}>
      <div className={`${typography.h1} ${theme === 'dark' ? colors.dark.accent.primary : themeColors.accent.primary}`}>
        {metric.value}
      </div>
      <h3 className={`${typography.h3} ${theme === 'dark' ? colors.dark.text.primary : themeColors.text.primary}`}>
        {metric.label}
      </h3>
      <p className={`${typography.body} ${theme === 'dark' ? colors.dark.text.secondary : themeColors.text.secondary}`}>
        {metric.description}
      </p>
    </div>
  ));

  return (
    <section id="metrics" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <h2 className={`${typography.h2} ${theme === 'dark' ? colors.dark.text.primary : themeColors.text.primary} ${spacing.block.y.md}`}>
          {copy.heading}
        </h2>
        <p className={`${typography.body} ${theme === 'dark' ? colors.dark.text.secondary : themeColors.text.secondary} ${spacing.block.y.md}`}>
          {copy.subtitle}
        </p>
        <div className={`grid grid-cols-1 md:grid-cols-${copy.metrics.length === 4 ? '4' : '3'} ${spacing.grid.x.md} ${spacing.grid.y.md}`}>
          {metricItems}
        </div>
      </CenteredLayout>
    </section>
  );
}

