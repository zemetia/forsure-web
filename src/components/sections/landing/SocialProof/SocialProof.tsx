'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: 50, suffix: '+', label: 'Klien Dilayani' },
  { value: 30, suffix: '+', label: 'Proyek Selesai' },
  { value: 5, suffix: '', label: 'Kategori Layanan' },
  { value: 100, suffix: '%', label: 'Klien Puas' },
];

function StatCounter({ value, suffix, label }: StatItem) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1500;
          const start = performance.now();

          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <span className="font-display text-5xl font-light text-foreground lg:text-6xl">
        {count}
        <span className="text-primary">{suffix}</span>
      </span>
      <span className="text-center text-sm text-foreground-muted">{label}</span>
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {STATS.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

SocialProof.displayName = 'SocialProof';
