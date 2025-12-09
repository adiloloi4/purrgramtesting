import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow static assets (images, etc.)
  if (pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|ico|woff|woff2|ttf|eot)$/i)) {
    return NextResponse.next();
  }

  // Allow only the root landing page
  if (pathname === '/') {
    return NextResponse.next();
  }

  // Allow dashboard routes
  if (pathname.startsWith('/dashboard')) {
    return NextResponse.next();
  }

  // Allow auth routes
  if (pathname.startsWith('/login') || pathname.startsWith('/signup')) {
    return NextResponse.next();
  }

  // Allow onboarding route
  if (pathname.startsWith('/onboarding')) {
    return NextResponse.next();
  }

  // Allow terms and privacy routes
  if (pathname === '/terms' || pathname === '/privacy') {
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
     * - logo.png and other public assets
     */
    '/((?!api|_next/static|_next/image|favicon.ico|icon.svg|robots.txt|sitemap.xml|manifest.json|logo.png|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.gif|.*\\.webp).*)',
  ],
};

