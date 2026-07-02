'use client';

import React from 'react';

import { cn } from '@/lib/cn';
import { Reveal } from '@/components/ui/Reveal';
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from '@/components/ui/carousel';

export interface ServiceSectionProps {
  id: string;
  title: string;
  subtitle: string;
  gridCols?: 2 | 3 | 4;
  children: React.ReactNode;
  /** Optional full-width block rendered below the card grid (e.g. PricingTierGroup) */
  footer?: React.ReactNode;
  className?: string;
}

const colsClass: Record<2 | 3 | 4, string> = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
};

export function ServiceSection({
  id,
  title,
  subtitle,
  gridCols = 3,
  children,
  footer,
  className,
}: ServiceSectionProps) {
  const childArray = React.Children.toArray(children);
  const sectionNum = id === 'website' ? '01' : id === 'creative' ? '02' : '03';

  return (
    <section
      id={id}
      className={cn('scroll-mt-32 py-20', className)}
      aria-labelledby={`section-${id}-title`}
    >
      <div className="container-page">
        <Reveal className="mb-12">
          <header>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-foreground-subtle">
              {sectionNum}
            </p>
            <h2
              id={`section-${id}-title`}
              className="mb-3 font-sans text-2xl font-semibold text-foreground md:text-3xl"
            >
              {title}
            </h2>
            <p className="max-w-xl text-base text-foreground-muted">{subtitle}</p>
          </header>
        </Reveal>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <Carousel opts={{ align: 'start', loop: false }}>
            <CarouselContent className="-ml-3">
              {childArray.map((child, i) => (
                <CarouselItem key={i} className="basis-[85%] pl-3 sm:basis-[60%]">
                  {child}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots />
          </Carousel>
        </div>

        {/* Desktop: grid */}
        <div className={cn('hidden md:grid gap-6', colsClass[gridCols])}>
          {childArray.map((child, i) => (
            <Reveal key={i} delay={i * 80}>
              {child}
            </Reveal>
          ))}
        </div>

        {/* Full-width footer slot (e.g. PricingTierGroup) */}
        {footer && <div className="mt-12">{footer}</div>}
      </div>
    </section>
  );
}

ServiceSection.displayName = 'ServiceSection';
