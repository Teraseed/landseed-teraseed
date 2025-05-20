import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import { useTranslations } from "next-intl";
export default function Hero() {
  const t = useTranslations("hero");
  return (
    <div className="relative w-full h-[900px] mobile:h-[1100px] tablet:h-[1200px] desktop:h-[1353px] overflow-hidden">
      {/* Background Layers - bottom to top */}
      {/* Hero Background Image (bottom layer) */}
      <div className="absolute inset-0 z-[1] scale-x-[-1]">
        <Image
          src="/images/hero-background.webp"
          alt="Backyard with tiny home"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Decorative ellipse positioned in the hero section */}
      <div
        className="
    absolute 
    w-[350px] 
    mobile:w-[400px] 
    tablet:w-[600px] 
    desktop:w-[1050px] 
    right-[10%] 
    mobile:right-[18%] 
    tablet:right-[30%] 
    desktop:right-[150px] 
    top-[200px] 
    mobile:top-[200px] 
    tablet:top-[250px] 
    desktop:top-[290px] 
    z-[2]
    transform 
    translate-x-[15%] 
    mobile:translate-x-[10%] 
    tablet:translate-x-[0%] 
    desktop:translate-x-0
  "
      >
        <img
          src="/images/ellipse.svg"
          alt="Decorative background shape"
          className="w-full h-auto"
        />
      </div>

      <Header />

      {/* Hero Content (top layer) */}
      <div className="relative z-20 px-4 pt-[8rem] tablet:pt-[12rem] desktop:pt-[16rem] pb-[4rem] tablet:pb-[6rem] desktop:pb-[8rem] max-w-[90%] tablet:max-w-[85%] desktop:max-w-[1000px] mx-auto">
        <div className="max-w-full tablet:max-w-[80%] desktop:max-w-[1000px]">
          <h1 className="font-heading text-gray-100 mb-4 text-[32px] tablet:text-[40px] desktop:text-[48px] leading-[1.16] font-[400]">
            {t("title")}
          </h1>
          <p className="font-body text-[18px] tablet:text-[20px] desktop:text-[24px] leading-[1.32] font-[300] tracking-[0.96px] text-gray-200 mb-6 tablet:mb-8">
            {t("subtitle")}
          </p>
          {/* CTA Button */}
          <div className="max-w-full tablet:max-w-[300px] desktop:max-w-[350px]">
            <Link
              href="#contact-form"
              className="inline-flex items-center px-4 tablet:px-5 desktop:px-6 py-2 tablet:py-3 text-white-text transition-all group 
               bg-[linear-gradient(102deg,#647B64_-4.62%,#66AC66_178.22%)] 
               shadow-[0px_20px_40px_rgba(128,143,150,0.19)] 
               rounded-[5px] hover:opacity-90"
            >
              <span className="uppercase font-medium font-body text-[12px] tablet:text-[14px] desktop:text-[16px] leading-[150%] tracking-[1.5px] tablet:tracking-[2px] desktop:tracking-[2.48px]">
                {t("cta")}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 tablet:h-5 tablet:w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
