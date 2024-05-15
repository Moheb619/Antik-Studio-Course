export { default } from "next-auth/middleware";

export const config = {
  // Routes to protect in matcher
  // any routes except register, api , login , image, static, icon will be protected
  matcher: ["/((?!api|register|login|_next/static|_next/image|favicon.ico).*)"],
};
