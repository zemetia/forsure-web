'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/cn';

export interface CategoryFilterItem {
  id: string;
  label: string;
  anchor: string;
}

export interface CategoryFilterProps {
  categories: CategoryFilterItem[];
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const [active, setActive] = useState(categories[0]?.anchor ?? '');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    categories.forEach(({ anchor }) => {
      const el = document.getElementById(anchor);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setActive(anchor);
        },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [categories]);

  const scrollTo = (anchor: string) => {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className="sticky top-16 z-40 border-b border-border/50 bg-background/90 backdrop-blur-md"
      role="navigation"
      aria-label="Service categories"
    >
      <div className="container-page">
        <div className="flex overflow-x-auto">
          {categories.map(({ id, label, anchor }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(anchor)}
              className={cn(
                'relative shrink-0 px-5 py-4 text-sm font-medium transition-colors duration-150',
                active === anchor
                  ? 'text-foreground'
                  : 'text-foreground-muted hover:text-foreground',
              )}
            >
              {label}
              {active === anchor && (
                <span
                  className="absolute inset-x-5 bottom-0 h-[2px] rounded-full bg-primary"
                  aria-hidden
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

CategoryFilter.displayName = 'CategoryFilter';
