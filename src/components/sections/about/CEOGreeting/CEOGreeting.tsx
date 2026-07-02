import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Reveal } from '@/components/ui/Reveal';

export function CEOGreeting() {
  const t = useTranslations('about');

  return (
    <section className="bg-background py-24">
      <div className="container-page">
        <Reveal>
          <p className="mb-14 text-center text-sm font-medium tracking-[0.25em] text-primary uppercase">
            {t('ceo.eyebrow')}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[280px_1fr]">
          {/* CEO Photo */}
          <Reveal direction="left" className="mx-auto w-full max-w-[280px] lg:mx-0">
            <div className="aspect-[3/4] w-full overflow-hidden bg-surface-raised">
              <Image
                src="/images/team/yevo-cosuren.png"
                alt={t('ceo.name')}
                width={280}
                height={373}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </Reveal>

          {/* Message */}
          <Reveal direction="right" delay={100} className="flex flex-col justify-center">
            <div className="mb-8 space-y-4">
              <p className="font-display text-lg font-medium text-foreground">
                {t('ceo.greeting')}
              </p>
              <p className="leading-relaxed text-foreground-muted">{t('ceo.p1')}</p>
              <p className="leading-relaxed text-foreground-muted">{t('ceo.p2')}</p>
              <p className="leading-relaxed text-foreground-muted">{t('ceo.p3')}</p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="font-medium text-foreground">{t('ceo.name')}</p>
              <p className="text-sm text-foreground-muted">{t('ceo.role')}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

CEOGreeting.displayName = 'CEOGreeting';
