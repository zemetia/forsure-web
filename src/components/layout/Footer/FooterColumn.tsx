import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/cn';

export interface FooterColumnLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumnProps {
  heading: string;
  links: FooterColumnLink[];
  className?: string;
}

export function FooterColumn({ heading, links, className }: FooterColumnProps) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <p className="font-sans text-xs font-semibold tracking-widest text-foreground-subtle uppercase">
        {heading}
      </p>
      <ul className="flex flex-col gap-2.5">
        {links.map(({ label, href, external }) => (
          <li key={href}>
            {external ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground-muted transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ) : (
              <Link
                href={href}
                className="text-sm text-foreground-muted transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

FooterColumn.displayName = 'FooterColumn';
