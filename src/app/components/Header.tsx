"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitch from "./LanguageSwitch";

export default function Header() {
  const t = useTranslations("header");

  return (
    <header className="relative z-1000 px-4 py-4 mobile:py-5 tablet:py-6 flex justify-between items-center w-full mx-auto overflow-visible">
      <div className="flex justify-between items-center w-full max-w-[90%] tablet:max-w-[90%] desktop:max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="relative h-12 w-24 mobile:h-16 mobile:w-32 tablet:h-20 tablet:w-40 desktop:h-24 desktop:w-50">
              <Image
                src="/images/landseed-logo.svg"
                alt="LandSeed Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Navigation and Language Switch - All Screens */}
        <div className="flex items-center space-x-3 mobile:space-x-4 tablet:space-x-6">
          <nav>
            <ul className="flex space-x-3 mobile:space-x-4 tablet:space-x-6 desktop:space-x-8">
              <li>
                <Link
                  href="https://landseed.ca/"
                  className="font-heading text-neutral-darkest text-sm mobile:text-base tablet:text-base desktop:text-lg font-medium hover:text-primary transition-colors"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.landseed.ca/about"
                  className="font-heading text-neutral-darkest text-sm mobile:text-base tablet:text-base desktop:text-lg font-medium hover:text-primary transition-colors"
                >
                  {t("aboutUs")}
                </Link>
              </li>
            </ul>
          </nav>
          <LanguageSwitch />
        </div>
      </div>
    </header>
  );
}
