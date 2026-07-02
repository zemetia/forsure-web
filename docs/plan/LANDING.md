# Landing Page — Planning

> Route: `/` (homepage)
> Halaman pertama yang dilihat calon klien — harus langsung membangun kepercayaan,
> menyampaikan identitas brand, dan mendorong ke kontak atau eksplorasi layanan.

---

## Page Structure (Top → Bottom)

```
<LandingPage>
  <Hero />                  ← full-screen, first impression
  <SocialProof />           ← angka / stats kredibilitas
  <ServicesOverview />      ← 3 kategori layanan (teaser, bukan full catalog)
  <WhyUs />                 ← diferensiasi Forsure vs kompetitor
  <PortfolioTeaser />       ← 3-4 karya terbaik sebagai preview
  <ProcessSection />        ← how it works: 3-4 langkah kerja
  <Testimonials />          ← review / testimoni klien
  <AboutTeaser />           ← brief company identity + foto tim
  <LandingCTA />            ← final CTA sebelum footer
</LandingPage>
```

---

## 1. Hero

### Konsep

**Hero harus menjawab 3 pertanyaan dalam 3 detik:**
1. Ini siapa? → Forsure Digitalindo
2. Bisa bantu apa? → Website, konten kreatif, photoshoot profesional
3. Apa yang harus saya lakukan? → Hubungi kami / Lihat layanan

### Layout: Full-screen Split (Desktop)

```
┌─────────────────────────────────────────────────────────┐
│ NAVBAR                                                   │
├───────────────────────────┬─────────────────────────────┤
│                           │                             │
│  YOUR BRAND               │   [Visual utama:            │
│  DESERVES TO              │    mockup website /         │
│  BE SEEN.                 │    foto produk /            │
│                           │    reel animasi karya]      │
│  Kami bantu bisnis Anda   │                             │
│  tampil profesional di    │                             │
│  dunia digital — dari     │                             │
│  website, konten kreatif, │                             │
│  hingga photoshoot        │                             │
│  berkualitas.             │                             │
│                           │                             │
│  [ Mulai Sekarang ]       │                             │
│  [ Lihat Layanan ↓ ]      │                             │
│                           │                             │
│  ───────────────────      │                             │
│  Dipercaya 50+ klien      │                             │
│  bisnis di Indonesia      │                             │
│                           │                             │
└───────────────────────────┴─────────────────────────────┘
```

**Mobile:** Stack vertikal — visual di atas (kompak), teks + CTA di bawah.

```
┌────────────────────────┐
│  [Visual — 60% height] │
├────────────────────────┤
│  YOUR BRAND            │
│  DESERVES TO BE SEEN.  │
│                        │
│  Deskripsi singkat...  │
│                        │
│  [ Mulai Sekarang ]    │
│  [ Lihat Layanan ]     │
│                        │
│  Dipercaya 50+ klien   │
└────────────────────────┘
```

---

### Hero: Visual Utama (opsi pilihan klien)

Ada 3 opsi visual untuk sisi kanan hero. Klien pilih satu:

| Opsi | Deskripsi | Keunggulan |
|---|---|---|
| **A — Static Mockup** | Foto device (laptop + phone) menampilkan karya website Forsure | Ringan, load cepat, kesan profesional |
| **B — Animated Grid** | Grid foto karya (website, foto produk, video thumbnail) dengan hover effect | Menampilkan range layanan sekaligus |
| **C — Background Video** | Loop video pendek (5-10 detik) aktivitas kreatif / behind the scenes | Paling impactful, perlu optimasi ukuran |

> **Rekomendasi awal: Opsi A atau B** — lebih cepat, lebih aman di mobile, tidak bergantung pada video asset.

---

### Hero: Konten Detail

```ts
// Hero content structure
const heroContent = {
  // Headline — dipecah 2 baris untuk emphasis
  headlineLine1: 'Your Brand',
  headlineLine2: 'Deserves to Be Seen.',

  // Subheadline — satu-dua kalimat, deskriptif
  subheadline:
    'Kami bantu bisnis Anda tampil profesional di dunia digital — dari website, konten kreatif, hingga photoshoot berkualitas.',

  // Primary CTA → link ke WhatsApp
  primaryCTA: {
    label: 'Mulai Sekarang',
    href: 'https://wa.me/6289702979693',  // pre-filled message
  },

  // Secondary CTA → scroll ke ServicesOverview
  secondaryCTA: {
    label: 'Lihat Layanan',
    href: '#services',
  },

  // Social proof mini
  trustBadge: 'Dipercaya 50+ klien bisnis di Indonesia',
}
```

