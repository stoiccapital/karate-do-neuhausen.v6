import React from 'react';

/**
 * Chart/Bar Graph Icon
 * Uses currentColor for theme compatibility (light/dark mode)
 */
export function ChartIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
      <rect x="56" y="317.484" width="80" height="146.516"></rect>
      <rect x="176" y="237.484" width="80" height="226.516"></rect>
      <rect x="296" y="141.484" width="80" height="322.516"></rect>
      <rect x="416" y="45.484" width="80" height="418.516"></rect>
      <polygon points="16,496 16,0 0,0 0,496 0,512 16,512 512,512 512,496 "></polygon>
    </svg>
  );
}

