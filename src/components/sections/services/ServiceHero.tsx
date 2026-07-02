import { cn } from '@/lib/cn';

export interface ServiceHeroProps {
  heading: string;
  subheading: string;
  ctaLabel: string;
  className?: string;
}

export function ServiceHero({ heading, subheading, ctaLabel, className }: ServiceHeroProps) {
  return (
    <section
      className={cn(
        'flex min-h-[60vh] flex-col items-center justify-center pt-16 text-center',
        'border-b border-border',
        className,
      )}
      aria-label="Services hero"
    >
      <div className="container-page py-24">
        <p
          className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-foreground-subtle"
          style={{ animation: 'fadeInUp 0.6s ease-out both' }}
        >
          What We Offer
        </p>

        <h1
          className="font-display mb-6 text-5xl font-light italic leading-tight text-foreground md:text-6xl lg:text-7xl"
          style={{ animation: 'fadeInUp 0.6s 0.1s ease-out both' }}
        >
          {heading}
        </h1>

        <p
          className="mx-auto mb-10 max-w-xl text-base text-foreground-muted md:text-lg"
          style={{ animation: 'fadeInUp 0.6s 0.2s ease-out both' }}
        >
          {subheading}
        </p>

        <a
          href="#website"
          className="inline-flex h-10 items-center gap-2 rounded-md border border-border-strong px-6 text-sm font-medium text-foreground transition-colors duration-150 hover:border-primary hover:text-primary"
          style={{ animation: 'fadeInUp 0.6s 0.3s ease-out both' }}
        >
          {ctaLabel}
          <span aria-hidden>↓</span>
        </a>
      </div>
    </section>
  );
}

ServiceHero.displayName = 'ServiceHero';
