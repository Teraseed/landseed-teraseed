import "../globals.css";
import type { Metadata, Viewport } from "next";
import {
  Nunito_Sans,
  Suez_One,
  Noto_Sans_SC,
  Noto_Serif_SC,
} from "next/font/google";
import Footer from "../components/Footer";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Providers } from "@/app/providers";

// Noto Sans SC (思源黑体) for headings
const notoSansSC = Noto_Sans_SC({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-sc",
});

// Noto Serif SC (思源宋体) for body text
const notoSerifSC = Noto_Serif_SC({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif-sc",
});

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
        className={`${suezOne.variable} ${nunitoSans.variable} ${notoSansSC.variable} ${notoSerifSC.variable} bg-page min-h-screen w-full overflow-x-hidden`}
      >
        <Providers>
          <NextIntlClientProvider>
            <main className="w-full overflow-x-hidden">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
