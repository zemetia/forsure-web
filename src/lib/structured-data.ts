/**
 * Structured data (JSON-LD) helpers for GEO — Generative Engine Optimization.
 * These schemas make content citable and indexable by AI search engines
 * (Perplexity, ChatGPT Browse, Google AI Overviews, Bing Copilot).
 *
 * Usage in a Server Component:
 * ```tsx
 * import { StructuredData, organizationSchema } from '@/lib/structured-data';
 * <StructuredData id="org" schema={organizationSchema()} />
 * ```
 */

import { siteConfig } from '@/config/site';

// ─── Type stubs (avoid @types/schema-dts as a dep) ───────────────────────────

interface WithContext<T> {
  '@context': 'https://schema.org';
  '@type': T extends { '@type': infer U } ? U : string;
  [key: string]: unknown;
}

// ─── Schema builders ─────────────────────────────────────────────────────────

/** Organization schema — attach once in the root layout or home page. */
export function organizationSchema(): WithContext<unknown> {
  const { company, name, url, ogImage, contact } = siteConfig;
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.legalName,
    alternateName: name,
    url,
    logo: {
      '@type': 'ImageObject',
      url: `${url}${ogImage}`,
    },
    foundingDate: String(company.foundedYear),
    email: company.contactEmail,
    telephone: contact.phone,
    description: siteConfig.description,
    areaServed: company.areaServed,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contact.phone,
      contactType: 'customer service',
      availableLanguage: 'Indonesian',
      contactOption: 'TollFree',
    },
    founder: {
      '@type': 'Person',
      name: company.ceo.name,
      jobTitle: company.ceo.role,
    },
    employee: {
      '@type': 'Person',
      name: company.ceo.name,
      jobTitle: company.ceo.role,
    },
    sameAs: Object.values(company.socialLinks).filter(Boolean),
  };
}

/**
 * LocalBusiness schema — use on home + contact pages.
 * Enables Google local knowledge panel, Maps integration, and AI overview citations.
 */
export function localBusinessSchema(): WithContext<unknown> {
  const { company, name, url, ogImage, contact } = siteConfig;
  const { location } = company;
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: company.legalName,
    alternateName: name,
    url,
    logo: `${url}${ogImage}`,
    image: `${url}${ogImage}`,
    description: siteConfig.description,
    telephone: contact.phone,
    email: company.contactEmail,
    foundingDate: String(company.foundedYear),
    founder: {
      '@type': 'Person',
      name: company.ceo.name,
      jobTitle: company.ceo.role,
      worksFor: { '@type': 'Organization', name: company.legalName },
      ...(company.ceo.sameAs ? { sameAs: company.ceo.sameAs } : {}),
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.streetAddress,
      addressLocality: location.city,
      addressRegion: location.region,
      addressCountry: location.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.geo.lat,
      longitude: location.geo.lng,
    },
    openingHours: company.openingHours,
    priceRange: company.priceRange,
    areaServed: company.areaServed,
    hasMap: `https://maps.google.com/?q=${location.geo.lat},${location.geo.lng}`,
    sameAs: Object.values(company.socialLinks).filter(Boolean),
  };
}

/** Person schema — for CEO/founder. Helps Google build a Knowledge Panel for the person. */
export function personSchema(): WithContext<unknown> {
  const { company, url } = siteConfig;
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: company.ceo.name,
    jobTitle: company.ceo.role,
    worksFor: {
      '@type': 'Organization',
      name: company.legalName,
      url,
    },
    url,
    ...(company.ceo.sameAs ? { sameAs: company.ceo.sameAs } : {}),
  };
}

export interface ServiceListItem {
  name: string;
  description: string;
  url: string;
}

/** ItemList schema for a services page — lets AI overviews enumerate your offerings. */
export function serviceListSchema(services: ServiceListItem[]): WithContext<unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Layanan ${siteConfig.name}`,
    description: siteConfig.pages['services']?.description ?? siteConfig.description,
    url: `${siteConfig.url}/services`,
    itemListElement: services.map((svc, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: svc.name,
        description: svc.description,
        url: svc.url,
        provider: {
          '@type': 'Organization',
          name: siteConfig.company.legalName,
          url: siteConfig.url,
        },
      },
    })),
  };
}

export interface WebPageSchemaOptions {
  name: string;
  description: string;
  url: string;
  /** ISO 8601, e.g. '2024-01-01' */
  datePublished?: string;
  dateModified?: string;
}

/** WebPage schema — attach to every public page. */
export function webPageSchema(opts: WebPageSchemaOptions): WithContext<unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    isPartOf: { '@type': 'WebSite', url: siteConfig.url, name: siteConfig.name },
    ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
    inLanguage: 'id',
  };
}

export interface FAQ {
  question: string;
  answer: string;
}

/**
 * FAQPage schema — drives rich result FAQ snippets in Google and answer boxes
 * in AI search engines. Add to any page with a FAQ section.
 */
export function faqSchema(faqs: FAQ[]): WithContext<unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/** BreadcrumbList schema — improves SERP display and helps AI understand site structure. */
export function breadcrumbSchema(items: BreadcrumbItem[]): WithContext<unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface ArticleSchemaOptions {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  image?: string;
}

/** Article schema — use on blog posts, changelog entries, and docs pages. */
export function articleSchema(opts: ArticleSchemaOptions): WithContext<unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: {
      '@type': 'Organization',
      name: siteConfig.company.legalName,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.company.legalName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}${siteConfig.ogImage}`,
      },
    },
    image: opts.image ?? `${siteConfig.url}${siteConfig.ogImage}`,
    isPartOf: { '@type': 'WebSite', url: siteConfig.url },
  };
}

// ─── Serialization helper ─────────────────────────────────────────────────────

/**
 * Serialize a schema to a safe JSON string for dangerouslySetInnerHTML.
 * JSON.stringify escapes all HTML special characters — no XSS risk.
 *
 * Usage in a Server Component (page.tsx):
 * ```tsx
 * import { serializeSchema, webPageSchema } from '@/lib/structured-data';
 *
 * export default function Page() {
 *   return (
 *     <>
 *       <script
 *         id="webpage-schema"
 *         type="application/ld+json"
 *         dangerouslySetInnerHTML={{ __html: serializeSchema(webPageSchema({ ... })) }}
 *       />
 *       {/* page content *\/}
 *     </>
 *   );
 * }
 * ```
 */
export function serializeSchema(schema: WithContext<unknown> | WithContext<unknown>[]): string {
  return JSON.stringify(schema);
}
