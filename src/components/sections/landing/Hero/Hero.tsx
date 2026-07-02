import { ArrowDown, CheckCircle2 } from 'lucide-react';

import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  const { contact } = siteConfig;
  const waNumber = contact.phone.replace(/[^0-9]/g, '');
  const waLink = `https://wa.me/${waNumber}?text=Halo+Forsure%2C+saya+ingin+konsultasi+mengenai+layanan+Anda.`;

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 30% 50%, var(--color-primary-subtle) 0%, transparent 60%)',
        }}
      />

      <div className="container-page grid min-h-screen grid-cols-1 items-center gap-12 pb-12 pt-28 lg:grid-cols-2 lg:gap-16 lg:pt-20">
        {/* Left — Text content */}
        <div className="flex flex-col items-start">
          {/* Eyebrow tag */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5"
            style={{
              animation: 'fadeInUp 0.6s ease-out both',
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="font-sans text-xs font-medium text-foreground-muted">
              Agency Digital Premium · Indonesia
            </span>
          </div>

          {/* Main headline — font-display only here */}
          <h1
            className="mb-6 font-display text-5xl font-light leading-tight text-foreground lg:text-7xl"
            style={{ animation: 'fadeInUp 0.6s 0.1s ease-out both' }}
          >
            Your Brand
            <br />
            <span className="italic text-primary">Deserves</span>
            <br />
            to Be Seen.
          </h1>

          {/* Subheadline */}
          <p
            className="mb-10 max-w-md text-base leading-relaxed text-foreground-muted lg:text-lg"
            style={{ animation: 'fadeInUp 0.6s 0.2s ease-out both' }}
          >
            Kami bantu bisnis Anda tampil profesional di dunia digital — dari
            website, konten kreatif, hingga photoshoot berkualitas.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center gap-4"
            style={{ animation: 'fadeInUp 0.6s 0.3s ease-out both' }}
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-hover"
              style={{ boxShadow: '0 0 24px var(--color-primary-glow)' }}
            >
              Mulai Sekarang
            </a>

            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground-muted transition-colors hover:border-border-strong hover:text-foreground"
            >
              Lihat Layanan
              <ArrowDown className="h-4 w-4" />
            </Link>
          </div>

          {/* Trust badge */}
          <div
            className="mt-10 flex items-center gap-2"
            style={{ animation: 'fadeInUp 0.6s 0.4s ease-out both' }}
          >
            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
            <p className="text-sm text-foreground-muted">
              Dipercaya <span className="font-semibold text-foreground">50+ klien bisnis</span> di
              Indonesia
            </p>
          </div>
        </div>

        {/* Right — Visual */}
        <div
          className="relative"
          style={{ animation: 'fadeInRight 0.7s 0.2s ease-out both' }}
        >
          <HeroVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ animation: 'fadeInUp 0.6s 0.6s ease-out both' }}
      >
        <span className="text-xs text-foreground-subtle">Scroll</span>
        <div className="animate-bounce-y h-10 w-px bg-gradient-to-b from-border to-transparent" />
      </div>
    </section>
  );
}

Hero.displayName = 'Hero';
