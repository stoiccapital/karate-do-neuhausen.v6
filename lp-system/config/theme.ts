import { colors, ColorTheme } from './design-system';

export type ThemeName = ColorTheme;

export type ThemeConfig = {
  name: ThemeName;
  background: string;        // Tailwind bg class
  font: string;              // Tailwind font class
};

export const themes: Record<ThemeName, ThemeConfig> = {
  light: {
    name: 'light',
    background: colors.light.neutral.surface,
    font: 'font-sans',
  },
  dark: {
    name: 'dark',
    background: colors.dark.background.darkest, // Use darkest for page background
    font: 'font-sans',
  },
};
