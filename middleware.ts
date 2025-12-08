import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow only the root landing page
  if (pathname === '/') {
    return NextResponse.next();
  }

  // Allow dashboard routes
  if (pathname.startsWith('/dashboard')) {
    return NextResponse.next();
  }

  // Block all other routes - redirect to 404
  // Allow /not-found to be accessible
  if (pathname === '/not-found') {
    return NextResponse.next();
  }
  
  const url = request.nextUrl.clone();
  url.pathname = '/not-found';
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon.svg (favicon files)
     * - robots.txt, sitemap.xml (SEO files)
     * - manifest.json (PWA manifest)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|icon.svg|robots.txt|sitemap.xml|manifest.json).*)',
  ],
};

