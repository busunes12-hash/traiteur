import React from 'react';
import { CONTACT } from '../../data/content';
import { Eyebrow, SectionHeading, Subtitle, PageTitle, BtnGold } from '../common';

export const Manifesto = () => {
  return (
    <section className="section-pad relative overflow-hidden bg-mocha">
      {/* Large decorative text */}
      <div
        className="pointer-events-none absolute -top-10 left-0 font-display text-[15vw] sm:text-[20vw] font-light leading-none text-obsidian-900/40 select-none"
        aria-hidden="true"
      >
        ÉLAN
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="reveal-left relative">
            <div className="img-zoom aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop"
                srcSet="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80&auto=format&fit=crop 400w, https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop 600w, https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop 900w"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt="Chef cuisinier Élan Traiteur en action"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating stat box */}
            <div className="glass absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 p-4 sm:p-8">
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-gradient-gold">12 ans</p>
              <p className="mt-1 sm:mt-2 font-sans text-xs uppercase tracking-widest text-obsidian-300">de passion</p>
            </div>
          </div>

          {/* Text */}
          <div className="reveal-right">
            <Eyebrow className="mb-8">Notre philosophie</Eyebrow>
            <h2 className="clamp-title font-display font-light leading-tight text-ivory mb-8">
              Chaque détail<br />
              <em className="text-gradient-gold not-italic">raconte</em><br />
              votre histoire
            </h2>

            <Subtitle className="mb-4">
              Depuis 2012, Élan Traiteur conjugue gastronomie marocaine d'héritage et
              créations contemporaines pour offrir des expériences uniques. Notre chef et
              son équipe mettent leur savoir-faire au service de l'émotion.
            </Subtitle>

            <Subtitle>
              Chaque événement est une partition : nous en composons chaque note avec soin,
              du premier accord au final applaudi.
            </Subtitle>

            <div className="mt-10">
              <BtnGold href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                Nous contacter
              </BtnGold>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
