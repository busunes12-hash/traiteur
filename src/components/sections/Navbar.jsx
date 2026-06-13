import React, { useState, useEffect } from 'react';
import { NAV_LINKS, CONTACT } from '../../data/content';
import { BtnSmall } from '../common';

export const Logo = ({ className = '' }) => (
  <a href="#" className={`flex items-center gap-3 group transition-opacity hover:opacity-80 ${className}`}>
    <div className="flex h-9 w-9 items-center justify-center border border-champagne-500/60 transition-colors group-hover:border-champagne-400" aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-champagne-500" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M12 3l1.5 4L17 8l-3 3 .8 4L12 13l-2.8 2L10 11 7 8l3.5-1z" />
      </svg>
    </div>
    <div>
      <span className="font-display text-base font-semibold tracking-widest text-ivory">ÉLAN</span>
      <span className="ml-1 font-display text-base font-light tracking-widest text-champagne-500">TRAITEUR</span>
    </div>
  </a>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-obsidian-950/90 backdrop-blur-xl border-b border-champagne-500/10 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-obsidian-200 transition-colors hover:text-champagne-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-champagne-500/40 px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-[0.2em] text-champagne-400 transition-all hover:border-champagne-400 hover:text-champagne-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-400"
          >
            Devis gratuit
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-400"
          aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span className={`block h-px w-6 bg-ivory transition-all duration-300 ${mobileMenuOpen ? 'translate-y-2.5 rotate-45' : ''}`} />
          <span className={`block h-px w-6 bg-ivory transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-ivory transition-all duration-300 ${mobileMenuOpen ? '-translate-y-2.5 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="border-t border-champagne-500/10 bg-obsidian-950/95 backdrop-blur-xl px-6 py-6 space-y-3">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-obsidian-200 transition-colors hover:text-champagne-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 block border border-champagne-500/40 px-5 py-3 text-center font-sans text-xs font-medium uppercase tracking-[0.2em] text-champagne-400 transition-all hover:border-champagne-400"
          >
            Devis gratuit
          </a>
        </div>
      </div>
    </header>
  );
};
