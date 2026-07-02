import { Monitor, Palette, Camera, ArrowRight } from 'lucide-react';

import { Link } from '@/i18n/navigation';
import { Reveal } from '@/components/ui/Reveal';

const SERVICES = [
  {
    icon: Monitor,
    title: 'Website Solutions',
    anchor: 'website',
    items: [
      'Company profile & landing page',
      'E-commerce & toko online',
      'Portofolio & personal branding',
      'Custom web app',
    ],
  },
  {
    icon: Palette,
    title: 'Creative Content',
    anchor: 'creative',
    items: [
      'Foto produk & lifestyle',
      'Video reels & iklan',
      'Desain sosial media',
      'Social media management',
    ],
  },
  {
    icon: Camera,
    title: 'Professional Photoshoot',
    anchor: 'photoshoot',
    items: [
      'Single & couple shoot',
      'Prewedding & graduation',
      'Fashion & editorial',
      'Corporate headshot',
    ],
  },
] as const;

export function ServicesOverview() {
  return (
    <section id="services" className="section-light w-full">
      <div className="container-page py-24">
      {/* Section header */}
      <Reveal className="mb-14 text-center">
        <p className="mb-3 font-sans text-xs font-semibold tracking-widest text-primary uppercase">
          Layanan Kami
        </p>
        <h2 className="font-display text-4xl font-light italic text-foreground lg:text-5xl">
          Satu Agency,
          <br />
          <em className="not-italic text-foreground-muted">Semua Kebutuhan Digital</em>
        </h2>
      </Reveal>

      {/* Service cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {SERVICES.map(({ icon: Icon, title, anchor, items }, i) => (
          <Reveal key={title} delay={i * 120}>
            <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-border-strong hover:bg-surface-raised">
              {/* Icon */}
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-subtle transition-colors group-hover:bg-primary">
                <Icon className="h-5 w-5 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="mb-4 font-sans text-lg font-semibold text-foreground">{title}</h3>

              {/* Items */}
              <ul className="mb-6 flex-1 space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground-muted">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={`/services#${anchor}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-foreground"
              >
                Lihat Detail
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>

      {/* View all CTA */}
      <div className="mt-12 text-center">
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
