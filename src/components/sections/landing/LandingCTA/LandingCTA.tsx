import { MessageCircle, Phone, Mail } from 'lucide-react';

import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/ui/Reveal';

export function LandingCTA() {
  const { contact } = siteConfig;
  const waNumber = contact.phone.replace(/[^0-9]/g, '');
  const waLink = `https://wa.me/${waNumber}?text=Halo+Forsure%2C+saya+ingin+konsultasi+mengenai+layanan+Anda.`;

  return (
    <section className="relative overflow-hidden section-light">
      {/* Gold accent top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-primary" />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, var(--color-primary-subtle) 0%, transparent 60%)',
        }}
      />

      <Reveal className="container-page relative z-10 py-24 text-center">
        <p className="mb-4 font-sans text-xs font-semibold tracking-widest text-primary uppercase">
          Mulai Sekarang
        </p>

        <h2 className="mb-4 font-display text-4xl font-light italic text-foreground lg:text-5xl">
          Siap Bawa Brand Anda<br />
          <em className="not-italic text-primary">ke Level Berikutnya?</em>
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-foreground-muted">
          Konsultasi gratis, tanpa komitmen apapun. Ceritakan kebutuhan brand
          Anda dan kami siap membantu.
        </p>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:shadow-lg"
          style={{ boxShadow: '0 0 32px var(--color-primary-glow)' }}
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp Sekarang
        </a>

        {/* Contact row */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4 text-primary" />
            {contact.phone}
          </a>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4 text-primary" />
            {contact.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

LandingCTA.displayName = 'LandingCTA';
