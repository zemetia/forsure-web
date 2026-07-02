import { useTranslations } from 'next-intl';

import { Reveal } from '@/components/ui/Reveal';

const MISSION_KEYS = ['mission_1', 'mission_2', 'mission_3', 'mission_4'] as const;

export function VisionMission() {
  const t = useTranslations('about');

  return (
    <section className="section-light py-24">
      <div className="container-page">
        <Reveal>
          <p className="mb-14 text-center text-sm font-medium tracking-[0.25em] text-primary uppercase">
            {t('vision.eyebrow')}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-px bg-border lg:grid-cols-2">
          {/* Vision */}
          <Reveal direction="left" className="bg-surface p-10 lg:p-16">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
              {t('vision.vision_title')}
            </h2>
            <p className="text-base leading-relaxed text-foreground-muted">
              {t('vision.vision_text')}
            </p>
          </Reveal>

          {/* Mission */}
          <Reveal direction="right" delay={100} className="bg-surface p-10 lg:p-16">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
              {t('vision.mission_title')}
            </h2>
            <ul className="flex flex-col gap-4">
              {MISSION_KEYS.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                  />
                  <span className="text-sm leading-relaxed text-foreground-muted">
                    {t(`vision.${key}`)}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

VisionMission.displayName = 'VisionMission';
