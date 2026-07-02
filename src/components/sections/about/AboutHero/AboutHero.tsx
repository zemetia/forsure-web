import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

export function AboutHero() {
  const t = useTranslations('about');

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-background">
      {/* Ambient glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] blur-3xl"
          style={{ background: 'var(--color-primary)' }}
        />
      </div>

      <div className="container-page relative z-10 flex flex-col items-center text-center">
        <p
          className="mb-6 text-sm font-medium tracking-[0.25em] text-primary uppercase"
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
          className="mb-10 max-w-lg text-lg leading-relaxed text-foreground-muted"
          style={{ animation: 'fadeInUp 0.6s 0.2s ease-out both' }}
        >
          {t('hero.subheadline')}
        </p>

        <Link
          href="#our-team"
          className="inline-flex h-11 items-center justify-center rounded-md border border-border-strong px-8 text-sm font-medium text-foreground transition-colors duration-150 hover:border-primary hover:bg-primary-subtle"
          style={{ animation: 'fadeInUp 0.6s 0.3s ease-out both' }}
        >
          {t('hero.cta')}
        </Link>
      </div>
    </section>
  );
}

AboutHero.displayName = 'AboutHero';
