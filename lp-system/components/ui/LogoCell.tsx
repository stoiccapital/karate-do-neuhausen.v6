import React from 'react';
import { spacing, colors, typography, ColorTheme } from '../../config/design-system';

export type LogoCellProps = {
  src?: string;
  alt: string;
  theme: ColorTheme;
  className?: string;
  wrapperClassName?: string;
};

/**
 * LogoCell Component
 * Single logo cell with normalized styling
 * Owns: Internal padding, logo height, border styling
 * Does NOT own: Section-level spacing
 */
export function LogoCell({ alt, theme, className = '', wrapperClassName = '' }: LogoCellProps) {
  const themeColors = colors[theme];
  const backgroundClass = themeColors.background.neutral;
  const borderClass = themeColors.divider.subtle;

  return (
    <div
      className={`
        ${spacing.logo.pad.md}
        ${spacing.metricsSlots.label}
        w-full
        ${backgroundClass}
        ${borderClass}
        border
        ${spacing.logo.width.md}
        flex
        items-center
        justify-center
        ${wrapperClassName}
      `}
    >
      <div
        className={`
          ${spacing.logo.height.md}
          w-full
          text-text-secondary
          ${typography.label}
          text-center
          break-words
          flex
          items-center
          justify-center
          ${className}
        `}
      >
        {alt}
      </div>
    </div>
  );
}
