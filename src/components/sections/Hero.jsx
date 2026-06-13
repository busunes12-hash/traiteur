import React, { useState, useEffect, useRef, useCallback } from 'react';
import { STATS, CONTACT } from '../../data/content';
import { Eyebrow, PageTitle, Subtitle, BtnGold, BtnOutline } from '../common';

const HERO_SLIDES = [
  {
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
    sizes: 'w=1920&q=80&auto=format&fit=crop',
    label: 'Mariages d\'exception',
  },
  {
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3',
    sizes: 'w=1920&q=80&auto=format&fit=crop',
    label: 'Réceptions de prestige',
  },
  {
    url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d',
    sizes: 'w=1920&q=80&auto=format&fit=crop',
    label: 'Tables gastronomiques',
  },
  {
    url: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330',
    sizes: 'w=1920&q=80&auto=format&fit=crop',
    label: 'Événements corporate',
  },
  {
    url: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c',
    sizes: 'w=1920&q=80&auto=format&fit=crop',
    label: 'Décoration florale',
  },
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState({});
  const timerRef = useRef(null);

  const next = useCallback(() => setCurrent(c => (c + 1) % HERO_SLIDES.length), []);

  useEffect(() => {
    timerRef.current = setInterval(next, 4000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const goToSlide = (index) => {
    clearInterval(timerRef.current);
    setCurrent(index);
    timerRef.current = setInterval(next, 4000);
  };

  return (
    <section
      className="relative h-screen min-h-[700px] overflow-hidden"
      aria-label="Hero section"
    >
      {/* Slides */}
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <img
            src={`${slide.url}?${slide.sizes}`}
            srcSet={`${slide.url}?w=768&q=80&auto=format&fit=crop 768w, ${slide.url}?w=1366&q=80&auto=format&fit=crop 1366w, ${slide.url}?w=1920&q=80&auto=format&fit=crop 1920w`}
            sizes="100vw"
            alt={slide.label}
            onLoad={() => setLoaded(l => ({ ...l, [i]: true }))}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              animation: i === current ? 'ken-burns 10s ease-in-out infinite alternate' : 'none',
            }}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          {/* Multi-layer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/85 via-obsidian-950/50 to-obsidian-950/30" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/70 via-transparent to-obsidian-950/30" aria-hidden="true" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Eyebrow className="mb-6 sm:mb-8">Casablanca — Maroc</Eyebrow>
            </div>

            <PageTitle className="animate-fade-up mb-8" style={{ animationDelay: '400ms' }}>
              L'art de<br />
              <em className="text-gradient-gold not-italic">recevoir</em>
              <br />sublimé
            </PageTitle>

            <Subtitle className="animate-fade-up max-w-lg" style={{ animationDelay: '600ms' }}>
              Mariages, réceptions privées et événements d'entreprise — orchestrés avec
              une élégance sans compromis à Casablanca et sa région.
            </Subtitle>

            <div
              className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-up"
              style={{ animationDelay: '800ms' }}
            >
              <BtnGold href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                Réserver votre événement
              </BtnGold>
              <BtnOutline href="#services">Découvrir nos services</BtnOutline>
            </div>

            {/* Stats strip */}
            <div
              className="mt-16 flex flex-wrap gap-8 border-t border-champagne-500/20 pt-8 animate-fade-up"
              style={{ animationDelay: '1000ms' }}
            >
              {STATS.map(s => (
                <div key={s.label}>
                  <p className="font-display text-2xl sm:text-3xl font-light text-gradient-gold">{s.value}</p>
                  <p className="mt-1 font-sans text-xs uppercase tracking-widest text-obsidian-300">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div
        className="absolute bottom-8 right-6 sm:right-10 z-20 flex flex-col gap-2"
        aria-label="Slide indicators"
      >
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`block h-px transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-400 ${i === current ? 'w-10 bg-champagne-500' : 'w-4 bg-obsidian-500'}`}
            aria-label={`Aller au slide ${i + 1}`}
            aria-current={i === current ? 'true' : 'false'}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 animate-float" aria-hidden="true">
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-obsidian-400">Défiler</span>
        <div className="h-8 w-px bg-gradient-to-b from-champagne-500/60 to-transparent" />
      </div>
    </section>
  );
};