---

### Hero: Komponen

```
src/components/sections/landing/Hero/
  index.tsx
  Hero.tsx              ← Server Component
  HeroVisual.tsx        ← visual sisi kanan (bisa swap opsi A/B/C)
  Hero.stories.tsx
  Hero.test.tsx
```

**Props:**
```ts
type HeroProps = {
  headlineLine1: string
  headlineLine2: string
  subheadline: string
  primaryCTA: { label: string; href: string }
  secondaryCTA: { label: string; href: string }
  trustBadge?: string
  visualVariant?: 'mockup' | 'grid' | 'video'
}
```

---

### Hero: Typography & Design Tokens

| Elemen | Token | Keterangan |
|---|---|---|
| `headlineLine1` | `text-5xl` / `text-7xl` | Font weight bold, tracking tight |
| `headlineLine2` | `text-5xl` / `text-7xl` | Bisa berwarna brand (color token) |
| `subheadline` | `text-lg` / `text-xl` | Muted foreground token, line-height relaxed |
| Primary CTA | Button `variant="default"` | Warna brand, padding besar |
| Secondary CTA | Button `variant="ghost"` atau `variant="outline"` | Underline atau arrow icon |
| Trust badge | `text-sm` muted | Dengan ikon `CheckCircle` kecil dari lucide |

---

### Hero: Animation (optional, performance-safe)

Jika animasi diaktifkan (CSS-only, bukan Framer Motion untuk SSR safety):
- Headline: `fadeInUp` dengan stagger per baris
- Subheadline: `fadeIn` delay 200ms
- CTA buttons: `fadeIn` delay 400ms
- Visual: `fadeInRight` dari kanan, delay 100ms

Semua animasi harus `prefers-reduced-motion` safe:
```css
@media (prefers-reduced-motion: reduce) {
  /* semua animasi dimatikan */
}
```

---

## 2. SocialProof

Stats angka yang membangun kredibilitas instan.

**Visual:**
```
┌─────────────────────────────────────────────────────┐
│                                                      │
│     50+           30+           3             100%   │
│   Klien           Proyek     Kategori       Satisfied │
│  Dilayani        Selesai     Layanan         Clients  │
│                                                      │
└─────────────────────────────────────────────────────┘
```

**UX:** Angka counter animasi saat masuk viewport (Intersection Observer).

**Komponen:** `<StatCounter>` — reusable, props: `value`, `suffix`, `label`.

> **Note:** Angka placeholder — klien konfirmasi angka aktual sebelum implementasi.

---

## 3. ServicesOverview

Teaser 3 kategori layanan — bukan full catalog, cukup untuk memancing klik ke `/services`.

**Visual (3 card horizontal):**
```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│   [ 🌐 icon ]   │  │   [ 🎨 icon ]   │  │   [ 📷 icon ]   │
│                 │  │                 │  │                 │
│ Website         │  │ Creative        │  │ Professional    │
│ Solutions       │  │ Content         │  │ Photoshoot      │
│                 │  │                 │  │                 │
│ Company profile,│  │ Foto produk,    │  │ Single shoot,   │
│ landing page,   │  │ video reels,    │  │ graduation,     │
│ e-commerce,     │  │ ads, sosmed     │  │ prewedding...   │
│ custom...       │  │ management...   │  │                 │
│                 │  │                 │  │                 │
│ [ Lihat → ]     │  │ [ Lihat → ]     │  │ [ Lihat → ]     │
└─────────────────┘  └─────────────────┘  └─────────────────┘

              [ Lihat Semua Layanan → ]
```

**Komponen:** `<ServiceOverviewCard>` (versi ringkas dari `<ServiceCard>`).

**UX:**
- Klik card atau "Lihat →" → navigate ke `/services#[category]`
- Hover: card lift dengan shadow token
- "Lihat Semua Layanan" → `/services`

---

## 4. WhyUs

Diferensiasi Forsure — kenapa pilih kami.

