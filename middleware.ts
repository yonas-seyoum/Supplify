import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token");

  if (pathname === "/auth/signin" && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (pathname === "/dashboard" && !token) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth/signin", "/dashboard"],
};
