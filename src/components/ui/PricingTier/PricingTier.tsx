import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/cn';
import type { PricingTierItem } from '@/data/services';

const tierVariants = cva(
  [
    'relative flex flex-col rounded-lg border bg-card p-6',
    'transition-all duration-200',
  ],
  {
    variants: {
      featured: {
        true: 'border-primary glow-primary',
        false: 'border-border hover:border-border-strong',
      },
    },
    defaultVariants: { featured: false },
  },
);

export type PricingTierVariants = VariantProps<typeof tierVariants>;

export interface PricingTierProps extends PricingTierItem {
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export function PricingTier({
  name,
  tagline,
  features,
  featured = false,
  ctaLabel = 'Inquire',
  ctaHref = '#',
  className,
}: PricingTierProps) {
  return (
    <article className={cn(tierVariants({ featured }), className)}>
      {featured && (
        <span className="absolute right-4 top-4 rounded-full border border-primary bg-primary-subtle px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-primary">
          Recommended
        </span>
      )}

      <div className="mb-4">
        <span className="mb-1 block text-xs font-medium uppercase tracking-[0.2em] text-foreground-muted">
          PreWed & PreSweet
        </span>
        <h3 className="font-sans text-xl font-semibold text-foreground">{name}</h3>
        <p className="mt-1 text-sm text-foreground-muted">{tagline}</p>
      </div>

      <ul className="mb-6 flex-1 space-y-2" role="list">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-foreground-muted">
            <span className="mt-0.5 shrink-0 text-primary" aria-hidden>
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        target={ctaHref.startsWith('https') ? '_blank' : undefined}
        rel={ctaHref.startsWith('https') ? 'noopener noreferrer' : undefined}
        className={cn(
          'inline-flex h-9 w-full items-center justify-center rounded-md border px-4 text-sm font-medium transition-colors duration-150',
          featured
            ? 'border-primary bg-primary text-primary-foreground hover:bg-primary-hover'
            : 'border-border-strong bg-transparent text-foreground hover:border-primary hover:text-primary',
        )}
      >
        {ctaLabel}
      </a>
    </article>
  );
}

PricingTier.displayName = 'PricingTier';
