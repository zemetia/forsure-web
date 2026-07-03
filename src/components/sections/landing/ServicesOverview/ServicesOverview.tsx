import { Monitor, Palette, Camera, ArrowRight, Check } from 'lucide-react';

import { Link } from '@/i18n/navigation';
import { Reveal } from '@/components/ui/Reveal';
import { SERVICES, type ServiceCategory } from '@/data/services';

const CATEGORY_META: Record<
  ServiceCategory,
  { label: string; icon: React.ComponentType<{ className?: string }>; anchor: string }
> = {
  website: { label: 'Solusi Website', icon: Monitor, anchor: 'website' },
  creative: { label: 'Konten Kreatif', icon: Palette, anchor: 'creative' },
  photoshoot: { label: 'Foto & Video Profesional', icon: Camera, anchor: 'photoshoot' },
};

const CATEGORIES: ServiceCategory[] = ['website', 'creative', 'photoshoot'];

export function ServicesOverview() {
  return (
    <section id="services" className="section-light w-full">
      <div className="container-page py-24">
        {/* Section header */}
        <Reveal className="mb-16 text-center">
          <p className="mb-3 font-sans text-xs font-semibold tracking-widest text-primary uppercase">
            Layanan Kami
          </p>
          <h2 className="font-display text-4xl font-light italic text-foreground lg:text-5xl">
            Satu Agency,
            <br />
            <em className="not-italic text-foreground-muted">Semua Kebutuhan Digital</em>
          </h2>
        </Reveal>

        {/* Categories */}
        <div className="space-y-16">
          {CATEGORIES.map((category, catIdx) => {
            const { label, icon: Icon, anchor } = CATEGORY_META[category];
            const services = SERVICES.filter((s) => s.category === category);

            return (
              <Reveal key={category} delay={catIdx * 80}>
                {/* Category header */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-subtle">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-sans text-xl font-semibold text-foreground">{label}</h3>
                </div>

                {/* Service cards grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {services.map((service, i) => (
                    <Reveal key={service.id} delay={i * 60}>
                      <div
                        className={[
                          'group relative flex h-full flex-col rounded-xl border p-5 transition-all duration-200',
                          service.featured
                            ? 'border-primary bg-primary-subtle'
                            : 'border-border bg-surface hover:border-border-strong hover:bg-surface-raised',
                        ].join(' ')}
                      >
                        {service.featured && (
                          <span className="absolute right-3 top-3 rounded-full border border-primary bg-surface px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
                            Populer
                          </span>
                        )}

                        <p className="mb-1 font-sans text-sm font-semibold text-foreground pr-12">
                          {service.title}
                        </p>
                        <p className="mb-4 text-xs text-foreground-muted">{service.subtitle}</p>

                        <ul className="flex-1 space-y-1.5">
                          {service.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-xs text-foreground-muted">
                              <Check className="mt-0.5 h-3 w-3 shrink-0 text-primary" aria-hidden />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  ))}
                </div>

                {/* Per-category link */}
                <div className="mt-5">
                  <Link
                    href={`/services#${anchor}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
                  >
                    Lihat detail {label.toLowerCase()}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* View all CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground-muted transition-colors hover:border-primary hover:text-foreground"
          >
            Lihat Semua Layanan
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

ServicesOverview.displayName = 'ServicesOverview';
