import { Navigation } from "@basj/components/partials/navigation/Navigation";

import { HeroSection } from "./_sections/hero-section";
import { IntroductionSection } from "./_sections/introduction-section";
import { BenefitSection } from "./_sections/benefit-section";
import { ProductSection } from "./_sections/product-section";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <IntroductionSection />
      <BenefitSection />
      <ProductSection />
    </main>
  );
}
