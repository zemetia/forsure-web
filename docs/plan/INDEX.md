# Forsure Digitalindo — Page Planning Index

> Planning dokumen untuk semua halaman website Forsure Digitalindo.
> Landing Page direncanakan belakangan, prioritas saat ini: **Service** dan **About Us**.

---

## Pages

| File | Halaman | Status |
|---|---|---|
| [NAVBAR_FOOTER.md](./NAVBAR_FOOTER.md) | Navbar & Footer (shared layout) | planned |
| [SERVICE.md](./SERVICE.md) | Halaman Services | planned |
| [ABOUT_US.md](./ABOUT_US.md) | Halaman About Us | planned |
| [LANDING.md](./LANDING.md) | Halaman Landing Page | planned |
| `PORTFOLIO.md` | Halaman Portfolio | _belakangan_ |

---

## Brand Identity (dari PDF)

**Tagline:** *Your Brand Deserves to Be Seen*

**3 Core Pillars:**
- Creative — Crafting visually compelling designs and content
- Strategy — Building meaningful digital presence with purpose
- Digital Impact — Delivering results that grow your brand

**Contact:**
- Phone: +62 897-0297-969
- Instagram: @forsure.ids
- Email: forsure.digitalindo@gmail.com
- Website: www.cosurengroup.com

---

## Shared Data Architecture

```
src/
  data/
    team.json          ← dynamic team data (JSON)
    services.ts        ← typed service catalog (dari PDF)
  config/
    site.ts            ← brand info, contact, social links (SEO source of truth)
```

---

## Route Structure (Next.js App Router + next-intl)

```
src/app/[locale]/
  page.tsx             ← Landing Page (belakangan)
  services/
    page.tsx           ← Service Page
  about/
    page.tsx           ← About Us Page
  portfolio/
    page.tsx           ← Portfolio Page (belakangan)
```
