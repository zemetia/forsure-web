import Image from 'next/image';

import { partners } from '@/data/partners';
import { Reveal } from '@/components/ui/Reveal';

export function OurPartners() {
  return (
    <section className="section-light border-y border-border bg-surface-raised py-16">
      <div className="container-page">
        <Reveal>
          <p className="mb-2 text-center font-sans text-xs font-semibold tracking-widest text-primary uppercase">
            Partner Kami
          </p>
          <h2 className="mb-12 text-center font-display text-4xl font-light italic text-foreground lg:text-5xl">
            Tumbuh Bersama
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner, i) => (
            <Reveal key={partner.id} delay={i * 60}>
              <div className="flex h-[150px] max-w-[260px] w-full mx-auto items-center justify-center transition-all duration-300 hover:scale-[1.04] opacity-75 hover:opacity-100">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={220}
                  height={110}
                  className="h-[110px] w-auto max-w-[220px] object-contain"
                  unoptimized
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

OurPartners.displayName = 'OurPartners';
