import React from 'react';
import { components, spacing, typography } from '../../../../config/design-system';
import { BrowserFrameMock } from '../browser/BrowserFrameMock';

export type HeroLpPreviewMockProps = {
  variant?: 'single' | 'grid';
};

/**
 * Hero Landing Page Preview Mock
 * 
 * Decorative browser window mock showing canonical landing page structure preview.
 * Supports internal scrolling to view sections.
 * Uses only design tokens - no arbitrary values.
 * Works in both light and dark modes via semantic tokens.
 * 
 * Accessibility: Entire mock is decorative and marked aria-hidden.
 */
export function HeroLpPreviewMock({ variant = 'single' }: HeroLpPreviewMockProps) {
  // Both variants render the same minimal layout
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _ = variant; // Keep variant in API for future extensibility
  return (
    <BrowserFrameMock url="example.com/landing-page">
      <SingleLayout />
    </BrowserFrameMock>
  );
}

/**
 * Single layout variant
 * Renders canonical landing page structure with internal scrolling
 */
function SingleLayout() {
  const sections = [
    { label: 'Hero', type: 'hero' },
    { label: 'Social Proof', type: 'social-proof' },
    { label: 'Value Props', type: 'value-props' },
    { label: 'Features', type: 'features' },
    { label: 'Pricing', type: 'pricing' },
    { label: 'FAQ', type: 'faq' },
    { label: 'Final CTA', type: 'final-cta' },
  ];

  const renderVisualPlaceholder = (type: string) => {
    switch (type) {
      case 'hero':
        // Media block: large rectangle with 2 small bars beneath
        return (
          <div className="space-y-2">
            <div className={`${components.surface.radius} bg-bg-default border border-border-subtle h-16 w-full`}></div>
            <div className="flex gap-2">
              <div className={`bg-text-muted h-2 ${components.surface.radius} flex-1`}></div>
              <div className={`bg-text-muted h-2 ${components.surface.radius} flex-1`}></div>
            </div>
          </div>
        );
      case 'social-proof':
        // Logo strip: 4-5 small squares in a row
        return (
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`${components.surface.radius} bg-bg-neutral border border-border-subtle h-8 w-8`}></div>
            ))}
          </div>
        );
      case 'value-props':
        // 3 cards mini: three tiny stacked rectangles
        return (
          <div className="space-y-1.5">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`${components.surface.radius} bg-bg-neutral border border-border-subtle h-4 w-full`}></div>
            ))}
          </div>
        );
      case 'features':
        // List: 4 short rows with left icon-dot + bar
        return (
          <div className="space-y-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`${components.surface.radius} bg-bg-neutral h-2 w-2`}></div>
                <div className={`bg-text-secondary h-2 ${components.surface.radius} flex-1`}></div>
              </div>
            ))}
          </div>
        );
      case 'pricing':
        // Pricing table: 2 columns with highlighted plan card on right
        return (
          <div className="grid grid-cols-2 gap-2">
            <div className={`${components.surface.radius} bg-bg-neutral border border-border-subtle h-16`}></div>
            <div className={`${components.surface.radius} bg-cta-bg border border-border-subtle h-16`}></div>
          </div>
        );
      case 'faq':
        // Accordion: 3 rows with left bar and plus indicator
        return (
          <div className="space-y-1.5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`bg-text-secondary h-2 ${components.surface.radius} flex-1`}></div>
                <div className={`${components.surface.radius} bg-bg-neutral border border-border-subtle h-4 w-4 flex items-center justify-center text-xs text-text-muted`}>
                  +
                </div>
              </div>
            ))}
          </div>
        );
      case 'final-cta':
        // CTA panel: wide panel with single button bar inside
        return (
          <div className={`${components.surface.radius} bg-bg-neutral border border-border-subtle p-2`}>
            <div className={`${components.button.radius} bg-cta-bg text-cta-text h-6 w-full`}></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${components.mock.heroCanvasHeight} overflow-y-auto overscroll-contain relative`}>
      {/* Sticky navbar */}
      <div className="sticky top-0 bg-bg-default border-b border-border-subtle z-10 flex items-center justify-between py-3 mb-6">
        {/* Logo text */}
        <div className={`${typography.label} text-text-primary`}>
          Logo
        </div>
        {/* CTA button */}
        <div className={`${components.button.radius} bg-cta-bg text-cta-text px-4 py-2 ${typography.textXs} font-medium`}>
          CTA
        </div>
      </div>

      {/* Section blocks - canonical LP structure with visuals */}
      {sections.map((section) => (
        <div key={section.label} className={`${spacing.block.y.md}`}>
          <div className="grid grid-cols-12 gap-4 items-start">
            {/* Left column: section label + muted line */}
            <div className="col-span-7">
              <div className={`${typography.label} text-text-primary mb-2`}>
                {section.label}
              </div>
              <div className={`bg-text-secondary h-2 ${components.surface.radius} w-full opacity-50`}></div>
            </div>
            {/* Right column: visual placeholder */}
            <div className="col-span-5">
              <div className={`${components.surface.radius} bg-bg-neutral border border-border-subtle overflow-hidden p-3 h-20`}>
                {renderVisualPlaceholder(section.type)}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Footer section */}
      <div className={`border-t border-border-subtle ${spacing.block.y.md} pt-6`}>
        <div className={`${typography.label} text-text-primary mb-3`}>
          Footer
        </div>
        <div className="flex items-center gap-4">
          <div className={`bg-text-muted h-3 ${components.surface.radius} w-16`}></div>
          <div className={`bg-text-muted h-3 ${components.surface.radius} w-16`}></div>
          <div className={`bg-text-muted h-3 ${components.surface.radius} w-16`}></div>
        </div>
      </div>
    </div>
  );
}

