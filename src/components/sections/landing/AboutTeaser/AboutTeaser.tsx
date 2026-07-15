import Image from 'next/image';
import { ArrowRight, Sparkles, Layers, TrendingUp } from 'lucide-react';

import { Link } from '@/i18n/navigation';
import { Reveal } from '@/components/ui/Reveal';

const PILLARS = [
  {
    icon: Sparkles,
    label: 'Creative',
    desc: 'Crafting visually compelling designs and content',
  },
  {
    icon: Layers,
    label: 'Strategy',
    desc: 'Building meaningful digital presence with purpose',
  },
  {
    icon: TrendingUp,
    label: 'Digital Impact',
    desc: 'Delivering results that grow your brand',
  },
] as const;

export function AboutTeaser() {
  return (
    <section className="container-page py-24">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        {/* Text side */}
        <Reveal direction="left">
          <p className="mb-4 font-sans text-xs font-semibold tracking-widest text-primary uppercase">
            Tentang Kami
          </p>

          <h2 className="mb-6 font-display text-4xl font-light italic text-foreground lg:text-5xl">
            Tim Kreatif<br />
            <em className="not-italic text-foreground-muted">yang Berdedikasi</em>
          </h2>

          <p className="mb-8 text-base leading-relaxed text-foreground-muted">
            Forsure Digitalindo adalah agency digital premium yang fokus pada
            tiga hal: desain yang kuat, strategi yang bermakna, dan dampak
            digital yang nyata. Kami tidak sekadar mengerjakan proyek — kami
            membangun identitas brand Anda.
          </p>

          <div className="mb-10 space-y-4">
            {PILLARS.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-subtle">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-foreground">{label}</p>
                  <p className="text-sm text-foreground-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
          >
            Kenalan Lebih Dekat
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        {/* Visual side — decorative brand composition */}
        <Reveal direction="right" className="relative flex items-center justify-center">
          <div className="relative h-[400px] w-full max-w-[400px]">
            {/* Main card */}
            <div className="absolute inset-8 overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/about/creative-team.jpg"
                alt="Tim Kreatif Forsure Digitalindo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 400px"
              />
            </div>

            {/* Decorative ring */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  'linear-gradient(135deg, var(--color-primary-subtle) 0%, transparent 50%, var(--color-primary-subtle) 100%)',
              }}
            />

            {/* Corner accents */}
            {[
              'top-0 left-0',
              'top-0 right-0 rotate-90',
              'bottom-0 right-0 rotate-180',
              'bottom-0 left-0 rotate-270',
            ].map((pos, i) => (
              <div
                key={i}
                className={`absolute ${pos} h-8 w-8`}
                style={{ border: '2px solid var(--color-primary)', borderRadius: '4px 0 0 0' }}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

AboutTeaser.displayName = 'AboutTeaser';
