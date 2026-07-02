import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/cn';

export interface PillarCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function PillarCard({ icon: Icon, title, description, className }: PillarCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5 border border-border bg-surface p-8',
        'transition-colors duration-300 hover:border-border-strong hover:bg-surface-raised',
        className,
      )}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-subtle text-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-foreground-muted">{description}</p>
      </div>
    </div>
  );
}

PillarCard.displayName = 'PillarCard';
