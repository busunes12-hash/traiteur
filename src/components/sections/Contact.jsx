import React from 'react';
import { CONTACT } from '../../data/content';
import { Eyebrow } from '../common';

export const Contact = () => {
  return (
    <section id="contact" className="section-pad bg-obsidian-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-stretch gap-px lg:grid-cols-2">
          {/* Left – CTA Block */}
          <div className="reveal flex flex-col justify-between bg-champagne-500 p-8 sm:p-12 lg:p-16">
            <div>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-obsidian-800">
                Commencer votre projet
              </p>
              <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-obsidian-950">
                Composons<br />votre moment<br />parfait
              </h2>
              <p className="mt-6 font-sans text-sm sm:text-base font-light leading-relaxed text-obsidian-700">
                Chaque grand événement commence par une conversation. Contactez-nous
                et recevez une proposition personnalisée sous 24h.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-obsidian-950 px-6 py-3 sm:py-4 font-sans text-xs sm:text-sm font-medium uppercase tracking-widest text-ivory transition-all hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center justify-center gap-3 border border-obsidian-800 px-6 py-3 sm:py-4 font-sans text-xs sm:text-sm font-medium uppercase tracking-widest text-obsidian-800 transition-all hover:border-obsidian-950 hover:text-obsidian-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-obsidian-950"
              >
                E-mail
              </a>
            </div>
          </div>

          {/* Right – Contact Info */}
          <div className="reveal-right flex flex-col justify-between bg-obsidian-900 p-8 sm:p-12 lg:p-16">
            {/* Info Sections */}
            <div className="space-y-8 sm:space-y-10">
              {/* Phone */}
              <div>
                <Eyebrow className="mb-4">Téléphone</Eyebrow>
                <div className="space-y-2">
                  <a
                    href={`tel:${CONTACT.phone1.replace(/\s/g, '')}`}
                    className="block font-display text-xl sm:text-2xl font-light text-ivory hover:text-champagne-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-400"
                  >
                    {CONTACT.phone1}
                  </a>
                  <a
                    href={`tel:${CONTACT.phone2.replace(/\s/g, '')}`}
                    className="block font-display text-xl sm:text-2xl font-light text-ivory hover:text-champagne-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-400"
                  >
                    {CONTACT.phone2}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div>
                <Eyebrow className="mb-4">E-mail</Eyebrow>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="block font-display text-lg sm:text-xl font-light text-ivory hover:text-champagne-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-400 break-all"
                >
                  {CONTACT.email}
                </a>
              </div>

              {/* Address */}
              <div>
                <Eyebrow className="mb-4">Adresse</Eyebrow>
                <p className="font-sans text-sm font-light leading-relaxed text-obsidian-300">
                  {CONTACT.address}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex gap-4" role="navigation" aria-label="Social links">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-obsidian-700 text-obsidian-400 transition-all hover:border-champagne-500 hover:text-champagne-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-500"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-obsidian-700 text-obsidian-400 transition-all hover:border-champagne-500 hover:text-champagne-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-500"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
