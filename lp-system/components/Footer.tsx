import React from 'react';
import { colors, spacing, layout, footer, typography, ColorTheme } from '../config/design-system';

export type FooterLabels = {
  copyright: string;
  links: {
    privacy: string;
    terms: string;
    contact: string;
  };
};

export type FooterProps = {
  theme: ColorTheme;
  labels: FooterLabels;
};

export function Footer({ theme, labels }: FooterProps) {
  const bgColor = theme === 'light' ? footer.bg.light : footer.bg.dark;
  const borderColor = theme === 'light' ? footer.borderColor.light : footer.borderColor.dark;
  const textMuted = theme === 'light' ? footer.text.muted.light : footer.text.muted.dark;

  return (
    <footer aria-label="Footer" className={`${bgColor} border-t ${borderColor} ${footer.section.padding.y}`}>
      <div className={`${layout.container.maxWidth} ${layout.container.px} mx-auto`}>
        <div className={`flex flex-col md:flex-row justify-between items-center ${spacing.gap.sm}`}>
          <div className={`${typography.textXs} ${textMuted}`}>
            {labels.copyright}
          </div>
          <nav aria-label="Footer navigation" className={`flex items-center ${spacing.gap.md}`}>
            <a href="#" className={`${typography.textXs} ${textMuted} hover:opacity-70`}>
              {labels.links.privacy}
            </a>
            <a href="#" className={`${typography.textXs} ${textMuted} hover:opacity-70`}>
              {labels.links.terms}
            </a>
            <a href="#" className={`${typography.textXs} ${textMuted} hover:opacity-70`}>
              {labels.links.contact}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
