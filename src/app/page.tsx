import Hero from "./components/Hero";
import BenefitsSection from "./components/BenefitsSection";
import MeetLandseedSection from "./components/MeetLandseedSection";
// import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <div className="bg-neutral-background">
      <Hero />
      <BenefitsSection />
      <MeetLandseedSection />
      {/* <FAQSection /> */}
    </div>
  );
}
