import React from 'react';
import { ThemeName, themes } from '../config/theme';
import { LegalPageCopy } from '../config/types';
import { getMessages, loadPageCopy } from '../locales';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { spacing, layout, typography, globalBackground, ColorTheme } from '../config/design-system';

export type LegalPageTemplateProps = {
  theme: ThemeName;
  copy: LegalPageCopy;
  locale: 'en' | 'de';
};

export function LegalPageTemplate({ theme, copy, locale }: LegalPageTemplateProps) {
  const themeConfig = themes[theme];
  const messages = getMessages(locale);
  const indexCopy = loadPageCopy(locale, 'example-lp');

  return (
    <div className={`min-h-screen ${themeConfig.background} ${themeConfig.font}`}>
      {/* Navbar */}
      <Navbar theme={theme} labels={indexCopy?.navbar || messages.navbar} locale={locale} />
      
      {/* Main content */}
      <main>
        <section className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
          <div className={`${layout.container.maxWidth} ${layout.container.px} mx-auto`}>
            <div className={`${typography.sectionHeader} ${spacing.block.y.lg}`}>
              <h1 className={`${typography.h1} text-text-primary ${spacing.block.y.md}`}>
                {copy.title}
              </h1>
              
              <div className={`${spacing.block.y.lg}`}>
                {copy.content.sections.map((section, index) => (
                  <div key={index} className={spacing.block.y.md}>
                    {section.heading && (
                      <h2 className={`${typography.h2} text-text-primary ${spacing.block.y.sm}`}>
                        {section.heading}
                      </h2>
                    )}
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className={`${typography.body} text-text-secondary ${spacing.block.y.sm}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer theme={theme} labels={indexCopy?.footer || messages.footer} locale={locale} />
    </div>
  );
}

