/**
 * Design System Primitives
 * 
 * This file defines all visual tokens and layout patterns that can be used
 * across all landing pages. No custom spacing, colors, or layouts beyond these.
 */

// ============================================================================
// SPACING TOKENS
// ============================================================================

export const spacing = {
  // Section vertical spacing (NO margins between sections)
  section: {
    y: {
      lg: 'py-16 lg:py-20',   // Footer bottom (smaller than default)
      xl: 'py-20 lg:py-24',   // New default: All mid-page sections (upgraded from old section.y.lg)
      '2xl': 'py-24 lg:py-32', // Extra large: Hero bottom, Final CTA top (upgraded from old section.y.xl)
    },
    // Separate top/bottom spacing for FinalCTA
    top: {
      '2xl': 'pt-24 lg:pt-32', // FinalCTA top spacing
    },
    bottom: {
      xl: 'pb-20 lg:pb-24', // FinalCTA bottom spacing
    },
  },
  // Internal block vertical spacing
  block: {
    y: {
      sm: 'mb-6',   // Upgraded: Tight spacing (was mb-4, now uses old block.y.md value)
      md: 'mb-8',   // Upgraded: Medium spacing (was mb-6, now uses old block.y.lg value)
      lg: 'mb-16',  // Upgraded: Large spacing (increased from mb-12 to mb-16 for more generous feature spacing)
      xl: 'mb-20',  // Extra large: Step gap, feature gap
      '2xl': 'mb-16 lg:mb-20', // New: Extra large spacing for Hero text→media on mobile/tablet
    },
  },
  // Element micro vertical spacing
  element: {
    y: {
      xs: 'mb-2',   // Very small spacing: Name → Role, Badge → Label, micro text
    },
  },
  // Grid spacing
  grid: {
    x: {
      md: 'gap-x-8',
      lg: 'gap-x-12',
    },
    y: {
      md: 'gap-y-8',
      lg: 'gap-y-12',
    },
  },
  // Horizontal spacing
  gutter: {
    x: {
      md: 'gap-6',  // Default horizontal gap between grid columns/cards (NO CHANGE)
    },
  },
  // Container horizontal padding
  container: {
    px: 'px-4 lg:px-8',  // Horizontal padding for main container (NO CHANGE)
  },
  // Legacy gap spacing (for backward compatibility, will be replaced with gutter.x.md)
  gap: {
    sm: 'gap-4',    // Small gaps (button groups)
    md: 'gap-6',    // Medium gaps (grid items) - maps to gutter.x.md
    lg: 'gap-8',    // Large gaps (split grid)
    xl: 'gap-12',   // Extra large gaps (split grid desktop)
  },
  // Card padding
  card: {
    padding: {
      md: 'px-6 py-6',  // Standard card padding
      lg: 'px-6 py-8',  // Large card padding
    },
    px: 'px-6',
    py: 'py-6',     // Standard card padding (legacy)
    pyLg: 'py-8',   // Large card padding (legacy)
  },
  // Logo-specific spacing
  logo: {
    pad: {
      md: 'px-4 py-3',  // Internal padding for each LogoCell
    },
    height: {
      sm: 'h-8',        // Small logo height
      md: 'h-12',      // Medium logo height (larger)
    },
    width: {
      md: 'min-w-[120px]', // Minimum width for logo cell
    },
  },
} as const;

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

export const typography = {
  h1: 'text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight',
  h2: 'text-3xl lg:text-4xl font-bold tracking-tight',
  h3: 'text-xl lg:text-2xl font-semibold',
  body: 'text-base lg:text-lg leading-relaxed',
  label: 'text-sm font-medium',
  textXs: 'text-xs',
} as const;

// ============================================================================
// COLOR TOKENS
// ============================================================================

export type ColorTheme = 'light' | 'dark';

