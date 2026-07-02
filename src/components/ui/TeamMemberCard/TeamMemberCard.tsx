import Image from 'next/image';

import { cn } from '@/lib/cn';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio?: string;
  social?: {
    instagram?: string;
    linkedin?: string;
  };
}

export type TeamMemberCardProps = TeamMember & {
  className?: string;
};

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0] ?? '')
    .join('')
    .toUpperCase();
}

function PersonSilhouette({ name }: { name: string }) {
  const initials = getInitials(name);

  return (
    <div className="relative h-full w-full overflow-hidden bg-surface-raised">
      {/* SVG silhouette */}
      <svg
        viewBox="0 0 300 400"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={`grad-${initials}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.13 0 0)" />
            <stop offset="100%" stopColor="oklch(0.08 0 0)" />
          </linearGradient>
          <linearGradient id={`body-${initials}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.19 0 0)" />
            <stop offset="100%" stopColor="oklch(0.15 0 0)" />
          </linearGradient>
          <radialGradient id={`glow-${initials}`} cx="50%" cy="42%" r="28%">
            <stop offset="0%" stopColor="oklch(0.768 0.131 83.5)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="oklch(0.768 0.131 83.5)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background */}
        <rect width="300" height="400" fill={`url(#grad-${initials})`} />

        {/* Subtle gold ambient glow */}
        <rect width="300" height="400" fill={`url(#glow-${initials})`} />

        {/* Body / shoulders — bottom large ellipse */}
        <ellipse cx="150" cy="430" rx="140" ry="100" fill={`url(#body-${initials})`} />

        {/* Neck */}
        <rect x="131" y="196" width="38" height="30" rx="4" fill="oklch(0.19 0 0)" />

        {/* Head circle */}
        <circle cx="150" cy="155" r="62" fill="oklch(0.19 0 0)" />

        {/* Gold ring accent around head */}
        <circle
          cx="150"
          cy="155"
          r="68"
          fill="none"
          stroke="oklch(0.768 0.131 83.5)"
          strokeWidth="0.75"
          strokeOpacity="0.25"
        />

        {/* Initials */}
        <text
          x="150"
          y="168"
          textAnchor="middle"
          fontFamily="Garamond, Georgia, serif"
          fontSize="34"
          fontStyle="italic"
          fontWeight="300"
          fill="oklch(0.768 0.131 83.5)"
          fillOpacity="0.7"
        >
          {initials}
        </text>

        {/* Subtle bottom fade */}
        <defs>
          <linearGradient id={`fade-${initials}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="60%" stopColor="oklch(0.13 0 0)" stopOpacity="0" />
            <stop offset="100%" stopColor="oklch(0.08 0 0)" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <rect width="300" height="400" fill={`url(#fade-${initials})`} />
      </svg>
    </div>
  );
}

export function TeamMemberCard({ name, role, photo, social, className }: TeamMemberCardProps) {
  const isPlaceholder = !photo || photo.includes('[');

  return (
    <div className={cn('group', className)}>
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-raised">
        {isPlaceholder ? (
          <PersonSilhouette name={name} />
        ) : (
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          />
        )}

        {/* Hover overlay — always present for social links */}
        <div
          className={cn(
            'absolute inset-0 flex flex-col items-center justify-end',
            'bg-gradient-to-t from-background/90 via-background/20 to-transparent',
            'p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100',
          )}
        >
          {social && (
            <div className="flex items-center gap-2">
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram ${name}`}
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-background/80 text-foreground-muted transition-colors hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn ${name}`}
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-background/80 text-foreground-muted transition-colors hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="pt-3">
        <p className="font-medium text-foreground">{name}</p>
        <p className="text-sm text-foreground-muted">{role}</p>
      </div>
    </div>
  );
}

TeamMemberCard.displayName = 'TeamMemberCard';
