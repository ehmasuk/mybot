import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const path = request.nextUrl.pathname;

  if (path.startsWith("/user") && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (path === "/login" && session) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (path === "/register" && session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/register", "/user/:path*"],
};

