import React from 'react';
import { components, spacing, typography } from '../../../../../config/design-system';

/**
 * Mock #4: Timeline (How it works - 1 week)
 * Structured 1-week process from kickoff to launch
 * Operational clarity, predictable stages
 */
export function TimelineMock() {
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const phases = [
    { title: 'Kickoff', detail: 'Scope defined' },
    { title: 'Build', detail: 'Implementation' },
    { title: 'Launch', detail: 'Deployment ready' },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Top anchor: Header strip */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className={`${typography.textXs} text-text-muted`}>
            1 week
          </div>
          <div className={`${components.surface.radius} bg-bg-neutral h-7 w-32`}></div>
        </div>
      </div>

      {/* Primary block: Week timeline - horizontal row of weekdays only */}
      <div className="flex items-center gap-3 mb-2 flex-nowrap">
        {weekdays.map((day, index) => (
          <React.Fragment key={day}>
            <div className={`${components.button.radius} bg-bg-neutral border border-border-subtle text-text-muted px-3 py-2 ${typography.textXs} font-medium whitespace-nowrap shrink-0`}>
              {day}
            </div>
            {index < weekdays.length - 1 && (
              <div className="h-px bg-border-subtle w-2 shrink-0"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Launch row - second row below weekdays */}
      <div className="flex items-center mb-8">
        <div className={`${components.button.radius} bg-cta-bg text-cta-text px-3 py-2 ${typography.textXs} font-medium whitespace-nowrap`}>
          Launch
        </div>
      </div>

      {/* Secondary block: Phase cards - 3 stacked compact cards */}
      <div className="space-y-2.5 flex-1">
        {phases.map((phase, index) => {
          const isLaunch = index === 2;
          return (
            <div
              key={phase.title}
              className={`${components.card.base} ${spacing.card.px} ${spacing.card.py} ${
                isLaunch ? 'bg-cta-bg' : 'bg-bg-default'
              }`}
            >
              <div className="flex flex-col gap-1">
                <div className={`${typography.label} ${
                  isLaunch ? 'text-cta-text' : 'text-text-primary'
                }`}>
                  {phase.title}
                </div>
                <div className={`${typography.textXs} ${
                  isLaunch ? 'text-cta-text opacity-75' : 'text-text-secondary'
                }`}>
                  {phase.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

