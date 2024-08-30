export { auth as middleware } from "@/auth";

export const config = {
  matcher: [
    // apply middleware to all routes excluding API routes, static asset routes, image optimization routes, and the favicon
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
