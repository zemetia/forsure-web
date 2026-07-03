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
  faqSchema,
  serviceListSchema,
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

  const pageUrl = `${siteConfig.url}/services`;

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
      <script
        id="services-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(
            serviceListSchema([
              {
                name: 'Website Company Profile',
                description:
                  'Website profesional 5 halaman lengkap dengan domain & hosting 1 tahun, desain mobile responsive, dan SEO basic setup.',
                url: `${siteConfig.url}/services#website`,
              },
              {
                name: 'Landing Page',
                description:
                  'Halaman tunggal high-conversion untuk promosi, event, atau peluncuran produk — dioptimalkan untuk kecepatan dan CTA.',
                url: `${siteConfig.url}/services#website`,
              },
              {
                name: 'Website E-Commerce',
                description:
                  'Toko online lengkap dengan shopping cart, dashboard admin, dan integrasi payment gateway yang aman.',
                url: `${siteConfig.url}/services#website`,
              },
              {
                name: 'Creative Content',
                description:
                  'Desain konten media sosial dan materi branding yang dirancang untuk menarik perhatian dan mengkonversi audiens.',
                url: `${siteConfig.url}/services#creative`,
              },
              {
                name: 'Photoshoot Profesional',
                description:
                  'Layanan fotografi produk, portrait, dan pre-wedding berkualitas tinggi yang merepresentasikan brand secara visual.',
                url: `${siteConfig.url}/services#photoshoot`,
              },
            ]),
          ),
        }}
      />
      <script
        id="services-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(
            faqSchema([
              {
                question: 'Berapa lama proses pembuatan website company profile?',
                answer:
                  'Website company profile standard membutuhkan 7–14 hari kerja. Landing page 5–7 hari, dan website e-commerce 14–21 hari. Durasi bisa bervariasi tergantung kompleksitas dan kecepatan feedback dari klien.',
              },
              {
                question: 'Apa perbedaan website company profile dan landing page?',
                answer:
                  'Website company profile terdiri dari 5 halaman lengkap (Home, About, Services, Portfolio, Contact) yang cocok untuk representasi bisnis secara menyeluruh. Landing page adalah satu halaman terfokus yang dioptimalkan untuk satu tujuan konversi — promosi, event, atau peluncuran produk.',
              },
              {
                question: 'Apakah layanan creative content sudah termasuk konsep dan desain?',
                answer:
                  'Ya. Paket creative content kami sudah mencakup riset konsep, desain, dan produksi konten siap posting. Klien cukup menyetujui arah kreatif dan kami yang eksekusi.',
              },
              {
                question: 'Apa saja yang termasuk dalam paket photoshoot di Forsure Digitalindo?',
                answer:
                  'Paket photoshoot mencakup sesi pemotretan, editing profesional, dan file digital beresolusi tinggi. Tersedia paket Bronze, Silver, dan Gold untuk pre-wedding/pre-sweet dengan opsi lokasi dan jumlah foto yang berbeda.',
              },
              {
                question: 'Apakah Forsure Digitalindo bisa membantu bisnis yang baru mulai?',
                answer:
                  'Tentu. Kami melayani UMKM hingga perusahaan yang ingin membangun identitas digital yang kuat. Konsultasi awal gratis — ceritakan tahap bisnis Anda dan kami akan merekomendasikan paket yang paling sesuai.',
              },
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
