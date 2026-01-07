import React from 'react';

/**
 * Calendar Icon
 * Uses currentColor for theme compatibility (light/dark mode)
 */
export function CalendarIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" className={className} fill="none">
      <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)">
        <path d="m2.5.5h12c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2z"></path>
        <path d="m.5 4.5h16"></path>
        <path d="m3.5 7.5v6"></path>
        <path d="m5.5 7.5v6"></path>
        <path d="m7.5 7.5v6"></path>
        <path d="m9.5 7.5v6"></path>
        <path d="m11.5 7.5v6"></path>
        <path d="m13.5 7.5v6"></path>
      </g>
    </svg>
  );
}

