import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const path = request.nextUrl.pathname;

  if (path.startsWith("/user") && !session) {
    return NextResponse.redirect(new URL("/account", request.url));
  }

  if (path === "/account" && session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/account", "/user/:path*"],
};
