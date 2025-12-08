import React from 'react';
import type { SectionTestimonialsCopy } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { TestimonialCard } from '../components/ui/TestimonialCard';
import { spacing, typography, colors, globalBackground, ColorTheme } from '../config/design-system';

export type TestimonialsProps = {
  copy: SectionTestimonialsCopy;
  theme: ColorTheme;
};

/**
 * Testimonials Section
 * Layout: CenteredLayout or SingleColumn
 * Alignment: H2 + subtitle LEFT
 * Section spacing: section.y.xl
 * Internal: H2 → subtitle block.y.md, Subtitle → grid block.y.md
 * Grid: 1 column mobile, 2–3 desktop, gaps via grid tokens
 */
export function Testimonials({ copy, theme }: TestimonialsProps) {
  const themeColors = colors[theme];
  const testimonials = copy.testimonials && copy.testimonials.length > 0 
    ? copy.testimonials 
    : [
        { quote: 'Great product!', name: 'Customer', role: 'User', metric: undefined },
        { quote: 'Highly recommended.', name: 'Client', role: 'Team Lead', metric: undefined },
        { quote: 'Excellent service.', name: 'Partner', role: 'Director', metric: undefined },
      ];

  const testimonialCards = testimonials.slice(0, 3).map((testimonial, index) => (
    <TestimonialCard
      key={index}
      quote={testimonial.quote}
      name={testimonial.name}
      role={testimonial.role}
      metric={testimonial.metric}
      theme={theme}
    />
  ));
  
  return (
    <section id="testimonials" data-section-id="testimonials" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <h2 className={`${typography.h2} ${theme === 'dark' ? colors.dark.text.primary : themeColors.text.primary} ${spacing.block.y.md}`}>
          {copy.heading}
        </h2>
        {copy.subtitle && (
          <p className={`${typography.body} ${theme === 'dark' ? colors.dark.text.secondary : themeColors.text.secondary} ${spacing.block.y.md}`}>
            {copy.subtitle}
          </p>
        )}
        <div className={`grid grid-cols-1 md:grid-cols-3 ${spacing.grid.x.md} ${spacing.grid.y.md}`}>
          {testimonialCards}
        </div>
      </CenteredLayout>
    </section>
  );
}

