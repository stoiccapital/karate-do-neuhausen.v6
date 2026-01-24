import React from 'react';
import { components, spacing, typography } from '../../../../config/design-system';
import { BrowserFrameMock } from '../browser/BrowserFrameMock';
export function DashboardMock() {
  return (
    <BrowserFrameMock url="app.example.com/dashboard">
      <div
        aria-hidden="true"
        className={`${components.mock.heroCanvasHeight} ${components.surface.radius} bg-bg-default p-4`}
      >
        <div
          className={`${components.surface.radius} border border-border-subtle bg-bg-default ${components.shadow.surface1} h-full flex`}
        >
          <aside className="w-56 border-r border-border-subtle bg-bg-neutral flex flex-col">
            <div className="px-4 py-4 border-b border-border-subtle">
              <div className={`${typography.label} text-text-muted`}>Workspace</div>
              <div className={`${typography.body} text-text-primary`}>Fleet Ops</div>
            </div>

            <nav className="flex-1 px-3 py-3 space-y-1">
              <div
                className={`${components.surface.radius} bg-bg-default border border-border-subtle px-3 py-2 flex items-center justify-between`}
              >
                <div className={`${typography.body} text-text-primary`}>Dashboard</div>
                <span className={`${typography.textXs} text-text-muted`}>Today</span>
              </div>
              <div className={`${typography.body} text-text-muted px-3 py-2 flex items-center justify-between`}>
                <span>Settlements</span>
                <span className={`tabular-nums ${typography.textXs}`}>24</span>
              </div>
              <div className={`${typography.body} text-text-muted px-3 py-2 flex items-center justify-between`}>
                <span>Payouts</span>
                <span className={`tabular-nums ${typography.textXs}`}>8</span>
              </div>
              <div className={`${typography.body} text-text-muted px-3 py-2 flex items-center justify-between`}>
                <span>Disputes</span>
                <span className={`tabular-nums ${typography.textXs}`}>3</span>
              </div>
              <div className={`${typography.body} text-text-muted px-3 py-2`}>Settings</div>
            </nav>

            <div className="px-4 py-3 border-t border-border-subtle">
              <div className={`${typography.textXs} text-text-muted`}>Status</div>
              <div className={`${typography.body} text-text-primary`}>All systems normal</div>
            </div>
          </aside>

          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between border-b border-border-subtle px-4 py-3">
              <div className={`${typography.label} text-text-primary`}>Dashboard</div>
              <div className="flex-1 px-4">
                <div
                  className={`${components.surface.radius} border border-border-subtle bg-bg-neutral px-3 py-2 ${typography.textXs} text-text-muted`}
                >
                  Search
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full border border-border-subtle bg-bg-neutral" />
                <div className="h-8 w-8 rounded-full border border-border-subtle bg-bg-neutral" />
              </div>
            </div>

            <div className="flex-1 p-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
                <div
                  className={`lg:col-span-2 ${components.surface.radius} border border-border-subtle bg-bg-default ${spacing.card.padding.md} flex flex-col`}
                >
                  <div className={`${typography.label} text-text-muted ${spacing.element.y.xs}`}>
                    Core workflow
                  </div>
                  <div className={`${typography.h3} text-text-primary ${spacing.element.y.xs}`}>
                    Settlement overview
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <div className={`${typography.h3} text-text-primary`}>€1,245.20</div>
                      <div className={`${typography.textXs} text-text-muted`}>Updated today</div>
                    </div>
                    <div className={`${typography.textXs} text-text-muted`}>Active</div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div
                      className={`${components.surface.radius} border border-border-subtle bg-bg-neutral px-3 py-2`}
                    >
                      <div className={`${typography.textXs} text-text-muted`}>Status</div>
                      <div className={`${typography.body} text-text-primary`}>Active</div>
                    </div>
                    <div
                      className={`${components.surface.radius} border border-border-subtle bg-bg-neutral px-3 py-2`}
                    >
                      <div className={`${typography.textXs} text-text-muted`}>Window</div>
                      <div className={`${typography.body} text-text-primary`}>Today</div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${components.surface.radius} border border-border-subtle bg-bg-default ${spacing.card.padding.md} flex flex-col`}
                >
                  <div className={`${typography.label} text-text-muted ${spacing.element.y.xs}`}>
                    Revenue
                  </div>
                  <div className={`${typography.h3} text-text-primary ${spacing.element.y.xs}`}>
                    Recent payouts
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className={`${typography.body} text-text-primary`}>Morning shift</div>
                        <div className={`${typography.textXs} text-text-muted`}>10:24 · Paid</div>
                      </div>
                      <div className={`${typography.body} text-text-primary tabular-nums`}>€312.40</div>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className={`${typography.body} text-text-primary`}>Inbound ops</div>
                        <div className={`${typography.textXs} text-text-muted`}>12:08 · Paid</div>
                      </div>
                      <div className={`${typography.body} text-text-primary tabular-nums`}>€148.90</div>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className={`${typography.body} text-text-primary`}>Processing run</div>
                        <div className={`${typography.textXs} text-text-muted`}>14:32 · Pending</div>
                      </div>
                      <div className={`${typography.body} text-text-primary tabular-nums`}>€87.15</div>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className={`${typography.body} text-text-primary`}>Evening cycle</div>
                        <div className={`${typography.textXs} text-text-muted`}>16:05 · Paid</div>
                      </div>
                      <div className={`${typography.body} text-text-primary tabular-nums`}>€421.03</div>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className={`${typography.body} text-text-primary`}>Late batch</div>
                        <div className={`${typography.textXs} text-text-muted`}>18:41 · Paid</div>
                      </div>
                      <div className={`${typography.body} text-text-primary tabular-nums`}>€205.70</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrameMock>
  );
}
