"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-20 px-4 py-4 mobile:py-5 tablet:py-6 flex justify-between items-center w-full mx-auto">
      <div className="flex justify-between items-center w-full max-w-[90%] tablet:max-w-[90%] desktop:max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="relative h-16 w-32 mobile:h-20 mobile:w-40 tablet:h-24 tablet:w-50 desktop:h-32 desktop:w-60">
              <Image
                src="/images/landseed-logo.svg"
                alt="LandSeed Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="tablet:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation - Desktop */}
        <nav className="hidden tablet:block">
          <ul className="flex space-x-6 desktop:space-x-8">
            <li>
              <Link
                href="/"
                className="font-heading text-neutral-darkest text-base desktop:text-lg font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-heading text-neutral-darkest text-base desktop:text-lg font-medium hover:text-primary transition-colors"
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white z-30 py-4 px-6 shadow-lg tablet:hidden">
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="font-heading text-neutral-darkest text-lg font-medium hover:text-primary transition-colors block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-heading text-neutral-darkest text-lg font-medium hover:text-primary transition-colors block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
