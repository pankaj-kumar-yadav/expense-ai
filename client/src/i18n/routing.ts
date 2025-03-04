import { defineRouting } from "next-intl/routing";
// import { createNavigation } from "next-intl/navigation";

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: "en",
});
