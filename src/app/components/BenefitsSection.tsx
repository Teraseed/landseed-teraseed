import React from "react";
import FeatureCard from "./FeatureCard";
import Image from "next/image";

// Define icon paths
const iconPaths = {
  housing: "/icons/housing.svg",
  family: "/icons/family.svg",
  rental: "/icons/rental.svg",
  risingCosts: "/icons/risingCosts.png",
  legal: "/icons/legal.png",
  smartGrowth: "/icons/growth.png",
};

export default function BenefitsSection() {
  return (
    <section className="w-full bg-opacity-20 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Why Backyard Suites Matter Section */}
        <div className="mb-16 relative">
          <div className="text-center mb-10">
            <p className="text-secondary-light font-heading text-[24px] font-[400] mb-2">
              YOU MAY ASK...
            </p>
            <h2 className="font-heading text-[41px] text-primary mb-10 font-[400]">
              WHY BACKYARD SUITES MATTER?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Dots background for Housing Crisis */}
            <div className="absolute left-[-38px] bottom-[-38px] z-0">
              <Image
                src="/images/dots.svg"
                width={214}
                height={213}
                alt=""
                aria-hidden="true"
              />
            </div>

            <FeatureCard
              icon={
                <Image
                  src={iconPaths.housing}
                  width={64}
                  height={64}
                  alt="Housing Crisis"
                />
              }
              title="Housing Crisis"
              description="Ontario is short over 50,000 affordable homes. Backyard suites add options—without building new towers."
            />

            <FeatureCard
              icon={
                <Image
                  src={iconPaths.family}
                  width={48}
                  height={48}
                  alt="Family Support"
                />
              }
              title="Family Support"
              description="Aging parents or adult kids can live independently, just steps from home."
            />

            <FeatureCard
              icon={
                <Image
                  src={iconPaths.rental}
                  width={48}
                  height={48}
                  alt="Rental Income"
                />
              }
              title="Rental Income"
              description="Backyard suites can bring in $1,500-$2,000/month in long-term rent."
            />

            <div className="absolute right-[-38px] bottom-[-38px] z-[-1]">
              <Image
                src="/images/rectangle.svg"
                width={214}
                height={213}
                alt=""
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* And Why Now Section */}
        <div className="mt-28 relative">
          <div className="text-center mb-10">
            <h2 className="font-heading text-[41px] text-primary mb-10 font-[400]">
              AND WHY NOW?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Dots background for Rising Costs */}
            <div className="absolute left-[-38px] bottom-[-38px] z-0">
              <Image
                src="/images/dots.svg"
                width={214}
                height={213}
                alt=""
                aria-hidden="true"
              />
            </div>

            <FeatureCard
              icon={
                <Image
                  src={iconPaths.risingCosts}
                  width={48}
                  height={48}
                  alt="Rising Costs"
                />
              }
              title="Rising Costs"
              description="Families are being priced out—backyard units are a more accessible solution."
            />

            <FeatureCard
              icon={
                <Image
                  src={iconPaths.legal}
                  width={48}
                  height={48}
                  alt="Legal Changes"
                />
              }
              title="Legal Changes"
              description="Many Ontario cities now allow backyard suites by right. No zoning battle required."
            />

            <FeatureCard
              icon={
                <Image
                  src={iconPaths.smartGrowth}
                  width={48}
                  height={48}
                  alt="Smart Growth"
                />
              }
              title="Smart Growth"
              description="It's local, sustainable, and makes better use of land we already have."
            />
            <div className="absolute right-[-38px] bottom-[-38px] z-[-1]">
              <Image
                src="/images/rectangle.svg"
                width={214}
                height={213}
                alt=""
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
