import { cva, type VariantProps } from 'class-variance-authority';
import { Globe, Palette, Camera } from 'lucide-react';

import { cn } from '@/lib/cn';
import type { ServiceCategory } from '@/data/services';

const CATEGORY_ICONS: Record<ServiceCategory, React.ComponentType<{ className?: string }>> = {
  website: Globe,
  creative: Palette,
  photoshoot: Camera,
};

const cardVariants = cva(
  [
    'group relative flex flex-col rounded-lg border bg-card p-6',
    'transition-all duration-200',
  ],
  {
    variants: {
      variant: {
        default: 'border-border hover:border-border-strong',
        featured: 'border-primary glow-primary',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

export type ServiceCardVariants = VariantProps<typeof cardVariants>;

export interface ServiceCardProps extends ServiceCardVariants {
  category: ServiceCategory;
  title: string;
  subtitle: string;
  features: string[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export function ServiceCard({
  category,
  title,
  subtitle,
  features,
  variant,
  ctaLabel = 'Tanya Harga',
  ctaHref = '#',
  className,
}: ServiceCardProps) {
  const Icon = CATEGORY_ICONS[category];

  return (
    <article className={cn(cardVariants({ variant }), className)}>
      {variant === 'featured' && (
        <span className="absolute right-4 top-4 rounded-full border border-primary bg-primary-subtle px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-primary">
          Populer
        </span>
      )}

      <Icon className="mb-4 h-7 w-7 text-primary" aria-hidden />

      <h3 className="mb-1 font-sans text-base font-semibold text-foreground">{title}</h3>
      <p className="mb-4 text-sm text-foreground-muted">{subtitle}</p>

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
          variant === 'featured'
            ? 'border-primary bg-primary text-primary-foreground hover:bg-primary-hover'
            : 'border-border-strong bg-transparent text-foreground hover:border-primary hover:text-primary',
        )}
      >
        {ctaLabel}
      </a>
    </article>
  );
}

ServiceCard.displayName = 'ServiceCard';
