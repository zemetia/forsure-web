'use client';

import { usePathname, Link } from '@/i18n/navigation';
import { cn } from '@/lib/cn';

export interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ href, label, onClick, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'relative text-sm font-medium transition-colors duration-200',
        'after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:scale-x-0 after:bg-primary after:transition-transform after:duration-200',
        isActive
          ? 'text-foreground after:scale-x-100'
          : 'text-foreground-muted hover:text-foreground hover:after:scale-x-50',
        className,
      )}
    >
      {label}
    </Link>
  );
}

NavLink.displayName = 'NavLink';
