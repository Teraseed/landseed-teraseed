import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans, Suez_One } from "next/font/google";
import Footer from "./components/Footer";

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
  title: "Tiny Home",
  description: "Tiny Home by LandSeed",
  viewport: "width=device-width, initial-scale=1.0, shrink-to-fit=no",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${suezOne.variable} ${nunitoSans.variable} bg-page min-h-screen w-full`}
      >
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
