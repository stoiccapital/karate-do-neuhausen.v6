import React from 'react';
import type { SectionDeepDiveCopy } from '../config/types';
import { SplitGrid } from '../components/layouts/SplitGrid';
import { SingleColumn } from '../components/layouts/SingleColumn';
import { StepItem } from '../components/ui/StepItem';
import { ValuePropMock } from '../components/ui/mocks';
import { spacing, typography, maxTextWidth, globalBackground, ColorTheme } from '../config/design-system';

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
  return (
    <section id="deep-dive" data-section-id="deep-dive" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <SingleColumn>
        <SplitGrid>
          <div className="text-left">
            {copy.eyebrow && (
              <div className={`${typography.label} text-text-muted ${spacing.block.y.sm}`}>
                {copy.eyebrow}
              </div>
            )}
            <h2 className={`${typography.h2} text-text-primary ${spacing.block.y.md}`}>
              {copy.heading}
            </h2>
            <p className={`${typography.body} text-text-secondary ${maxTextWidth} ${spacing.block.y.lg}`}>
              {copy.subtitle}
            </p>
            {copy.steps.map((step, index) => (
              <StepItem
                key={`${step.title}-${index}`}
                theme={theme}
                stepLabel={`Step ${index + 1}`}
                title={step.title}
                body={step.body}
              />
            ))}
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-xl lg:max-w-2xl">
              <ValuePropMock kind="timeline" />
            </div>
          </div>
        </SplitGrid>
      </SingleColumn>
    </section>
  );
}
