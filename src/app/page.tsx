import Hero from "./components/Hero";
import BenefitsSection from "./components/BenefitsSection";
import MeetLandseedSection from "./components/MeetLandseedSection";
import UnlockPotentialSection from "./components/UnlockPotentialSection";
import Testimonials from "./components/Testimonials";
import PathSteps from "./components/PathSteps";
import ImageCarousel from "./components/ImageCarousel";
import MoreInformation from "./components/MoreInformation";

export default function Home() {
  return (
    <div>
      <Hero />
      <BenefitsSection />
      <MeetLandseedSection />
      <UnlockPotentialSection />
      <Testimonials />
      <PathSteps />
      <ImageCarousel />
      <MoreInformation />
    </div>
  );
}
