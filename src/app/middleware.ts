import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Match protected routes except for sign-in
const isProtectedRoute = createRouteMatcher([
  "/profile(.*)",
  // Add any other protected routes here
]);

// Allow access to the sign-in page
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) return; // Allow access to public routes

  if (isProtectedRoute(req)) await auth.protect(); // Protect routes
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
