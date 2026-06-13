export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
        <rect x="1.5" y="1.5" width="37" height="37" rx="11" className="fill-none stroke-gold-500" strokeWidth="2" />
        <path d="M14 13.5 H26" className="stroke-current" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M14 20 H23" className="stroke-gold-500" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M14 26.5 H26" className="stroke-current" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M19 7.5 L22.5 5" className="stroke-gold-500" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="font-display text-xl font-semibold tracking-wide">
        ÉLAN <span className="text-gold-500">Traiteur</span>
      </span>
    </span>
  );
}
