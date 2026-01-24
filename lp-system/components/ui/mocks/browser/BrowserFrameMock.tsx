import React from 'react';
import { components } from '../../../../config/design-system';

export type BrowserFrameMockProps = {
  /** Optional URL string to display in the URL pill */
  url?: string;
  /** Whether the entire frame should be aria-hidden (default: true) */
  ariaHidden?: boolean;
  /** Children rendered inside the browser frame canvas */
  children: React.ReactNode;
};

/**
 * Browser Frame Mock (Stripe-style, simplified)
 *
 * - Soft card with radius + shadow, no heavy border
 * - Thin top bar with subtle window controls
 * - Optional, low-key URL pill
 * - Inner canvas for mock UI
 *
 * Accessibility: Entire mock is decorative and marked aria-hidden by default.
 */
export function BrowserFrameMock({
  url,
  ariaHidden = true,
  children,
}: BrowserFrameMockProps) {
  return (
    <div
      aria-hidden={ariaHidden ? 'true' : undefined}
      className={`
        ${components.surface.radius}
        ${components.shadow.surface2}
        bg-bg-elevated
        overflow-hidden
      `}
    >
      {/* Top browser bar */}
      <div className="flex items-center gap-3 h-9 px-4 border-b border-border-subtle bg-bg-subtle">
        {/* Window controls (tiny, very low emphasis) */}
        <div className="flex gap-1.5" aria-hidden="true">
          <div className="w-2 h-2 rounded-full bg-border-subtle" />
          <div className="w-2 h-2 rounded-full bg-border-subtle" />
          <div className="w-2 h-2 rounded-full bg-border-subtle" />
        </div>

        {/* Centered URL pill (optional, muted) */}
        {url && (
          <div className="flex-1 flex justify-center">
            <div
              className={`
                max-w-xs w-full
                flex items-center
                px-3 py-1.5
                rounded-full
                bg-bg-default
                border border-border-subtle
              `}
            >
              <span className="text-[11px] leading-none text-text-muted truncate">
                {url}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Inner canvas */}
      <div className="bg-bg-default p-5 sm:p-6">
        {children}
      </div>
    </div>
  );
}
