import React from 'react';
import type { SectionFeaturesCopy } from '../config/types';
import { SplitGrid } from '../components/layouts/SplitGrid';
import { SingleColumn } from '../components/layouts/SingleColumn';
import { MediaContainer } from '../components/ui/MediaContainer';
import { spacing, typography, colors, maxTextWidth, globalBackground, ColorTheme } from '../config/design-system';

export type FeaturesProps = {
  copy: SectionFeaturesCopy;
  theme: ColorTheme;
};

/**
 * Features Section
 * Layout: SingleColumn or repeated SplitGrid rows
 * Section spacing: section.y.xl
 * Internal: H2 → subtitle block.y.md, Subtitle → first feature block.y.md
 * Between features: block.y.xl
 * Text blocks LEFT aligned
 */
export function Features({ copy, theme }: FeaturesProps) {
  const themeColors = colors[theme];

  const features = [
    {
      title: "Advanced Analytics",
      body: "Track your metrics and make data-driven decisions with comprehensive analytics.",
    },
    {
      title: "Team Collaboration",
      body: "Work together seamlessly with built-in collaboration tools and workflows.",
    },
    {
      title: "Secure & Compliant",
      body: "Enterprise-grade security and compliance to keep your data safe.",
    },
  ];

  return (
    <section id="features" data-section-id="features" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <SingleColumn>
        <div className={spacing.block.y.md}>
          <h2 className={`${typography.h2} ${theme === 'dark' ? colors.dark.text.primary : themeColors.text.primary}`}>
            Powerful features
          </h2>
        </div>
        <div className={spacing.block.y.md}>
          <p className={`${typography.body} ${theme === 'dark' ? colors.dark.text.secondary : themeColors.text.secondary}`}>
            Everything you need to succeed
          </p>
        </div>
        {features.map((item, index) => (
          <div key={index} className={index < features.length - 1 ? spacing.block.y.xl : ''}>
            <SplitGrid>
              <div className="text-left">
                <div className={spacing.block.y.md}>
                  <h3 className={`${typography.h3} ${theme === 'dark' ? colors.dark.text.primary : themeColors.text.primary}`}>
                    {item.title}
                  </h3>
                </div>
                <p className={`${typography.body} ${theme === 'dark' ? colors.dark.text.secondary : themeColors.text.secondary} ${maxTextWidth}`}>
                  {item.body}
                </p>
              </div>
              <MediaContainer theme={theme} />
            </SplitGrid>
          </div>
        ))}
      </SingleColumn>
    </section>
  );
}
