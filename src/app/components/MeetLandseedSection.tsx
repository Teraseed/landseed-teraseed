import React from "react";
import Image from "next/image";

export default function MeetLandseedSection() {
  return (
    <section className="py-16 ml-[104px] mr-[104px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center overflow-hidden">
          {/* Left side - Image */}
          <div className="w-[475px] md:w-1/2 relative h-[443px]">
            <Image
              src="/images/meet-landseed.jpg"
              alt="LandSeed Team Meeting"
              fill
              className="object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <p className="text-secondary-light font-heading text-[18px] mb-2">
              MEET LANDSEED: YOUR GUIDE IN THE PROCESS
            </p>

            <h2 className="font-heading text-[32px] text-primary mb-6 font-[400]">
              WHAT IS LANDSEED?
            </h2>

            <p className="font-body text-gray-200 mb-8 text-[16px] leading-relaxed">
              LandSeed is a non-profit organization. We are a team of
              community-first development consultants connecting property
              owners, builders, lenders, and city officials. We guide homeowners
              through planning and construction to build backyard suites that
              serve their goals—whether it's creating rental income, welcoming
              guests, or housing loved ones.
            </p>

            <h2 className="font-heading text-[32px] text-primary mb-6 font-[400]">
              WHAT MAKES US DIFFERENT?
            </h2>

            <p className="font-body text-gray-200 text-[16px] leading-relaxed">
              LandSeed is a community-first consulting team with hands-on zoning
              and legal expertise. We are diverse and have experience working
              across cultures and preferences. Our mindset is collaborative,
              patient, and client-first. We aim to provide a tailor-made
              experience from early planning all the way to project completion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
