import { NextResponse } from "next/server";

const locales = ["en", "ar"];
const defaultLocale = "en"; // Fallback locale

function getLocale(request) {
  const acceptLanguage = request.headers.get("accept-language") || "";
  const preferredLocale = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0])
    .find((lang) => locales.includes(lang));

  return preferredLocale || defaultLocale;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean); // Get URL segments

  // Check if the first segment is a valid locale
  const hasLocale = segments.length > 0 && locales.includes(segments[0]);

  if (hasLocale) {
    return NextResponse.next(); // Valid locale, proceed
  }

  // If the first segment is an invalid locale, redirect to the correct locale
  if (segments.length > 0) {
    const locale = getLocale(request); // Get the best locale
    const newPathname = `/${locale}/${segments.slice(1).join("/")}`;
    const newUrl = new URL(newPathname, request.url);
    return NextResponse.redirect(newUrl);
  }

  // If no locale is present, redirect to the preferred locale
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);

  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: "/((?!_next).*)", // Exclude internal Next.js files
};