**Visual (2×2 atau 2×3 grid):**
```
┌─────────────────────┐  ┌─────────────────────┐
│  [ icon ]           │  │  [ icon ]           │
│  Desain Profesional │  │  Harga Transparan   │
│  Setiap karya kami  │  │  Tidak ada biaya    │
│  dirancang khusus   │  │  tersembunyi...     │
│  untuk brand Anda.  │  │                     │
└─────────────────────┘  └─────────────────────┘
┌─────────────────────┐  ┌─────────────────────┐
│  [ icon ]           │  │  [ icon ]           │
│  Proses Cepat &     │  │  Support After      │
│  Terstruktur        │  │  Project            │
│  Timeline jelas,    │  │  Kami tetap ada     │
│  revisi terjadwal.  │  │  setelah selesai.   │
└─────────────────────┘  └─────────────────────┘
```

**Komponen:** `<WhyUsCard>` — icon, title, description. Reusable.

> **Note:** Poin-poin "Why Us" perlu dikonfirmasi klien. Placeholder di atas adalah contoh umum.

---

## 5. PortfolioTeaser

Preview 3-4 karya terbaik dengan link ke `/portfolio`.

**Visual:**
```
                  Karya Terbaik Kami

┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│              │  │              │  │              │
│  [foto/      │  │  [foto/      │  │  [foto/      │
│   mockup     │  │   mockup     │  │   mockup     │
│   karya 1]   │  │   karya 2]   │  │   karya 3]   │
│              │  │              │  │              │
│  Nama Proyek │  │  Nama Proyek │  │  Nama Proyek │
│  Website     │  │  Branding    │  │  Photoshoot  │
└──────────────┘  └──────────────┘  └──────────────┘

              [ Lihat Semua Portfolio → ]
```

**UX:**
- Hover: overlay dengan nama proyek + kategori
- Data dari `src/data/portfolio.ts` (subset dari portfolio lengkap)
- 3 karya dengan kategori berbeda (website, creative, photoshoot) untuk showcase range

**Komponen:** `<PortfolioTeaserCard>` — foto, overlay, kategori label.

---

## 6. ProcessSection

How it works — 3 atau 4 langkah kerja Forsure.

**Visual (horizontal steps, desktop):**
```
  [1]           [2]           [3]           [4]
   │             │             │             │
Konsultasi   Perencanaan    Eksekusi      Selesai &
  Awal         & Brief       Proyek        Revisi
   │             │             │             │
Ceritakan    Kami rancang   Tim kreatif   Hasil dikirim,
kebutuhan    strategi &     mulai kerja   revisi sampai
brand Anda.  timeline.      sesuai brief.  puas.
```

**Mobile:** Vertical stepper.

**Komponen:** `<ProcessStep>` — number, title, description. `<ProcessSection>` sebagai container.

---

## 7. Testimonials

Review / testimoni dari klien nyata.

**Visual (carousel atau grid 2-3 kolom):**
```
┌──────────────────────────────────────────┐
│  ★★★★★                                   │
│                                          │
│  "Websitenya bagus banget, prosesnya     │
│   cepat dan timnya responsif. Sangat     │
│   rekomendasikan Forsure!"               │
│                                          │
│  [foto]  Nama Klien                      │
│          Owner, Nama Bisnis              │
└──────────────────────────────────────────┘
```

**UX:**
- Desktop: grid 2-3 kolom
- Mobile: carousel (swipe) dengan dot indicator
- Data dari `src/data/testimonials.json` — dinamis seperti team.json

**Data: `src/data/testimonials.json`**
```json
[
  {
    "id": "1",
    "name": "Nama Klien",
    "businessName": "Nama Bisnis",
    "photo": "/images/testimonials/client-1.jpg",
    "rating": 5,
    "text": "Teks testimoni...",
    "service": "Website Company Profile"
  }
]
```

**Komponen:** `<TestimonialCard>`, `<TestimonialsSection>`.

> **Note:** Butuh minimal 3 testimoni nyata dari klien. Siapkan format koleksi testimoni.

---

## 8. AboutTeaser

Brief tentang Forsure — cukup untuk memancing ke `/about`.

**Visual:**
```
┌─────────────────────────┬──────────────────────────┐
│                         │                          │
│  Tentang Forsure        │  [foto tim / office /    │
│  Digitalindo            │   behind the scenes]     │
│                         │                          │
│  Kami adalah tim        │                          │
│  kreatif yang fokus     │                          │
│  pada 3 hal: desain     │                          │
│  yang kuat, strategi    │                          │
│  yang bermakna, dan     │                          │
│  dampak digital nyata.  │                          │
│                         │                          │
│  [ Kenalan Lebih → ]    │                          │
│                         │                          │
└─────────────────────────┴──────────────────────────┘
```

