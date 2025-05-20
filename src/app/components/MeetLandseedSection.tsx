import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function MeetLandseedSection() {
  const t = useTranslations("meetLandseed");

  return (
    <section className="py-16 px-4 mobile:px-8 tablet:px-16 w-full mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col tablet:flex-row items-center overflow-hidden gap-8 tablet:gap-20">
          {/* Left side - Image */}
          <div className="w-full mobile:w-[400px] tablet:w-[475px] relative h-[300px] mobile:h-[350px] tablet:h-[443px]">
            <Image
              src="/images/meet-landseed.jpg"
              alt="LandSeed Team Meeting"
              fill
              className="object-cover"
            />
            <div className="absolute right-[-30px] mobile:right-[-40px] tablet:right-[-60px] bottom-[-20px] mobile:bottom-[-30px] tablet:bottom-[-40px] z-[-1] w-[300px] mobile:w-[350px] tablet:w-auto">
              <Image
                src="/images/rectangle-meet.svg"
                width={461}
                height={456}
                alt=""
                aria-hidden="true"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full tablet:w-2/3 p-4 mobile:p-6 tablet:p-8 desktop:p-12">
            <p className="text-secondary-light font-heading text-[16px] mobile:text-[18px] mb-2">
              {t("subtitle")}
            </p>

            <h2 className="font-heading text-[20px] desktop:text-[40px] text-primary mb-4 tablet:mb-6 font-[400]">
              {t("whatIs.title")}
            </h2>

            <p className="font-body text-gray-200 mb-6 tablet:mb-8 text-[14px] mobile:text-[16px] font-[300] leading-relaxed">
              {t("whatIs.description")}
            </p>

            <h2 className="font-heading text-[20px] desktop:text-[40px] text-primary mb-4 tablet:mb-6 font-[400]">
              {t("whatMakesDifferent.title")}
            </h2>

            <p className="font-body text-gray-200 text-[14px] mobile:text-[16px] font-[300] leading-relaxed">
              {t("whatMakesDifferent.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
