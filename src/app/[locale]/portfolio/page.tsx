import type { Metadata } from 'next';

import { buildMetadata } from '@/lib/seo';
import { serializeSchema, webPageSchema, breadcrumbSchema } from '@/lib/structured-data';
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
        id="portfolio-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(
            breadcrumbSchema([
              { name: 'Home', url: siteConfig.url },
              { name: 'Portfolio', url: `${siteConfig.url}/portfolio` },
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
