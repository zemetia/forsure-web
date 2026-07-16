import Image from 'next/image';
import { Sparkles, Gem, Users, CalendarHeart, MapPin, Percent, CreditCard, XCircle, CalendarClock } from 'lucide-react';

import { Reveal } from '@/components/ui/Reveal';
import { MAKEUP_CATEGORIES, MAKEUP_TERMS, type MakeupCategory } from '@/data/makeupServices';

const CATEGORY_ICONS: Record<MakeupCategory['icon'], React.ComponentType<{ className?: string }>> = {
  makeup: Sparkles,
  wedding: Gem,
  family: Users,
  event: CalendarHeart,
};

const TERM_ICONS = [MapPin, Percent, CreditCard, XCircle, CalendarClock];

export interface MakeupServicesProps {
  id: string;
  title: string;
  subtitle: string;
  termsLabel: string;
  className?: string;
}

export function MakeupServices({ id, title, subtitle, termsLabel, className }: MakeupServicesProps) {
  return (
    <section id={id} className={`scroll-mt-32 py-20 ${className ?? ''}`} aria-labelledby={`section-${id}-title`}>
      <div className="container-page">
        {/* Hero photo with heading overlay */}
        <Reveal className="relative mb-14 h-[280px] overflow-hidden rounded-lg border border-border sm:h-[360px]">
          <Image
            src="/images/portfolio/wedding/wedding-1.jpg"
            alt={title}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(0deg, oklch(0.073 0 0 / 0.9) 0%, oklch(0.073 0 0 / 0.1) 60%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-primary">05</p>
            <h2
              id={`section-${id}-title`}
              className="font-display text-3xl italic text-background sm:text-4xl"
            >
              Make Up <span className="not-italic text-primary">Services</span>
            </h2>
            <p className="mt-2 max-w-md text-sm text-background/80">{subtitle}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Category list */}
          <div className="space-y-10 lg:col-span-2">
            {MAKEUP_CATEGORIES.map((category, i) => {
              const Icon = CATEGORY_ICONS[category.icon];
              return (
                <Reveal key={category.title} delay={i * 60}>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary-subtle">
                      <Icon className="h-4 w-4 text-primary" aria-hidden />
                    </div>
                    <div className="flex-1 border-b border-border pb-6">
                      <h3 className="mb-3 font-sans text-sm font-semibold uppercase tracking-wide text-foreground">
                        {category.title}
                      </h3>
                      <ul
                        className={
                          category.icon === 'event'
                            ? 'grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3'
                            : 'space-y-2'
                        }
                        role="list"
                      >
                        {category.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-foreground-muted"
                          >
                            <span className="mt-0.5 shrink-0 text-primary" aria-hidden>
                              ✓
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Terms & conditions */}
          <Reveal delay={200}>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-6 font-display text-xl italic text-foreground">{termsLabel}</h3>
              <ul className="space-y-5" role="list">
                {MAKEUP_TERMS.map((term, i) => {
                  const Icon = TERM_ICONS[i % TERM_ICONS.length] ?? MapPin;
                  return (
                    <li key={term} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-subtle">
                        <Icon className="h-3.5 w-3.5 text-primary" aria-hidden />
                      </div>
                      <p className="text-sm leading-relaxed text-foreground-muted">{term}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

MakeupServices.displayName = 'MakeupServices';
