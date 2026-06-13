import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../../data/content';
import { Eyebrow, GoldLine } from '../common';

export const Testimonials = () => {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const goToTestimonial = (index) => {
    setActive(index);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => goToTestimonial((index + 1) % TESTIMONIALS.length), 5000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => setActive(a => (a + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section id="temoignages" className="section-pad bg-mocha">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-12 sm:mb-14 flex flex-col items-center text-center">
          <Eyebrow className="mb-6 justify-center">Ils nous font confiance</Eyebrow>
          <h2 className="clamp-title font-display font-light text-ivory">
            Ce que disent<br /><em className="text-gradient-gold not-italic">nos clients</em>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="mx-auto max-w-3xl">
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={i}
                className={`transition-opacity duration-700 ${i === active ? 'opacity-100 visible' : 'opacity-0 invisible absolute'}`}
              >
                {/* Stars */}
                <div className="mb-8 flex justify-center gap-1.5" aria-label={`${5} étoiles sur 5`}>
                  {[...Array(5)].map((_, k) => (
                    <svg key={k} className="h-4 w-4 text-champagne-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-display text-xl sm:text-2xl lg:text-4xl font-light italic leading-relaxed text-ivory">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-10 flex flex-col items-center gap-3 sm:gap-4">
                  <GoldLine />
                  <p className="font-sans text-sm font-medium text-ivory">{testimonial.name}</p>
                  <p className="font-sans text-xs uppercase tracking-widest text-champagne-500">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Indicator Dots */}
          <div className="mt-12 sm:mt-16 flex justify-center gap-3" role="tablist" aria-label="Testimonials">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goToTestimonial(i)}
                className={`h-px transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-400 ${i === active ? 'w-12 bg-champagne-500' : 'w-5 bg-obsidian-600'}`}
                role="tab"
                aria-selected={i === active}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
