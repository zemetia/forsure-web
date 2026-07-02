import { Reveal } from '@/components/ui/Reveal';

const STEPS = [
  {
    number: '01',
    title: 'Konsultasi Awal',
    desc: 'Ceritakan kebutuhan dan visi brand Anda. Konsultasi gratis, tanpa komitmen.',
  },
  {
    number: '02',
    title: 'Perencanaan & Brief',
    desc: 'Kami rancang strategi, timeline, dan brief yang detail sesuai tujuan Anda.',
  },
  {
    number: '03',
    title: 'Eksekusi Proyek',
    desc: 'Tim kreatif mulai bekerja. Update berkala dan komunikasi terbuka sepanjang proses.',
  },
  {
    number: '04',
    title: 'Selesai & Revisi',
    desc: 'Hasil dikirim, revisi sampai puas. Kami pastikan Anda 100% happy sebelum final.',
  },
] as const;

export function ProcessSection() {
  return (
    <section className="container-page py-24">
      <Reveal className="mb-14 text-center">
        <p className="mb-3 font-sans text-xs font-semibold tracking-widest text-primary uppercase">
          Cara Kerja Kami
        </p>
        <h2 className="font-display text-4xl font-light italic text-foreground lg:text-5xl">
          Proses yang Jelas,
          <br />
          <em className="not-italic text-foreground-muted">Hasil yang Memuaskan</em>
        </h2>
      </Reveal>

      <div className="relative">
        {/* Connector line (desktop) */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-10 hidden h-px lg:block"
          style={{
            background:
              'linear-gradient(to right, transparent, var(--color-border) 20%, var(--color-border) 80%, transparent)',
          }}
        />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ number, title, desc }, i) => (
            <Reveal key={number} delay={i * 100}>
              <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                {/* Step number circle */}
                <div className="relative mb-6 flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-border bg-background">
                  <span className="font-display text-3xl font-light text-primary">{number}</span>
                  {/* Connector dot (behind) */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full"
                    style={{ boxShadow: '0 0 0 8px var(--color-background)' }}
                  />
                </div>

                <h3 className="mb-2 font-sans text-base font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-foreground-muted">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

ProcessSection.displayName = 'ProcessSection';
