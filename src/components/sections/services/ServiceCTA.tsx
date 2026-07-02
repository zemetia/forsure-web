import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/cn';
import { Reveal } from '@/components/ui/Reveal';

export interface ServiceCTAProps {
  heading: string;
  subheading: string;
  whatsappLabel: string;
  portfolioLabel: string;
  className?: string;
}

export function ServiceCTA({
  heading,
  subheading,
  whatsappLabel,
  portfolioLabel,
  className,
}: ServiceCTAProps) {
  const waNumber = siteConfig.contact.phone.replace(/[^0-9]/g, '').replace(/^0/, '62');
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('Halo Forsure, saya ingin berkonsultasi mengenai layanan Anda.')}`;

  return (
    <section
      className={cn('border-t border-border bg-background py-24', className)}
      aria-labelledby="cta-heading"
    >
      <Reveal className="container-page text-center">
        <h2
          id="cta-heading"
          className="font-display mb-4 text-4xl font-light italic text-foreground md:text-5xl"
        >
          {heading}
        </h2>
        <p className="mx-auto mb-10 max-w-md text-base text-foreground-muted">{subheading}</p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors duration-150 hover:bg-primary-hover"
          >
            {whatsappLabel}
          </a>
          <Link
            href="/portfolio"
            className="inline-flex h-10 items-center justify-center rounded-md border border-border-strong px-8 text-sm font-medium text-foreground transition-colors duration-150 hover:border-primary hover:text-primary"
          >
            {portfolioLabel}
          </Link>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-sm text-foreground-subtle sm:flex-row sm:gap-8">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
            className="transition-colors hover:text-foreground-muted"
          >
            {siteConfig.contact.phone}
          </a>
          <span className="hidden sm:block" aria-hidden>
            ·
          </span>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="transition-colors hover:text-foreground-muted"
          >
            {siteConfig.contact.email}
          </a>
          <span className="hidden sm:block" aria-hidden>
            ·
          </span>
          <a
            href={siteConfig.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground-muted"
          >
            {siteConfig.contact.instagramHandle}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

ServiceCTA.displayName = 'ServiceCTA';
