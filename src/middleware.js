import { NextResponse } from "next/server";

const locales = ["en", "ar"];
const defaultLocale = "en";

function getLocale(request) {
  const acceptLanguage = request.headers.get("accept-language") || "";
  return (
    acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0])
      .find((lang) => locales.includes(lang)) || defaultLocale
  );
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // ✅ Allow public images to be accessed freely
  if (pathname.startsWith("/images") || pathname.startsWith("/favicon")) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const hasLocale = segments.length > 0 && locales.includes(segments[0]);

  if (hasLocale) {
    return NextResponse.next();
  }

  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: "/((?!_next|images|favicon|robots.txt|sitemap.xml).*)", // ✅ Allow images
};
