import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';
import { FooterColumn } from './FooterColumn';

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();
  const { name, tagline, contact, footerLinks } = siteConfig;

  return (
    <footer className={className}>
      <div className="border-t border-border">
        <div className="container-page py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {/* Brand column */}
            <div className="flex flex-col gap-4 md:col-span-1">
              <Link href="/" aria-label={`${name} — Home`}>
                <div className="relative h-10 w-44 overflow-hidden">
                  <Image
                    src="/images/forsure.png"
                    alt={name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: '46% 49%' }}
                  />
                </div>
              </Link>

              <p className="max-w-[200px] text-sm leading-relaxed text-foreground-muted">
                {tagline}
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Forsure Digitalindo"
                  className="flex h-8 w-8 items-center justify-center rounded-md text-foreground-subtle transition-colors hover:text-primary"
                >
                  {/* Instagram icon — not available in lucide-react v1.17 */}
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
                <a
                  href={`mailto:${contact.email}`}
                  aria-label="Email Forsure Digitalindo"
                  className="flex h-8 w-8 items-center justify-center rounded-md text-foreground-subtle transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Forsure Digitalindo"
                  className="flex h-8 w-8 items-center justify-center rounded-md text-foreground-subtle transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Pages column */}
            <FooterColumn heading="Halaman" links={footerLinks.pages} />

            {/* Services column */}
            <FooterColumn heading="Layanan" links={footerLinks.services} />

            {/* Contact column */}
            <FooterColumn
              heading="Kontak"
              links={[
                { label: contact.phone, href: `tel:${contact.phone}`, external: true },
                { label: contact.email, href: `mailto:${contact.email}`, external: true },
                { label: contact.instagramHandle, href: contact.instagram, external: true },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border bg-surface">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 sm:flex-row">
          <p className="text-xs text-foreground-subtle">
            © {year} {name}. Hak cipta dilindungi.
          </p>
          <p className="text-xs text-foreground-subtle">
            {tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = 'Footer';
