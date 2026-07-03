import type { Metadata } from 'next';

import { buildMetadata } from '@/lib/seo';
import { serializeSchema, webPageSchema, breadcrumbSchema, organizationSchema, personSchema, localBusinessSchema, faqSchema } from '@/lib/structured-data';
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
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(personSchema()) }}
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
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(localBusinessSchema()) }}
      />
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(
            breadcrumbSchema([
              { name: 'Beranda', url: siteConfig.url },
              { name: 'Tentang Kami', url: `${siteConfig.url}/about` },
            ]),
          ),
        }}
      />
      <script
        id="about-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(
            faqSchema([
              {
                question: 'Kapan Forsure Digitalindo didirikan?',
                answer: 'Forsure Digitalindo didirikan pada tahun 2024 oleh Yevo Cosuren di Surabaya, Indonesia.',
              },
              {
                question: 'Siapa pendiri Forsure Digitalindo?',
                answer: 'Forsure Digitalindo didirikan oleh Yevo Cosuren yang menjabat sebagai CEO & Founder. Yevo membangun agency ini dengan visi menjadi mitra digital terpercaya untuk bisnis dan brand di Indonesia.',
              },
              {
                question: 'Di mana kantor Forsure Digitalindo?',
                answer: 'Kantor Forsure Digitalindo berlokasi di Jl. Ir. Soekarno No.15, Surabaya, Jawa Timur, Indonesia. Kami juga melayani klien dari seluruh Indonesia secara remote.',
              },
              {
                question: 'Apa visi Forsure Digitalindo?',
                answer: 'Visi Forsure Digitalindo adalah menjadi agency digital premium yang mengangkat brand klien melalui solusi website profesional, creative content yang berdampak, dan fotografi berkualitas tinggi.',
              },
              {
                question: 'Apa saja layanan utama Forsure Digitalindo?',
                answer: 'Forsure Digitalindo menyediakan tiga layanan utama: (1) Website Solutions — pembuatan website company profile, landing page, dan e-commerce; (2) Creative Content — desain konten media sosial dan branding; (3) Photoshoot — fotografi produk, portrait, dan pre-wedding profesional.',
              },
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
