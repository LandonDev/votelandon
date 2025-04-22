import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  if (url.pathname === '/v') {
    return NextResponse.redirect('https://mtsu.campuslabs.com/engage/submitter/election/start/682047', { status: 301 });
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/v'],
}; 