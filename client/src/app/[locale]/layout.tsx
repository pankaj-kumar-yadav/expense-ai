import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/providers/theme-provider";

import { NextIntlClientProvider } from 'next-intl';

import "../globals.css";
import { setRequestLocale } from "next-intl/server";
import { Toaster } from "@/components/ui/sonner";
import { locales } from "@/i18n/routing";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LMS App",
  description: "Learning Management System",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  let messages;
  const paramsValue = await params;
  const locale = paramsValue.locale;
  try {
    messages = (await import(`@/messages/${paramsValue.locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  setRequestLocale(locale || "en");

  if (locale === 'en' || locale === 'fr') {
    return (
      <html lang={locale} dir={locale}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider
            // attribute="class"
            // defaultTheme="light"
            // enableSystem
            // disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    );
  } else {
    // Handle invalid locale value
    notFound();
  }
}