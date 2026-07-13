import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { withSentryConfig } from '@sentry/nextjs';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    // Serve images from their original path (no /_next/image proxy) so
    // Google can crawl thumbnails/OG images directly.
    unoptimized: true,
  },
};

const baseConfig = withNextIntl(nextConfig);

export default withSentryConfig(baseConfig, {
  org: process.env['SENTRY_ORG'],
  project: process.env['SENTRY_PROJECT'],
  // Suppress non-error output unless in CI
  silent: !process.env['CI'],
  widenClientFileUpload: true,
  webpack: {
    reactComponentAnnotation: { enabled: true },
    treeshake: { removeDebugLogging: true },
  },
  // Proxy Sentry requests through Next.js to avoid ad-blockers
  tunnelRoute: '/monitoring',
  sourcemaps: { disable: process.env['NODE_ENV'] !== 'production' },
});
