"use client";

import React, { useState } from 'react';
import { components, typography } from '../../../../../config/design-system';

/**
 * Mock #1: Bilingual Copy (Zweisprachiger Copy)
 * Single-column layout with language toggle
 * Premium editorial UI preview style
 */
export function BilingualMock() {
  const [lang, setLang] = useState<'DE' | 'EN'>('DE');

  // DE content with real text
  const deContent = (
    <div className="flex flex-col flex-1">
      {/* Fixed-height container to prevent layout shift */}
      <div className="h-24 flex flex-col justify-center mb-4">
        <div className={`${typography.h3} text-text-primary mb-2`}>
          Zweisprachiger Copy Inklusive
        </div>
        <div className={`${typography.body} text-text-secondary`}>
          Deutscher und englischer Copy standardmäßig enthalten.
        </div>
      </div>
      {/* Placeholder bars below text */}
      <div className="space-y-2.5 flex-1">
        <div className={`bg-text-secondary h-2.5 ${components.surface.radius} w-full`}></div>
        <div className={`bg-text-secondary h-2.5 ${components.surface.radius} w-[92%]`}></div>
        <div className={`bg-text-secondary h-2.5 ${components.surface.radius} w-[88%]`}></div>
        <div className={`bg-text-secondary h-2.5 ${components.surface.radius} w-[85%]`}></div>
      </div>
      {/* CTA bar */}
      <div className={`${components.button.radius} border border-border-subtle bg-bg-default h-7 w-24 mt-4`}></div>
    </div>
  );

  // EN content with real text
  const enContent = (
    <div className="flex flex-col flex-1">
      {/* Fixed-height container to prevent layout shift */}
      <div className="h-24 flex flex-col justify-center mb-4">
        <div className={`${typography.h3} text-text-primary mb-2`}>
          Bilingual Copy Included
        </div>
        <div className={`${typography.body} text-text-secondary`}>
          English and German copy included by default.
        </div>
      </div>
      {/* Placeholder bars below text */}
      <div className="space-y-2.5 flex-1">
        <div className={`bg-text-secondary h-2.5 ${components.surface.radius} w-full`}></div>
        <div className={`bg-text-secondary h-2.5 ${components.surface.radius} w-[89%]`}></div>
        <div className={`bg-text-secondary h-2.5 ${components.surface.radius} w-[86%]`}></div>
        <div className={`bg-text-secondary h-2.5 ${components.surface.radius} w-[83%]`}></div>
      </div>
      {/* CTA bar */}
      <div className={`${components.button.radius} border border-border-subtle bg-bg-default h-7 w-24 mt-4`}></div>
    </div>
  );

  return (
    <div className="flex flex-col h-full">
      {/* Top anchor: Header row with language toggle */}
      <div className="flex items-center justify-between mb-8">
        <div className={`${components.surface.radius} bg-bg-neutral h-7 w-28`}></div>
        {/* Language toggle */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setLang('DE')}
            className={`${components.button.radius} px-2.5 py-1 text-xs font-medium ${
              lang === 'DE'
                ? 'bg-cta-bg text-cta-text'
                : 'bg-bg-neutral border border-border-subtle text-text-muted'
            }`}
          >
            DE
          </button>
          <button
            type="button"
            onClick={() => setLang('EN')}
            className={`${components.button.radius} px-2.5 py-1 text-xs font-medium ${
              lang === 'EN'
                ? 'bg-cta-bg text-cta-text'
                : 'bg-bg-neutral border border-border-subtle text-text-muted'
            }`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Dominant content: Single-column layout that switches based on language */}
      <div className="flex-1">
        {lang === 'DE' ? deContent : enContent}
      </div>

      {/* Secondary supporting block: Subtle sync indicator - centered */}
      <div className="flex items-center justify-center gap-3 mt-6 pt-6 border-t border-border-subtle">
        <div className={`${components.surface.radius} bg-bg-neutral h-4 w-4 flex items-center justify-center`}>
          <div className="w-1.5 h-1.5 rounded-full bg-text-muted"></div>
        </div>
        <div className="h-px bg-border-subtle w-8"></div>
        <div className={`${components.surface.radius} bg-bg-neutral h-4 w-4 flex items-center justify-center`}>
          <div className="w-1.5 h-1.5 rounded-full bg-text-muted"></div>
        </div>
      </div>
    </div>
  );
}

