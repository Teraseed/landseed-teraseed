"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useSession } from "next-auth/react";
import AuthModal from "./AuthModal";
import { useRouter } from "next/navigation";

type BookletData = {
  imageSrc: string;
  title: string;
  filename: string;
  description: string;
  alt: string;
  authRequired?: boolean; // New optional property
};

const MoreInformation: React.FC = () => {
  const t = useTranslations("moreInformation");
  const locale = useLocale();
  const { data: session } = useSession();
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Get appropriate technicalBooklet filename based on locale
  const getBookletFilename = () => {
    switch (locale) {
      case "zh":
        return "marketing_booklet_zh.pdf";
      case "zh-TW":
        return "marketing_booklet_zh-TW.pdf";
      default:
        return "marketing_booklet_en.pdf";
    }
  };

  // Get appropriate technical booklet filename based on locale
  const getTechnicalBookletFilename = () => {
    switch (locale) {
      case "zh":
        return "technical_booklet_zh.pdf";
      case "zh-TW":
        return "technical_booklet_zh-TW.pdf";
      default:
        return "technical_booklet_en.pdf";
    }
  };

  const booklets: BookletData[] = [
    {
      imageSrc: "/images/booklet.jpg",
      title: t("booklets.booklet"),
      description: t("booklets.bookletDescription"),
      filename: getBookletFilename(),
      alt: "Landseed Booklet - Unlock Your Backyard Potential",
      authRequired: false, // Set to false for the first booklet

    },
    {
      imageSrc: "/images/technical-booklet.svg",
      title: t("booklets.technicalBooklet"),
      description: t("booklets.technicalBookletDescription"),
      filename: getTechnicalBookletFilename(),
      alt: "Landseed Technical Booklet with specifications and details",
      authRequired: true, 
    },
  ];

  return (
    <div id="more-information" className="w-full py-20">
      <div className="mx-auto">
        {/* Heading section */}
        <div className="absolute mb-1 w-[709px] h-[162px] bg-orange-moreinfo opacity-60 z-0"></div>
        <div className="relative mb-10 w-[709px] h-[162px] z-10">
          <h3 className="font-heading text-base tablet:text-lg desktop:text-xl text-secondary-light mb-3 pl-10 pt-10">
            {t("subtitle")}
          </h3>
          <h2 className="font-heading text-2xl tablet:text-3xl desktop:text-4xl text-primary pl-10">
            {t("title")}
          </h2>
        </div>

        {/* Booklets container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 max-w-5xl mx-auto">
          {booklets.map((booklet, index) => (
            <BookletDownloadCard
              key={index}
              booklet={booklet}
              session={session}
              onAuthRequired={() => setShowAuthModal(true)}
            />
          ))}
        </div>

        {/* Auth Modal */}
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onSuccess={() => {
            // Modal will handle closing and refresh
          }}
        />
      </div>
    </div>
  );
};

// Separate component for booklet download card
import { Session } from "next-auth";

interface BookletDownloadCardProps {
  booklet: BookletData;
  session: Session | null;
  onAuthRequired: () => void;
}

const BookletDownloadCard: React.FC<BookletDownloadCardProps> = ({
  booklet,
  session,
  onAuthRequired,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const locale = useLocale();
  const router = useRouter();

  const getLoginText = () => {
    if (locale === "zh") {
      return "登录以查看";
    } else if (locale === "zh-TW") {
      return "登入以查看";
    } else {
      return "Login to Access";
    }
  };
  const getDownloadingText = () => {
    if (locale === "zh") {
      return "载入中...";
    } else if (locale === "zh-TW") {
      return "載入中...";
    } else {
      return "Loading...";
    }
  };

  const handleDownload = () => {

  // Check if authentication is required AND if there's no session
  if (booklet.authRequired && !session) {
    onAuthRequired(); // Trigger the auth modal
    return; // Stop here, don't proceed with download
  }

    setIsDownloading(true);
    try {
      if(booklet.imageSrc == "/images/booklet.jpg")
        router.push('/marketingBooklet');
      else if(booklet.imageSrc == "/images/technical-booklet.svg")
        router.push('/technicalBooklet');
    } catch (error) {
      console.error("Download error:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="block hover:opacity-95 transition-opacity focus:outline-none disabled:opacity-50 relative flex flex-col items-center px-4"
      >
        <div className="w-64 md:w-78 h-80 md:h-96 mb-4 relative">
          <img
            src={booklet.imageSrc}
            alt={booklet.alt}
            className="w-full h-full object-cover object-center"
          />
          {!session && booklet.authRequired && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white px-4 py-2 rounded-md text-sm font-medium text-gray-800">
                {getLoginText()}
              </div>
            </div>
          )}
          {isDownloading && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white px-4 py-2 rounded-md text-sm font-medium text-gray-800">
                {getDownloadingText()}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center mt-4">
        <p className="text-center text-lg text-gray-700 font-medium">
          {booklet.title}
        </p>
        <p className="text-center text-sm text-gray-500 font-medium w-full desktop:w-[320px]">{booklet.description}</p>
        </div>
      </button>
    </div>
  );
};

export default MoreInformation;
