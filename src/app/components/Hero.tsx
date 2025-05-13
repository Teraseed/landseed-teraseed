import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
export default function Hero() {
  return (
    <div className="relative w-full h-[1353px] overflow-hidden">
      {/* Background Layers - bottom to top */}
      {/* Hero Background Image (bottom layer) */}
      <div className="absolute inset-0 z-[1] scale-x-[-1]">
        <Image
          src="/images/hero-background.png"
          alt="Backyard with tiny home"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Decorative ellipse positioned in the hero section */}
      <div className="absolute w-[1050px] left-[880px] top-[320px] transform -translate-x-1/2 -translate-y-1/4 z-[2]">
        <img
          src="/images/ellipse.svg"
          alt="Decorative background shape"
          className="absolute w-[85%] h-auto max-w-[1100px]"
        />
      </div>

      <Header />

      {/* Hero Content (top layer) */}
      <div className="relative z-20 px-4 pt-[16rem] pb-[8rem] max-w-[1000px] mx-auto">
        <div className="max-w-[1000px]">
          <h1 className="font-heading text-gray-100 mb-4 text-[48px] leading-[1.16] font-[400]">
            Unlock Your Backyard Potential
          </h1>
          <p className="font-body text-[24px] leading-[1.32] font-[300] tracking-[0.96px] text-gray-200 mb-8">
            Discover the Versatile Benefits of Adding a Tiny Home.
          </p>
          {/* CTA Button */}
          <div className="max-w-[350px]">
            <Link
              href="/assessment"
              className="inline-flex items-center px-6 py-3 text-white-text transition-all group 
               bg-[linear-gradient(102deg,#647B64_-4.62%,#66AC66_178.22%)] 
               shadow-[0px_20px_40px_rgba(128,143,150,0.19)] 
               rounded-[5px] hover:opacity-90"
            >
              <span className="uppercase font-medium font-body text-sm md:text-base text-[16px] leading-[150%] tracking-[2.48px]">
                Sign up to book the free property assessment
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
