import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary-100 text-gray-200 overflow-hidden">
      <div className="max-w-full mobile:max-w-[95%] tablet:max-w-[90%] desktop:max-w-[1440px] mx-auto px-4 mobile:px-6 tablet:px-8 py-10 flex flex-col tablet:flex-row items-center justify-between">
        {/* Logo and Copyright Info */}
        <div className="mr-10 mb-12 mobile:mb-12 tablet:mb-0">
          <div className="relative h-24 w-48 mobile:h-28 mobile:w-56 tablet:h-32 tablet:w-64 mx-auto mobile:mx-0">
            <Image
              src="/images/landseed-logo.svg"
              alt="LandSeed Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-center mobile:text-left mt-2 ml-14">
            <p className="font-body text-sm font-[300]">
              Copyright © {new Date().getFullYear()} LandSeed
            </p>
            <p className="font-body text-sm font-[300]">All rights reserved</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center mobile:items-start tablet:mr-14">
          <h3 className="font-heading text-xl mb-4 text-primary">Contact us</h3>
          <p className="font-body text-sm mb-2">
            <a href="https://www.landseed.ca" className="hover:underline">
              www.landseed.ca
            </a>
          </p>
          <p className="font-body text-sm mb-2">
            <a href="mailto:info@landseed.ca" className="hover:underline">
              info@landseed.ca
            </a>
          </p>
          <p className="font-body text-sm">
            <a href="tel:514-662-2514" className="hover:underline">
              514-662-2514
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
