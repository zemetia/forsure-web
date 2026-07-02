'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/cn';

type Direction = 'up' | 'left' | 'right';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}

const HIDDEN_TRANSFORM: Record<Direction, string> = {
  up: 'translateY(20px)',
  left: 'translateX(-24px)',
  right: 'translateX(24px)',
};

type Phase = 'pre' | 'hidden' | 'visible';

export function Reveal({ children, delay = 0, direction = 'up', className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>('pre');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      const timer = setTimeout(() => setPhase('visible'), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setPhase('visible');
          observer.disconnect();
        } else {
          setPhase('hidden');
        }
      },
      { threshold: 0, rootMargin: '0px 0px 60px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: React.CSSProperties | undefined =
    phase === 'pre'
      ? undefined
      : phase === 'hidden'
        ? {
            opacity: 0,
            transform: HIDDEN_TRANSFORM[direction],
            transition: 'none',
            willChange: 'opacity, transform',
          }
        : {
            opacity: 1,
            transform: 'none',
            transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
            willChange: 'auto',
          };

  return (
    <div ref={ref} className={cn(className)} style={style}>
      {children}
    </div>
  );
}

Reveal.displayName = 'Reveal';
