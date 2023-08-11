import { Fragment } from "react";

import { HeroSection } from "./(pages)/home/_sections/hero-section";
import { IntroductionSection } from "./(pages)/home/_sections/introduction-section";
import { BenefitSection } from "./(pages)/home/_sections/benefit-section";
import { ProductSection } from "./(pages)/home/_sections/product-section";
import { StatisticSection } from "./(pages)/home/_sections/statistic-section";
import { ClientSection } from "./(pages)/home/_sections/client-section";
import { TestimonySection } from "./(pages)/home/_sections/testimony-section";
import { MapSection } from "./(pages)/home/_sections/map-section";
import { CtaSection } from "./(pages)/home/_sections/cta-section";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <IntroductionSection />
      <BenefitSection />
      <ProductSection />
      <StatisticSection />
      <ClientSection />
      <TestimonySection />
      <MapSection />
      <CtaSection />
    </Fragment>
  );
}
