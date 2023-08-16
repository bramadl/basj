import { getStatisticContent } from "@basj/app/(shared)/(contents)/statistic.content";
import { getClientContent } from "@basj/app/(shared)/(contents)/client.content";
import { getCtaContent } from "@basj/app/(shared)/(contents)/cta.content";
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
import { getVideoContent } from "@basj/app/(shared)/(contents)/video.content";
import { getAboutPageContent } from "@basj/app/(shared)/(contents)/about-page.content";

export default async function AboutPage() {
  const { about } = await getAboutPageContent();
  const { companyProfile } = await getVideoContent();
  const { statistic } = await getStatisticContent();
  const { client } = await getClientContent();
  const { callToAction } = await getCtaContent();

  return (
    <Fragment>
      <HeroSection
        title={about.heroTitle}
        message={about.heroMessage}
        background={about.heroBackground}
      />
      <IntroductionSection
        tag={about.introductionTag}
        title={about.introductionTitle}
        message={about.introductionMessage}
        video={companyProfile}
      />
      <MissionSection
        title={about.missionTitle}
        missions={about.missionList}
        thumbnail={about.missionThumbnail}
      />
      <StatisticSection content={statistic} />
      <BenefitSection
        benefits={about.benefitItems}
        title={about.benefitTitle}
      />
      <GallerySection title={about.galleryTitle} images={about.galleryImages} />
      <MilestoneSection
        title={about.milestoneTitle}
        timelines={about.milestoneTimelines}
      />
      <ClientSection content={client} />
      <CtaSection content={callToAction} />
    </Fragment>
  );
}
