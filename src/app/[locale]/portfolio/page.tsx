import type { Metadata } from 'next';

import { buildMetadata } from '@/lib/seo';
import { serializeSchema, webPageSchema, breadcrumbSchema, collectionPageSchema, faqSchema } from '@/lib/structured-data';
import { siteConfig } from '@/config/site';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ClientMarquee } from '@/components/sections/landing/ClientMarquee';
import { PortfolioHero } from '@/components/sections/portfolio/PortfolioHero';
import { PortfolioGallery } from '@/components/sections/portfolio/PortfolioGallery';
import { PortfolioCTA } from '@/components/sections/portfolio/PortfolioCTA';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const page = siteConfig.pages['portfolio'];
  return buildMetadata({
    title: page?.title,
    description: page?.description,
    path: '/portfolio',
    locale,
  });
}

export default function PortfolioPage() {
  const page = siteConfig.pages['portfolio'];

  return (
    <>
      <script
        id="portfolio-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(
            webPageSchema({
              name: page?.title ?? 'Portfolio',
              description: page?.description ?? siteConfig.description,
              url: `${siteConfig.url}/portfolio`,
            }),
          ),
        }}
      />
      <script
        id="portfolio-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(
            collectionPageSchema({
              name: page?.title ?? 'Portfolio Forsure Digitalindo',
              description: page?.description ?? siteConfig.description,
              url: `${siteConfig.url}/portfolio`,
            }),
          ),
        }}
      />
      <script
        id="portfolio-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(
            breadcrumbSchema([
              { name: 'Beranda', url: siteConfig.url },
              { name: 'Portfolio', url: `${siteConfig.url}/portfolio` },
            ]),
          ),
        }}
      />
      <script
        id="portfolio-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(
            faqSchema([
              {
                question: 'Proyek apa saja yang dikerjakan oleh Forsure Digitalindo?',
                answer: 'Forsure Digitalindo mengerjakan berbagai proyek digital meliputi pembuatan website company profile, landing page, e-commerce, desain konten media sosial, dan fotografi produk serta pre-wedding untuk klien dari berbagai industri di Indonesia.',
              },
              {
                question: 'Berapa lama rata-rata penyelesaian proyek di Forsure Digitalindo?',
                answer: 'Durasi proyek bervariasi: website company profile 7–14 hari kerja, landing page 5–7 hari, e-commerce 14–21 hari, dan konten kreatif atau photoshoot disesuaikan dengan scope proyek. Konsultasi awal gratis untuk estimasi timeline yang lebih akurat.',
              },
              {
                question: 'Industri apa saja yang pernah dilayani Forsure Digitalindo?',
                answer: 'Forsure Digitalindo telah melayani klien dari berbagai industri termasuk kuliner, fashion, properti, pendidikan, kecantikan, dan UMKM. Kami terbuka untuk semua jenis bisnis yang ingin membangun kehadiran digital yang kuat.',
              },
              {
                question: 'Apakah hasil portfolio bisa dijadikan referensi untuk proyek baru?',
                answer: 'Ya. Anda dapat melihat karya kami di halaman portfolio sebagai referensi kualitas dan gaya kerja Forsure Digitalindo. Jika tertarik, hubungi kami untuk konsultasi gratis dan kami akan menyesuaikan solusi terbaik untuk kebutuhan brand Anda.',
              },
            ]),
          ),
        }}
      />

      <Navbar />
      <main>
        <PortfolioHero />
        <PortfolioGallery />
        <ClientMarquee />
        <PortfolioCTA />
      </main>
      <Footer />
    </>
  );
}
