/**
 * Central "company brain" — single source of truth for all SEO, GEO, and LLMs.txt.
 * Edit this file first whenever you add a page or change brand/product details.
 * Every field here propagates to: metadata, sitemap, robots.txt, structured data, llms.txt.
 */

import type { MetadataRoute } from 'next';

export type SitemapChangeFreq = NonNullable<
  MetadataRoute.Sitemap[number]['changeFrequency']
>;

export interface PageConfig {
  /** URL path relative to root, e.g. '/about' */
  path: string;
  /** <title> for this page */
  title: string;
  /** Meta description — be specific: include what the visitor gains */
  description: string;
  /** Sitemap change frequency hint */
  changeFreq: SitemapChangeFreq;
  /** Sitemap priority 0.0–1.0 */
  priority: number;
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  contact: {
    phone: string;
    email: string;
    instagram: string;
    instagramHandle: string;
  };
  company: {
    legalName: string;
    foundedYear: number;
    industry: string;
    targetAudience: string;
    problemSolved: string;
    solution: string;
    keyBenefits: string[];
    contactEmail: string;
    socialLinks: {
      instagram?: string;
    };
  };
  seo: {
    titleTemplate: string;
    defaultTitle: string;
    twitterHandle?: string;
    locale: string;
  };
  footerLinks: {
    pages: FooterLinkItem[];
    services: FooterLinkItem[];
  };
  /** Registry of all public pages — drives sitemap + LLMs.txt page index */
  pages: Record<string, PageConfig>;
}

export const siteConfig: SiteConfig = {
  // ─── Core Identity ───────────────────────────────────────────────────────────
  name: 'Forsure Digitalindo',
  tagline: 'Your Brand Deserves to Be Seen',
  description:
    'Forsure Digitalindo adalah agency digital premium yang menghadirkan website profesional, creative content, dan photoshoot berkualitas tinggi untuk mengangkat brand Anda.',
  url: process.env['NEXT_PUBLIC_APP_URL'] ?? 'https://forsure.id',

  // ─── Brand Assets ────────────────────────────────────────────────────────────
  ogImage: '/og',

  // ─── Contact ─────────────────────────────────────────────────────────────────
  contact: {
    phone: '+62 897-0297-969',
    email: 'forsure.digitalindo@gmail.com',
    instagram: 'https://instagram.com/forsure.ids',
    instagramHandle: '@forsure.ids',
  },

  // ─── Company Details (drives Organization schema + LLMs.txt) ─────────────────
  company: {
    legalName: 'Forsure Digitalindo',
    foundedYear: 2024,
    industry: 'Digital Agency',
    targetAudience:
      'Bisnis dan brand yang ingin tampil profesional secara digital — dari UMKM hingga perusahaan yang membutuhkan identitas digital yang kuat.',
    problemSolved:
      'Banyak bisnis yang kesulitan membangun kehadiran digital yang konsisten dan berdampak tanpa tim internal yang memadai.',
    solution:
      'Forsure Digitalindo menyediakan layanan website, creative content, dan photoshoot profesional dalam satu agency — sehingga brand Anda tampil kohesif dan berkesan.',
    keyBenefits: [
      'Website profesional yang dibangun dengan teknologi modern dan SEO-ready',
      'Creative content yang dirancang untuk menarik perhatian dan mengkonversi audiens',
      'Photoshoot berkualitas tinggi yang merepresentasikan brand secara visual',
    ],
    contactEmail: 'forsure.digitalindo@gmail.com',
    socialLinks: {
      instagram: 'https://instagram.com/forsure.ids',
    },
  },

  // ─── SEO Settings ────────────────────────────────────────────────────────────
  seo: {
    titleTemplate: '%s | Forsure Digitalindo',
    defaultTitle: 'Forsure Digitalindo — Your Brand Deserves to Be Seen',
    locale: 'id_ID',
  },

  // ─── Footer Links ─────────────────────────────────────────────────────────────
  footerLinks: {
    pages: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'About Us', href: '/about' },
    ],
    services: [
      { label: 'Website Solutions', href: '/services#website' },
      { label: 'Creative Content', href: '/services#creative' },
      { label: 'Photoshoot', href: '/services#photoshoot' },
    ],
  },

  // ─── Pages Registry ──────────────────────────────────────────────────────────
  pages: {
    home: {
      path: '/',
      title: 'Forsure Digitalindo — Your Brand Deserves to Be Seen',
      description:
        'Agency digital premium untuk website profesional, creative content, dan photoshoot berkualitas tinggi. Kami membantu brand Anda tampil percaya diri di dunia digital.',
      changeFreq: 'weekly',
      priority: 1.0,
    },
    services: {
      path: '/services',
      title: 'Layanan Kami',
      description:
        'Jelajahi layanan Forsure Digitalindo: pembuatan website, creative content, dan photoshoot profesional yang dirancang untuk menumbuhkan brand Anda.',
      changeFreq: 'monthly',
      priority: 0.9,
    },
    portfolio: {
      path: '/portfolio',
      title: 'Portfolio',
      description:
        'Lihat hasil kerja Forsure Digitalindo — koleksi proyek website, konten kreatif, dan fotografi yang telah kami kerjakan untuk klien.',
      changeFreq: 'weekly',
      priority: 0.8,
    },
    about: {
      path: '/about',
      title: 'Tentang Kami',
      description:
        'Kenali Forsure Digitalindo lebih dekat — visi, misi, dan tim di balik agency digital yang berkomitmen mengangkat brand Anda ke level berikutnya.',
      changeFreq: 'monthly',
      priority: 0.7,
    },
    contact: {
      path: '/contact',
      title: 'Hubungi Kami',
      description:
        'Konsultasi gratis dengan Forsure Digitalindo. Ceritakan kebutuhan brand Anda via WhatsApp, email, atau Instagram — kami siap membantu.',
      changeFreq: 'monthly',
      priority: 0.8,
    },
  },
};
