import React from 'react';
import type { SectionDeepDiveCopy } from '../config/types';
import { SplitGrid } from '../components/layouts/SplitGrid';
import { SingleColumn } from '../components/layouts/SingleColumn';
import { MediaContainer } from '../components/ui/MediaContainer';
import { spacing, typography, colors, maxTextWidth, globalBackground, ColorTheme } from '../config/design-system';

export type DeepDiveProps = {
  copy: SectionDeepDiveCopy;
  theme: ColorTheme;
};

/**
 * Deep Dive Section
 * Layout: SingleColumn or SplitGrid (text + media)
 * Section spacing: section.y.xl
 * Internal: H2 → body block.y.md, Body → media block.y.lg
 */
export function DeepDive({ copy, theme }: DeepDiveProps) {
  const themeColors = colors[theme];

  return (
    <section id="deep-dive" data-section-id="deep-dive" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <SingleColumn>
        <SplitGrid>
          <div className="text-left">
            <h2 className={`${typography.h2} ${theme === 'dark' ? colors.dark.text.primary : themeColors.text.primary} ${spacing.block.y.md}`}>
              {copy.heading}
            </h2>
            <p className={`${typography.body} ${theme === 'dark' ? colors.dark.text.secondary : themeColors.text.secondary} ${maxTextWidth} ${spacing.block.y.lg}`}>
              {copy.subtitle}
            </p>
          </div>
          <MediaContainer theme={theme} />
        </SplitGrid>
      </SingleColumn>
    </section>
  );
}
