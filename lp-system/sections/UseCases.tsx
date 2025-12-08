import React from 'react';
import type { SectionUseCasesCopy } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { FeatureCard } from '../components/ui/FeatureCard';
import { spacing, typography, colors, globalBackground, ColorTheme } from '../config/design-system';

export type UseCasesProps = {
  copy: SectionUseCasesCopy;
  theme: ColorTheme;
};

/**
 * Use Cases Section
 * Layout: SingleColumn + grid of use-case items
 * Section spacing: section.y.xl
 * Internal: H2 → subtitle block.y.md, Subtitle → grid block.y.md
 * Cards: left-aligned content, gaps via grid tokens
 */
export function UseCases({ copy, theme }: UseCasesProps) {
  const themeColors = colors[theme];
  const items = copy.items && copy.items.length > 0 ? copy.items : [
    { title: 'Use Case 1', body: 'Perfect for your workflow' },
    { title: 'Use Case 2', body: 'Built for your needs' },
    { title: 'Use Case 3', body: 'Designed for success' },
  ];

  const useCaseItems = items.map((item, index) => (
    <FeatureCard
      key={index}
      icon={<div className={`${typography.textXs}`}>⚡</div>}
      title={item.title}
      body={item.body}
      theme={theme}
    />
  ));

  return (
    <section id="use-cases" data-section-id="use-cases" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <h2 className={`${typography.h2} ${theme === 'dark' ? colors.dark.text.primary : themeColors.text.primary} ${spacing.block.y.md}`}>
          {copy.heading}
        </h2>
        <p className={`${typography.body} ${theme === 'dark' ? colors.dark.text.secondary : themeColors.text.secondary} ${spacing.block.y.md}`}>
          {copy.subtitle}
        </p>
        <div className={`grid grid-cols-1 md:grid-cols-3 ${spacing.grid.x.md} ${spacing.grid.y.md}`}>
          {useCaseItems}
        </div>
      </CenteredLayout>
    </section>
  );
}

