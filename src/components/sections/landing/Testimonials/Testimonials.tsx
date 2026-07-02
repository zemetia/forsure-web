import { Star } from 'lucide-react';

import testimonials from '@/data/testimonials.json';
import { Reveal } from '@/components/ui/Reveal';

export function Testimonials() {
  return (
    <section className="section-light border-y border-border bg-surface">
      <div className="container-page py-24">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 font-sans text-xs font-semibold tracking-widest text-primary uppercase">
            Testimoni
          </p>
          <h2 className="font-display text-4xl font-light italic text-foreground lg:text-5xl">
            Kata Mereka
            <br />
            <em className="not-italic text-foreground-muted">tentang Forsure</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.id} delay={i * 120}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-200 hover:border-border-strong">
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-foreground-muted">
                  &ldquo;{item.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-subtle font-sans text-sm font-semibold text-primary">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs text-foreground-muted">
                      {item.businessName} · {item.service}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Testimonials.displayName = 'Testimonials';
