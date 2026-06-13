import { useState, useEffect, useRef, useCallback } from 'react';
import { BRAND, CONTACT, NAV_LINKS, STATS, FEATURES, TESTIMONIALS, PRICING, FAQS } from './data/content';

/* ─────────────────────────────────────────
   HERO SLIDES  (Unsplash – no auth needed)
───────────────────────────────────────────*/
const HERO_SLIDES = [
  {
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80&auto=format&fit=crop',
    label: 'Mariages d\'exception',
  },
  {
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80&auto=format&fit=crop',
    label: 'Réceptions de prestige',
  },
  {
    url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80&auto=format&fit=crop',
    label: 'Tables gastronomiques',
  },
  {
    url: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1920&q=80&auto=format&fit=crop',
    label: 'Événements corporate',
  },
  {
    url: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1920&q=80&auto=format&fit=crop',
    label: 'Décoration florale',
  },
];

const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&auto=format&fit=crop', label: 'Mariage royal', span: 'row-span-2' },
  { url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80&auto=format&fit=crop', label: 'Réception de gala' },
  { url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80&auto=format&fit=crop', label: 'Gastronomie' },
  { url: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80&auto=format&fit=crop', label: 'Corporate event', span: 'row-span-2' },
  { url: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80&auto=format&fit=crop', label: 'Floral design' },
  { url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80&auto=format&fit=crop', label: 'VIP soirée' },
];

/* ─────────────────────────────────────────
   HOOKS
───────────────────────────────────────────*/
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

function useNavScroll() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  return scrolled;
}

/* ─────────────────────────────────────────
   SMALL ATOMS
───────────────────────────────────────────*/
function GoldLine({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-px w-8 bg-champagne-500" />
      <div className="h-1 w-1 rounded-full bg-champagne-500" />
      <div className="h-px w-8 bg-champagne-500" />
    </div>
  );
}

function Eyebrow({ children, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-px w-10 bg-champagne-500 flex-shrink-0" />
      <span className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-champagne-500">
        {children}
      </span>
    </div>
  );
}

function BtnGold({ children, href = '#', className = '', target, rel, onClick }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-none bg-champagne-500 px-8 py-4 font-sans text-sm font-medium uppercase tracking-[0.2em] text-obsidian-950 transition-all duration-500 hover:bg-champagne-400 ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" d="M3 8h10M8 3l5 5-5 5" />
      </svg>
    </a>
  );
}

function BtnOutline({ children, href = '#', className = '', target, rel }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`group inline-flex items-center gap-3 border border-champagne-500/50 px-8 py-4 font-sans text-sm font-medium uppercase tracking-[0.2em] text-champagne-400 transition-all duration-500 hover:border-champagne-400 hover:text-champagne-300 ${className}`}
    >
      {children}
    </a>
  );
}

