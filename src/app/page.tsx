import Hero from "./components/Hero";
import BenefitsSection from "./components/BenefitsSection";
import MeetLandseedSection from "./components/MeetLandseedSection";
import UnlockPotentialSection from "./components/UnlockPotentialSection";
import Testimonials from "./components/Testimonials";
import PathSteps from "./components/PathSteps";

export default function Home() {
  return (
    <div className="bg-neutral-background">
      <Hero />
      <BenefitsSection />
      <MeetLandseedSection />
      <UnlockPotentialSection />
      <Testimonials />
      <PathSteps />
    </div>
  );
}
