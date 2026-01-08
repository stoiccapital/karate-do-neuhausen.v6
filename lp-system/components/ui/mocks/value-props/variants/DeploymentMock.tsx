import React from 'react';
import { components, spacing } from '../../../../../config/design-system';

/**
 * Mock #3: Deployment Ready
 * Complete deployment process with source code included
 * Calm, operational, production-ready aesthetic
 */
export function DeploymentMock() {
  const steps = ['Build', 'Check', 'Deploy', 'Live'];

  return (
    <div className="flex flex-col h-full">
      {/* Top anchor: Header row */}
      <div className="flex items-center justify-between mb-8">
        <div className={`${components.surface.radius} bg-bg-neutral h-7 w-32`}></div>
      </div>

      {/* Top status row: 4 equal step pills - all completed */}
      <div className="flex items-center gap-3 mb-8">
        {steps.map((step, index) => {
          const isLive = index === 3; // Final "Live" step
          return (
            <React.Fragment key={step}>
              <div className={`${components.button.radius} ${
                isLive
                  ? 'bg-cta-bg text-cta-text'
                  : 'bg-bg-neutral border border-border-subtle text-text-muted'
              } px-4 py-2 text-xs font-medium`}>
                {step}
              </div>
              {index < 3 && (
                <div className="h-px bg-border-subtle w-3"></div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Primary content block: Bundle card */}
      <div className={`${components.card.base} ${spacing.card.px} ${spacing.card.py} bg-bg-default flex-1`}>
        {/* 5-6 horizontal line rows representing files/modules */}
        <div className="space-y-3">
          {[1, 2, 3, 4, 5, 6].map((i) => {
            const isAccented = i === 1; // Optionally accent first row
            return (
              <div key={i} className="flex items-center gap-3">
                <div className={`bg-text-muted h-2 ${components.surface.radius} w-3`}></div>
                <div className={`${
                  isAccented ? 'bg-cta-bg' : 'bg-text-secondary'
                } h-2.5 ${components.surface.radius} ${
                  i === 1 ? 'w-full' : 
                  i === 2 ? 'w-[92%]' : 
                  i === 3 ? 'w-[88%]' : 
                  i === 4 ? 'w-[85%]' : 
                  i === 5 ? 'w-[82%]' : 
                  'w-[78%]'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Secondary indicator: Source included - small, quiet, muted */}
        <div className="mt-6 pt-4 border-t border-border-subtle">
          <div className={`${components.button.radius} bg-bg-neutral border border-border-subtle text-text-muted px-3 py-1.5 text-xs font-medium inline-block`}>
            Source included
          </div>
        </div>
      </div>
    </div>
  );
}

