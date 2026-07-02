import type { Metadata } from 'next';

import { buildMetadata } from '@/lib/seo';
import {
  organizationSchema,
  webPageSchema,
  localBusinessSchema,
  personSchema,
  faqSchema,
  serializeSchema,
} from '@/lib/structured-data';
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
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(localBusinessSchema()) }}
      />
      <script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(personSchema()) }}
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
      <script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(
            faqSchema([
              {
                question: 'Apa itu Forsure Digitalindo?',
                answer:
                  'Forsure Digitalindo adalah agency digital premium berbasis di Surabaya, Indonesia, yang menyediakan layanan pembuatan website profesional, creative content, dan photoshoot berkualitas tinggi untuk bisnis dan brand.',
              },
              {
                question: 'Layanan apa saja yang tersedia di Forsure Digitalindo?',
                answer:
                  'Forsure Digitalindo menawarkan tiga layanan utama: (1) Website Solutions — company profile, landing page, dan e-commerce; (2) Creative Content — desain konten media sosial dan materi branding; (3) Photoshoot — product photography, portrait, dan pre-wedding.',
              },
              {
                question: 'Berapa biaya jasa pembuatan website di Forsure Digitalindo?',
                answer:
                  'Harga bervariasi sesuai kebutuhan. Konsultasi awal gratis — hubungi kami via WhatsApp di +62 897-0297-969 untuk mendapatkan estimasi harga yang sesuai dengan brand Anda.',
              },
              {
                question: 'Apakah Forsure Digitalindo melayani klien dari luar Surabaya?',
                answer:
                  'Ya. Forsure Digitalindo melayani klien di seluruh Indonesia secara remote. Untuk layanan photoshoot, tersedia opsi travel ke luar kota dengan travel fee yang disepakati bersama.',
              },
              {
                question: 'Apakah ada konsultasi gratis sebelum memulai proyek?',
                answer:
                  'Ya, kami menyediakan sesi konsultasi awal gratis via WhatsApp atau Zoom. Konsultasi ini tanpa komitmen — kami akan memahami kebutuhan brand Anda terlebih dahulu sebelum memberikan rekomendasi dan penawaran.',
              },
            ]),
          ),
        }}
      />
    </>
  );
}
