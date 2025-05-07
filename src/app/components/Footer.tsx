import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary-100 text-gray-200">
      <div className="max-w-[1440px] h-[239px] mx-auto px-8 py-10 flex items-center pb-17">
        {/* Logo and Copyright Info */}
        <div className="flex-1">
          <div className="relative h-32 w-64 mr-3">
            <Image
              src="/images/landseed-logo.svg"
              alt="LandSeed Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="ml-13">
            <p className="font-body text-1 font-[300]">
              Copyright © {new Date().getFullYear()} LandSeed
            </p>
            <p className="font-body text-1 font-[300]">All rights reserved</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col">
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
