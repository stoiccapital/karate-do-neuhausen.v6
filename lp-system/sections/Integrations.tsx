import React from 'react';
import type { SectionIntegrationsCopy } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { spacing, typography, colors, components, globalBackground, ColorTheme } from '../config/design-system';

export type IntegrationsProps = {
  copy: SectionIntegrationsCopy;
  theme: ColorTheme;
};

/**
 * Integrations Section
 * Similar to UseCases: Heading/subtitle, Grid of integration items (logos + text)
 * Left aligned, grid-based, tokens only
 */
export function Integrations({ copy, theme }: IntegrationsProps) {
  const themeColors = colors[theme];
  const logoBg = theme === 'light' ? 'bg-neutral-200' : colors.dark.background.dark;

  return (
    <section id="integrations" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <h2 className={`${typography.h2} ${theme === 'dark' ? colors.dark.text.primary : themeColors.text.primary} ${spacing.block.y.md}`}>
          {copy.heading}
        </h2>
        <p className={`${typography.body} ${theme === 'dark' ? colors.dark.text.secondary : themeColors.text.secondary} ${spacing.block.y.md}`}>
          {copy.subtitle}
        </p>
        <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 ${spacing.grid.x.md} ${spacing.grid.y.md}`}>
          {copy.integrations.map((integration, index) => (
            <div
              key={index}
              className={`${logoBg} ${components.surface.radius} h-16 flex items-center justify-center`}
            >
              <div className={`${typography.textXs} ${theme === 'dark' ? colors.dark.text.secondary : themeColors.text.secondary}`}>
                {integration.name}
              </div>
            </div>
          ))}
        </div>
      </CenteredLayout>
    </section>
  );
}

