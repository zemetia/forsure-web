'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/Button';
import { NavLink } from './NavLink';
import type { NavLinkProps } from './NavLink';

export interface MobileMenuProps {
  links: Omit<NavLinkProps, 'onClick'>[];
}

const sidebar = {
  open: {
    x: 0,
    transition: { type: 'spring' as const, stiffness: 300, damping: 30 },
  },
  closed: {
    x: '100%',
    transition: { type: 'spring' as const, stiffness: 300, damping: 30 },
  },
};

const overlay = {
  open: { opacity: 1, transition: { duration: 0.25 } },
  closed: { opacity: 0, transition: { duration: 0.2 } },
};

const stagger = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
  closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 as const } },
};

const item = {
  open: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 300, damping: 28 },
  },
  closed: {
    x: 32,
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

const logoVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 260, damping: 25, delay: 0.05 },
  },
  closed: {
    x: 20,
    opacity: 0,
    transition: { duration: 0.1 },
  },
};

export function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const t = useTranslations('navigation');

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Hamburger / Close toggle */}
      <Button
        variant="ghost"
        size="icon"
        aria-label={open ? t('closeMenu') : t('openMenu')}
        onClick={() => setOpen((v) => !v)}
        className="relative z-[60] md:hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="flex items-center justify-center"
            >
              <X className="h-5 w-5" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="flex items-center justify-center"
            >
              <Menu className="h-5 w-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </Button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="overlay"
              variants={overlay}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Sidebar panel */}
            <motion.div
              key="sidebar"
              variants={sidebar}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-surface-raised shadow-2xl md:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border px-6 py-5">
                <motion.div variants={logoVariant} className="relative h-9 w-36 overflow-hidden">
                  <Image
                    src="/images/forsure.png"
                    alt="Forsure Digitalindo"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '46% 49%' }}
                  />
                </motion.div>
              </div>

              {/* Nav links */}
              <motion.nav
                variants={stagger}
                aria-label="Mobile navigation"
                className="flex flex-1 flex-col gap-1 px-4 py-6"
              >
                {links.map((link) => (
                  <motion.div key={link.href} variants={item}>
                    <NavLink
                      href={link.href}
                      label={link.label}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-3 text-base after:hidden hover:bg-surface-overlay"
                    />
                  </motion.div>
                ))}
              </motion.nav>

              {/* CTA */}
              <motion.div
                variants={logoVariant}
                className="border-t border-border px-6 py-6"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-full items-center justify-center rounded-md border border-border-strong px-4 text-sm font-medium text-foreground transition-colors duration-150 hover:border-primary hover:bg-primary-subtle"
                >
                  {t('contact')}
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

MobileMenu.displayName = 'MobileMenu';
