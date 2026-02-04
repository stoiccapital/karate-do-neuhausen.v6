'use client';

import React from 'react';
import type { SectionFinalCtaCopy } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { SplitGrid } from '../components/layouts/SplitGrid';
import { CTAButton } from '../components/ui/CTAButton';
import { CTAGroup } from '../components/ui/CTAGroup';
import { spacing, typography, globalBackground, ColorTheme, components } from '../config/design-system';
import { WHATSAPP_LINK } from '../config/lp-config';

export type FinalCTAProps = {
  copy: SectionFinalCtaCopy;
  theme: ColorTheme;
};

/**
 * Final CTA Section
 * Layout: CenteredLayout
 * Alignment: Text left
 * Section spacing: Top section.y.2xl, Bottom section.y.xl
 * Internal: H2 → subtitle block.y.md, Subtitle → CTAGroup block.y.lg
 */
export function FinalCTA({ copy, theme }: FinalCTAProps) {
  const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.5!2d11.5!3d48.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5bdf%3A0x5d3b3f5771177dd4!2sWinthirplatz%206%2C%2080639%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2sde!4v1234567890123!5m2!1sen!2sde';

  const handleCtaClick = () => {
    window.location.href = WHATSAPP_LINK;
  };

  return (
    <section id="final-cta" data-section-id="final-cta" className={`${spacing.section.top['2xl']} ${spacing.section.bottom.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <SplitGrid>
          <div>
            <h2 className={`${typography.h2} text-text-primary ${spacing.block.y.md}`}>
              {copy.heading}
            </h2>
            <div className={`${spacing.block.y.md}`}>
              {copy.subtitle && (
                <p className={`${typography.body} text-text-secondary ${spacing.block.y.sm}`}>
                  {copy.subtitle}
                </p>
              )}
              {copy.address && (
                <div className={`${typography.body} text-text-secondary ${spacing.block.y.sm}`}>
                  <div>{copy.address.street}</div>
                  <div>{copy.address.city}</div>
                  <div>{copy.address.phone}</div>
                </div>
              )}
            </div>
            <CTAGroup align="left" stack="horizontal">
              <CTAButton variant="primary" theme={theme} label={copy.ctaLabel} onClick={handleCtaClick} />
            </CTAGroup>
          </div>
          <div className="flex justify-center lg:justify-end">
            {copy.address && (
              <div className={`w-full ${components.media.maxWidth.xl} ${components.media.aspectRatios['16:9']} ${components.radius.media} overflow-hidden`}>
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Karate Do Neuhausen Location"
                />
              </div>
            )}
          </div>
        </SplitGrid>
      </CenteredLayout>
    </section>
  );
}
