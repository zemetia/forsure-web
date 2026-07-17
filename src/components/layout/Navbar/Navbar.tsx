'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/cn';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';

export interface NavbarProps {
  className?: string;
}

const NAV_LINKS = [
  { href: '/', key: 'home' },
  { href: '/services', key: 'services' },
  { href: '/portfolio', key: 'portfolio' },
  { href: '/about', key: 'about' },
] as const;

export function Navbar({ className }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations('navigation');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = NAV_LINKS.map((link) => ({
    href: link.href,
    label: t(link.key),
  }));

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-md transition-all duration-300',
        scrolled
          ? 'md:border-b md:border-border/50 md:bg-background/90 md:backdrop-blur-md'
          : 'md:border-b-0 md:bg-transparent md:backdrop-blur-none',
        className,
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Forsure Digitalindo — Home">
          <div className="relative h-9 w-36 overflow-hidden">
            <Image
              src="/images/forsure.png"
              alt="Forsure Digitalindo"
              fill
              priority
              className="object-cover"
              style={{ objectPosition: '46% 49%' }}
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        {/* CTA + Locale + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden h-8 items-center justify-center rounded-md border border-border-strong px-3 text-sm font-medium text-foreground transition-colors duration-150 hover:border-primary hover:bg-primary-subtle md:inline-flex"
          >
            {t('contact')}
          </Link>

          <MobileMenu links={links} />
        </div>
      </div>
    </header>
  );
}

Navbar.displayName = 'Navbar';
