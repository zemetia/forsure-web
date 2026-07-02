import { ArrowRight, Monitor, Camera, Palette } from 'lucide-react';

import { Link } from '@/i18n/navigation';
import { portfolioTeaser } from '@/data/portfolio';
import { Reveal } from '@/components/ui/Reveal';

const CATEGORY_ICONS = {
  website: Monitor,
  creative: Palette,
  photoshoot: Camera,
} as const;

const CATEGORY_COLORS = {
  website: 'bg-primary-subtle text-primary',
  creative: 'bg-success-subtle text-success',
  photoshoot: 'bg-warning-subtle text-warning',
} as const;

export function PortfolioTeaser() {
  return (
    <section className="section-light w-full">
      <div className="container-page py-24">
      <Reveal className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 font-sans text-xs font-semibold tracking-widest text-primary uppercase">
            Portfolio
          </p>
          <h2 className="font-display text-4xl font-light italic text-foreground lg:text-5xl">
            Karya Terbaik
            <br />
            <em className="not-italic text-foreground-muted">yang Kami Bangga</em>
          </h2>
        </div>
        <Link
          href="/portfolio"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
        >
          Lihat Semua
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {portfolioTeaser.map((item, i) => {
          const Icon = CATEGORY_ICONS[item.category];
          const colorClass = CATEGORY_COLORS[item.category];

          return (
            <Reveal key={item.id} delay={i * 120}>
            <Link
              href={item.href}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-border-strong"
            >
              {/* Placeholder visual (swap with real Image when available) */}
              <div className="relative h-52 w-full bg-surface-raised flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--color-surface-raised) 0%, var(--color-surface-overlay) 100%)',
                  }}
                />
                <div className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl ${colorClass}`}>
                  <Icon className="h-8 w-8" />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-background opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
                <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-raised px-4 py-2 text-xs font-semibold text-foreground">
                    Lihat Proyek <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <span className={`mb-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}`}>
                  {item.categoryLabel}
                </span>
                <h3 className="font-sans text-sm font-semibold text-foreground">{item.title}</h3>
              </div>
            </Link>
            </Reveal>
          );
        })}
      </div>
      </div>
    </section>
  );
}

PortfolioTeaser.displayName = 'PortfolioTeaser';
