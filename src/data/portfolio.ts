export type PortfolioCategory = 'website' | 'creative' | 'photoshoot';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  image: string;
  client?: string;
  year?: number;
  href: string;
  featured?: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'w1',
    title: 'Company Profile Modern',
    category: 'website',
    categoryLabel: 'Website',
    image: '/images/portfolio/website/website-1.png',
    client: 'Bisnis Lokal Jakarta',
    year: 2024,
    href: '/portfolio#website',
    featured: true,
  },
  {
    id: 'w2',
    title: 'Landing Page Premium',
    category: 'website',
    categoryLabel: 'Website',
    image: '/images/portfolio/website/website-2.png',
    client: 'Startup Fashion',
    year: 2024,
    href: '/portfolio#website',
  },
  {
    id: 'c1',
    title: 'Campaign Visual Brand',
    category: 'creative',
    categoryLabel: 'Creative Content',
    image: '/images/portfolio/design-feeds/design-1.png',
    client: 'Brand F&B',
    year: 2024,
    href: '/portfolio#design-feeds',
    featured: true,
  },
  {
    id: 'p1',
    title: 'Food Photography',
    category: 'photoshoot',
    categoryLabel: 'Photoshoot',
    image: '/images/portfolio/food-photo/food-1.png',
    client: 'Brand F&B',
    year: 2024,
    href: '/portfolio#food-photo',
    featured: true,
  },
];

export const portfolioTeaser = portfolioItems.filter((p) => p.featured);

// ─── Full portfolio sections for /portfolio page ──────────────────────────────

export interface PortfolioSectionData {
  id: string;
  labelEn: string;
  labelId: string;
  descEn: string;
  descId: string;
  images: { src: string; alt: string }[];
  /** tailwind grid class for this section's image grid */
  gridCols: string;
  /** aspect ratio class for image containers */
  aspect: string;
}

export const portfolioSections: PortfolioSectionData[] = [
  {
    id: 'design-feeds',
    labelEn: 'Design Feeds',
    labelId: 'Design Feeds',
    descEn: 'Creative visual designs crafted for social media feeds — consistent, on-brand, and scroll-stopping.',
    descId: 'Desain visual kreatif untuk kebutuhan feed sosial media — konsisten, sesuai brand, dan eye-catching.',
    images: [
      { src: '/images/portfolio/design-feeds/design-1.png', alt: 'Design feed 1' },
      { src: '/images/portfolio/design-feeds/design-2.png', alt: 'Design feed 2' },
      { src: '/images/portfolio/design-feeds/design-3.png', alt: 'Design feed 3' },
      { src: '/images/portfolio/design-feeds/design-4.png', alt: 'Design feed 4' },
    ],
    gridCols: 'grid-cols-2 sm:grid-cols-4',
    aspect: 'aspect-square',
  },
  {
    id: 'food-photo',
    labelEn: 'Food Photography',
    labelId: 'Food Photography',
    descEn: 'Mouth-watering food and product photography that makes your menu or product impossible to resist.',
    descId: 'Fotografi makanan dan produk yang memukau — membuat menu atau produk Anda tidak bisa diabaikan.',
    images: [
      { src: '/images/portfolio/food-photo/food-1.png', alt: 'Food photo 1' },
      { src: '/images/portfolio/food-photo/food-2.png', alt: 'Food photo 2' },
      { src: '/images/portfolio/food-photo/food-3.png', alt: 'Food photo 3' },
      { src: '/images/portfolio/food-photo/food-4.png', alt: 'Food photo 4' },
      { src: '/images/portfolio/food-photo/food-5.png', alt: 'Food photo 5' },
    ],
    gridCols: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
    aspect: 'aspect-square',
  },
  {
    id: 'product-photo',
    labelEn: 'Product Photography',
    labelId: 'Photo Produk',
    descEn: 'Clean, editorial-quality product shots that elevate your brand and drive conversions.',
    descId: 'Foto produk berkualitas editorial yang menonjolkan brand dan mendorong penjualan.',
    images: [
      { src: '/images/portfolio/product-photo/product-1.png', alt: 'Product photo 1' },
      { src: '/images/portfolio/product-photo/product-2.png', alt: 'Product photo 2' },
      { src: '/images/portfolio/product-photo/product-3.png', alt: 'Product photo 3' },
      { src: '/images/portfolio/product-photo/product-4.png', alt: 'Product photo 4' },
      { src: '/images/portfolio/product-photo/product-5.png', alt: 'Product photo 5' },
      { src: '/images/portfolio/product-photo/product-jpg-1.jpg', alt: 'Product photo 6' },
      { src: '/images/portfolio/product-photo/product-jpg-2.jpg', alt: 'Product photo 7' },
      { src: '/images/portfolio/product-photo/product-jpg-3.jpg', alt: 'Product photo 8' },
    ],
    gridCols: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
    aspect: 'aspect-square',
  },
  {
    id: 'press-release',
    labelEn: 'Press Release',
    labelId: 'Press Release',
    descEn: 'Professional press release visuals and copywriting that get your brand noticed by media.',
    descId: 'Visual dan penulisan press release profesional yang membuat brand Anda dilirik media.',
    images: [
      { src: '/images/portfolio/press-release/press-1.png', alt: 'Press release 1' },
      { src: '/images/portfolio/press-release/press-2.png', alt: 'Press release 2' },
      { src: '/images/portfolio/press-release/press-3.png', alt: 'Press release 3' },
    ],
    gridCols: 'grid-cols-1 sm:grid-cols-3',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'social-media',
    labelEn: 'Social Media Management',
    labelId: 'Manajemen Sosial Media',
    descEn: 'End-to-end social media management — content strategy, design, scheduling, and growth.',
    descId: 'Manajemen sosial media menyeluruh — strategi konten, desain, penjadwalan, dan pertumbuhan.',
    images: [
      { src: '/images/portfolio/social-media/social-1.png', alt: 'Social media management 1' },
      { src: '/images/portfolio/social-media/social-2.png', alt: 'Social media management 2' },
    ],
    gridCols: 'grid-cols-1 sm:grid-cols-2',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'website',
    labelEn: 'Website',
    labelId: 'Website',
    descEn: 'Modern, performant websites built to rank, convert, and represent your brand at its best.',
    descId: 'Website modern dan cepat yang dirancang untuk tampil di pencarian, mengkonversi, dan merepresentasikan brand Anda.',
    images: [
      { src: '/images/portfolio/website/website-1.png', alt: 'Website project 1' },
      { src: '/images/portfolio/website/website-2.png', alt: 'Website project 2' },
    ],
    gridCols: 'grid-cols-1 lg:grid-cols-2',
    aspect: 'aspect-video',
  },
  {
    id: 'wedding',
    labelEn: 'Wedding Photography',
    labelId: 'Foto Wedding',
    descEn: 'Timeless wedding photography that captures every emotion, detail, and moment of your special day.',
    descId: 'Fotografi pernikahan yang abadi — mengabadikan setiap emosi, detail, dan momen hari spesial Anda.',
    images: [
      { src: '/images/portfolio/wedding/wedding-1.jpg', alt: 'Wedding photography 1' },
      { src: '/images/portfolio/wedding/wedding-2.jpg', alt: 'Wedding photography 2' },
      { src: '/images/portfolio/wedding/wedding-3.jpg', alt: 'Wedding photography 3' },
    ],
    gridCols: 'grid-cols-1 sm:grid-cols-3',
    aspect: 'aspect-[3/4]',
  },
];
