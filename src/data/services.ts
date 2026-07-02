export type ServiceCategory = 'website' | 'creative' | 'photoshoot';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  subtitle: string;
  features: string[];
  featured?: boolean;
}

export interface PricingTierItem {
  name: 'Bronze' | 'Silver' | 'Gold';
  tagline: string;
  features: string[];
  featured?: boolean;
}

export const SERVICES: ServiceItem[] = [
  // ─── Website Solutions ────────────────────────────────────────────────────────
  {
    id: 'website-company-profile',
    category: 'website',
    title: 'Website Company Profile',
    subtitle: '5-Page Professional Website',
    features: [
      'Domain & hosting included (1 year)',
      '5 complete pages: Home, About, Services, Contact, and more',
      'Mobile responsive design',
      'SEO Basic setup',
      'Clean, modern design tailored to your brand',
    ],
  },
  {
    id: 'landing-page',
    category: 'website',
    title: 'Landing Page',
    subtitle: 'High-Conversion Single Page',
    features: [
      'Single high-conversion page',
      'Optimized CTA placement and layout',
      'Perfect for promotions, events, or product launches',
      'Mobile responsive design',
      'Fast load time — performance optimized',
    ],
  },
  {
    id: 'ecommerce',
    category: 'website',
    title: 'Website E-Commerce',
    subtitle: 'Full Online Store Solution',
    features: [
      'Complete online store setup',
      'Shopping cart & checkout flow',
      'Admin dashboard for product management',
      'Mobile responsive & SEO-ready',
      'Secure payment gateway integration',
    ],
    featured: true,
  },
  {
    id: 'custom-qris',
    category: 'website',
    title: 'Custom Website + QRIS',
    subtitle: 'Custom Features & Payment Gateway',
    features: [
      'Custom web application features',
      'QRIS payment gateway integration',
      'Admin panel & user management',
      'Scalable architecture',
      'Full source code ownership',
    ],
  },

  // ─── Creative Content Services ────────────────────────────────────────────────
  {
    id: 'foto-produk',
    category: 'creative',
    title: 'Product Photography',
    subtitle: '10 Edited Product Photos',
    features: [
      '10 fully edited product photos',
      '1–2 hour photoshoot session',
      'Raw files included',
      'Up to 2 rounds of revisions',
      'Professional studio or location setup',
    ],
  },
  {
    id: 'instagram-ads',
    category: 'creative',
    title: 'Instagram Ads Management',
    subtitle: 'Full Ad Campaign Management',
    features: [
      'Creative design for ads',
      'Copywriting & caption creation',
      'Ad setup & targeting configuration',
      'Performance analytics & reporting',
      'Monthly performance review',
    ],
  },
  {
    id: 'video-reels-tiktok',
    category: 'creative',
    title: 'Reels / TikTok Video',
    subtitle: '1-Minute Short-Form Video',
    features: [
      '1-minute vertical video (9:16)',
      'Full concept development',
      'Professional editing',
      'Licensed background music',
      'Optimized for Reels & TikTok',
    ],
  },
  {
    id: 'youtube-video',
    category: 'creative',
    title: 'YouTube Video',
    subtitle: '1-Minute YouTube Content',
    features: [
      '1-minute landscape video (16:9)',
      'Full concept development',
      'Professional editing',
      'Licensed background music',
      'YouTube-optimized thumbnail',
    ],
  },
  {
    id: 'talent-single-visit',
    category: 'creative',
    title: 'Talent in a Single Visit',
    subtitle: 'Professional Talent, Photo & Video',
    features: [
      'Professional talent provided',
      'Single visit session',
      'Covers both photo & video deliverables',
      'Full editing included',
      'Flexible concept and location',
    ],
  },
  {
    id: 'sosmed-management',
    category: 'creative',
    title: 'Social Media Management',
    subtitle: '15 Posts / Month — Full Management',
    features: [
      '15 posts per month (9 videos + 6 designs)',
      'Content planner & scheduling',
      'Caption & hashtag writing',
      'Monthly performance analytics',
      '1-month full management package',
    ],
    featured: true,
  },

  // ─── Professional Photoshoot ──────────────────────────────────────────────────
  {
    id: 'single-photoshoot',
    category: 'photoshoot',
    title: 'Single Photoshoot',
    subtitle: 'Outdoor or Indoor Session',
    features: [
      'All photos fully edited',
      'Flexible session duration',
      'Outdoor or indoor location',
      'Raw files included',
      'Professional equipment',
    ],
  },
  {
    id: 'single-video',
    category: 'photoshoot',
    title: 'Single Video',
    subtitle: 'Outdoor or Indoor Session',
    features: [
      'All footage fully edited',
      'Outdoor or indoor location',
      'Flexible session duration',
      'Professional equipment & crew',
      'Final video in HD resolution',
    ],
  },
  {
    id: 'graduation-photoshoot',
    category: 'photoshoot',
    title: 'Graduation Photoshoot',
    subtitle: 'Individual, Couple, or Family',
    features: [
      'Individual, couple, or family sessions',
      'Indoor & outdoor location options',
      'All photos fully edited',
      'Multiple outfit changes welcome',
      'Digital delivery of all final photos',
    ],
  },
];

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
];
