// /src/middleware.ts   (or /middleware.ts if no /src)

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoute = createRouteMatcher([
  '/plans',
  '/plans/(.*)',
  '/profile(.*)',
]);

const adminRoutes = createRouteMatcher([
  '/admin',
]);

export default clerkMiddleware(async (auth, req) => {
   const { sessionClaims } = await auth() as { sessionClaims?: { User_role?: { role?: string } } }; // we have given the proper type for sessionClaims
 
   const role = sessionClaims?.User_role?.role || null;
   if (protectedRoute(req)) {
     await auth.protect();
   }
  

  if (adminRoutes(req)) {
    if (role != 'admin') {
      return new Response('Unauthorized', { status: 403 });
    }
  }
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)', '/', '/(api|trpc)(.*)'],
};
