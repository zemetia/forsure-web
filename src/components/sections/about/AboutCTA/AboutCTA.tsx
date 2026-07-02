import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/ui/Reveal';

export function AboutCTA() {
  const t = useTranslations('about');
  const waLink = `https://wa.me/${siteConfig.contact.phone.replace(/[^0-9]/g, '')}`;

  return (
    <section className="bg-background py-24">
      <div className="container-page">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-4xl font-light italic text-foreground md:text-5xl">
            {t('cta.headline')}
          </h2>
          <p className="max-w-md text-base text-foreground-muted">{t('cta.subheadline')}</p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-sm shadow-primary/20 transition-colors duration-150 hover:bg-primary-hover active:bg-primary-active"
            >
              {t('cta.contact')}
            </a>
            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border-strong px-8 text-sm font-medium text-foreground transition-colors duration-150 hover:border-primary hover:bg-primary-subtle"
            >
              {t('cta.services')}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

AboutCTA.displayName = 'AboutCTA';
