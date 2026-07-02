import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/ui/Reveal';

export function PortfolioCTA() {
  const t = useTranslations('portfolio');
  const waLink = `https://wa.me/${siteConfig.contact.phone.replace(/[^0-9]/g, '')}`;

  return (
    <section className="bg-background py-32">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-20 text-center">
          {/* Glow */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-3xl"
              style={{ background: 'var(--color-primary)' }}
            />
          </div>

          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            Start a Project
          </p>
          <h2 className="font-display mb-4 text-4xl font-light italic text-foreground md:text-5xl">
            {t('cta.heading')}
          </h2>
          <p className="mx-auto mb-10 max-w-md text-base text-foreground-muted">
            {t('cta.subheading')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-sm shadow-primary/20 transition-colors duration-150 hover:bg-primary-hover active:bg-primary-active"
            >
              {t('cta.button')}
            </a>
            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border-strong px-8 text-sm font-medium text-foreground transition-colors duration-150 hover:border-primary hover:bg-primary-subtle"
            >
              Our Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

PortfolioCTA.displayName = 'PortfolioCTA';
