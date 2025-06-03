"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "zh", label: "简体中文" },
  { code: "zh-TW", label: "繁體中文" },
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
        className={`w-34 h-12 bg-white rounded-lg shadow font-heading text-lg font-bold flex items-center justify-between px-4 border border-gray-50 hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-primary`}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        type="button"
      >
        <span>{current.label}</span>
        <svg
          className={` w-6 h-6 transition-transform ${
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
        <div className="absolute top-14 left-0 w-36 bg-white rounded-sm shadow-lg z-[999] py-2 flex flex-col animate-fade-in">
          {LANGUAGES.filter((l) => l.code !== locale).map((lang) => (
            <button
              key={lang.code}
              className="w-full text-left px-4 py-2 hover:bg-gray-300 font-body text-lg text-gray-900"
              onClick={() => handleSelect(lang.code)}
              role="option"
              aria-selected={lang.code === locale}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
