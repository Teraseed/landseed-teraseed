import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-20 px-4 py-6 flex justify-between items-center max-w-6xl mx-auto">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <div className="relative h-32 w-60">
            <Image
              src="/images/landseed-logo.svg"
              alt="LandSeed Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link
              href="/"
              className="font-heading text-neutral-darkest font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="font-heading text-neutral-darkest font-medium hover:text-primary transition-colors"
            >
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