**Komponen:** `<AboutTeaser>` — Server Component, reuse design token.

---

## 9. LandingCTA

Final call-to-action sebelum footer.

**Visual:**
```
┌──────────────────────────────────────────────────────┐
│                                                       │
│       Siap Bawa Brand Anda ke Level Berikutnya?       │
│     Konsultasi gratis, tanpa komitmen apapun.         │
│                                                       │
│          [ WhatsApp Sekarang → ]                      │
│                                                       │
│   📞 +62 897-0297-969   ✉️ forsure.digitalindo@...    │
│                                                       │
└──────────────────────────────────────────────────────┘
```

**Background:** Solid brand color atau gradient gelap — kontras dari section sebelumnya.

---

## UX Flow Lengkap

```
User pertama kali buka /
  → Hero tampil full-screen
  → Baca headline (3 detik) → paham ini agency digital
  → Klik "Lihat Layanan" → smooth scroll ke ServicesOverview
  → Lihat 3 kategori → klik salah satu → ke /services#[category]

  ATAU

  → Dari hero langsung klik "Mulai Sekarang" → WhatsApp

  ATAU (user skeptis, mau tahu lebih dulu)
  → Scroll pelan-pelan: SocialProof → ServicesOverview → WhyUs
  → PortfolioTeaser → "wah bagus" → klik → /portfolio
  → ProcessSection → "prosesnya jelas" → kepercayaan naik
  → Testimonials → "klien lain puas" → makin yakin
  → AboutTeaser → "oh ini orangnya" → link ke /about
  → LandingCTA → KONTAK
```

---

## Komponen Summary

| Komponen | Tipe | Reusable di page lain? |
|---|---|---|
| `<Hero>` | section | Tidak (khusus landing) |
| `<HeroVisual>` | ui | Tidak |
| `<StatCounter>` | ui | Ya (About Us) |
| `<ServiceOverviewCard>` | ui | Tidak (versi ringkas ServiceCard) |
| `<WhyUsCard>` | ui | Tidak |
| `<PortfolioTeaserCard>` | ui | Ya (Portfolio page) |
| `<ProcessStep>` | ui | Tidak |
| `<TestimonialCard>` | ui | Tidak |
| `<AboutTeaser>` | section | Tidak |
| `<LandingCTA>` | section | Tidak (masing2 page punya CTA sendiri) |

---

## Data yang Perlu Disiapkan Klien

| Item | Dipakai di | Keterangan |
|---|---|---|
| **Foto/mockup karya** | Hero visual, PortfolioTeaser | Min 3-4 karya terbaik, high-res |
| **Angka stats** | SocialProof | Jumlah klien, proyek, dll |
| **Poin "Why Us"** | WhyUs | 4-6 poin diferensiasi |
| **Foto tim / office** | AboutTeaser | 1 foto representatif |
| **Testimoni klien** | Testimonials | Min 3, dengan nama + bisnis + rating |
| **Teks Process** | ProcessSection | Bisa default, klien konfirmasi |

---

## SEO

- `generateMetadata()` wajib panggil `buildMetadata()`
- `<StructuredData>` dengan type `LocalBusiness` atau `Organization`
- Page title: `"Forsure Digitalindo — Your Brand Deserves to Be Seen"`
- Description: tagline + deskripsi layanan + lokasi

---

## File Locations

```
src/app/[locale]/
  page.tsx                              ← Landing page, Server Component

src/components/sections/landing/
  Hero/
    index.tsx
    Hero.tsx
    HeroVisual.tsx
    Hero.stories.tsx
    Hero.test.tsx
  SocialProof/
  ServicesOverview/
  WhyUs/
  PortfolioTeaser/
  ProcessSection/
  Testimonials/
  AboutTeaser/
  LandingCTA/

src/components/ui/
  StatCounter/
  ServiceOverviewCard/
  WhyUsCard/
  PortfolioTeaserCard/
  ProcessStep/
  TestimonialCard/

src/data/
  testimonials.json
  portfolio.ts          ← subset untuk teaser
```
