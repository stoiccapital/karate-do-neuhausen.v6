import React from 'react';
import { components, spacing } from '../../config/design-system';

export type HeroLpPreviewMockProps = {
  variant?: 'single' | 'grid';
};

/**
 * Hero Landing Page Preview Mock
 * 
 * Decorative browser window mock showing a premium landing page preview.
 * Uses only design tokens - no arbitrary values.
 * Works in both light and dark modes via semantic tokens.
 * 
 * Accessibility: Entire mock is decorative and marked aria-hidden.
 */
export function HeroLpPreviewMock({ variant = 'single' }: HeroLpPreviewMockProps) {
  void variant; // Reserved for future grid variant
  return (
    <div aria-hidden="true" className={`${components.surface.radius} ${components.shadow.surface2} border border-border-subtle bg-bg-default overflow-hidden`}>
      {/* Browser window frame */}
      <div className="bg-bg-neutral border-b border-border-subtle px-4 py-3 flex items-center gap-3">
        {/* Window controls (decorative dots) */}
        <div className="flex gap-2" aria-hidden="true">
          <div className="w-3 h-3 rounded-full bg-text-muted opacity-50"></div>
          <div className="w-3 h-3 rounded-full bg-text-muted opacity-50"></div>
          <div className="w-3 h-3 rounded-full bg-text-muted opacity-50"></div>
        </div>
        {/* URL pill */}
        <div className={`flex-1 ${components.surface.radius} bg-bg-default border border-border-subtle px-4 py-2 max-w-md`}>
          <div className="text-text-muted text-xs truncate">example.com/landing-page</div>
        </div>
      </div>

      {/* Inner canvas - landing page preview */}
      <div className="bg-bg-default p-6">
        {/* Header row */}
        <div className="flex items-center justify-between mb-8">
          {/* Logo pill */}
          <div className={`${components.surface.radius} bg-bg-neutral ${spacing.card.px} ${spacing.card.py} w-24 h-8`}></div>
          {/* Nav links */}
          <div className="flex gap-4">
            <div className={`${components.surface.radius} bg-bg-neutral h-6 w-16`}></div>
            <div className={`${components.surface.radius} bg-bg-neutral h-6 w-16`}></div>
            <div className={`${components.surface.radius} bg-bg-neutral h-6 w-16`}></div>
          </div>
          {/* CTA button */}
          <div className={`${components.button.radius} bg-cta-bg text-cta-text px-4 py-2 h-8 w-20`}></div>
        </div>

        {/* Hero block */}
        <div className="mb-8">
          {/* Headline bar */}
          <div className={`bg-text-primary h-8 ${components.surface.radius} mb-4 w-full max-w-lg`}></div>
          {/* Subtitle bars */}
          <div className={`bg-text-secondary h-4 ${components.surface.radius} mb-2 w-full max-w-xl`}></div>
          <div className={`bg-text-secondary h-4 ${components.surface.radius} mb-6 w-full max-w-md`}></div>
          {/* CTA buttons */}
          <div className="flex gap-4">
            <div className={`${components.button.radius} bg-cta-bg text-cta-text h-8 w-24`}></div>
            <div className={`${components.button.radius} border border-border-subtle bg-bg-default h-8 w-24`}></div>
          </div>
        </div>

        {/* Feature cards grid */}
        <div className={`grid grid-cols-3 ${spacing.grid.x.md} mb-8`}>
          {[1, 2, 3].map((i) => (
            <div key={i} className={`${components.card.base} ${spacing.card.px} ${spacing.card.py} bg-bg-default`}>
              <div className={`bg-bg-neutral ${components.surface.radius} h-12 w-12 mb-4`}></div>
              <div className={`bg-text-primary h-4 ${components.surface.radius} mb-2 w-full`}></div>
              <div className={`bg-text-secondary h-3 ${components.surface.radius} mb-1 w-full`}></div>
              <div className={`bg-text-secondary h-3 ${components.surface.radius} w-3/4`}></div>
            </div>
          ))}
        </div>

        {/* Testimonial strip */}
        <div className={`${components.card.base} ${spacing.card.px} ${spacing.card.py} bg-bg-neutral mb-8`}>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-text-muted h-12 w-12 shrink-0"></div>
            <div className="flex-1">
              <div className={`bg-text-primary h-4 ${components.surface.radius} mb-2 w-full`}></div>
              <div className={`bg-text-secondary h-3 ${components.surface.radius} w-24`}></div>
            </div>
          </div>
        </div>

        {/* Footer strip */}
        <div className="border-t border-border-subtle pt-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-6">
              <div className={`bg-text-muted h-3 ${components.surface.radius} w-16`}></div>
              <div className={`bg-text-muted h-3 ${components.surface.radius} w-16`}></div>
              <div className={`bg-text-muted h-3 ${components.surface.radius} w-16`}></div>
            </div>
            <div className={`bg-text-muted h-3 ${components.surface.radius} w-20`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

