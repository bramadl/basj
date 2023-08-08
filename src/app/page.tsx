import { Navigation } from "@basj/components/partials/navigation/Navigation";

import { HeroSection } from "./_sections/hero-section";
import { IntroductionSection } from "./_sections/introduction-section";
import { BenefitSection } from "./_sections/benefit-section";
import { ProductSection } from "./_sections/product-section";
import { StatisticSection } from "./_sections/statistic-section";
import { ClientSection } from "./_sections/client-section";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <IntroductionSection />
      <BenefitSection />
      <ProductSection />
      <StatisticSection />
      <ClientSection />
    </main>
  );
}
