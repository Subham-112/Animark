import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAMES } from "./utils/cookies-names";

export function middleware(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAMES.USER_ACCESS_TOKEN)?.value;
  const pathname = req.nextUrl.pathname;

  if (pathname === "/") {
    if (token) return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
