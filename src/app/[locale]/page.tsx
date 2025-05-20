import Hero from "../components/Hero";
import BenefitsSection from "../components/BenefitsSection";
import MeetLandseedSection from "../components/MeetLandseedSection";
import dynamic from "next/dynamic";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

// Dynamically import below-the-fold components
const UnlockPotentialSection = dynamic(
  () => import("../components/UnlockPotentialSection"),
  {
    loading: () => (
      <div className="animate-pulse bg-gray-100 h-96 w-full"></div>
    ),
    ssr: true,
  }
);

const Testimonials = dynamic(() => import("../components/Testimonials"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96 w-full"></div>,
  ssr: true,
});

const PathSteps = dynamic(() => import("../components/PathSteps"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96 w-full"></div>,
  ssr: true,
});

const ImageCarousel = dynamic(() => import("../components/ImageCarousel"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96 w-full"></div>,
  ssr: true,
});

const ContactForm = dynamic(() => import("../components/ContactForm"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96 w-full"></div>,
  ssr: true,
});

const MoreInformation = dynamic(() => import("../components/MoreInformation"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96 w-full"></div>,
  ssr: true,
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <BenefitsSection />
      <MeetLandseedSection />
      <UnlockPotentialSection />
      <Testimonials />
      <PathSteps />
      <ImageCarousel />
      <ContactForm />
      <MoreInformation />
    </div>
  );
}