/* ─────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────*/
function Navbar() {
  const scrolled = useNavScroll();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-obsidian-950/90 backdrop-blur-xl border-b border-champagne-500/10 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center border border-champagne-500/60 transition-colors group-hover:border-champagne-400">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-champagne-500" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" d="M12 3l1.5 4L17 8l-3 3 .8 4L12 13l-2.8 2L10 11 7 8l3.5-1z" />
            </svg>
          </div>
          <div>
            <span className="font-display text-base font-semibold tracking-widest text-ivory">ÉLAN</span>
            <span className="ml-1 font-display text-base font-light tracking-widest text-champagne-500">TRAITEUR</span>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-obsidian-200 transition-colors hover:text-champagne-400"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + burger */}
        <div className="flex items-center gap-4">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener"
            className="hidden items-center gap-2 border border-champagne-500/40 px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-[0.2em] text-champagne-400 transition-all hover:border-champagne-400 hover:text-champagne-300 lg:flex"
          >
            Devis gratuit
          </a>
          <button
            onClick={() => setOpen(v => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Menu"
          >
            <span className={`block h-px w-6 bg-ivory transition-all duration-300 ${open ? 'translate-y-2.5 rotate-45' : ''}`} />
            <span className={`block h-px w-6 bg-ivory transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-6 bg-ivory transition-all duration-300 ${open ? '-translate-y-2.5 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`overflow-hidden transition-all duration-500 lg:hidden ${open ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="border-t border-champagne-500/10 bg-obsidian-950/95 backdrop-blur-xl px-6 py-6">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-obsidian-200 transition-colors hover:text-champagne-400"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener"
            className="mt-4 block border border-champagne-500/40 px-5 py-3 text-center font-sans text-xs font-medium uppercase tracking-[0.2em] text-champagne-400"
          >
            Devis gratuit
          </a>
        </div>
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────────*/
function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState({});
  const timerRef = useRef(null);

  const next = useCallback(() => setCurrent(c => (c + 1) % HERO_SLIDES.length), []);

  useEffect(() => {
    timerRef.current = setInterval(next, 4000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Slides */}
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={slide.url}
            alt={slide.label}
            onLoad={() => setLoaded(l => ({ ...l, [i]: true }))}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              animation: i === current ? 'ken-burns 10s ease-in-out infinite alternate' : 'none',
            }}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          {/* Multi-layer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/85 via-obsidian-950/50 to-obsidian-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/70 via-transparent to-obsidian-950/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Eyebrow className="mb-8">Casablanca — Maroc</Eyebrow>
            </div>

            <h1
              className="clamp-hero font-display font-light leading-none text-ivory animate-fade-up"
              style={{ animationDelay: '400ms' }}
            >
              L'art de<br />
              <em className="text-gradient-gold not-italic">recevoir</em>
              <br />sublimé
            </h1>

            <p
              className="mt-8 max-w-lg font-sans text-base font-light leading-relaxed text-obsidian-200 animate-fade-up"
              style={{ animationDelay: '600ms' }}
            >
              Mariages, réceptions privées et événements d'entreprise — orchestrés avec
              une élégance sans compromis à Casablanca et sa région.
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: '800ms' }}
            >
              <BtnGold href={CONTACT.whatsapp} target="_blank" rel="noopener">
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
                  <p className="font-display text-3xl font-light text-gradient-gold">{s.value}</p>
                  <p className="mt-1 font-sans text-xs uppercase tracking-widest text-obsidian-300">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-10 z-10 flex flex-col gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => { clearInterval(timerRef.current); setCurrent(i); timerRef.current = setInterval(next, 4000); }}
            className={`block h-px transition-all duration-500 ${i === current ? 'w-10 bg-champagne-500' : 'w-4 bg-obsidian-500'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-obsidian-400">Défiler</span>
        <div className="h-8 w-px bg-gradient-to-b from-champagne-500/60 to-transparent" />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SERVICES
───────────────────────────────────────────*/
const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=75&auto=format&fit=crop',
];

function Services() {
  return (
    <section id="services" className="section-pad bg-obsidian-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 grid lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <Eyebrow className="mb-6">Ce que nous faisons</Eyebrow>
            <h2 className="clamp-title font-display font-light leading-none text-ivory">
              Un événement,<br /><em className="text-gradient-gold not-italic">une promesse</em>
            </h2>
          </div>
          <div className="reveal mt-6 lg:mt-auto">
            <p className="font-sans text-base font-light leading-relaxed text-obsidian-300">
              De la première consultation au dernier service, notre équipe prend en charge
              chaque détail avec une exigence absolue — pour que vous viviez pleinement votre
              moment sans la moindre préoccupation.
            </p>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-champagne-500/40 to-transparent" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-px bg-obsidian-800/30 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="reveal group relative overflow-hidden bg-obsidian-950 p-8 transition-colors duration-500 hover:bg-obsidian-900"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* bg image on hover */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-10"
                style={{ backgroundImage: `url(${SERVICE_IMAGES[i]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              {/* Number */}
              <span className="font-display text-5xl font-light text-obsidian-800 transition-colors duration-500 group-hover:text-obsidian-700">
                0{i + 1}
              </span>
              {/* Title */}
              <h3 className="mt-4 font-display text-2xl font-light text-ivory">
                {f.title}
              </h3>
              <div className="mt-3 h-px w-8 bg-champagne-500 transition-all duration-500 group-hover:w-16" />
              <p className="mt-4 font-sans text-sm font-light leading-relaxed text-obsidian-300">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   ABOUT / MANIFESTO
───────────────────────────────────────────*/
function Manifesto() {
  return (
    <section className="section-pad relative overflow-hidden bg-mocha">
      {/* Large decorative text */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-0 font-display text-[20vw] font-light leading-none text-obsidian-900/40 select-none"
      >
        ÉLAN
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="reveal-left relative">
            <div className="img-zoom aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop"
                alt="Chef cuisinier Élan Traiteur"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating glass stat */}
            <div className="glass absolute -bottom-6 -right-6 p-6 sm:p-8">
              <p className="font-display text-4xl font-light text-gradient-gold">12 ans</p>
              <p className="mt-1 font-sans text-xs uppercase tracking-widest text-obsidian-300">de passion</p>
            </div>
          </div>

          {/* Text */}
          <div className="reveal-right">
            <Eyebrow className="mb-8">Notre philosophie</Eyebrow>
            <h2 className="clamp-title font-display font-light leading-none text-ivory">
              Chaque détail<br />
              <em className="text-gradient-gold not-italic">raconte</em><br />
              votre histoire
            </h2>
            <p className="mt-8 font-sans text-base font-light leading-relaxed text-obsidian-300">
              Depuis 2012, Élan Traiteur conjugue gastronomie marocaine d'héritage et
              créations contemporaines pour offrir des expériences uniques. Notre chef et
              son équipe mettent leur savoir-faire au service de l'émotion.
            </p>
            <p className="mt-4 font-sans text-base font-light leading-relaxed text-obsidian-300">
              Chaque événement est une partition : nous en composons chaque note avec soin,
              du premier accord au final applaudi.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <BtnGold href={CONTACT.whatsapp} target="_blank" rel="noopener">
                Nous contacter
              </BtnGold>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   GALLERY
───────────────────────────────────────────*/
function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const h = e => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  return (
    <section className="section-pad bg-obsidian-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 reveal text-center">
          <Eyebrow className="mb-6 justify-center">Nos réalisations</Eyebrow>
          <h2 className="clamp-title font-display font-light text-ivory">
            La galerie <em className="text-gradient-gold not-italic">Élan</em>
          </h2>
        </div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightbox(img)}
              className={`reveal img-zoom group relative cursor-pointer overflow-hidden ${img.span || ''} ${i === 0 || i === 3 ? 'row-span-2' : ''}`}
              style={{ transitionDelay: `${i * 80}ms`, aspectRatio: img.span ? '3/4' : '4/3' }}
            >
              <img
                src={img.url}
                alt={img.label}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-obsidian-950/0 transition-all duration-500 group-hover:bg-obsidian-950/50" />
              <div className="absolute inset-0 flex items-end p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="font-display text-lg font-light text-ivory">{img.label}</span>
              </div>
              <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center border border-ivory/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <svg className="h-4 w-4 text-ivory" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" d="M21 21l-6-6M3 10a7 7 0 1014 0A7 7 0 003 10z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian-950/95 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute right-6 top-6 text-ivory" onClick={() => setLightbox(null)}>
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightbox.url.replace('w=800', 'w=1400')}
            alt={lightbox.label}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={e => e.stopPropagation()}
          />
          <p className="absolute bottom-8 font-display text-lg font-light text-champagne-400">{lightbox.label}</p>
        </div>
      )}
    </section>
  );
}

/* ─────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────*/
function Testimonials() {
  const [active, setActive] = useState(0);
  const track = useRef(null);

  const go = (i) => {
    setActive(i);
    if (track.current) {
      track.current.scrollTo({ left: i * track.current.offsetWidth, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const id = setInterval(() => go((active + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(id);
  }, [active]);

  return (
    <section id="temoignages" className="section-pad bg-mocha">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal mb-14 flex flex-col items-center text-center">
          <Eyebrow className="mb-6 justify-center">Ils nous font confiance</Eyebrow>
          <h2 className="clamp-title font-display font-light text-ivory">
            Ce que disent<br /><em className="text-gradient-gold not-italic">nos clients</em>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={track}
            className="flex overflow-hidden"
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`w-full flex-shrink-0 transition-all duration-700 ${i === active ? 'opacity-100 translate-x-0' : 'opacity-0'}`}
                style={{ display: i === active ? 'block' : 'none' }}
              >
                <div className="mx-auto max-w-3xl text-center">
                  {/* Stars */}
                  <div className="mb-8 flex justify-center gap-1.5">
                    {[...Array(5)].map((_, k) => (
                      <svg key={k} className="h-4 w-4 text-champagne-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {/* Quote */}
                  <blockquote className="font-display text-2xl font-light italic leading-relaxed text-ivory sm:text-3xl lg:text-4xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  {/* Author */}
                  <div className="mt-10 flex flex-col items-center gap-3">
                    <GoldLine />
                    <p className="font-sans text-sm font-medium text-ivory">{t.name}</p>
                    <p className="font-sans text-xs uppercase tracking-widest text-champagne-500">{t.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-12 flex justify-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`h-px transition-all duration-500 ${i === active ? 'w-12 bg-champagne-500' : 'w-5 bg-obsidian-600'}`}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PRICING
───────────────────────────────────────────*/
function Pricing() {
  return (
    <section id="offres" className="section-pad bg-obsidian-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal mb-14 text-center">
          <Eyebrow className="mb-6 justify-center">Nos formules</Eyebrow>
          <h2 className="clamp-title font-display font-light text-ivory">
            L'offre <em className="text-gradient-gold not-italic">Élan</em>
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-sans text-sm font-light leading-relaxed text-obsidian-300">
            Des formules taillées pour chaque événement. Chaque détail pensé pour que votre moment soit inoubliable.
          </p>
        </div>

        <div className="grid gap-px bg-obsidian-800/30 lg:grid-cols-3">
          {PRICING.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal relative flex flex-col p-10 transition-colors duration-500 hover:bg-obsidian-900 ${
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
                <p className="font-display text-5xl font-light text-obsidian-700">0{i + 1}</p>
                <h3 className="mt-4 font-display text-3xl font-light text-ivory">{plan.name}</h3>
                <p className="mt-2 font-sans text-sm font-light text-obsidian-400">{plan.description}</p>
              </div>

              <div className="my-8 h-px bg-obsidian-800" />

              <div className="mb-2">
                <span className={`font-display text-5xl font-light ${plan.featured ? 'text-gradient-gold' : 'text-ivory'}`}>
                  {plan.price}
                </span>
                {plan.unit && (
                  <span className="ml-2 font-sans text-sm text-obsidian-400">{plan.unit}</span>
                )}
              </div>

              <ul className="mt-6 flex-1 space-y-4">
                {plan.features.map(feat => (
                  <li key={feat} className="flex items-start gap-3 font-sans text-sm font-light text-obsidian-300">
                    <div className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-champagne-500" />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                {plan.featured ? (
                  <BtnGold href={CONTACT.whatsapp} target="_blank" rel="noopener" className="w-full justify-center">
                    {plan.cta}
                  </BtnGold>
                ) : (
                  <BtnOutline href={CONTACT.whatsapp} target="_blank" rel="noopener" className="w-full justify-center">
                    {plan.cta}
                  </BtnOutline>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FAQ
───────────────────────────────────────────*/
function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="section-pad bg-mocha">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="reveal mb-14 text-center">
          <Eyebrow className="mb-6 justify-center">Questions fréquentes</Eyebrow>
          <h2 className="clamp-title font-display font-light text-ivory">
            Tout ce qu'il faut <em className="text-gradient-gold not-italic">savoir</em>
          </h2>
        </div>

        <div className="divide-y divide-obsidian-800">
          {FAQS.map((item, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <button
                className="flex w-full items-center justify-between py-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display text-xl font-light text-ivory">{item.q}</span>
                <div className={`ml-6 flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>
                  <div className="relative h-6 w-6">
                    <div className="absolute top-1/2 left-0 h-px w-6 -translate-y-1/2 bg-champagne-500" />
                    <div className={`absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-champagne-500 transition-opacity duration-300 ${open === i ? 'opacity-0' : ''}`} />
                  </div>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${open === i ? 'max-h-48 pb-6' : 'max-h-0'}`}>
                <p className="font-sans text-sm font-light leading-relaxed text-obsidian-300">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CONTACT
───────────────────────────────────────────*/
function Contact() {
  return (
    <section id="contact" className="section-pad bg-obsidian-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-stretch gap-px lg:grid-cols-2">
          {/* Left – CTA block */}
          <div className="reveal flex flex-col justify-between bg-champagne-500 p-12 lg:p-16">
            <div>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-obsidian-800">
                Commencer votre projet
              </p>
              <h2 className="mt-6 font-display text-5xl font-light leading-tight text-obsidian-950 lg:text-6xl">
                Composons<br />votre moment<br />parfait
              </h2>
              <p className="mt-6 font-sans text-base font-light leading-relaxed text-obsidian-700">
                Chaque grand événement commence par une conversation. Contactez-nous
                et recevez une proposition personnalisée sous 24h.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-3 bg-obsidian-950 px-6 py-4 font-sans text-sm font-medium uppercase tracking-widest text-ivory transition-opacity hover:opacity-80"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 border border-obsidian-800 px-6 py-4 font-sans text-sm font-medium uppercase tracking-widest text-obsidian-800 transition-all hover:border-obsidian-950 hover:text-obsidian-950"
              >
                E-mail
              </a>
            </div>
          </div>

          {/* Right – info */}
          <div className="reveal-right flex flex-col justify-between bg-obsidian-900 p-12 lg:p-16">
            <div className="space-y-10">
              <div>
                <Eyebrow className="mb-4">Téléphone</Eyebrow>
                <a href={`tel:${CONTACT.phone1.replace(/\s/g,'')}`} className="font-display text-2xl font-light text-ivory hover:text-champagne-400 transition-colors">
                  {CONTACT.phone1}
                </a>
                <br />
                <a href={`tel:${CONTACT.phone2.replace(/\s/g,'')}`} className="font-display text-2xl font-light text-ivory hover:text-champagne-400 transition-colors">
                  {CONTACT.phone2}
                </a>
              </div>
              <div>
                <Eyebrow className="mb-4">E-mail</Eyebrow>
                <a href={`mailto:${CONTACT.email}`} className="font-display text-xl font-light text-ivory hover:text-champagne-400 transition-colors">
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <Eyebrow className="mb-4">Adresse</Eyebrow>
                <p className="font-sans text-sm font-light leading-relaxed text-obsidian-300">
                  {CONTACT.address}
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10 flex gap-4">
              <a href={CONTACT.instagram} target="_blank" rel="noopener" className="flex h-10 w-10 items-center justify-center border border-obsidian-700 text-obsidian-400 transition-all hover:border-champagne-500 hover:text-champagne-500">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href={CONTACT.facebook} target="_blank" rel="noopener" className="flex h-10 w-10 items-center justify-center border border-obsidian-700 text-obsidian-400 transition-all hover:border-champagne-500 hover:text-champagne-500">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────────*/
function Footer() {
  return (
    <footer className="border-t border-obsidian-800 bg-obsidian-950 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <div>
            <span className="font-display text-base font-semibold tracking-widest text-ivory">ÉLAN</span>
            <span className="ml-1 font-display text-base font-light tracking-widest text-champagne-500">TRAITEUR</span>
            <p className="mt-1 font-sans text-xs text-obsidian-500">L'art de recevoir — Casablanca</p>
          </div>

          {/* Links */}
          <nav className="hidden gap-6 sm:flex">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="font-sans text-xs text-obsidian-500 transition-colors hover:text-champagne-400">
                {l.label}
              </a>
            ))}
          </nav>

          <p className="font-sans text-xs text-obsidian-600">
            © {new Date().getFullYear()} Élan Traiteur. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────
   APP
───────────────────────────────────────────*/
export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Manifesto />
        <Gallery />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
