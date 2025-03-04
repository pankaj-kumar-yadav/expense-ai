// // i18n/request.ts

import { getRequestConfig } from "next-intl/server";
import { Locale, routing } from "@/i18n/routing";


export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

// import { getRequestConfig } from "next-intl/server";
// import { notFound } from "next/navigation";

// export const locales = ["en", "fr"] as const;
// export type Locale = (typeof locales)[number];

// export default getRequestConfig(async ({ locale }) => {
//   if (!locales.includes(locale as Locale)) notFound();

//   return {
//     messages: (await import(`../messages/${locale}.json`)).default,
//   };
// });