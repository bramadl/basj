import { Fragment } from "react";

import { HeroSection } from "./(pages)/home/_sections/hero-section";
import { IntroductionSection } from "./(pages)/home/_sections/introduction-section";
import { BenefitSection } from "./(pages)/home/_sections/benefit-section";
import { MapSection } from "./(pages)/home/_sections/map-section";
import { ClientSection } from "./(shared)/(sections)/client-section";
import { CtaSection } from "./(shared)/(sections)/cta-section";
import { ProductSection } from "./(shared)/(sections)/product-section";
import { StatisticSection } from "./(shared)/(sections)/statistic-section";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <IntroductionSection />
      <BenefitSection />
      <ClientSection />
      <ProductSection />
      <StatisticSection />
      <MapSection />
      <CtaSection />
    </Fragment>
  );
}
