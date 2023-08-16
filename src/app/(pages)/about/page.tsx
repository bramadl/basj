import { ClientSection } from "@basj/app/(shared)/(sections)/client-section";
import { CtaSection } from "@basj/app/(shared)/(sections)/cta-section";
import { StatisticSection } from "@basj/app/(shared)/(sections)/statistic-section";

import { Fragment } from "react";

import { HeroSection } from "./_sections/hero-section";
import { IntroductionSection } from "./_sections/introduction-section";
import { MissionSection } from "./_sections/mission-section";
import { BenefitSection } from "./_sections/benefit-section";
import { GallerySection } from "./_sections/gallery-section";
import { MilestoneSection } from "./_sections/milestone-section";

export default function AboutPage() {
  return (
    <Fragment>
      <HeroSection />
      <IntroductionSection />
      <MissionSection />
      <StatisticSection key={"shared-3"} />
      <BenefitSection />
      <GallerySection />
      <MilestoneSection />
      <ClientSection key={"shared-1"} />
      <CtaSection key={"shared-2"} />
    </Fragment>
  );
}
