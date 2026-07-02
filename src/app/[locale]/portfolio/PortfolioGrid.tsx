'use client';

import { useState } from 'react';
import { ArrowRight, Monitor, Camera, Palette } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Reveal } from '@/components/ui/Reveal';
import { Link } from '@/i18n/navigation';
import { portfolioItems, type PortfolioCategory } from '@/data/portfolio';
import { makeWaLink } from '@/data/contact';

const CATEGORY_ICONS = {
  website: Monitor,
  creative: Palette,
  photoshoot: Camera,
} as const;

const CATEGORY_COLORS = {
  website:    { badge: 'bg-primary-subtle text-primary',     icon: 'text-primary',      bg: 'bg-primary-subtle' },
  creative:   { badge: 'bg-success-subtle text-success',     icon: 'text-success',      bg: 'bg-success-subtle' },
  photoshoot: { badge: 'bg-warning-subtle text-warning',     icon: 'text-warning',      bg: 'bg-warning-subtle' },
} as const;

type Filter = 'all' | PortfolioCategory;

export function PortfolioGrid() {
  const t = useTranslations('portfolio');
  const [active, setActive] = useState<Filter>('all');

  const filters: { id: Filter; label: string }[] = [
    { id: 'all',        label: t('filter.all') },
    { id: 'website',    label: t('filter.website') },
    { id: 'creative',   label: t('filter.creative') },
    { id: 'photoshoot', label: t('filter.photoshoot') },
  ];

  const visible = active === 'all'
    ? portfolioItems
    : portfolioItems.filter((p) => p.category === active);

  return (
    <section className="section-light w-full">
      <div className="container-page py-16">
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={[
                'rounded-full px-5 py-2 font-sans text-sm font-medium transition-all duration-200',
                active === f.id
                  ? 'bg-primary text-primary-foreground shadow'
                  : 'border border-border bg-surface text-foreground-muted hover:border-primary hover:text-foreground',
              ].join(' ')}
            >
              {f.label}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="py-20 text-center text-sm text-foreground-muted">{t('empty')}</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item, i) => {
              const Icon = CATEGORY_ICONS[item.category];
              const colors = CATEGORY_COLORS[item.category];

              return (
                <Reveal key={item.id} delay={i * 80}>
                  <Link
                    href={item.href as '/'}
                    className="group relative block overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-border-strong hover:shadow-md"
                  >
                    <div className="relative h-56 w-full overflow-hidden bg-surface-raised">
                      {item.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{
                            background:
                              'linear-gradient(135deg, var(--color-surface-raised) 0%, var(--color-surface-overlay) 100%)',
                          }}
                        >
                          <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${colors.bg}`}>
                            <Icon className={`h-8 w-8 ${colors.icon}`} />
                          </div>
                        </div>
                      )}

                      <div className="absolute inset-0 flex items-center justify-center bg-background opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-foreground">
                          {t('card.viewProject')} <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <span className={`mb-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${colors.badge}`}>
                        {item.categoryLabel}
                      </span>
                      <h3 className="font-sans text-sm font-semibold text-foreground">{item.title}</h3>
                      {item.client && (
                        <p className="mt-0.5 text-xs text-foreground-muted">
                          {t('card.client')}: {item.client}
                        </p>
                      )}
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export function PortfolioCTA() {
  const t = useTranslations('portfolio');

  return (
    <section className="container-page py-20 text-center">
      <Reveal>
        <h2 className="mb-3 font-display text-4xl font-light italic text-foreground lg:text-5xl">
          {t('cta.heading')}
        </h2>
        <p className="mb-8 text-base text-foreground-muted">{t('cta.subheading')}</p>
        <a
          href={makeWaLink('Halo Forsure, saya tertarik untuk memulai proyek bersama!')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-hover"
          style={{ boxShadow: '0 0 24px var(--color-primary-glow)' }}
        >
          {t('cta.button')}
          <ArrowRight className="h-4 w-4" />
        </a>
      </Reveal>
    </section>
  );
}