export const colors = {
  light: {
    // Background tokens
    background: {
      default: 'bg-white',
      neutral: 'bg-slate-50',
    },
    // Surface tokens
    surface: {
      default: 'bg-white',
      elevated: 'bg-white',
    },
    // Text tokens
    text: {
      primary: 'text-slate-900',
      secondary: 'text-slate-600',
      muted: 'text-slate-600',
    },
    // Neutral palette
    neutral: {
      darkest: 'bg-slate-950',
      surface: 'bg-white',
      lightest: 'text-slate-900',
      light: 'text-slate-600',
      midLight: 'text-slate-500',
    },
    // Primary (CTA only)
    primary: {
      bg: 'bg-blue-600',
      text: 'text-white',
      hover: 'hover:bg-blue-700',
    },
    // Accent
    accent: {
      primary: 'text-blue-600',
    },
    // Borders
    border: {
      subtle: 'border-slate-200',
    },
    divider: {
      subtle: 'border-slate-200',
    },
    // Card backgrounds
    card: {
      bg: 'bg-white',
      border: 'border-slate-200',
    },
  },
  dark: {
    // Background tokens (dark mode)
    background: {
      darkest: 'bg-slate-950',  // Page background
      darker: 'bg-slate-900',    // Section variants, cards
      dark: 'bg-slate-800',      // Section variants, icon containers
      default: 'bg-slate-950',
      neutral: 'bg-slate-950',
    },
    // Surface tokens (dark mode)
    surface: {
      default: 'bg-slate-900',
      elevated: 'bg-slate-800',
    },
    // Text tokens (dark mode)
    text: {
      primary: 'text-slate-50',   // Headlines
      secondary: 'text-slate-200', // Body text
      muted: 'text-slate-400',    // Muted text
    },
    // Text tokens (dark mode) - legacy
    neutral: {
      lightest: 'text-slate-50',   // Headlines (very bright)
      light: 'text-slate-200',     // Body text
      midLight: 'text-slate-400',  // Muted text
      dark: 'text-slate-50',       // Alias for lightest (headlines)
      medium: 'text-slate-200',    // Body text (use light for body)
    },
    // Background classes for containers (icon boxes, etc.)
    bg: {
      icon: 'bg-slate-800',        // Icon container backgrounds
      card: 'bg-slate-900',        // Card backgrounds
    },
    // White CTA button tokens
    cta: {
      white: {
        bg: 'bg-white',
        text: 'text-slate-950',
        hover: 'hover:bg-neutral-100',
        active: 'active:bg-neutral-200',
      },
      ghost: {
        bg: 'bg-transparent',
        border: 'border-white',
        text: 'text-slate-50',
        hover: 'hover:bg-white/10',
        active: 'active:bg-white/20',
      },
    },
    // Electric blue accent (for icons, highlights, underlines, metrics)
    accent: {
      primary: 'text-sky-400',      // Main electric blue
      secondary: 'text-emerald-400',
      blue: {
        primary: 'text-sky-400',      // Main electric blue
        hover: 'text-sky-300',        // Hover state
        subtle: 'text-sky-500',       // Subtle variant
      },
    },
    // Borders (subtle neutral-dark-light)
    border: {
      subtle: 'border-white/10',
    },
    divider: {
      subtle: 'border-white/5',
    },
    // Card backgrounds
    card: {
      bg: 'bg-slate-900',
      border: 'border-white/10',
    },
  },
} as const;

// ============================================================================
// LAYOUT PATTERNS
// ============================================================================

/**
 * Pattern 1: Split-Grid (50/50)
 * Left: text block (H2 → subhead → body → CTA)
 * Right: media container
 */
