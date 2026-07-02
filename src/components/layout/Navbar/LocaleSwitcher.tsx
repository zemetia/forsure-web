'use client';

import { useLocale } from 'next-intl';

import { Link, usePathname } from '@/i18n/navigation';

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const next = locale === 'en' ? 'id' : 'en';

  return (
    <Link
      href={pathname}
      locale={next}
      aria-label={`Switch to ${next === 'id' ? 'Indonesian' : 'English'}`}
      className="hidden h-7 items-center rounded-md border border-border-strong px-2.5 font-sans text-xs font-semibold text-foreground-muted transition-colors hover:border-primary hover:text-primary md:flex"
    >
      {next.toUpperCase()}
    </Link>
  );
}

LocaleSwitcher.displayName = 'LocaleSwitcher';
