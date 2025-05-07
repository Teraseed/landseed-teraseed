import Hero from "./components/Hero";
import BenefitsSection from "./components/BenefitsSection";

export default function Home() {
  return (
    <div className="bg-neutral-background">
      <Hero />
      <BenefitsSection />
    </div>
  );
}
