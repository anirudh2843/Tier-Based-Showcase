import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // Public routes
  if (
    req.nextUrl.pathname === "/" ||
    req.nextUrl.pathname.startsWith("/sign-in") ||
    req.nextUrl.pathname.startsWith("/sign-up") ||
    req.nextUrl.pathname.startsWith("/sso-callback")
  ) {
    return NextResponse.next();
  }

  // Protected routes
  if (!userId) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
