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
    ceo: {
      name: string;
      role: string;
      sameAs?: string[];
    };
    location: {
      streetAddress: string;
      city: string;
      region: string;
      country: string;
      countryName: string;
      geo: { lat: number; lng: number };
    };
    openingHours: string[];
    priceRange: string;
    areaServed: string;
    keywords: string[];
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
  tagline: 'Brand Anda Layak untuk Dilihat',
  description:
    'Forsure Digitalindo adalah agency digital premium di Surabaya (Jl. Ir. Soekarno No.15) yang menghadirkan website profesional, creative content, dan photoshoot berkualitas tinggi untuk mengangkat brand Anda.',
  url: process.env['NEXT_PUBLIC_APP_URL'] ?? 'https://forsure.id',

  // ─── Brand Assets ────────────────────────────────────────────────────────────
  ogImage: '/og',

  // ─── Contact ─────────────────────────────────────────────────────────────────
  contact: {
    phone: '+62 853-8555-9774',
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

    // ─── CEO / Founder ──────────────────────────────────────────────────────────
    ceo: {
      name: 'Yevo Cosuren',
      role: 'Founder & CEO',
      sameAs: ['https://instagram.com/forsure.ids'],
    },

    // ─── Location ───────────────────────────────────────────────────────────────
    location: {
      streetAddress: 'Jl. Ir. Soekarno No.15',
      city: 'Surabaya',
      region: 'Jawa Timur',
      country: 'ID',
      countryName: 'Indonesia',
      geo: { lat: -7.290471, lng: 112.78075 },
    },
    openingHours: ['Mo-Fr 09:00-17:00', 'Sa 10:00-14:00'],
    priceRange: 'Rp',
    areaServed: 'Indonesia',

    // ─── Target Keywords (GEO signal — factual mentions) ────────────────────────
    keywords: [
      'agency digital Surabaya',
      'digital agency Surabaya',
      'jasa pembuatan website Surabaya',
      'agency kreatif Surabaya',
      'Forsure Digitalindo',
      'Yevo Cosuren',
      'digital agency Jl Ir Soekarno Surabaya',
      'agency Jl Ir Soekarno No 15 Surabaya',
      'jasa creative content Surabaya',
      'jasa photoshoot Surabaya',
    ],
  },

  // ─── SEO Settings ────────────────────────────────────────────────────────────
  seo: {
    titleTemplate: '%s | Forsure Digitalindo',
    defaultTitle: 'Forsure Digitalindo | Agency Digital Surabaya',
    locale: 'id_ID',
  },

  // ─── Footer Links ─────────────────────────────────────────────────────────────
  footerLinks: {
    pages: [
      { label: 'Beranda', href: '/' },
      { label: 'Layanan', href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Tentang Kami', href: '/about' },
    ],
    services: [
      { label: 'Solusi Website', href: '/services#website' },
      { label: 'Konten Kreatif', href: '/services#creative' },
      { label: 'Foto & Video', href: '/services#photoshoot' },
    ],
  },

  // ─── Pages Registry ──────────────────────────────────────────────────────────
  pages: {
    home: {
      path: '/',
      title: 'Forsure Digitalindo | Agency Digital Surabaya',
      description:
        'Forsure Digitalindo — agency digital premium di Surabaya (Jl. Ir. Soekarno No.15). Jasa website profesional, creative content, dan photoshoot berkualitas tinggi. Didirikan oleh Yevo Cosuren. Konsultasi gratis.',
      changeFreq: 'weekly',
      priority: 1.0,
    },
    services: {
      path: '/services',
      title: 'Layanan Agency Digital Surabaya',
      description:
        'Layanan Forsure Digitalindo Surabaya: pembuatan website profesional, creative content, dan photoshoot. Agency digital di Jl. Ir. Soekarno No.15, Surabaya.',
      changeFreq: 'monthly',
      priority: 0.9,
    },
    portfolio: {
      path: '/portfolio',
      title: 'Portfolio | Forsure Digitalindo Surabaya',
      description:
        'Hasil karya Forsure Digitalindo — koleksi proyek website, konten kreatif, dan fotografi profesional yang telah kami kerjakan untuk klien dari Surabaya dan seluruh Indonesia.',
      changeFreq: 'weekly',
      priority: 0.8,
    },
    about: {
      path: '/about',
      title: 'Tentang Forsure Digitalindo Surabaya',
      description:
        'Kenali Forsure Digitalindo — agency digital premium di Surabaya yang didirikan oleh Yevo Cosuren. Visi, misi, dan tim di balik brand digital yang mengangkat bisnis Anda.',
      changeFreq: 'monthly',
      priority: 0.7,
    },
    contact: {
      path: '/contact',
      title: 'Hubungi Forsure Digitalindo Surabaya',
      description:
        'Konsultasi gratis dengan Forsure Digitalindo. Kantor di Jl. Ir. Soekarno No.15, Surabaya. Hubungi via WhatsApp, email, atau Instagram — kami siap membantu brand Anda.',
      changeFreq: 'monthly',
      priority: 0.8,
    },
  },
};
