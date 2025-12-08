import React from 'react';
import { components, colors, ColorTheme } from '../../config/design-system';

export type CTAButtonProps = {
  variant: 'primary' | 'ghost';
  theme: ColorTheme;
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

/**
 * CTAButton Component
 * White slim CTA button (primary/ghost variants)
 * Owns: Button styling, hover/active/focus states
 * Does NOT own: Layout spacing
 */
export function CTAButton({
  variant,
  theme,
  label,
  onClick,
  type = 'button',
  className = '',
}: CTAButtonProps) {
  if (theme === 'dark') {
    const baseClasses = variant === 'primary' 
      ? components.button.primary.base 
      : components.button.secondary.base;
    
    const variantClasses = variant === 'primary'
      ? `${colors.dark.cta.white.bg} ${colors.dark.cta.white.text} ${colors.dark.cta.white.hover} ${colors.dark.cta.white.active}`
      : `${colors.dark.cta.ghost.bg} ${colors.dark.cta.ghost.border} ${colors.dark.cta.ghost.text} ${colors.dark.cta.ghost.hover} ${colors.dark.cta.ghost.active} border`;

    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses} cursor-pointer ${className}`}
      >
        {label}
      </button>
    );
  }

  const themeColors = colors[theme];
  const baseClasses = components.button.primary.base;
  
  const variantClasses = variant === 'primary'
    ? `${themeColors.primary.bg} ${themeColors.primary.text} ${themeColors.primary.hover}`
    : `${components.button.secondary.base} ${themeColors.border.subtle} ${themeColors.neutral.lightest} hover:bg-slate-50`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
}
