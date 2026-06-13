import React from 'react';
import { NAV_LINKS } from '../../data/content';
import { Logo } from './Navbar';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-obsidian-800 bg-obsidian-950 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:gap-8 sm:flex-row">
          {/* Logo & Tagline */}
          <div className="text-center sm:text-left">
            <Logo />
            <p className="mt-2 font-sans text-xs text-obsidian-500">L'art de recevoir — Casablanca</p>
          </div>

          {/* Links */}
          <nav className="hidden gap-6 sm:flex" aria-label="Footer links">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-xs text-obsidian-500 transition-colors hover:text-champagne-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="font-sans text-xs text-obsidian-600">
            © {currentYear} Élan Traiteur. Tous droits réservés.
          </p>
        </div>

        {/* Mobile Footer Links */}
        <nav className="mt-6 flex flex-wrap justify-center gap-4 sm:hidden" aria-label="Footer links">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs text-obsidian-500 transition-colors hover:text-champagne-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
