import React from 'react';
import type { SectionSecurityCopy } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { spacing, typography, colors, components, globalBackground, ColorTheme } from '../config/design-system';

export type SecurityProps = {
  copy: SectionSecurityCopy;
  theme: ColorTheme;
};

/**
 * Security Section
 * Reading-focused; left aligned
 * Layout: SingleColumn or split
 * Section spacing & internal spacing via tokens
 */
export function Security({ copy, theme }: SecurityProps) {
  const themeColors = colors[theme];

  const securityItems = copy.items.map((item, index) => (
    <div key={index} className={`text-left ${spacing.block.y.md}`}>
      <div className={`w-12 h-12 ${theme === 'dark' ? colors.dark.surface.elevated : themeColors.surface.default} ${components.surface.radius} flex items-center justify-center ${spacing.block.y.sm}`}>
        <div className={`${typography.textXs} ${theme === 'dark' ? colors.dark.accent.primary : themeColors.accent.primary}`}>Icon</div>
      </div>
      <h3 className={`${typography.h3} ${theme === 'dark' ? colors.dark.text.primary : themeColors.text.primary}`}>
        {item.title}
      </h3>
      <p className={`${typography.body} ${theme === 'dark' ? colors.dark.text.secondary : themeColors.text.secondary}`}>
        {item.body}
      </p>
    </div>
  ));

  return (
    <section id="security" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <h2 className={`${typography.h2} ${theme === 'dark' ? colors.dark.text.primary : themeColors.text.primary} ${spacing.block.y.md}`}>
          {copy.heading}
        </h2>
        <p className={`${typography.body} ${theme === 'dark' ? colors.dark.text.secondary : themeColors.text.secondary} ${spacing.block.y.md}`}>
          {copy.subtitle}
        </p>
        <div className={`grid grid-cols-1 md:grid-cols-3 ${spacing.grid.x.md} ${spacing.grid.y.md}`}>
          {securityItems}
        </div>
      </CenteredLayout>
    </section>
  );
}

