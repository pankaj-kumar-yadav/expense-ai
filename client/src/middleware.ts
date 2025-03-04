// middleware.ts
import createMiddleware from "next-intl/middleware";
import { locales } from "@/i18n/request"; // your locales array defined there
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supportedLocales = ["en", "fr"];
const defaultLocale = "en";

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Check if the pathname is missing a locale prefix
  const pathnameIsMissingLocale = supportedLocales.every(
    (loc) => !pathname.startsWith(`/${loc}/`) && pathname !== `/${loc}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}${search}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*|static|public|favicon\\.ico).*)"],
};

export default createMiddleware({
  locales,
  defaultLocale,
});
