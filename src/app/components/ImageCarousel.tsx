"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ImageCarousel: React.FC = () => {
  const t = useTranslations("imageCarousel");
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
  const [visibleImages, setVisibleImages] = useState(1);

  // Update the number of visible images based on screen size
  useEffect(() => {
    // Implement debouncing for the resize event handler
    let resizeTimer: NodeJS.Timeout;

    const updateVisibleImages = () => {
      if (window.matchMedia("(min-width: 90rem)").matches) {
        // Desktop: 1440px
        setVisibleImages(2);
      } else {
        // Tablet and Mobile: Below 1440px
        setVisibleImages(1);
      }
    };

    // Set initial value
    updateVisibleImages();

    // Add event listener for resize with debouncing
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateVisibleImages, 100);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < images.length - visibleImages) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= images.length - visibleImages;

  // Fixed dimensions for images to maintain consistency
  const imageWidth = 540;
  const imageHeight = 360;

  return (
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h3 className="font-heading text-base tablet:text-lg desktop:text-xl text-secondary-light uppercase tracking-wide">
            {t("subtitle")}
          </h3>
          <h2 className="font-heading text-2xl tablet:text-3xl desktop:text-4xl text-[#566e5a] font-medium">
            {t("title")}
          </h2>
        </div>
        <div className="w-full h-full flex flex-col gap-4 pb-8">
          <iframe
            width="100%"
            height="100%"
            className="aspect-video"
            src="https://www.youtube.com/embed/_buBn6ZEKvU?rel=0&modestbranding=1"
            title="YouTube video player"
            allow=" encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="100%"
            height="100%"
            className="aspect-video"
            src="https://www.youtube.com/embed/-n-Jf_B0O70?rel=0&modestbranding=1"
            title="YouTube Shorts video player"
            allow=" encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* Carousel container */}
        <div className="relative">
          {/* Images container with carousel effect */}
          <div className="overflow-hidden">
            <div
              className="flex gap-4 desktop:gap-12 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (imageWidth + (visibleImages > 1 ? 48 : 16))
                }px)`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 relative"
                  style={{
                    width: `${imageWidth}px`,
                    height: `${imageHeight}px`,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 90rem) 540px, 100vw"
                    quality={80}
                    priority={index === 0}
                    className="object-cover"
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
            <Image
              src="/icons/arrow-left.svg"
              alt="Previous"
              width={19}
              height={19}
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
            <Image
              src="/icons/arrow-right.svg"
              alt="Next"
              width={19}
              height={19}
              className="w-19 h-19"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
