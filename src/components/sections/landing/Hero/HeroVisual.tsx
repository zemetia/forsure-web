import { Monitor, Camera, Palette, TrendingUp } from 'lucide-react';

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

      {/* Main browser mockup */}
      <div className="relative z-10 w-full max-w-[400px] rounded-2xl border border-border bg-surface shadow-2xl">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 rounded-t-2xl border-b border-border bg-surface-raised px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive-subtle" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning-subtle" />
          <span className="h-2.5 w-2.5 rounded-full bg-success-subtle" />
          <div className="ml-2 flex-1 rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground-subtle">
            forsure.id
          </div>
        </div>

        {/* Website content mockup */}
        <div className="p-5 space-y-4">
          {/* Navbar line */}
          <div className="flex items-center justify-between">
            <div className="h-3 w-16 rounded-full bg-foreground-subtle" />
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-2 w-10 rounded-full bg-surface-raised" />
              ))}
            </div>
          </div>

          {/* Hero content */}
          <div className="rounded-xl border border-border bg-surface-raised p-4 space-y-2">
            <div className="h-5 w-3/4 rounded-full bg-foreground-subtle" />
            <div className="h-3 w-full rounded-full bg-border" />
            <div className="h-3 w-4/5 rounded-full bg-border" />
            <div className="mt-3 flex gap-2">
              <div className="h-7 w-24 rounded-md bg-primary" />
              <div className="h-7 w-20 rounded-md border border-border" />
            </div>
          </div>

          {/* Cards row */}
          <div className="grid grid-cols-3 gap-2">
            {[Monitor, Camera, Palette].map((Icon, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-surface-raised p-3 flex flex-col items-center gap-1.5"
              >
                <Icon className="h-4 w-4 text-primary" />
                <div className="h-1.5 w-full rounded-full bg-border" />
                <div className="h-1.5 w-3/4 rounded-full bg-surface-overlay" />
              </div>
            ))}
          </div>
        </div>
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
