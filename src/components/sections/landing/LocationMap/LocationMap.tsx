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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8!2d112.7807757!3d-7.2904735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb000b16a81f%3A0x1326fd598b2194f1!2sHelden%20Coffee!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
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
