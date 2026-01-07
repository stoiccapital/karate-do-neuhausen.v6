import React from 'react';
import { components, spacing, typography } from '../../config/design-system';

export type ValuePropMockKind = 'bilingual' | 'performance' | 'deployment' | 'timeline';

/**
 * Value Prop Mock Visuals
 * 
 * Decorative browser window mocks showing premium feature previews.
 * Uses only design tokens - no arbitrary values.
 * Works in both light and dark modes via semantic tokens.
 * 
 * Accessibility: Entire mock is decorative and marked aria-hidden.
 */
export function ValuePropMock({ kind }: { kind: ValuePropMockKind }) {
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
          <div className="text-text-muted text-xs truncate">
            {kind === 'bilingual' && 'example.com/de-en'}
            {kind === 'performance' && 'example.com/optimized'}
            {kind === 'deployment' && 'example.com/deploy'}
            {kind === 'timeline' && 'example.com/process'}
          </div>
        </div>
      </div>

      {/* Inner canvas - feature-specific mock */}
      <div className="bg-bg-default p-6">
        {kind === 'bilingual' && <BilingualMock />}
        {kind === 'performance' && <PerformanceMock />}
        {kind === 'deployment' && <DeploymentMock />}
        {kind === 'timeline' && <TimelineMock />}
      </div>
    </div>
  );
}

/**
 * Mock #1: Bilingual Copy (Zweisprachiger Copy)
 * Split layout with DE/EN columns, sync indicator
 */
function BilingualMock() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className={`${components.surface.radius} bg-bg-neutral ${spacing.card.px} ${spacing.card.py} h-8 w-32`}></div>
        <div className={`${components.surface.radius} bg-bg-neutral h-6 w-20`}></div>
      </div>

      {/* Split columns */}
      <div className="grid grid-cols-2 gap-4">
        {/* DE Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className={`${components.button.radius} bg-cta-bg text-cta-text px-3 py-1 text-xs font-medium`}>
              DE
            </div>
          </div>
          <div className={`bg-text-primary h-6 ${components.surface.radius} w-full`}></div>
          <div className="space-y-2">
            <div className={`bg-text-secondary h-3 ${components.surface.radius} w-full`}></div>
            <div className={`bg-text-secondary h-3 ${components.surface.radius} w-5/6`}></div>
            <div className={`bg-text-secondary h-3 ${components.surface.radius} w-4/6`}></div>
          </div>
          <div className={`${components.button.radius} border border-border-subtle bg-bg-default h-7 w-24`}></div>
        </div>

        {/* EN Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className={`${components.button.radius} bg-cta-bg text-cta-text px-3 py-1 text-xs font-medium`}>
              EN
            </div>
          </div>
          <div className={`bg-text-primary h-6 ${components.surface.radius} w-full`}></div>
          <div className="space-y-2">
            <div className={`bg-text-secondary h-3 ${components.surface.radius} w-full`}></div>
            <div className={`bg-text-secondary h-3 ${components.surface.radius} w-5/6`}></div>
            <div className={`bg-text-secondary h-3 ${components.surface.radius} w-4/6`}></div>
          </div>
          <div className={`${components.button.radius} border border-border-subtle bg-bg-default h-7 w-24`}></div>
        </div>
      </div>

      {/* Sync indicator */}
      <div className="flex items-center justify-center gap-2 pt-2">
        <div className={`${components.surface.radius} bg-bg-neutral h-5 w-5 flex items-center justify-center`}>
          <div className="w-2 h-2 rounded-full bg-text-muted"></div>
        </div>
        <div className="h-px bg-border-subtle flex-1 w-12"></div>
        <div className={`${components.surface.radius} bg-bg-neutral h-5 w-5 flex items-center justify-center`}>
          <div className="w-2 h-2 rounded-full bg-text-muted"></div>
        </div>
      </div>
    </div>
  );
}

/**
 * Mock #2: Performance Optimization
 * Metrics panel with progress bars and asset list
 */