export const layoutPatterns = {
  splitGrid: {
    container: `grid grid-cols-1 lg:grid-cols-2 ${spacing.gutter.x.md} items-center`,
    textColumn: '',
    mediaColumn: '',
  },
  /**
   * Pattern 2: Centered Layout
   * H2 centered, max width token, content grid below
   */
  centered: {
    container: 'max-w-4xl mx-auto text-center',
    contentGrid: {
      two: `grid grid-cols-1 md:grid-cols-2 ${spacing.gutter.x.md}`,
      three: `grid grid-cols-1 md:grid-cols-3 ${spacing.gutter.x.md}`,
      six: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 ${spacing.gutter.x.md}`,
    },
  },
  /**
   * Pattern 3: Left-Aligned Single Column
   * One vertical stack
   */
  singleColumn: {
    container: 'max-w-3xl mx-auto',
    stack: `flex flex-col ${spacing.block.y.md}`,
  },
} as const;

// ============================================================================
// COMPONENT TOKENS
// ============================================================================

export const components = {
  button: {
    // White, slim CTA buttons
    primary: {
      base: 'px-5 py-2 rounded-full font-medium transition-all duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-950',
      // Slim vertical padding (py-2), horizontal padding (px-5)
      // Rounded-full for pill shape
    },
    secondary: {
      base: 'px-5 py-2 rounded-full font-medium transition-all duration-150 ease-out border focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-950',
      // Ghost variant with border
    },
    radius: 'rounded-full', // Pill-shaped radius token
  },
  // Surface radius token (single radius for all surfaces)
  surface: {
    radius: 'rounded-xl', // Single radius token for all surface components
  },
  radius: {
    card: 'rounded-xl',
    button: 'rounded-full',
    media: 'rounded-xl',
  },
  card: {
    base: 'rounded-xl border', // Updated to use surface.radius
    padding: 'px-6 py-6',
  },
  media: {
    aspectRatios: {
      '16:9': 'aspect-video',
      '4:3': 'aspect-video', // Using aspect-video as closest standard (16:9 ≈ 4:3 for most use cases)
      '1:1': 'aspect-square',
    },
    maxWidth: {
      sm: 'max-w-lg',   // ~512px
      md: 'max-w-xl',   // ~576px
      lg: 'max-w-2xl',  // ~672px
      xl: 'max-w-4xl',  // ~896px
    },
    // Tokenized media overlay (gradient option)
    overlay: 'before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none before:z-[1]',
  },
  shadow: {
    surface1: 'shadow-sm',
    surface2: 'shadow-md',
  },
  // Motion tokens
  motion: {
    duration: {
      fast: 'duration-150',
      normal: 'duration-200',
    },
    easing: {
      standard: 'ease-out',
    },
  },
  // Transition tokens for micro-interactions
  transition: {
    default: 'transition-all duration-150 ease-out',
    hover: 'hover:transition-all hover:duration-150 hover:ease-out',
  },
} as const;

// ============================================================================
// RESPONSIVE BREAKPOINTS
// ============================================================================

// Using Tailwind defaults:
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px

// Max text width for readability (70-75 characters)
export const maxTextWidth = 'max-w-2xl';

// Layout tokens
export const layout = {
  container: {
    maxWidth: 'max-w-[1150px]',
    px: 'px-4 lg:px-8',  // Horizontal padding for content wrapper
  },
  gutter: {
    x: 'gap-6',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
} as const;

// ============================================================================
// NAVBAR TOKENS
// ============================================================================

export const navbar = {
  height: 'py-4',
  borderColor: {
    light: colors.light.divider.subtle,
    dark: colors.dark.divider.subtle,
  },
  bg: {
    light: colors.light.neutral.surface,
    dark: colors.dark.background.darkest,
  },
  link: {
    spacing: {
      x: spacing.gap.md,
    },
    typography: typography.body,
  },
} as const;

// ============================================================================
// FOOTER TOKENS
// ============================================================================

export const footer = {
  bg: {
    light: colors.light.neutral.surface,
    dark: colors.dark.background.darkest,
  },
  borderColor: {
    light: colors.light.divider.subtle,
    dark: colors.dark.divider.subtle,
  },
  section: {
    padding: {
      y: spacing.section.y.lg,
    },
  },
  text: {
    muted: {
      light: colors.light.neutral.midLight,
      dark: colors.dark.neutral.midLight,
    },
    default: {
      light: colors.light.neutral.light,
      dark: colors.dark.neutral.light,
    },
  },
} as const;

// ============================================================================
// GLOBAL BACKGROUND TOKEN (MANDATORY)
// ============================================================================

/**
 * Global Background Rule: Every section MUST use neutral.darkest
 * NO alternating backgrounds, NO variants, NO gradients
 * Single uniform dark canvas across entire landing page
 */
export const globalBackground = {
  neutral: {
    darkest: 'bg-slate-950', // Single token for ALL sections and footer
  },
} as const;

