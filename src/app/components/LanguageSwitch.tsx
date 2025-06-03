"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";

const LANGUAGES = [
  { code: "en", label: "English", shortLabel: "En" },
  { code: "zh", label: "简体中文", shortLabel: "简中" },
  { code: "zh-TW", label: "繁體中文", shortLabel: "繁中" },
];

export default function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const handleSelect = (code: string) => {
    setOpen(false);
    if (code !== locale) {
      router.replace(pathname, { locale: code });
    }
  };

  const current = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  return (
    <div className="relative flex flex-col items-center" ref={dropdownRef}>
      <button
        className={`
          w-20 h-10 sm:w-34 sm:h-12 
          bg-white rounded-lg shadow-sm font-heading 
          text-base sm:text-lg font-bold 
          flex items-center justify-between 
          px-2 sm:px-4 
          border border-gray-300 hover:bg-gray-50 transition 
          focus:outline-none focus:ring-2 focus:ring-primary
          text-black
        `}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        type="button"
      >
        <span className="block sm:hidden flex-grow text-left pl-1">
          {current.shortLabel}
        </span>
        <span className="hidden sm:block flex-grow text-left">
          {current.label}
        </span>
        <svg
          className={`w-6 h-6 sm:w-6 sm:h-6 transition-transform flex-shrink-0 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="5,7 15,7 10,13" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-12 sm:top-14 left-0 w-24 sm:w-36 bg-white rounded-lg shadow-lg border border-gray-200 z-[999] py-1 flex flex-col animate-fade-in">
          {LANGUAGES.filter((l) => l.code !== locale).map((lang) => (
            <button
              key={lang.code}
              className="w-full text-left px-3 sm:px-4 py-2 hover:bg-gray-300 font-heading text-sm sm:text-lg text-black font-bold"
              onClick={() => handleSelect(lang.code)}
              role="option"
              aria-selected={lang.code === locale}
            >
              <span className="block sm:hidden">{lang.shortLabel}</span>
              <span className="hidden sm:block">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
