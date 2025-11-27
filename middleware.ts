import { NextResponse } from "next/server";

export function middleware(req:any) {
  const pathname = req.nextUrl.pathname;

//   // Allow static files, APIs, and existing pages
//   if (
//     pathname.startsWith("/api") ||
//     pathname.startsWith("/_next") ||
//     pathname.startsWith("/favicon") ||
//     pathname.match(/\.(png|jpg|jpeg|svg|css|js)$/)
//   ) {
//     return NextResponse.next();
//   }

//   // Local development mock
//   let country =
//     process.env.NODE_ENV === "development"
//       ? process.env.DEV_COUNTRY?.toLowerCase()
//       : req.geo?.country?.toLowerCase();

//   if (country && !pathname.startsWith(`/${country}`)) {
//     return NextResponse.redirect(`${req.nextUrl.origin}/${country}`);
//   }

  return NextResponse.next();
}
