// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Let existing routes pass through
  if (pathname.startsWith('/assignment-1') || pathname.startsWith('/assignment-2')) {
    return NextResponse.next();
  }

  // Default redirect (for root only)
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/assignment-2', request.url));
  }

  return NextResponse.next();
}
