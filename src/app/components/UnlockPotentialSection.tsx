import React from "react";
import Image from "next/image";

export default function UnlockPotentialSection() {
  const steps = [
    {
      name: "ASSESS",
      image: "/images/assess.png",
      alt: "Property Assessment",
    },
    {
      name: "SELECT",
      image: "/images/select.png",
      alt: "Design Selection",
    },
    {
      name: "BUILD",
      image: "/images/build.png",
      alt: "Construction Process",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading Section */}
        <div className="mb-16 max-w-4xl mx-auto">
          <p className="text-secondary-light font-heading text-[24px] mb-4">
            WE DON&apos;T JUST BUILD.
          </p>
          <h2 className="font-heading text-[48px] text-primary mb-8 font-[400]">
            WE UNLOCK POTENTIAL.
          </h2>
          <p className="font-body text-gray-200 text-[18px] leading-relaxed max-w-3xl mx-auto">
            At LandSeed, we help everyday homeowners turn backyard ideas into
            real, livable spaces. We guide you through zoning, design, permits,
            and construction — without jargon or stress.
          </p>
        </div>

        {/* Circular Images with Labels */}
        <div className="flex flex-wrap md:flex-row justify-center items-start gap-6 md:gap-12 lg:gap-20 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-84 h-84 md:w-80 md:h-80 overflow-hidden mb-6">
                <Image src={step.image} alt={step.alt} fill />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
