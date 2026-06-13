import React, { useState } from 'react';
import { FAQS } from '../../data/content';
import { Eyebrow } from '../common';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="section-pad bg-mocha">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-12 sm:mb-14 text-center">
          <Eyebrow className="mb-6 justify-center">Questions fréquentes</Eyebrow>
          <h2 className="clamp-title font-display font-light text-ivory">
            Tout ce qu'il faut <em className="text-gradient-gold not-italic">savoir</em>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="divide-y divide-obsidian-800" role="region" aria-label="FAQ">
          {FAQS.map((item, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <button
                className="flex w-full items-center justify-between py-6 text-left font-display text-lg sm:text-xl font-light text-ivory hover:text-champagne-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-400"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-${i}`}
              >
                <span>{item.q}</span>
                <div className={`ml-4 sm:ml-6 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`} aria-hidden="true">
                  <div className="relative h-6 w-6">
                    <div className="absolute top-1/2 left-0 h-px w-6 -translate-y-1/2 bg-champagne-500" />
                    <div className={`absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-champagne-500 transition-opacity duration-300 ${openIndex === i ? 'opacity-0' : ''}`} />
                  </div>
                </div>
              </button>

              {/* Answer */}
              <div
                id={`faq-${i}`}
                className={`overflow-hidden transition-all duration-500 ${openIndex === i ? 'max-h-96 pb-6' : 'max-h-0'}`}
              >
                <p className="font-sans text-sm font-light leading-relaxed text-obsidian-300">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
