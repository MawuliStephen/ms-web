// src/middleware.ts (or just /middleware.ts in the root)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const pathname = url.pathname

  // Define routes to block in production
  const blockedRoutes = ['/about', '/blog']

  const isProd = process.env.NODE_ENV === 'production'

  if (isProd && blockedRoutes.includes(pathname)) {
    // You can redirect, or return a 404
    return NextResponse.redirect(new URL('/', request.url)) // or show custom page
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/about', '/blog'], // Only run middleware for these routes
}
