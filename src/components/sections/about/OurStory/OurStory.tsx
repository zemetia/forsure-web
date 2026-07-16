import { useTranslations } from 'next-intl';

import { Reveal } from '@/components/ui/Reveal';

export function OurStory() {
  const t = useTranslations('about');

  return (
    <section className="bg-background py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <Reveal direction="left">
            <p className="mb-4 text-sm font-medium tracking-[0.25em] text-primary uppercase">
              {t('story.eyebrow')}
            </p>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t('story.headline')}
            </h2>
            <p className="text-base leading-relaxed text-foreground-muted">{t('story.body')}</p>
          </Reveal>

          {/* Visual — typographic brand element */}
          <Reveal direction="right" className="flex items-center justify-center">
            <div className="flex flex-col items-start gap-1 border border-border p-10">
              <span className="font-display text-6xl font-light italic text-foreground/20 md:text-7xl">
                Your Brand
              </span>
              <span className="font-display text-6xl font-light italic text-primary/60 md:text-7xl">
                Deserves
              </span>
              <span className="font-display text-6xl font-light italic text-foreground/20 md:text-7xl">
                to Be Seen.
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

OurStory.displayName = 'OurStory';
