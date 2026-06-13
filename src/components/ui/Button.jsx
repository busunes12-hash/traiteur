const variants = {
  primary:
    'bg-ink-900 text-white hover:bg-ink-700 dark:bg-gold-500 dark:text-ink-950 dark:hover:bg-gold-400',
  gold: 'bg-gold-500 text-ink-950 hover:bg-gold-400',
  outline:
    'border border-ink-300 text-ink-900 hover:border-ink-900 dark:border-ink-600 dark:text-ink-100 dark:hover:border-gold-500',
  ghost: 'text-ink-700 hover:text-ink-950 dark:text-ink-300 dark:hover:text-white',
};

export default function Button({ as: Tag = 'a', variant = 'primary', className = '', children, ...props }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
