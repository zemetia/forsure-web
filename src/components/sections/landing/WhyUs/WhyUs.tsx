import { Award, DollarSign, Clock, HeartHandshake } from 'lucide-react';

import { Reveal } from '@/components/ui/Reveal';

const REASONS = [
  {
    icon: Award,
    title: 'Desain Profesional',
    desc: 'Setiap karya dirancang khusus untuk brand Anda — bukan template generic. Tim kreatif kami memastikan output berkualitas tinggi.',
  },
  {
    icon: DollarSign,
    title: 'Harga Transparan',
    desc: 'Tidak ada biaya tersembunyi. Semua scope dan harga dikomunikasikan sejak awal sehingga Anda bisa merencanakan anggaran dengan tenang.',
  },
  {
    icon: Clock,
    title: 'Proses Cepat & Terstruktur',
    desc: 'Timeline jelas, brief yang detail, dan revisi terjadwal. Kami menghargai waktu Anda sama seperti kami menghargai kualitas karya.',
  },
  {
    icon: HeartHandshake,
    title: 'Support After Project',
    desc: 'Kami tetap ada setelah proyek selesai. Pertanyaan, update minor, atau kebutuhan lanjutan — kami siap membantu.',
  },
] as const;

export function WhyUs() {
  return (
    <section className="bg-surface">
      <div className="container-page py-24">
        <Reveal className="mb-14 max-w-xl">
          <p className="mb-3 font-sans text-xs font-semibold tracking-widest text-primary uppercase">
            Kenapa Forsure?
          </p>
          <h2 className="font-display text-4xl font-light italic text-foreground lg:text-5xl">
            Lebih dari Sekadar
            <br />
            <em className="not-italic text-foreground-muted">Jasa Digital</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {REASONS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="rounded-2xl border border-border bg-background p-6 transition-all duration-200 hover:border-border-strong">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-subtle">
                  <Icon className="h-5 w-5 text-primary" />
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

WhyUs.displayName = 'WhyUs';
