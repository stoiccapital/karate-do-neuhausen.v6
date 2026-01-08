import React from 'react';
import { BrowserFrameMock } from '../browser/BrowserFrameMock';
import { components } from '../../../../config/design-system';

export type ValuePropFrameMockProps = {
  /** URL string to display in the URL pill */
  url: string;
  /** Children rendered inside the fixed-aspect-ratio container */
  children: React.ReactNode;
};

/**
 * Value Prop Frame Mock
 * 
 * Wrapper around BrowserFrameMock that enforces a fixed 16:9 aspect ratio
 * for all ValueProp mock content. Ensures consistent frame height across
 * all variants (bilingual, performance, deployment, timeline).
 * 
 * Uses only design tokens - no arbitrary values.
 * Works in both light and dark modes via semantic tokens.
 * 
 * Accessibility: Entire mock is decorative and marked aria-hidden via BrowserFrameMock.
 */
export function ValuePropFrameMock({ url, children }: ValuePropFrameMockProps) {
  return (
    <BrowserFrameMock url={url}>
      {/* Fixed aspect ratio container - prevents content from resizing frame */}
      {/* BrowserFrameMock's inner canvas already has p-6 padding, so this ratio container */}
      {/* will fill the available space within that padding */}
      <div className={`${components.media.aspectRatios['16:9']} relative overflow-hidden`}>
        {/* Content container - absolutely positioned to fill ratio box */}
        {/* Padding p-6 maintains the same visual spacing as before */}
        <div className="absolute inset-0 overflow-hidden p-6">
          {children}
        </div>
      </div>
    </BrowserFrameMock>
  );
}

