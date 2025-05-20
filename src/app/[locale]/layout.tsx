import "../globals.css";
import type { Metadata, Viewport } from "next";
import { Nunito_Sans, Suez_One } from "next/font/google";
import Footer from "../components/Footer";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

// Suez One font (for headings)
const suezOne = Suez_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-suez-one",
});

// Nunito Sans for body text
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "TeraSeed",
  description: "TeraSeed by LandSeed",
};

// Add separate viewport export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head></head>
      <body
        className={`${suezOne.variable} ${nunitoSans.variable} bg-page min-h-screen w-full overflow-x-hidden`}
      >
        <NextIntlClientProvider>
          <main className="w-full overflow-x-hidden">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
