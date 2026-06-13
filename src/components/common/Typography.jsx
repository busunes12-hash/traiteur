import React from 'react';

export const GoldLine = ({ className = '' }) => (
  <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
    <div className="h-px w-8 bg-champagne-500" />
    <div className="h-1 w-1 rounded-full bg-champagne-500" />
    <div className="h-px w-8 bg-champagne-500" />
  </div>
);

export const Eyebrow = ({ children, className = '' }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="h-px w-10 flex-shrink-0 bg-champagne-500" aria-hidden="true" />
    <span className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-champagne-500">
      {children}
    </span>
  </div>
);

export const SectionHeading = ({ children, subtitle, className = '' }) => (
  <div className={`${className}`}>
    {subtitle && <Eyebrow className="mb-6">{subtitle}</Eyebrow>}
    <h2 className="clamp-title font-display font-light leading-tight text-ivory">
      {children}
    </h2>
  </div>
);

export const PageTitle = ({ children, className = '' }) => (
  <h1 className={`clamp-hero font-display font-light leading-tight text-ivory ${className}`}>
    {children}
  </h1>
);

export const Subtitle = ({ children, className = '' }) => (
  <p className={`font-sans text-base font-light leading-relaxed text-obsidian-300 ${className}`}>
    {children}
  </p>
);
