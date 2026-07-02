import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const LIMIT = 60;
const WINDOW_MS = 60_000;

interface WindowEntry {
  count: number;
  resetAt: number;
}

// In-memory store — edge-compatible (no ioredis/Node.js APIs)
const store = new Map<string, WindowEntry>();

function getKey(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'anonymous'
  );
}

export async function applyRateLimit(request: NextRequest): Promise<NextResponse | null> {
  if (!request.nextUrl.pathname.startsWith('/api')) return null;

  const key = getKey(request);
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || now >= entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return null;
  }

  entry.count += 1;

  if (entry.count > LIMIT) {
    const resetSec = Math.ceil(entry.resetAt / 1000);
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': String(Math.max(0, resetSec - Math.floor(now / 1000))),
        'X-RateLimit-Limit': String(LIMIT),
        'X-RateLimit-Remaining': '0',
        'X-RateLimit-Reset': String(resetSec),
      },
    });
  }

  return null;
}
