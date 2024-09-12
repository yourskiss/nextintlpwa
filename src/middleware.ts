 

import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
export default createMiddleware(routing);
 export const config = {
   matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|manifest.json).*)', '/(en|hi)/:path*'],
 };

/*
import createMiddleware from 'next-intl/middleware';
import {NextRequest} from 'next/server';
 
export default async function middleware(request: NextRequest) {
  // Step 1: Use the incoming request (example)
  const defaultLocale = request.headers.get('x-your-custom-locale') || 'en';
 
  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createMiddleware({
    locales: ['en', 'hi'],
    defaultLocale
  });
  const response = handleI18nRouting(request);
 
  // Step 3: Alter the response (example)
  response.headers.set('x-your-custom-locale', defaultLocale);
 
  return response;
}
 
export const config = {
//  matcher: ['/((?!_next).*)', '/(en|hi)/:path*']
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
*/