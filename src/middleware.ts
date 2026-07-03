import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { routing } from './i18n/routing';
import { applyRateLimit } from './proxy/rate-limit';
import { applySecurityHeaders } from './proxy/security-headers';

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  // Rate limit — returns 429 early for /api/* if threshold exceeded
  const rateLimited = await applyRateLimit(request);
  if (rateLimited) return rateLimited;

  // Non-page routes — skip intl routing, only security headers
  if (
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname === '/og'
  ) {
    return applySecurityHeaders(NextResponse.next());
  }

  // Page routes — intl locale routing + security headers
  return applySecurityHeaders(intlMiddleware(request));
}

export const config = {
  matcher: [
    // Exclude static assets and well-known root files that must never be locale-prefixed
    '/((?!_next/static|_next/image|favicon.ico|sitemap\\.xml|robots\\.txt|llms\\.txt|llms-full\\.txt|manifest\\.json|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
};
