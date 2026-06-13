import React from 'react';

export const BtnGold = ({ children, href = '#', className = '', target, rel, onClick }) => (
  <a
    href={href}
    target={target}
    rel={rel}
    onClick={onClick}
    className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm bg-champagne-500 px-6 sm:px-8 py-3 sm:py-4 font-sans text-sm font-medium uppercase tracking-[0.2em] text-obsidian-950 transition-all duration-500 hover:bg-champagne-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-400 active:scale-95 ${className}`}
    role="button"
    tabIndex={0}
  >
    <span className="relative z-10">{children}</span>
    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" d="M3 8h10M8 3l5 5-5 5" />
    </svg>
  </a>
);

export const BtnOutline = ({ children, href = '#', className = '', target, rel }) => (
  <a
    href={href}
    target={target}
    rel={rel}
    className={`group inline-flex items-center justify-center gap-2 border border-champagne-500/50 px-6 sm:px-8 py-3 sm:py-4 font-sans text-sm font-medium uppercase tracking-[0.2em] text-champagne-400 transition-all duration-500 hover:border-champagne-400 hover:text-champagne-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-400 active:scale-95 ${className}`}
    role="button"
    tabIndex={0}
  >
    {children}
  </a>
);

export const BtnSmall = ({ children, href = '#', className = '' }) => (
  <a
    href={href}
    className={`inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.2em] text-champagne-400 transition-colors hover:text-champagne-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-400 ${className}`}
  >
    {children}
  </a>
);
