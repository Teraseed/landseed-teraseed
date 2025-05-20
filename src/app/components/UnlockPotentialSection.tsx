import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function UnlockPotentialSection() {
  const t = useTranslations("unlockPotential");

  const steps = [
    {
      name: t("steps.assess"),
      image: "/images/assess.png",
      alt: "Property Assessment",
    },
    {
      name: t("steps.select"),
      image: "/images/select.png",
      alt: "Design Selection",
    },
    {
      name: t("steps.build"),
      image: "/images/build.png",
      alt: "Construction Process",
    },
  ];

  return (
    <section className="py-16 mobile:py-20 tablet:py-24">
      <div className="max-w-7xl mx-auto px-4 mobile:px-6 text-center">
        {/* Heading Section */}
        <div className="mb-8 mobile:mb-12 tablet:mb-16 max-w-4xl mx-auto">
          <p className="text-secondary-light font-heading text-[18px] mobile:text-[20px] tablet:text-[24px] mb-2 mobile:mb-3 tablet:mb-4">
            {t("subtitle")}
          </p>
          <h2 className="font-heading text-[20px] tablet:text-[41px] text-primary mb-4 mobile:mb-6 tablet:mb-8 font-[400]">
            {t("title")}
          </h2>
          <p className="font-body text-gray-200 text-[14px] mobile:text-[16px] tablet:text-[18px] leading-relaxed max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Circular Images with Labels - Always 3 in a row */}
        <div className="grid grid-cols-3 justify-items-center gap-2 mobile:gap-4 tablet:gap-8 desktop:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <div className="relative w-full aspect-square max-w-[100px] mobile:max-w-[150px] tablet:max-w-[220px] desktop:max-w-[280px] mb-2 mobile:mb-4 tablet:mb-6">
                <Image src={step.image} alt={step.alt} fill />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
