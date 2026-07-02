import { useTranslations } from 'next-intl';

import { TeamMemberCard } from '@/components/ui/TeamMemberCard';
import { Reveal } from '@/components/ui/Reveal';
import teamData from '@/data/team.json';

export function OurTeam() {
  const t = useTranslations('about');

  return (
    <section id="our-team" className="section-light py-24">
      <div className="container-page">
        <Reveal className="mb-14 text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.25em] text-primary uppercase">
            {t('team.eyebrow')}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t('team.headline')}
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {teamData.map((member, i) => (
            <Reveal key={member.id} delay={i * 80}>
              <TeamMemberCard {...member} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

OurTeam.displayName = 'OurTeam';
