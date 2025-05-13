"use client";

import React, { useState } from "react";

const ImageCarousel: React.FC = () => {
  const images = [
    {
      src: "/images/living.png",
      alt: "Living room in a tiny home with modern furniture and large windows",
    },
    {
      src: "/images/dining.png",
      alt: "Dining area in a tiny home with table and chairs",
    },
    {
      src: "/images/bathroom.png",
      alt: "Modern bathroom in a tiny home",
    },
    {
      src: "/images/kitchen.png",
      alt: "Modern kitchen area in a tiny home",
    },
    {
      src: "/images/bedroom.png",
      alt: "Comfortable bedroom in a tiny home",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < images.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= images.length - 2;

  return (
    <div className="w-fullpy-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h3 className="font-sans text-xl text-amber-400 uppercase tracking-wide">
            IMAGINATION
          </h3>
          <h2 className="font-sans text-4xl text-[#566e5a] font-medium">
            LET&apos;S SEE WHAT IT LOOKS LIKE.....
          </h2>
        </div>

        {/* Carousel container */}
        <div className="relative">
          {/* Images container with carousel effect */}
          <div className="overflow-hidden">
            <div
              className="flex gap-12 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (540 + 48)}px)`,
              }}
            >
              {images.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-[540px] h-[360px]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Left navigation button - with disabled state */}
          <button
            onClick={goToPrevious}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-9 focus:outline-none ${
              isAtStart ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Previous image"
            disabled={isAtStart}
          >
            <img
              src="/icons/arrow-left.svg"
              alt="Previous"
              className="w-19 h-19"
            />
          </button>

          {/* Right navigation button - with disabled state */}
          <button
            onClick={goToNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-9 focus:outline-none ${
              isAtEnd ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Next image"
            disabled={isAtEnd}
          >
            <img
              src="/icons/arrow-right.svg"
              alt="Next"
              className="w-19 h-19"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
