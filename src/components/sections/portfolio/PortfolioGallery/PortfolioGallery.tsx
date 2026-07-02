import { type ReactNode } from 'react';
import Image from 'next/image';

import { Reveal } from '@/components/ui/Reveal';
import { type PortfolioSectionData, portfolioSections } from '@/data/portfolio';
import { cn } from '@/lib/cn';

// ─── Shared image card ─────────────────────────────────────────────────────────

function Card({
  img,
  className,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: {
  img: { src: string; alt: string };
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={cn('group relative overflow-hidden rounded-xl', className)}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />
      {/* Gradient overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)' }}
      />
    </div>
  );
}

// ─── Layout: Asymmetric (design-feeds) ─────────────────────────────────────────
// 1 tall featured left (2/3 width) + 3 stacked right (1/3 width)

function AsymmetricGrid({ images }: { images: PortfolioSectionData['images'] }) {
  const [a, b, c, d] = images;
  const ROW_H = 190;
  return (
    <>
      {/* Mobile */}
      <div className="grid grid-cols-2 gap-3 sm:hidden">
        {images.map((img) => (
          <div key={img.src} className="relative aspect-square">
            <Card img={img} className="h-full w-full" />
          </div>
        ))}
      </div>
      {/* Desktop */}
      <div
        className="hidden gap-3 sm:grid"
        style={{
          gridTemplateColumns: '2fr 1fr',
          gridTemplateRows: `repeat(3, ${ROW_H}px)`,
        }}
      >
        {a && (
          <div className="row-span-3 relative">
            <Card img={a} className="h-full w-full" sizes="(max-width: 1024px) 66vw, 55vw" />
          </div>
        )}
        {b && (
          <div className="relative">
            <Card img={b} className="h-full w-full" sizes="33vw" />
          </div>
        )}
        {c && (
          <div className="relative">
            <Card img={c} className="h-full w-full" sizes="33vw" />
          </div>
        )}
        {d && (
          <div className="relative">
            <Card img={d} className="h-full w-full" sizes="33vw" />
          </div>
        )}
      </div>
    </>
  );
}

// ─── Layout: Magazine (food-photo) ─────────────────────────────────────────────
// 1 full-width hero image + remaining images in equal row below

function MagazineGrid({ images }: { images: PortfolioSectionData['images'] }) {
  const [hero, ...rest] = images;
  return (
    <div className="flex flex-col gap-3">
      {hero && (
        <div className="relative h-[280px] w-full sm:h-[380px] lg:h-[460px]">
          <Card img={hero} className="h-full w-full" sizes="100vw" />
        </div>
      )}
      {rest.length > 0 && (
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: `repeat(${rest.length}, 1fr)` }}
        >
          {rest.map((img) => (
            <div key={img.src} className="relative aspect-square">
              <Card img={img} className="h-full w-full" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Layout: Bento (product-photo) ─────────────────────────────────────────────
// Irregular 4-col bento with mixed col-spans
// Row 1: [span-2][span-2]
// Row 2: [span-1][span-2][span-1]
// Row 3: [span-1][span-1][span-2]

const BENTO_SPANS = [2, 2, 1, 2, 1, 1, 1, 2];

function BentoGrid({ images }: { images: PortfolioSectionData['images'] }) {
  return (
    <>
      {/* Mobile: 2-col */}
      <div className="grid grid-cols-2 gap-3 lg:hidden">
        {images.map((img) => (
          <div key={img.src} className="relative aspect-square">
            <Card img={img} className="h-full w-full" />
          </div>
        ))}
      </div>
      {/* Desktop: 4-col bento */}
      <div className="hidden grid-cols-4 gap-3 lg:grid">
        {images.map((img, i) => {
          const span = BENTO_SPANS[i] ?? 1;
          return (
            <div
              key={img.src}
              className={cn('relative aspect-square', span === 2 && 'col-span-2')}
            >
              <Card img={img} className="h-full w-full" sizes="(max-width: 1280px) 50vw, 25vw" />
            </div>
          );
        })}
      </div>
    </>
  );
}

// ─── Layout: Editorial (press-release) ─────────────────────────────────────────
// 1 panoramic full-width top + 2 equal cards below

function EditorialGrid({ images }: { images: PortfolioSectionData['images'] }) {
  const [a, b, c] = images;
  return (
    <div className="flex flex-col gap-3">
      {a && (
        <div className="relative aspect-[16/7] w-full lg:aspect-[16/6]">
          <Card img={a} className="h-full w-full" sizes="100vw" />
        </div>
      )}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {b && (
          <div className="relative aspect-[4/3]">
            <Card img={b} className="h-full w-full" sizes="(max-width: 640px) 100vw, 50vw" />
          </div>
        )}
        {c && (
          <div className="relative aspect-[4/3]">
            <Card img={c} className="h-full w-full" sizes="(max-width: 640px) 100vw, 50vw" />
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Layout: Portrait Duo (social-media) ───────────────────────────────────────
// 2 tall portrait images side-by-side, centred with generous spacing

function PortraitDuo({ images }: { images: PortfolioSectionData['images'] }) {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
      {images.slice(0, 2).map((img) => (
        <div key={img.src} className="relative aspect-[3/4]">
          <Card img={img} className="h-full w-full" sizes="(max-width: 640px) 100vw, 45vw" />
        </div>
      ))}
    </div>
  );
}

// ─── Layout: Triptych (wedding) ────────────────────────────────────────────────
// 3 portrait images as a gallery wall — equal width, same height

function TriptychGrid({ images }: { images: PortfolioSectionData['images'] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {images.slice(0, 3).map((img) => (
        <div key={img.src} className="relative aspect-[3/4]">
          <Card img={img} className="h-full w-full" sizes="(max-width: 640px) 100vw, 33vw" />
        </div>
      ))}
    </div>
  );
}

// ─── Layout: Showcase (website) ────────────────────────────────────────────────
// Each image spans full width, stacked — widescreen feel with thin gap between

function ShowcaseGrid({ images }: { images: PortfolioSectionData['images'] }) {
  return (
    <div className="flex flex-col gap-4">
      {images.map((img, i) => (
        <div
          key={img.src}
          className={cn(
            'relative w-full',
            i === 0 ? 'aspect-video' : 'aspect-[21/9]',
          )}
        >
          <Card img={img} className="h-full w-full" sizes="100vw" />
        </div>
      ))}
    </div>
  );
}

// ─── Layout registry ───────────────────────────────────────────────────────────

const LAYOUT_MAP: Record<string, (images: PortfolioSectionData['images']) => ReactNode> = {
  'design-feeds': (imgs) => <AsymmetricGrid images={imgs} />,
  'food-photo': (imgs) => <MagazineGrid images={imgs} />,
  'product-photo': (imgs) => <BentoGrid images={imgs} />,
  'press-release': (imgs) => <EditorialGrid images={imgs} />,
  'social-media': (imgs) => <PortraitDuo images={imgs} />,
  'website': (imgs) => <ShowcaseGrid images={imgs} />,
  'wedding': (imgs) => <TriptychGrid images={imgs} />,
};

// ─── Section header ────────────────────────────────────────────────────────────

function SectionHeader({
  section,
  index,
}: {
  section: PortfolioSectionData;
  index: number;
}) {
  return (
    <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="mb-3 font-mono text-[10px] font-medium tracking-[0.3em] text-primary uppercase">
          {String(index + 1).padStart(2, '0')} &mdash; {section.labelEn}
        </p>
        <h2 className="font-display text-4xl font-light italic text-foreground lg:text-5xl">
          {section.labelEn}
        </h2>
      </div>
      <p className="max-w-xs text-sm leading-relaxed text-foreground-muted lg:text-right">
        {section.descEn}
      </p>
    </div>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────────

export function PortfolioGallery() {
  return (
    <div className="bg-background">
      {portfolioSections.map((section, index) => {
        const renderGrid = LAYOUT_MAP[section.id];
        const isAlt = index % 2 === 1;

        return (
          <section
            key={section.id}
            id={section.id}
            className={cn(
              'relative scroll-mt-20 overflow-hidden py-24',
              isAlt ? 'bg-surface' : 'bg-background',
            )}
          >
            {/* Decorative oversized background number */}
            <span
              aria-hidden
              className="pointer-events-none absolute right-[-0.04em] top-[-0.15em] select-none font-display text-[22rem] font-light leading-none text-foreground"
              style={{ opacity: 0.03 }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Thin top border line */}
            {index > 0 && (
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: 'linear-gradient(to right, transparent, var(--color-border), transparent)' }}
              />
            )}

            <div className="container-page relative z-10">
              <Reveal>
                <SectionHeader section={section} index={index} />
              </Reveal>

              {/* Thin rule between header and grid */}
              <Reveal delay={60}>
                <div
                  className="mb-10 h-px w-full"
                  style={{
                    background: 'linear-gradient(to right, var(--color-border-strong), transparent 70%)',
                  }}
                />
              </Reveal>

              <Reveal delay={140}>
                {renderGrid ? renderGrid(section.images) : (
                  // Fallback: uniform grid
                  <div className={cn('grid gap-3', section.gridCols)}>
                    {section.images.map((img) => (
                      <div key={img.src} className={cn('relative', section.aspect)}>
                        <Card img={img} className="h-full w-full" />
                      </div>
                    ))}
                  </div>
                )}
              </Reveal>
            </div>
          </section>
        );
      })}
    </div>
  );
}

PortfolioGallery.displayName = 'PortfolioGallery';
