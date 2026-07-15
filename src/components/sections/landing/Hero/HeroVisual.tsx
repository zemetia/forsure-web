import Image from 'next/image';
import { Camera, TrendingUp } from 'lucide-react';

export function HeroVisual() {
  return (
    <div className="relative flex h-full min-h-[420px] items-center justify-center lg:min-h-[560px]">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 60% 50%, var(--color-primary-subtle) 0%, transparent 70%)',
        }}
      />

      {/* Main photo frame */}
      <div className="relative z-10 aspect-[3/2] w-full max-w-[460px] overflow-hidden rounded-2xl border border-border shadow-2xl">
        <Image
          src="/images/hero/si-hero.jpg"
          alt="Tim Forsure Digitalindo bekerja di lapangan"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 90vw, 400px"
        />
      </div>

      {/* Floating stat badge */}
      <div
        aria-hidden="true"
        className="animate-float absolute -right-4 top-8 z-20 flex items-center gap-2 rounded-xl border border-border bg-surface-overlay px-4 py-3 shadow-lg lg:-right-8"
      >
        <TrendingUp className="h-4 w-4 text-primary" />
        <div>
          <p className="text-xs font-semibold text-foreground">50+ Klien Puas</p>
          <p className="text-[10px] text-foreground-muted">Indonesia</p>
        </div>
      </div>

      {/* Floating service badge */}
      <div
        aria-hidden="true"
        className="animate-float-delayed absolute -left-4 bottom-12 z-20 flex items-center gap-2 rounded-xl border border-border bg-surface-overlay px-4 py-3 shadow-lg lg:-left-8"
      >
        <div className="h-8 w-8 rounded-lg bg-primary-subtle flex items-center justify-center">
          <Camera className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">Creative Studio</p>
          <p className="text-[10px] text-foreground-muted">Photo · Video · Content</p>
        </div>
      </div>
    </div>
  );
}

HeroVisual.displayName = 'HeroVisual';
