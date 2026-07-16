import { useTranslations } from 'next-intl';
import { Palette, Target, Zap } from 'lucide-react';

import { PillarCard } from '@/components/ui/PillarCard';
import { Reveal } from '@/components/ui/Reveal';

export function OurPillars() {
  const t = useTranslations('about');

  const pillars = [
    {
      icon: Palette,
      title: t('pillars.creative_title'),
      description: t('pillars.creative_desc'),
    },
    {
      icon: Target,
      title: t('pillars.strategy_title'),
      description: t('pillars.strategy_desc'),
    },
    {
      icon: Zap,
      title: t('pillars.impact_title'),
      description: t('pillars.impact_desc'),
    },
  ] as const;

  return (
    <section className="section-light py-24">
      <div className="container-page">
        <Reveal className="mb-14 text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.25em] text-primary uppercase">
            {t('pillars.eyebrow')}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t('pillars.headline')}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 120} className="bg-background">
              <PillarCard
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

OurPillars.displayName = 'OurPillars';
