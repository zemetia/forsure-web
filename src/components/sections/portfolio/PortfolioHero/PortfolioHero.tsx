import { useTranslations } from 'next-intl';

import { portfolioSections } from '@/data/portfolio';

export function PortfolioHero() {
  const t = useTranslations('portfolio');

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-background">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: 'var(--color-primary)' }}
        />
      </div>

      <div className="container-page relative z-10 flex flex-col items-center text-center">
        <p
          className="mb-6 text-xs font-semibold tracking-[0.25em] text-primary uppercase"
          style={{ animation: 'fadeInUp 0.6s ease-out both' }}
        >
          {t('hero.eyebrow')}
        </p>

        <h1
          className="font-display mb-6 text-5xl font-light italic leading-tight text-foreground md:text-7xl lg:text-8xl"
          style={{ whiteSpace: 'pre-line', animation: 'fadeInUp 0.6s 0.1s ease-out both' }}
        >
          {t('hero.headline')}
        </h1>

        <p
          className="mb-12 max-w-lg text-lg leading-relaxed text-foreground-muted"
          style={{ animation: 'fadeInUp 0.6s 0.2s ease-out both' }}
        >
          {t('hero.subheadline')}
        </p>

        {/* Category anchor nav */}
        <nav
          className="flex flex-wrap items-center justify-center gap-2"
          style={{ animation: 'fadeInUp 0.6s 0.3s ease-out both' }}
          aria-label="Portfolio categories"
        >
          {portfolioSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="inline-flex h-9 items-center rounded-full border border-border-strong px-4 text-xs font-medium text-foreground-muted transition-all duration-150 hover:border-primary hover:bg-primary-subtle hover:text-primary"
            >
              {section.labelEn}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

PortfolioHero.displayName = 'PortfolioHero';
