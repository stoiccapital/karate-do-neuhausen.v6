"use client";

import React, { useState } from 'react';
import { components, spacing } from '../../../../../config/design-system';

/**
 * Mock #2: Performance Optimization
 * Clean status rows and tiles - structure over speed claims
 * Measured, calm, and controlled aesthetic
 */
export function PerformanceMock() {
  const [mode, setMode] = useState<'baseline' | 'optimized'>('optimized');

  return (
    <div className="flex flex-col h-full">
      {/* Top anchor: Header row with toggle */}
      <div className="flex items-center justify-between mb-4">
        <div className={`${components.surface.radius} bg-bg-neutral h-7 w-36`}></div>
        {/* Mode toggle */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setMode('baseline')}
            className={`${components.button.radius} px-2.5 py-1 text-xs font-medium ${
              mode === 'baseline'
                ? 'bg-cta-bg text-cta-text'
                : 'bg-bg-neutral border border-border-subtle text-text-muted'
            }`}
          >
            Baseline
          </button>
          <button
            type="button"
            onClick={() => setMode('optimized')}
            className={`${components.button.radius} px-2.5 py-1 text-xs font-medium ${
              mode === 'optimized'
                ? 'bg-cta-bg text-cta-text'
                : 'bg-bg-neutral border border-border-subtle text-text-muted'
            }`}
          >
            Optimized
          </button>
        </div>
      </div>

      {/* Status strip: Compact chips */}
      <div className="flex items-center gap-2 mb-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`${components.button.radius} ${
              mode === 'optimized'
                ? 'bg-cta-bg text-cta-text'
                : 'bg-bg-neutral border border-border-subtle text-text-muted'
            } px-2.5 py-1 text-xs font-medium`}
          >
            {mode === 'optimized' ? 'OK' : 'Needs'}
          </div>
        ))}
      </div>

      {/* Dominant content: Asset list */}
      <div className={`${components.card.base} ${spacing.card.px} ${spacing.card.py} bg-bg-default flex-1`}>
        <div className="space-y-3">
          {['IMG', 'JS', 'CSS'].map((type) => (
            <div key={type} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`${components.surface.radius} ${
                  mode === 'optimized'
                    ? 'bg-cta-bg text-cta-text'
                    : 'bg-bg-neutral text-text-muted'
                } h-6 w-6 flex items-center justify-center text-xs`}>
                  {mode === 'optimized' ? '✓' : '!'}
                </div>
                <div className={`bg-text-secondary h-2.5 ${components.surface.radius} w-20`}></div>
              </div>
              <div className={`${components.button.radius} bg-bg-neutral border border-border-subtle px-2 py-1 text-xs text-text-muted`}>
                {type}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary supporting block: Progress indicators with varying fills */}
      <div className={`${components.card.base} ${spacing.card.px} ${spacing.card.py} bg-bg-neutral mt-6`}>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className={`bg-text-muted h-2 ${components.surface.radius} w-16`}></div>
            <div className={`${components.surface.radius} bg-bg-default h-2 w-20 overflow-hidden`}>
              <div className={`bg-cta-bg h-full ${mode === 'optimized' ? 'w-4/5' : 'w-2/5'}`}></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className={`bg-text-muted h-2 ${components.surface.radius} w-16`}></div>
            <div className={`${components.surface.radius} bg-bg-default h-2 w-20 overflow-hidden`}>
              <div className={`bg-cta-bg h-full ${mode === 'optimized' ? 'w-3/4' : 'w-1/2'}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

