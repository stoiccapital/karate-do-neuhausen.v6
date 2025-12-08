'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { colors, spacing, layout, navbar, typography, ColorTheme } from '../config/design-system';
import { CTAButton } from './ui/CTAButton';

export type NavbarLabels = {
  brand: string;
  links: {
    features: string;
    pricing: string;
    useCases: string;
    faq: string;
  };
  cta: string;
  ariaLabels: {
    goToHomepage: string;
    switchToEnglish: string;
    switchToGerman: string;
    openMenu: string;
    closeMenu: string;
  };
};

export type NavbarProps = {
  theme: ColorTheme;
  labels: NavbarLabels;
  locale: 'en' | 'de';
};

export function Navbar({ theme, labels, locale }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const themeColors = colors[theme];
  const pathname = usePathname();
  const router = useRouter();
  
  // Extract locale, vertical, and slug from pathname
  // Path format: /[locale]/[vertical]/[slug]
  const pathParts = pathname.split('/').filter(Boolean);
  const currentLocale = pathParts[0] as 'en' | 'de' | undefined;
  const vertical = pathParts[1];
  const slug = pathParts[2];
  
  // Build URLs for each locale
  const buildLocalePath = (locale: 'en' | 'de') => {
    if (vertical && slug) {
      return `/${locale}/${vertical}/${slug}`;
    }
    return `/${locale}`;
  };

  // Helper function to detect the current section in viewport
  const getCurrentSectionId = (): string => {
    if (typeof window === 'undefined') return 'hero';
    
    const viewportCenter = window.innerHeight / 2;
    const sections = document.querySelectorAll<HTMLElement>('section[data-section-id]');
    
    // Find the section that contains the viewport center point
    for (const section of Array.from(sections)) {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionBottom = sectionTop + rect.height;
      const viewportCenterAbsolute = window.scrollY + viewportCenter;
      
      if (viewportCenterAbsolute >= sectionTop && viewportCenterAbsolute <= sectionBottom) {
        const sectionId = section.getAttribute('data-section-id');
        if (sectionId) return sectionId;
      }
    }
    
    // Fallback: find the section closest to viewport center
    let closestSection: { id: string; distance: number } | null = null;
    for (const section of Array.from(sections)) {
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const distance = Math.abs(sectionCenter - viewportCenter);
      
      if (!closestSection || distance < closestSection.distance) {
        const sectionId = section.getAttribute('data-section-id');
        if (sectionId) {
          closestSection = { id: sectionId, distance };
        }
      }
    }
    
    return closestSection?.id || 'hero';
  };
  
  const enPath = buildLocalePath('en');
  const dePath = buildLocalePath('de');
  
  const bgColor = theme === 'light' ? navbar.bg.light : navbar.bg.dark;
  const borderColor = theme === 'light' ? navbar.borderColor.light : navbar.borderColor.dark;

  // Scroll to section handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Logo click handler - scroll to Hero
  const handleLogoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    scrollToSection('hero');
    setIsOpen(false); // Close mobile menu if open
  };

  // Nav link click handlers
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  // Language toggle handler
  const handleLanguageToggle = (locale: 'en' | 'de', e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Detect current section in viewport
    const currentSectionId = getCurrentSectionId();
    const targetPath = buildLocalePath(locale);
    const targetUrl = `${targetPath}#${currentSectionId}`;
    
    router.replace(targetUrl, { scroll: true });
    
    setIsOpen(false); // Close mobile menu if open
  };

  // Language toggle keyboard handler
  const handleLanguageKeyDown = (locale: 'en' | 'de', e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      
      // Detect current section in viewport
      const currentSectionId = getCurrentSectionId();
      const targetPath = buildLocalePath(locale);
      const targetUrl = `${targetPath}#${currentSectionId}`;
      
      router.replace(targetUrl, { scroll: true });
      
      setIsOpen(false);
    }
  };

  // Navigation links configuration
  const navLinks = [
    { id: 'features', label: labels.links.features },
    { id: 'pricing', label: labels.links.pricing },
    { id: 'use-cases', label: labels.links.useCases },
    { id: 'faq', label: labels.links.faq },
  ];

  return (
    <nav aria-label="Main navigation" className={`sticky top-0 z-40 w-full ${bgColor} border-b ${borderColor}`}>
      <div className={`${layout.container.maxWidth} ${layout.container.px} mx-auto`}>
        <div className={`flex items-center justify-between ${navbar.height}`}>
          {/* Left: Logo */}
          <div 
            className={`text-xl font-bold ${theme === 'dark' ? colors.dark.neutral.lightest : themeColors.neutral.lightest} cursor-pointer hover:opacity-70 transition-opacity`}
            onClick={handleLogoClick}
            role="button"
            tabIndex={0}
            aria-label={labels.ariaLabels.goToHomepage}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleLogoClick(e as any);
              }
            }}
          >
            {labels.brand}
          </div>
          
          {/* Middle: Navigation Links (Desktop Only) */}
          <div className={`hidden md:flex items-center ${navbar.link.spacing.x}`}>
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => handleNavClick(e, link.id)}
                className={`${theme === 'dark' ? colors.dark.neutral.medium : themeColors.neutral.light} hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded`}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Right: Language Toggle + CTA + Hamburger (Mobile) */}
          <div className={`flex items-center ${spacing.gap.sm}`}>
            {/* Language Toggle (Desktop) */}
            <div className={`hidden md:flex items-center ${spacing.gap.sm}`}>
                <button
                  type="button"
                  onClick={(e) => handleLanguageToggle('en', e)}
                  onKeyDown={(e) => handleLanguageKeyDown('en', e)}
                  className={`
                    px-2 py-1 text-sm rounded cursor-pointer
                    transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950
                    ${currentLocale === 'en' 
                      ? theme === 'light'
                        ? 'bg-slate-900 text-white'
                        : 'bg-white text-slate-900'
                      : theme === 'light'
                      ? 'text-slate-500 hover:text-slate-900'
                      : 'text-slate-400 hover:text-white'
                    }
                  `}
                  aria-label={labels.ariaLabels.switchToEnglish}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={(e) => handleLanguageToggle('de', e)}
                  onKeyDown={(e) => handleLanguageKeyDown('de', e)}
                  className={`
                    px-2 py-1 text-sm rounded cursor-pointer
                    transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950
                    ${currentLocale === 'de' 
                      ? theme === 'light'
                        ? 'bg-slate-900 text-white'
                        : 'bg-white text-slate-900'
                      : theme === 'light'
                      ? 'text-slate-500 hover:text-slate-900'
                      : 'text-slate-400 hover:text-white'
                    }
                  `}
                  aria-label={labels.ariaLabels.switchToGerman}
                >
                  DE
                </button>
            </div>
            
            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
              <CTAButton variant="primary" theme={theme} label={labels.cta} />
            </div>

            {/* Hamburger Button (Mobile Only) */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? labels.ariaLabels.closeMenu : labels.ariaLabels.openMenu}
              className={`
                md:hidden p-2 rounded
                ${theme === 'dark' ? colors.dark.neutral.lightest : themeColors.neutral.lightest}
                hover:opacity-70 transition-opacity
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950
              `}
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  // Close icon (X)
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger icon (three lines)
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <div
            id="mobile-menu"
            className={`md:hidden border-t ${borderColor} ${spacing.block.y.md}`}
          >
            <div className={`flex flex-col ${spacing.block.y.md}`}>
              {/* Language Toggle (Mobile) */}
              <div className={`flex items-center ${spacing.gap.sm} ${spacing.block.y.sm}`}>
                <button
                  type="button"
                  onClick={(e) => handleLanguageToggle('en', e)}
                  onKeyDown={(e) => handleLanguageKeyDown('en', e)}
                  className={`
                    px-2 py-1 text-sm rounded cursor-pointer
                    transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950
                    ${currentLocale === 'en' 
                      ? theme === 'light'
                        ? 'bg-slate-900 text-white'
                        : 'bg-white text-slate-900'
                      : theme === 'light'
                      ? 'text-slate-500 hover:text-slate-900'
                      : 'text-slate-400 hover:text-white'
                    }
                  `}
                  aria-label={labels.ariaLabels.switchToEnglish}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={(e) => handleLanguageToggle('de', e)}
                  onKeyDown={(e) => handleLanguageKeyDown('de', e)}
                  className={`
                    px-2 py-1 text-sm rounded cursor-pointer
                    transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950
                    ${currentLocale === 'de' 
                      ? theme === 'light'
                        ? 'bg-slate-900 text-white'
                        : 'bg-white text-slate-900'
                      : theme === 'light'
                      ? 'text-slate-500 hover:text-slate-900'
                      : 'text-slate-400 hover:text-white'
                    }
                  `}
                  aria-label={labels.ariaLabels.switchToGerman}
                >
                  DE
                </button>
              </div>

              {/* Navigation Links (Mobile) */}
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`
                    ${theme === 'dark' ? colors.dark.neutral.medium : themeColors.neutral.light}
                    hover:opacity-70 transition-opacity
                    ${spacing.block.y.sm}
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded
                  `}
                >
                  {link.label}
                </a>
              ))}

              {/* CTA Button (Mobile) */}
              <div className={spacing.block.y.sm}>
                <CTAButton variant="primary" theme={theme} label={labels.cta} onClick={() => setIsOpen(false)} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
