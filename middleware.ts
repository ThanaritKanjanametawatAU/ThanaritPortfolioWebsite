import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the request is for the old site
  if (request.nextUrl.pathname.startsWith('/old')) {
    // Remove /old from the path and serve the old site files
    const oldPath = request.nextUrl.pathname.replace('/old', '')
    const rewriteUrl = new URL(oldPath || '/index.html', request.url)
    rewriteUrl.pathname = `/old${rewriteUrl.pathname}`
    return NextResponse.rewrite(rewriteUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/old/:path*',
}