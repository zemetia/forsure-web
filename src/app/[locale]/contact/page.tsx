import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Mail, Clock, MessageCircle } from 'lucide-react';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Reveal } from '@/components/ui/Reveal';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import { serializeSchema, webPageSchema, breadcrumbSchema, faqSchema } from '@/lib/structured-data';
import { contactConfig, makeWaLink } from '@/data/contact';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const page = siteConfig.pages['contact'];
  return buildMetadata({
    title: page?.title,
    description: page?.description,
    path: '/contact',
    locale,
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  const channels = [
    {
      icon: MessageCircle,
      label: t('channels.whatsapp'),
      sub: t('channels.whatsappSub'),
      href: makeWaLink(),
      value: contactConfig.whatsapp.display,
      color: 'text-[#25D366]',
      bg: 'bg-[#25D366]/10',
      external: true,
    },
    {
      icon: Mail,
      label: t('channels.email'),
      sub: t('channels.emailSub'),
      href: `mailto:${contactConfig.email}`,
      value: contactConfig.email,
      color: 'text-primary',
      bg: 'bg-primary-subtle',
      external: false,
    },
    {
      icon: InstagramIcon,
      label: t('channels.instagram'),
      sub: t('channels.instagramSub'),
      href: contactConfig.instagram.url,
      value: contactConfig.instagram.handle,
      color: 'text-[#E1306C]',
      bg: 'bg-[#E1306C]/10',
      external: true,
    },
  ];

  return (
    <>
      <script
        id="contact-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(
            webPageSchema({
              name: siteConfig.pages['contact']?.title ?? 'Hubungi Kami',
              description: siteConfig.pages['contact']?.description ?? '',
              url: `${siteConfig.url}/${locale}/contact`,
            }),
          ),
        }}
      />
      <script
        id="contact-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(
            breadcrumbSchema([
              { name: 'Home', url: siteConfig.url },
              { name: 'Contact', url: `${siteConfig.url}/contact` },
            ]),
          ),
        }}
      />
      <script
        id="contact-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(
            faqSchema(
              contactConfig.faqs.map((f) => ({ question: f.question, answer: f.answer })),
            ),
          ),
        }}
      />

      <Navbar />

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="container-page pb-16 pt-32 text-center">
          <Reveal>
            <p className="mb-4 font-sans text-xs font-semibold tracking-widest text-primary uppercase">
              {t('hero.eyebrow')}
            </p>
            <h1 className="font-display text-5xl font-light italic text-foreground lg:text-6xl">
              {t('hero.headline').split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>
            <p className="mx-auto mt-6 max-w-md text-base text-foreground-muted">
              {t('hero.subheadline')}
            </p>
          </Reveal>
        </section>

        {/* ── Contact Channels (light) ──────────────────────────────────── */}
        <section className="section-light w-full">
          <div className="container-page py-16">
            <Reveal className="mb-10 text-center">
              <h2 className="font-display text-2xl font-light italic text-foreground">
                {t('channels.heading')}
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {channels.map(({ icon: Icon, label, sub, href, value, color, bg, external }, i) => (
                <Reveal key={label} delay={i * 100}>
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface p-8 text-center transition-all duration-300 hover:border-border-strong hover:shadow-md"
                  >
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${bg}`}>
                      <Icon className={`h-7 w-7 ${color}`} />
                    </div>
                    <div>
                      <p className="mb-1 font-sans text-base font-semibold text-foreground">{label}</p>
                      <p className="mb-3 font-sans text-sm font-medium text-primary">{value}</p>
                      <p className="text-xs text-foreground-muted">{sub}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Office Hours + FAQ (dark) ─────────────────────────────────── */}
        <section className="container-page py-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

            {/* Office Hours */}
            <Reveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-subtle">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-light italic text-foreground">
                  {t('hours.heading')}
                </h2>
              </div>
              <div className="space-y-3">
                {contactConfig.officeHours.map((row) => (
                  <div
                    key={row.days}
                    className="flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4"
                  >
                    <span className="text-sm font-medium text-foreground">{row.days}</span>
                    <span className={`text-sm font-semibold ${row.closed ? 'text-foreground-subtle' : 'text-primary'}`}>
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* FAQ */}
            <Reveal delay={100}>
              <h2 className="mb-8 font-display text-2xl font-light italic text-foreground">
                {t('faq.heading')}
              </h2>
              <FAQAccordion faqs={contactConfig.faqs} />
            </Reveal>
          </div>
        </section>

        {/* ── Bottom CTA (dark) ─────────────────────────────────────────── */}
        <section className="border-t border-border bg-surface">
          <div className="container-page py-20 text-center">
            <Reveal>
              <p className="mb-3 font-sans text-xs font-semibold tracking-widest text-primary uppercase">
                {t('cta.heading')}
              </p>
              <h2 className="mb-4 font-display text-4xl font-light italic text-foreground lg:text-5xl">
                {t('cta.subheading')}
              </h2>
              <a
                href={makeWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-hover"
                style={{ boxShadow: '0 0 24px var(--color-primary-glow)' }}
              >
                <MessageCircle className="h-4 w-4" />
                {t('cta.button')}
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// ── Accordion client component ─────────────────────────────────────────────
function FAQAccordion({ faqs }: { faqs: typeof contactConfig.faqs }) {
  return (
    <div className="space-y-2">
      {faqs.map((faq) => (
        <details
          key={faq.id}
          className="group rounded-xl border border-border bg-surface open:border-border-strong"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-sans text-sm font-semibold text-foreground">
            {faq.question}
            <span className="ml-auto shrink-0 text-primary transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="border-t border-border px-5 pb-4 pt-3 text-sm leading-relaxed text-foreground-muted">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
