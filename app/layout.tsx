import type { Metadata } from "next";
import "./globals.css";
import { DEFAULT_THEME } from "../lp-system/config/preferences";

export const metadata: Metadata = {
  title: "Landing Page Template",
  description: "Minimal reusable landing page template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // For static export, use default theme (theme switching handled client-side)
  const theme = DEFAULT_THEME;

  // Tailwind uses "dark" class on <html> for dark mode
  // Light mode = no class (empty string)
  const htmlClassName = theme === 'dark' ? 'dark' : '';

  return (
    <html lang="de" className={htmlClassName} data-theme={theme}>
      <body className="bg-bg-default text-text-primary">
        {children}
      </body>
    </html>
  );
}
