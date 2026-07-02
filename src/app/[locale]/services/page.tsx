import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServiceHero } from '@/components/sections/services/ServiceHero';
import { CategoryFilter } from '@/components/sections/services/CategoryFilter';
import { ServiceSection } from '@/components/sections/services/ServiceSection';
import { ServiceCTA } from '@/components/sections/services/ServiceCTA';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { PricingTierGroup } from '@/components/ui/PricingTier';
import { SERVICES, PREWED_TIERS } from '@/data/services';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import {
  webPageSchema,
  breadcrumbSchema,
  serializeSchema,
} from '@/lib/structured-data';

type Props = { params: Promise<{ locale: string }> };

const servicesPage = siteConfig.pages['services'] ?? {
  title: 'Layanan Kami',
  description: 'Jelajahi layanan Forsure Digitalindo.',
  path: '/services',
  changeFreq: 'monthly' as const,
  priority: 0.9,
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    title: servicesPage.title,
    description: servicesPage.description,
    path: '/services',
    locale,
  });
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });

  const websiteServices = SERVICES.filter((s) => s.category === 'website');
  const creativeServices = SERVICES.filter((s) => s.category === 'creative');
  const photoshootServices = SERVICES.filter((s) => s.category === 'photoshoot');

  const waNumber = siteConfig.contact.phone.replace(/[^0-9]/g, '');
  const makeWaUrl = (title: string) =>
    `https://wa.me/${waNumber}?text=${encodeURIComponent(
      `Halo Forsure, saya tertarik dengan layanan ${title}`,
    )}`;

  const categories = [
    { id: 'website', label: t('filter.website'), anchor: 'website' },
    { id: 'creative', label: t('filter.creative'), anchor: 'creative' },
    { id: 'photoshoot', label: t('filter.photoshoot'), anchor: 'photoshoot' },
  ];

  const pageUrl = `${siteConfig.url}/${locale}/services`;

  return (
    <>
      <script
        id="services-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(
            webPageSchema({
              name: servicesPage.title,
              description: servicesPage.description,
              url: pageUrl,
            }),
          ),
        }}
      />
      <script
        id="services-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(
            breadcrumbSchema([
              { name: 'Home', url: siteConfig.url },
              { name: 'Services', url: pageUrl },
            ]),
          ),
        }}
      />

      <Navbar />

      <main>
        <ServiceHero
          heading={t('hero.heading')}
          subheading={t('hero.subheading')}
          ctaLabel={t('hero.cta')}
        />

        <CategoryFilter categories={categories} />

        <ServiceSection
          id="website"
          title={t('sections.website.title')}
          subtitle={t('sections.website.subtitle')}
          gridCols={2}
          className="section-light"
        >
          {websiteServices.map((service) => (
            <ServiceCard
              key={service.id}
              category={service.category}
              title={service.title}
              subtitle={service.subtitle}
              features={service.features}
              variant={service.featured ? 'featured' : 'default'}
              ctaLabel={t('card.cta')}
              ctaHref={makeWaUrl(service.title)}
            />
          ))}
        </ServiceSection>

        <ServiceSection
          id="creative"
          title={t('sections.creative.title')}
          subtitle={t('sections.creative.subtitle')}
          gridCols={3}
          className="bg-background"
        >
          {creativeServices.map((service) => (
            <ServiceCard
              key={service.id}
              category={service.category}
              title={service.title}
              subtitle={service.subtitle}
              features={service.features}
              variant={service.featured ? 'featured' : 'default'}
              ctaLabel={t('card.cta')}
              ctaHref={makeWaUrl(service.title)}
            />
          ))}
        </ServiceSection>

        <ServiceSection
          id="photoshoot"
          title={t('sections.photoshoot.title')}
          subtitle={t('sections.photoshoot.subtitle')}
          gridCols={3}
          className="section-light"
          footer={
            <PricingTierGroup
              tiers={PREWED_TIERS}
              ctaLabel={t('card.cta')}
              ctaHref={makeWaUrl('PreWed & PreSweet')}
            />
          }
        >
          {photoshootServices.map((service) => (
            <ServiceCard
              key={service.id}
              category={service.category}
              title={service.title}
              subtitle={service.subtitle}
              features={service.features}
              variant={service.featured ? 'featured' : 'default'}
              ctaLabel={t('card.cta')}
              ctaHref={makeWaUrl(service.title)}
            />
          ))}
        </ServiceSection>

        <ServiceCTA
          heading={t('cta.heading')}
          subheading={t('cta.subheading')}
          whatsappLabel={t('cta.whatsapp')}
          portfolioLabel={t('cta.portfolio')}
        />
      </main>

      <Footer />
    </>
  );
}
