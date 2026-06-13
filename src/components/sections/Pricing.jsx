import React from 'react';
import { PRICING, CONTACT } from '../../data/content';
import { Eyebrow, Subtitle, BtnGold, BtnOutline } from '../common';

export const Pricing = () => {
  return (
    <section id="offres" className="section-pad bg-obsidian-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-12 sm:mb-14 text-center">
          <Eyebrow className="mb-6 justify-center">Nos formules</Eyebrow>
          <h2 className="clamp-title font-display font-light text-ivory mb-6">
            L'offre <em className="text-gradient-gold not-italic">Élan</em>
          </h2>
          <Subtitle className="mx-auto max-w-lg">
            Des formules taillées pour chaque événement. Chaque détail pensé pour que votre moment soit inoubliable.
          </Subtitle>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-px bg-obsidian-800/30 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING.map((plan, i) => (
            <article
              key={plan.name}
              className={`reveal relative flex flex-col p-6 sm:p-8 lg:p-10 transition-colors duration-500 hover:bg-obsidian-900 focus-within:bg-obsidian-900 ${
                plan.featured
                  ? 'bg-champagne-500/5 ring-1 ring-champagne-500/40'
                  : 'bg-obsidian-950'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.featured && (
                <span className="absolute right-6 top-6 font-sans text-xs uppercase tracking-widest text-champagne-500">
                  — Recommandé
                </span>
              )}

              <div>
                <p className="font-display text-4 sm:text-5xl font-light text-obsidian-700" aria-hidden="true">
                  0{i + 1}
                </p>
                <h3 className="mt-4 font-display text-2xl sm:text-3xl font-light text-ivory">{plan.name}</h3>
                <p className="mt-2 font-sans text-sm font-light text-obsidian-400">{plan.description}</p>
              </div>

              <div className="my-6 sm:my-8 h-px bg-obsidian-800" aria-hidden="true" />

              <div className="mb-2">
                <span className={`font-display text-3xl sm:text-5xl font-light ${plan.featured ? 'text-gradient-gold' : 'text-ivory'}`}>
                  {plan.price}
                </span>
                {plan.unit && (
                  <span className="ml-2 font-sans text-xs sm:text-sm text-obsidian-400">{plan.unit}</span>
                )}
              </div>

              {/* Features List */}
              <ul className="mt-6 flex-1 space-y-3 sm:space-y-4">
                {plan.features.map(feat => (
                  <li key={feat} className="flex items-start gap-3 font-sans text-sm font-light text-obsidian-300">
                    <div className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-champagne-500" aria-hidden="true" />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-8 sm:mt-10">
                {plan.featured ? (
                  <BtnGold
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full justify-center"
                  >
                    {plan.cta}
                  </BtnGold>
                ) : (
                  <BtnOutline
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full justify-center"
                  >
                    {plan.cta}
                  </BtnOutline>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
