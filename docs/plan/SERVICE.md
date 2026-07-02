# Service Page — Planning

> Route: `/services`
> Menampilkan seluruh katalog layanan Forsure Digitalindo dalam 3 kategori.
> Data bersumber dari `Forsure_Digitalindo_Our_Services.pdf`.

---

## Katalog Layanan (dari PDF)

### 01. Website Solutions
| ID | Layanan | Keterangan Singkat |
|---|---|---|
| `website-company-profile` | Website Company Profile | 5-page, domain+hosting 1 tahun, mobile responsive, SEO basic |
| `landing-page` | Landing Page | 1-page high-conversion, CTA focused, promo/event |
| `ecommerce` | Website E-Commerce | Toko online lengkap, cart, checkout, admin dashboard |
| `custom-qris` | Website Custom (QRIS Gateway) | Custom features + integrasi QRIS payment gateway |

### 02. Creative Content Services
| ID | Layanan | Keterangan Singkat |
|---|---|---|
| `foto-produk` | Foto Produk | 10 edited photos, 1-2 jam sesi, raw files + 2 revisi |
| `instagram-ads` | Instagram Ads | Full ad management: desain, caption, setup, analytics |
| `video-reels-tiktok` | Video Reels / TikTok | 1 menit, 9:16, konsep + editing + music |
| `youtube-video` | YouTube Video | 1 menit, 16:9, konsep + editing + music |
| `talent-single-visit` | Talent in a Single Visit | Talent profesional, 1 kunjungan, foto+video |
| `sosmed-management` | Social Media Management & Ads Admin | 15 posts/bulan (9 video + 6 desain), planner, 1 bulan |

### 03. Professional Photoshoot Services
| ID | Layanan | Keterangan Singkat |
|---|---|---|
| `single-photoshoot` | Single Photoshoot (Outdoor/Indoor) | Semua foto diedit, fleksibel durasi |
| `single-video` | Single Video (Outdoor/Indoor) | Semua footage diedit, outdoor/indoor |
| `graduation-photoshoot` | Graduation Photoshoot | Individual/couple/family, indoor/outdoor |
| `prewed-bronze` | PreWed & PreSweet — Bronze | Max 4 jam, 20 foto, 1 video 3-5 mnt |
| `prewed-silver` | PreWed & PreSweet — Silver | Max 8 jam, 30 foto, 1 video, + IG Stories |
| `prewed-gold` | PreWed & PreSweet — Gold | Full day, 50 foto, 2 video, + IG Stories |

---

## Page Structure

```
<ServicePage>
  <ServiceHero />              ← full-width hero
  <CategoryFilter />           ← sticky tab filter (3 kategori)
  <ServiceSection id="website">
    <SectionHeader />
    <ServiceGrid>
      <ServiceCard /> × 4
    </ServiceGrid>
  </ServiceSection>
  <ServiceSection id="creative">
    <SectionHeader />
    <ServiceGrid>
      <ServiceCard /> × 6
    </ServiceGrid>
  </ServiceSection>
  <ServiceSection id="photoshoot">
    <SectionHeader />
    <ServiceGrid>
      <ServiceCard /> × 3         ← single, video, graduation
      <PricingTierGroup />        ← Bronze / Silver / Gold PreWed
    </ServiceGrid>
  </ServiceSection>
  <ServiceCTA />                 ← bottom CTA section
</ServicePage>
```

---

## Sections Detail

### ServiceHero

**Visual:**
```
┌──────────────────────────────────────────────────────┐
│  [background: subtle gradient / pattern / dark]       │
│                                                       │
│          Our Services                                 │
│   Everything your brand needs to grow digitally.      │
│                                                       │
│         [ Lihat Semua Layanan ↓ ]                    │
└──────────────────────────────────────────────────────┘
```

**UX:**
- Tombol CTA scroll ke section pertama (smooth scroll anchor)
- Background menggunakan design token, bukan raw color
- Heading animate masuk (Framer Motion atau CSS transition) — optional

---

### CategoryFilter

**Visual:**
```
  [ Website Solutions ]  [ Creative Content ]  [ Photoshoot ]
```

**UX:**
- Sticky di bawah Navbar saat scroll melewati hero
- Active tab mengikuti section yang sedang di viewport (Intersection Observer)
- Click tab → smooth scroll ke section yang relevan
- Mobile: horizontal scroll jika overflow

**Komponen:**
```ts
// CategoryFilter.tsx — 'use client' (interaksi scroll)
type CategoryFilterProps = {
  categories: Array<{
    id: string
    label: string
    anchor: string
  }>
}
```

---

### ServiceCard

Komponen utama untuk menampilkan satu layanan.

**Visual (Desktop):**
```
┌────────────────────────────────┐
│  [ Icon kategori ]             │
│                                │
│  Website Company Profile       │  ← title
│  5-Page Professional Website   │  ← subtitle
│                                │
│  ✓ Domain & hosting (1 tahun)  │
│  ✓ 5 halaman lengkap           │
│  ✓ Mobile responsive           │
│  ✓ SEO Basic                   │
│  ✓ Desain modern               │
│                                │
│  [ Tanya Harga → ]             │
└────────────────────────────────┘
```

**Variants (via CVA):**
- `default` — card biasa
- `featured` — border/glow highlight untuk layanan unggulan

**Props:**
```ts
type ServiceCardProps = {
  icon?: LucideIcon
  category: 'website' | 'creative' | 'photoshoot'
  title: string
  subtitle: string
  features: string[]
  variant?: 'default' | 'featured'
  ctaLabel?: string
  ctaHref?: string
}
```

