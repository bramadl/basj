import { Fragment } from "react";

import { HeroSection } from "./(pages)/home/_sections/hero-section";
import { IntroductionSection } from "./(pages)/home/_sections/introduction-section";
import { BenefitSection } from "./(pages)/home/_sections/benefit-section";
import { MapSection } from "./(pages)/home/_sections/map-section";

import { getClientContent } from "./(shared)/(contents)/client.content";
import { getCtaContent } from "./(shared)/(contents)/cta.content";
import { getHomeContent } from "./(shared)/(contents)/home.content";
import { getProductContent } from "./(shared)/(contents)/product.content";
import { getStatisticContent } from "./(shared)/(contents)/statistic.content";
import { getVideoContent } from "./(shared)/(contents)/video.content";
import { ClientSection } from "./(shared)/(sections)/client-section";
import { CtaSection } from "./(shared)/(sections)/cta-section";
import { ProductSection } from "./(shared)/(sections)/product-section";
import { StatisticSection } from "./(shared)/(sections)/statistic-section";

export default async function Home() {
  const { home } = await getHomeContent();
  const { client } = await getClientContent();
  const { product } = await getProductContent();
  const { statistic } = await getStatisticContent();
  const { callToAction } = await getCtaContent();
  const { companyProfile } = await getVideoContent();

  return (
    <Fragment>
      <HeroSection
        background={home.heroBackground}
        button={home.heroButton}
        message={home.heroMessage}
        title={home.heroTitle}
      />
      <IntroductionSection
        button={home.introductionButton}
        message={home.introductionMessage}
        title={home.introductionTitle}
        video={companyProfile}
      />
      <BenefitSection
        callout={home.benefitCallout}
        items={home.benefitItems}
        title={home.benefitTitle}
      />
      <ClientSection content={client} />
      <ProductSection content={product} />
      <StatisticSection content={statistic} />
      <MapSection message={home.mapMessage} title={home.mapTitle} />
      <CtaSection content={callToAction} />
    </Fragment>
  );
}
