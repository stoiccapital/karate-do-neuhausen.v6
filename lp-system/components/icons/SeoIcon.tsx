import React from 'react';

/**
 * SEO/Search Icon
 * Uses currentColor for theme compatibility (light/dark mode)
 */
export function SeoIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
      <rect x="0.004" y="37.04" width="323.032" height="87.867"></rect>
      <path d="M354.394,37.039v87.867H512V37.039H354.394z M411.107,90.01h-20.615V69.394h20.615V90.01z M443.4,90.01h-20.615V69.394 H443.4V90.01z M475.693,90.01h-20.615V69.394h20.615V90.01z"></path>
      <path d="M0,156.268v318.693h511.99L512,156.268H0z M180.166,238.186h31.362v32.45h-31.362V238.186z M256,388.955 c-38.586,0-69.969-31.383-69.969-69.969h31.362c0,21.285,17.322,38.607,38.607,38.607s38.607-17.322,38.607-38.607h31.362 C325.969,357.572,294.586,388.955,256,388.955z M332.095,270.636h-31.362v-32.45h31.362V270.636z"></path>
    </svg>
  );
}

