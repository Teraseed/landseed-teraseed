import React from "react";
import Image from "next/image";

export default function MeetLandseedSection() {
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
              MEET LANDSEED: YOUR GUIDE IN THE PROCESS
            </p>

            <h2 className="font-heading text-[20px] desktop:text-[40px] text-primary mb-4 tablet:mb-6 font-[400]">
              WHAT IS LANDSEED?
            </h2>

            <p className="font-body text-gray-200 mb-6 tablet:mb-8 text-[14px] mobile:text-[16px] font-[300] leading-relaxed">
              LandSeed is a non-profit organization. We are a team of
              community-first development consultants connecting property
              owners, builders, lenders, and city officials. We guide homeowners
              through planning and construction to build backyard suites that
              serve their goals—whether it&apos;s creating rental income,
              welcoming guests, or housing loved ones.
            </p>

            <h2 className="font-heading text-[20px] desktop:text-[40px] text-primary mb-4 tablet:mb-6 font-[400]">
              WHAT MAKES US DIFFERENT?
            </h2>

            <p className="font-body text-gray-200 text-[14px] mobile:text-[16px] font-[300] leading-relaxed">
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
