"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useState, useTransition } from "react";

export default function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLanguageSwitch = () => {
    if (isPending || isAnimating) return;

    setIsAnimating(true);
    const newLocale = locale === "en" ? "zh" : "en";

    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });

    // Reset animation state after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={handleLanguageSwitch}
        disabled={isPending || isAnimating}
        className={`relative w-22 h-8 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-opacity-50 disabled:opacity-70 ${
          locale === "en" ? "focus:ring-green-600" : "focus:ring-orange-600"
        }`}
        style={{
          backgroundColor: locale === "en" ? "#659265" : "#D16035",
        }}
        aria-label={`Switch to ${locale === "en" ? "Chinese" : "English"}`}
      >
        {/* Background sliding element */}
        <div
          className="absolute top-0.5 w-7 h-7 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out"
          style={{
            transform: locale === "en" ? "translateX(2px)" : "translateX(58px)",
          }}
        />

        {/* Show only the inactive language text */}
        {locale === "en" ? (
          // When English is active, show Chinese text on the right
          <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm text-white transition-opacity duration-300">
            中文
          </span>
        ) : (
          // When Chinese is active, show English text on the left
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xs font-medium text-white transition-opacity duration-300">
            English
          </span>
        )}
      </button>
    </div>
  );
}
