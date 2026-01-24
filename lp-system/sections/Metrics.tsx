"use client";

import React from "react";
import type { SectionMetricsCopy } from "../config/types";
import { CenteredLayout } from "../components/layouts/CenteredLayout";
import { SplitGrid } from "../components/layouts/SplitGrid";
import { ValuePropMock } from "../components/ui/mocks";
import {
  spacing,
  typography,
  globalBackground,
  components,
  ColorTheme,
} from "../config/design-system";

export type MetricsProps = {
  copy: SectionMetricsCopy;
  theme: ColorTheme;
};

function normalizeText(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

export function Metrics({ copy }: MetricsProps) {
  const gridColsClass =
    copy.metrics.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3";

  return (
    <section
      id="metrics"
      data-section-id="metrics"
      className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}
    >
      <CenteredLayout>
        <div className={spacing.block.y.xl}>
          <SplitGrid>
            <div>
              <h2 className={`${typography.h2} text-text-primary ${spacing.block.y.md}`}>
                {normalizeText(copy.heading)}
              </h2>

              <p className={`${typography.body} text-text-secondary ${spacing.block.y.md}`}>
                {normalizeText(copy.subtitle)}
              </p>
            </div>
            <div className="flex justify-center w-full">
              <div className={`w-full ${components.media.maxWidth.xl}`}>
                <ValuePropMock kind="performance" />
              </div>
            </div>
          </SplitGrid>
        </div>

        <div
          className={`grid grid-cols-1 ${gridColsClass} ${spacing.grid.x.md} ${spacing.grid.y.md}`}
        >
          {copy.metrics.map((metric, index) => (
            <div key={index}>
              {/* VALUE */}
              <div className={`${typography.h3} text-text-primary ${spacing.block.y.md}`}>
                {normalizeText(metric.value)}
              </div>

              {/* LABEL */}
              <h3 className={`${typography.body} text-text-primary ${spacing.block.y.md}`}>
                {normalizeText(metric.label)}
              </h3>

              {/* DESCRIPTION */}
              <p className={`${typography.body} text-text-secondary`}>
                {normalizeText(metric.description)}
              </p>
            </div>
          ))}
        </div>
      </CenteredLayout>
    </section>
  );
}
