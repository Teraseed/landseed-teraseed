import "./globals.css";
import type { Metadata, Viewport } from "next";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${suezOne.variable} ${nunitoSans.variable} bg-page min-h-screen w-full overflow-x-hidden`}
      >
        <main className="w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
