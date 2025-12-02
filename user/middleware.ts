import { NextResponse } from "next/server";

export function middleware(req: any) {
  const url = req.nextUrl;
  const { pathname } = url;

  // Allow static assets and tools
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/company") ||
    pathname.startsWith("/feature") ||
    pathname.startsWith("/tools/*") ||   // <-- ALLOW TOOLS ROUTES
    pathname.match(/\.(png|jpg|jpeg|gif|svg|webp|ico)$/)
  ) {
    return NextResponse.next();
  }

  // Split URL like "/home" -> ["", "home"]
  const segments = pathname.split("/");
  const first = segments[1];

  // Validate 2-letter country code
  const isCountry = /^[A-Za-z]{2}$/.test(first);

  // If URL does NOT start with a country (example: /home)
  if (!isCountry) {
    const defaultCountry = "IN";
    const newUrl = req.nextUrl.clone();
    newUrl.pathname = `/${defaultCountry}${pathname}`; // <-- FIXED
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}
