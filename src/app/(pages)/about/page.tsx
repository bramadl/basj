import { ClientSection } from "@basj/app/(shared)/(sections)/client-section";
import { CtaSection } from "@basj/app/(shared)/(sections)/cta-section";
import { StatisticSection } from "@basj/app/(shared)/(sections)/statistic-section";

import { Fragment } from "react";

import { HeroSection } from "./_sections/hero-section";
import { IntroductionSection } from "./_sections/introduction-section";
import { BenefitSection } from "./_sections/benefit-section";

export default function AboutPage() {
  return (
    <Fragment>
      <HeroSection />
      <IntroductionSection />
      <StatisticSection />
      <BenefitSection />
      <ClientSection />
      <CtaSection />
    </Fragment>
  );
}
