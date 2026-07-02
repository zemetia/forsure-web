'use client';

import { cn } from '@/lib/cn';
import type { PricingTierItem } from '@/data/services';
import { PricingTier } from './PricingTier';
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from '@/components/ui/carousel';

export interface PricingTierGroupProps {
  tiers: PricingTierItem[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export function PricingTierGroup({ tiers, ctaLabel, ctaHref, className }: PricingTierGroupProps) {
  return (
    <div className={cn('col-span-full space-y-4', className)}>
      <div className="border-t border-border pt-8">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-foreground-subtle">
          PreWed & PreSweet — Packages
        </p>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <Carousel opts={{ align: 'start', loop: false }}>
            <CarouselContent className="-ml-3">
              {tiers.map((tier) => (
                <CarouselItem key={tier.name} className="basis-[85%] pl-3 sm:basis-[60%]">
                  <PricingTier {...tier} ctaLabel={ctaLabel} ctaHref={ctaHref} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots />
          </Carousel>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-6">
          {tiers.map((tier) => (
            <PricingTier key={tier.name} {...tier} ctaLabel={ctaLabel} ctaHref={ctaHref} />
          ))}
        </div>
      </div>
    </div>
  );
}

PricingTierGroup.displayName = 'PricingTierGroup';
