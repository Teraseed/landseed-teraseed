import React from "react";
import Link from "next/link";

type BookletData = {
  imageSrc: string;
  title: string;
  href: string;
  alt: string;
};

const MoreInformation: React.FC = () => {
  const booklets: BookletData[] = [
    {
      imageSrc: "/images/booklet.jpg",
      title: "Booklet",
      href: "/downloads/landseed-booklet.pdf",
      alt: "Landseed Booklet - Unlock Your Backyard Potential",
    },
    {
      imageSrc: "/images/technical-booklet.svg",
      title: "Technical Booklet",
      href: "/downloads/landseed-technical-booklet.pdf",
      alt: "Landseed Technical Booklet with specifications and details",
    },
  ];

  return (
    <div className="w-full bg-[#fdf8f2] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading section */}
        <div className="mb-20">
          <h3 className="font-heading text-xl md:text-2xl text-amber-500 mb-3">
            LEARN MORE ABOUT YOUR BACKYARD SUITE!
          </h3>
          <h2 className="font-heading text-4xl md:text-5xl text-[#566e5a]">
            MORE INFORMATION
          </h2>
        </div>

        {/* Booklets container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 max-w-5xl mx-auto">
          {booklets.map((booklet, index) => (
            <div key={index} className="flex flex-col items-center">
              <Link
                href={booklet.href}
                className="block hover:opacity-95 transition-opacity focus:outline-none"
              >
                <div className="w-64 md:w-72 h-80 md:h-96 mb-4">
                  <img
                    src={booklet.imageSrc}
                    alt={booklet.alt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <p className="text-center text-lg text-gray-700 font-medium mt-4">
                  {booklet.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreInformation;
