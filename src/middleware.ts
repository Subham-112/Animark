import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAMES } from "./utils/cookies-names";

export function middleware(req: NextRequest) {
  const userAccess = req.cookies.get(COOKIE_NAMES.USER_ACCESS_TOKEN)?.value;
  const sellerAccess = req.cookies.get(COOKIE_NAMES.SELLER_ACCESS_TOKEN)?.value;
  const adminAccess = req.cookies.get(COOKIE_NAMES.SELLER_ACCESS_TOKEN)?.value;
  const pathname = req.nextUrl.pathname;

  if (pathname === "/") {
    if (userAccess) return NextResponse.redirect(new URL("/dashboard", req.url));
    if (sellerAccess) return NextResponse.redirect(new URL("/seller", req.url));
    if (adminAccess) return NextResponse.redirect(new URL("/admin", req.url));
  }

  if (pathname.startsWith("/dashboard") && !userAccess) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
