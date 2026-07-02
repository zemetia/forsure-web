import type { Metadata } from 'next';

import { buildMetadata } from '@/lib/seo';
import { serializeSchema, webPageSchema, breadcrumbSchema, organizationSchema } from '@/lib/structured-data';
import { siteConfig } from '@/config/site';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { OurStory } from '@/components/sections/about/OurStory';
import { OurPillars } from '@/components/sections/about/OurPillars';
import { VisionMission } from '@/components/sections/about/VisionMission';
import { CEOGreeting } from '@/components/sections/about/CEOGreeting';
import { OurTeam } from '@/components/sections/about/OurTeam';
import { AboutCTA } from '@/components/sections/about/AboutCTA';
import { ClientMarquee } from '@/components/sections/landing/ClientMarquee';
import { OurPartners } from '@/components/sections/landing/OurPartners';
import { LocationMap } from '@/components/sections/landing/LocationMap';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const page = siteConfig.pages['about'];
  return buildMetadata({
    title: page?.title,
    description: page?.description,
    path: '/about',
    locale,
  });
}

export default function AboutPage() {
  const page = siteConfig.pages['about'];

  return (
    <>
      <script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(organizationSchema()) }}
      />
      <script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(
            webPageSchema({
              name: page?.title ?? 'About Us',
              description: page?.description ?? siteConfig.description,
              url: `${siteConfig.url}/about`,
              datePublished: '2024-01-01',
            }),
          ),
        }}
      />
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(
            breadcrumbSchema([
              { name: 'Home', url: siteConfig.url },
              { name: 'About Us', url: `${siteConfig.url}/about` },
            ]),
          ),
        }}
      />

      <Navbar />
      <main>
        <AboutHero />
        <OurStory />
        <OurPillars />
        <VisionMission />
        <CEOGreeting />
        <OurTeam />
        <ClientMarquee />
        <OurPartners />
        <AboutCTA />
        <LocationMap />
      </main>
      <Footer />
    </>
  );
}
