export default function SectionHeading({ eyebrow, title, subtitle, centered = false }) {
  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600 dark:text-gold-400">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="mt-5 text-base leading-relaxed text-ink-600 dark:text-ink-300">{subtitle}</p>}
    </div>
  );
}