**File Structure:**
```
src/components/ui/ServiceCard/
  index.tsx
  ServiceCard.tsx
  ServiceCard.stories.tsx
  ServiceCard.test.tsx
```

---

### PricingTierGroup (PreWed Bronze/Silver/Gold)

Khusus untuk layanan PreWed & PreSweet yang memiliki 3 tier harga.

**Visual (Desktop — 3 kolom):**
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   BRONZE     │  │   SILVER     │  │    GOLD      │
│              │  │  [featured]  │  │              │
│  Max 4 jam   │  │  Max 8 jam   │  │  Full day    │
│  20 foto     │  │  30 foto     │  │  50 foto     │
│  1 video     │  │  1 video     │  │  2 video     │
│  ...         │  │  ...         │  │  ...         │
│              │  │              │  │              │
│ [Tanya →]   │  │ [Tanya →]   │  │ [Tanya →]   │
└──────────────┘  └──────────────┘  └──────────────┘
```

**Props:**
```ts
type PricingTierProps = {
  name: 'Bronze' | 'Silver' | 'Gold'
  tagline: string
  features: string[]
  featured?: boolean  // Silver default featured
}
```

**File Structure:**
```
src/components/ui/PricingTier/
  index.tsx
  PricingTier.tsx
  PricingTierGroup.tsx
  PricingTier.stories.tsx
  PricingTier.test.tsx
```

---

### ServiceCTA

Section penutup di bawah semua layanan.

**Visual:**
```
┌──────────────────────────────────────────────────────┐
│                                                       │
│       Siap Membangun Brand Digital Anda?              │
│   Hubungi kami dan mulai perjalanan bersama Forsure.  │
│                                                       │
│   [ WhatsApp Sekarang ]    [ Lihat Portfolio ]        │
│                                                       │
│   📞 +62 897-0297-969   📧 forsure.digitalindo@...    │
└──────────────────────────────────────────────────────┘
```

---

## Data Architecture

### `src/data/services.ts`

```ts
export type ServiceCategory = 'website' | 'creative' | 'photoshoot'

export type ServiceItem = {
  id: string
  category: ServiceCategory
  title: string
  subtitle: string
  description: string
  features: string[]
  featured?: boolean
}

export type PricingTierItem = {
  name: 'Bronze' | 'Silver' | 'Gold'
  tagline: string
  features: string[]
  featured?: boolean
}

export type PreWedService = {
  id: string
  category: 'photoshoot'
  title: string
  tiers: PricingTierItem[]
}

export const SERVICES: ServiceItem[] = [
  // Website Solutions
  {
    id: 'website-company-profile',
    category: 'website',
    title: 'Website Company Profile',
    subtitle: '5-Page Professional Website',
    description: '...',
    features: [
      'Domain & hosting included (1 year)',
      '5 complete pages: Home, About, Services, Contact, and more',
      'Mobile responsive design',
      'SEO Basic setup',
      'Clean, modern design tailored to your brand identity',
    ],
  },
  // ... dst
]

export const PREWED_TIERS: PricingTierItem[] = [
  {
    name: 'Bronze',
    tagline: 'Ideal for shorter sessions',
    features: [
      'Max 4 hours photoshoot session',
      '20 photos — all fully edited',
      '1 video edited (3–5 minutes)',
      'All original (raw) photos provided',
      'Free consultation on concept and location',
    ],
  },
  {
    name: 'Silver',
    tagline: 'Ideal for longer, more detailed sessions',
    featured: true,
    features: [
      'Max 8 hours photoshoot session',
      '30 photos — all fully edited',
      '1 video edited (3–5 minutes)',
      'All original (raw) photos provided',
      'Free 1 video for Instagram Stories',
      'Free consultation on concept and location',
    ],
  },
  {
    name: 'Gold',
    tagline: 'Full-day premium experience',
    features: [
      'Full day photoshoot session',
      '50 photos — all fully edited',
      '2 videos edited (3–5 minutes each)',
      'All original (raw) photos provided',
      'Free 1 video for Instagram Stories',
      'Free consultation on concept and location',
    ],
  },
]
```

---

## UX Flow

```
User buka /services
  → ServiceHero tampil
  → Scroll ke bawah → CategoryFilter menjadi sticky
  → Intersection Observer aktif → tab filter update otomatis
  → User klik tab "Creative Content" → smooth scroll ke #creative
  → User hover ServiceCard → subtle lift/shadow
  → User klik "Tanya Harga" → link ke WhatsApp (wa.me/...) dengan pre-filled message
  → Scroll ke bawah → ServiceCTA
  → Klik "Lihat Portfolio" → navigate ke /portfolio
```

---

## SEO

- `generateMetadata()` wajib panggil `buildMetadata()`
- `<StructuredData>` dengan type `ItemList` berisi semua services
- Page title: `"Services — Forsure Digitalindo"`
- Description: tagline + 3 kategori utama

---

## File Locations (Next.js App Router)

```
src/app/[locale]/services/
  page.tsx                           ← Server Component, generateMetadata

src/components/
  layout/
    Navbar/                          ← shared
    Footer/                          ← shared
  sections/services/
    ServiceHero/
    CategoryFilter/
    ServiceSection/
    ServiceCTA/
  ui/
    ServiceCard/
    PricingTier/
    FeatureList/                     ← reusable checklist item
    SectionHeader/                   ← reusable section title

src/data/
  services.ts
```