function PerformanceMock() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className={`${components.surface.radius} bg-bg-neutral ${spacing.card.px} ${spacing.card.py} h-8 w-40`}></div>
      </div>

      {/* Metric tiles */}
      <div className="grid grid-cols-3 gap-3">
        {['LCP', 'CLS', 'TTFB'].map((label) => (
          <div key={label} className={`${components.card.base} ${spacing.card.px} ${spacing.card.py} bg-bg-default`}>
            <div className={`bg-text-muted h-3 ${components.surface.radius} mb-2 w-12`}></div>
            <div className={`bg-text-primary h-5 ${components.surface.radius} w-16`}></div>
          </div>
        ))}
      </div>

      {/* Progress bars */}
      <div className="space-y-3">
        <div className="space-y-2">
          <div className={`bg-text-muted h-2 ${components.surface.radius} w-20`}></div>
          <div className={`${components.surface.radius} bg-bg-neutral h-3 w-full overflow-hidden`}>
            <div className="bg-cta-bg h-full w-3/4"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className={`bg-text-muted h-2 ${components.surface.radius} w-20`}></div>
          <div className={`${components.surface.radius} bg-bg-neutral h-3 w-full overflow-hidden`}>
            <div className="bg-cta-bg h-full w-4/5"></div>
          </div>
        </div>
      </div>

      {/* Asset list */}
      <div className={`${components.card.base} ${spacing.card.px} ${spacing.card.py} bg-bg-neutral`}>
        <div className="space-y-2">
          {['IMG', 'JS', 'CSS'].map((type) => (
            <div key={type} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`${components.surface.radius} bg-bg-default h-4 w-4`}></div>
                <div className={`bg-text-secondary h-3 ${components.surface.radius} w-16`}></div>
              </div>
              <div className={`${components.button.radius} bg-bg-default border border-border-subtle px-2 py-1 text-xs text-text-muted`}>
                {type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Mock #3: Deployment Ready
 * Deployment flow with steps and code bundle
 */
function DeploymentMock() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className={`${components.surface.radius} bg-bg-neutral ${spacing.card.px} ${spacing.card.py} h-8 w-36`}></div>
      </div>

      {/* Deployment steps */}
      <div className="flex items-center gap-2 flex-wrap">
        {['Build', 'Check', 'Deploy', 'Live'].map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <div className={`${components.button.radius} ${index === 3 ? 'bg-cta-bg text-cta-text' : 'bg-bg-neutral border border-border-subtle'} px-3 py-1 text-xs font-medium`}>
              {step}
            </div>
            {index < 3 && (
              <div className="w-2 h-2 rounded-full bg-text-muted opacity-50"></div>
            )}
            {index === 3 && (
              <div className={`${components.button.radius} bg-bg-default border border-border-subtle px-2 py-1 text-xs text-text-muted`}>
                Ready
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Code bundle card */}
      <div className={`${components.card.base} ${spacing.card.px} ${spacing.card.py} bg-bg-default`}>
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`bg-text-muted h-2 ${components.surface.radius} w-4`}></div>
              <div className={`bg-text-secondary h-3 ${components.surface.radius} ${i === 1 ? 'w-full' : i === 2 ? 'w-5/6' : i === 3 ? 'w-4/6' : i === 4 ? 'w-3/6' : 'w-2/6'}`}></div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border-subtle">
          <div className={`${components.button.radius} bg-bg-neutral border border-border-subtle px-3 py-1 text-xs text-text-muted inline-block`}>
            Source included
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Mock #4: Timeline (How it works - 1 week)
 * Horizontal timeline with phases
 */
function TimelineMock() {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Launch'];
  return (
    <div className={`${spacing.block.y.lg}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className={`${components.surface.radius} bg-bg-neutral ${spacing.card.px} ${spacing.card.py} h-8 w-32`}></div>
      </div>

      {/* Timeline nodes */}
      <div className={`flex items-center ${spacing.gap.sm} flex-nowrap`}>
        {days.map((day, index) => {
          const isActive = index < 5; // Mon-Fri are active
          return (
            <div key={day} className={`flex flex-col items-center ${spacing.element.y.xs} shrink-0`}>
              <div className={`${components.button.radius} ${isActive ? 'bg-cta-bg text-cta-text' : 'bg-bg-neutral border border-border-subtle'} ${spacing.logo.pad.md} ${typography.textXs} whitespace-nowrap`}>
                {day}
              </div>
              {index < days.length - 1 && (
                <div className={`${components.button.radius} bg-text-muted opacity-50 w-2 h-2`}></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Phase cards */}
      <div className={`${spacing.block.y.md}`}>
        {[
          { title: 'Kickoff', detail: 'Scope defined' },
          { title: 'Build', detail: 'Development phase' },
          { title: 'Launch', detail: 'Deployment ready' },
        ].map((phase, index) => (
          <div key={phase.title} className={`${components.card.base} ${spacing.card.px} ${spacing.card.py} ${index === 2 ? 'bg-cta-bg' : 'bg-bg-default'} ${index < 2 ? spacing.element.y.xs : ''}`}>
            <div className={`${index === 2 ? 'bg-cta-text' : 'bg-text-primary'} h-4 ${components.surface.radius} ${spacing.element.y.xs} w-24`}></div>
            <div className={`${index === 2 ? 'bg-cta-text opacity-75' : 'bg-text-secondary'} h-3 ${components.surface.radius} w-32`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

