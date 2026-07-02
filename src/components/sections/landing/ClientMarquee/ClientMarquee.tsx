import Image from 'next/image';

import { clients } from '@/data/clients';
import { Reveal } from '@/components/ui/Reveal';

function LogoPill({ name, logo }: { name: string; logo: string; darkBg?: boolean }) {
  return (
    <div className="flex shrink-0 items-center justify-center px-6 opacity-60 transition-opacity duration-300 hover:opacity-100">
      <Image
        src={logo}
        alt={name}
        width={240}
        height={100}
        className="h-[100px] w-auto max-w-[240px] object-contain"
        unoptimized
      />
    </div>
  );
}

function Track({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...clients, ...clients];
  return (
    <div
      className="flex shrink-0 gap-4"
      style={{ animation: `${reverse ? 'marquee-reverse' : 'marquee'} 40s linear infinite` }}
    >
      {doubled.map((c, i) => (
        <LogoPill key={`${c.id}-${i}`} name={c.name} logo={c.logo} darkBg={c.darkBg} />
      ))}
    </div>
  );
}

export function ClientMarquee() {
  return (
    <section className="border-y border-border bg-surface py-16 overflow-hidden">
      <Reveal>
        <p className="mb-10 text-center font-sans text-xs font-semibold tracking-widest text-foreground-subtle uppercase">
          Dipercaya Oleh
        </p>
      </Reveal>

      <div
        className="flex gap-4"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <Track />
        <Track />
      </div>
    </section>
  );
}

ClientMarquee.displayName = 'ClientMarquee';
