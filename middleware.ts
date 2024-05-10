import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  // Routes that can be accessed while signed out
  // publicRoutes: ["/aunyone-can-visit-this-rote"],
  publicRoutes: ["/"],
  ignoredRoutes: ["/api/success", "/api/fail", "/api/cancel"],
});

export const config = {
  // Protects all routes, including api/trpc.
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const protectedRoute = createRouteMatcher([
//   "/",
//   "/search(.*)",
//   "/teacher(.*)",
//   "/courses(.*)",
//   "/teacher(.*)",
//   "/api/(.*)",
// ]);

// export default clerkMiddleware((auth, req) => {
//   if (protectedRoute(req)) auth().protect();
// });

// export const config = {
//   // The following matcher runs middleware on all routes
//   // except static assets.
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };
