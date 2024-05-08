import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Routes that can be accessed while signed out
  // publicRoutes: ["/aunyone-can-visit-this-rote"],
  publicRoutes: ["/"],
  ignoredRoutes: ["/api/success"],
});

export const config = {
  // Protects all routes, including api/trpc.
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
