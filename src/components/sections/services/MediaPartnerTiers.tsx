import { Reveal } from '@/components/ui/Reveal';
import { MEDIA_TIERS } from '@/data/mediaPartners';

export interface MediaPartnerTiersProps {
  id: string;
  title: string;
  subtitle: string;
  mediaLabel: string;
  className?: string;
}

export function MediaPartnerTiers({
  id,
  title,
  subtitle,
  mediaLabel,
  className,
}: MediaPartnerTiersProps) {
  return (
    <section id={id} className={`scroll-mt-32 py-20 ${className ?? ''}`} aria-labelledby={`section-${id}-title`}>
      <div className="container-page">
        <Reveal className="mb-12">
          <header>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-foreground-subtle">
              04
            </p>
            <h2
              id={`section-${id}-title`}
              className="mb-3 font-sans text-2xl font-semibold text-foreground md:text-3xl"
            >
              {title}
            </h2>
            <p className="max-w-xl text-base text-foreground-muted">{subtitle}</p>
          </header>
        </Reveal>

        <div className="overflow-hidden rounded-lg border border-border bg-card">
          {MEDIA_TIERS.map((tier, i) => (
            <Reveal key={tier.tier} delay={i * 60}>
              <div
                className={`flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:gap-8 ${
                  i !== 0 ? 'border-t border-border' : ''
                }`}
              >
                <div className="flex shrink-0 items-center gap-4 sm:w-64">
                  <div
                    className="relative flex h-12 w-11 shrink-0 items-center justify-center bg-primary text-primary-foreground"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)' }}
                    aria-hidden
                  >
                    <span className="font-sans text-lg font-bold leading-none">{tier.tier}</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
                      Tier {tier.tier}
                    </p>
                    <p className="font-sans text-sm font-semibold uppercase tracking-wide text-foreground">
                      {tier.name}
                    </p>
                  </div>
                </div>

                <div className="flex-1 border-t border-border/60 pt-4 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                  <p className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground-subtle">
                    {mediaLabel}
                  </p>
                  <p className="text-sm italic leading-relaxed text-foreground-muted">
                    {tier.media.join(' – ')}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

MediaPartnerTiers.displayName = 'MediaPartnerTiers';
