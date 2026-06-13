import React, { useState, useEffect } from 'react';
import { Eyebrow } from '../common';

const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&auto=format&fit=crop', label: 'Mariage royal', span: 'row-span-2' },
  { url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80&auto=format&fit=crop', label: 'Réception de gala' },
  { url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80&auto=format&fit=crop', label: 'Gastronomie' },
  { url: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80&auto=format&fit=crop', label: 'Corporate event', span: 'row-span-2' },
  { url: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80&auto=format&fit=crop', label: 'Floral design' },
  { url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80&auto=format&fit=crop', label: 'VIP soirée' },
];

export const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') setLightbox(null);
    };
    if (lightbox) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [lightbox]);

  return (
    <section className="section-pad bg-obsidian-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12 sm:mb-14 reveal text-center">
          <Eyebrow className="mb-6 justify-center">Nos réalisations</Eyebrow>
          <h2 className="clamp-title font-display font-light text-ivory">
            La galerie <em className="text-gradient-gold not-italic">Élan</em>
          </h2>
        </div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightbox(img)}
              className={`reveal img-zoom group relative cursor-pointer overflow-hidden transition-all hover:ring-2 hover:ring-champagne-500 focus-within:ring-2 focus-within:ring-champagne-500 ${img.span || ''} ${i === 0 || i === 3 ? 'row-span-2' : ''}`}
              style={{ transitionDelay: `${i * 80}ms`, aspectRatio: img.span ? '3/4' : '4/3' }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setLightbox(img)}
            >
              <img
                src={img.url}
                alt={img.label}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-obsidian-950/0 transition-all duration-500 group-hover:bg-obsidian-950/50" aria-hidden="true" />
              <div className="absolute inset-0 flex items-end p-4 sm:p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="font-display text-base sm:text-lg font-light text-ivory">{img.label}</span>
              </div>
              <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center border border-ivory/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true">
                <svg className="h-4 w-4 text-ivory" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" d="M21 21l-6-6M3 10a7 7 0 1014 0A7 7 0 003 10z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian-950/95 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Image: ${lightbox.label}`}
        >
          <button
            className="absolute right-4 sm:right-6 top-4 sm:top-6 text-ivory hover:text-champagne-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-400"
            onClick={() => setLightbox(null)}
            aria-label="Fermer la galerie"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightbox.url.replace('w=800', 'w=1400')}
            alt={lightbox.label}
            className="max-h-[85vh] max-w-[95vw] sm:max-w-[90vw] object-contain"
            onClick={e => e.stopPropagation()}
          />
          <p className="absolute bottom-4 sm:bottom-8 font-display text-base sm:text-lg font-light text-champagne-400">{lightbox.label}</p>
        </div>
      )}
    </section>
  );
};
