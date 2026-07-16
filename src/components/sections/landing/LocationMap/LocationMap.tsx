import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/config/site';

export function LocationMap() {
  return (
    <section className="border-t border-border bg-background py-16">
      <div className="container-page">
        <Reveal>
          <p className="mb-2 text-center font-sans text-xs font-semibold tracking-widest text-primary uppercase">
            Lokasi Kami
          </p>
          <h2 className="mb-10 text-center font-display text-4xl font-light italic text-foreground lg:text-5xl">
            Temukan Kami
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title={`Lokasi ${siteConfig.name}`}
              src="https://www.google.com/maps?q=Forsure+Digitalindo&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

LocationMap.displayName = 'LocationMap';
