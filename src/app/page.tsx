import { Fragment } from "react";

import { HeroSection } from "./(pages)/home/_sections/hero-section";
import { IntroductionSection } from "./(pages)/home/_sections/introduction-section";
import { BenefitSection } from "./(pages)/home/_sections/benefit-section";
import { ProductSection } from "./(pages)/home/_sections/product-section";
import { TestimonySection } from "./(pages)/home/_sections/testimony-section";
import { MapSection } from "./(pages)/home/_sections/map-section";
import { ClientSection } from "./(shared)/(sections)/client-section";
import { CtaSection } from "./(shared)/(sections)/cta-section";
import { StatisticSection } from "./(shared)/(sections)/statistic-section";

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
