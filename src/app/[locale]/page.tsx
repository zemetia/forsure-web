import type { Metadata } from 'next';

import { buildMetadata } from '@/lib/seo';
import { organizationSchema, webPageSchema, serializeSchema } from '@/lib/structured-data';
import { siteConfig } from '@/config/site';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/landing/Hero';
import { SocialProof } from '@/components/sections/landing/SocialProof';
import { ServicesOverview } from '@/components/sections/landing/ServicesOverview';
import { WhyUs } from '@/components/sections/landing/WhyUs';
import { PortfolioTeaser } from '@/components/sections/landing/PortfolioTeaser';
import { ProcessSection } from '@/components/sections/landing/ProcessSection';
import { Testimonials } from '@/components/sections/landing/Testimonials';
import { AboutTeaser } from '@/components/sections/landing/AboutTeaser';
import { ClientMarquee } from '@/components/sections/landing/ClientMarquee';
import { OurPartners } from '@/components/sections/landing/OurPartners';
import { LocationMap } from '@/components/sections/landing/LocationMap';
import { LandingCTA } from '@/components/sections/landing/LandingCTA';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const page = siteConfig.pages['home'];
  return buildMetadata({
    title: page?.title,
    description: page?.description,
    path: '/',
    locale,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ServicesOverview />
        <WhyUs />
        <PortfolioTeaser />
        <ProcessSection />
        <Testimonials />
        <AboutTeaser />
        <ClientMarquee />
        <OurPartners />
        <LandingCTA />
        <LocationMap />
      </main>
      <Footer />

      <script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(organizationSchema()) }}
      />
      <script
        id="schema-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(
            webPageSchema({
              name: siteConfig.pages['home']?.title ?? siteConfig.name,
              description: siteConfig.pages['home']?.description ?? siteConfig.description,
              url: `${siteConfig.url}/${locale}`,
            }),
          ),
        }}
      />
    </>
  );
}
