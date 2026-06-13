import React from 'react';
import { FEATURES } from '../../data/content';
import { Eyebrow, SectionHeading, Subtitle } from '../common';

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=75&auto=format&fit=crop',
];

export const Services = () => {
  return (
    <section id="services" className="section-pad bg-obsidian-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 grid lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <Eyebrow className="mb-6">Ce que nous faisons</Eyebrow>
            <h2 className="clamp-title font-display font-light leading-tight text-ivory">
              Un événement,<br /><em className="text-gradient-gold not-italic">une promesse</em>
            </h2>
          </div>
          <div className="reveal mt-6 lg:mt-auto">
            <Subtitle className="mb-6">
              De la première consultation au dernier service, notre équipe prend en charge
              chaque détail avec une exigence absolue — pour que vous viviez pleinement votre
              moment sans la moindre préoccupation.
            </Subtitle>
            <div className="h-px w-full bg-gradient-to-r from-champagne-500/40 to-transparent" aria-hidden="true" />
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid gap-px bg-obsidian-800/30 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((service, i) => (
            <article
              key={service.title}
              className="reveal group relative overflow-hidden bg-obsidian-950 p-6 sm:p-8 transition-colors duration-500 hover:bg-obsidian-900"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Background image on hover */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-10"
                style={{
                  backgroundImage: `url(${SERVICE_IMAGES[i]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                aria-hidden="true"
              />

              {/* Number */}
              <span className="font-display text-5xl font-light text-obsidian-800 transition-colors duration-500 group-hover:text-obsidian-700" aria-hidden="true">
                0{i + 1}
              </span>

              {/* Title */}
              <h3 className="mt-4 font-display text-2xl font-light text-ivory">
                {service.title}
              </h3>

              {/* Accent line */}
              <div className="mt-3 h-px w-8 bg-champagne-500 transition-all duration-500 group-hover:w-16" aria-hidden="true" />

              {/* Description */}
              <p className="mt-4 font-sans text-sm font-light leading-relaxed text-obsidian-300">
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
