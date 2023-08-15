import { performRequest } from "@basj/libs/datocms";

import { Fragment } from "react";

import { HeroSection } from "./(pages)/home/_sections/hero-section";
import { IntroductionSection } from "./(pages)/home/_sections/introduction-section";
import { BenefitSection } from "./(pages)/home/_sections/benefit-section";
import { MapSection } from "./(pages)/home/_sections/map-section";

import { ClientSection } from "./(shared)/(sections)/client-section";
import { CtaSection } from "./(shared)/(sections)/cta-section";
import { ProductSection } from "./(shared)/(sections)/product-section";
import { StatisticSection } from "./(shared)/(sections)/statistic-section";

const QUERY = `
  query Home {
    homePage {
      heroTitle {
        value
      }
      heroMessage {
        value
      }
      heroButton
      heroBackground {
        url
        video {
          thumbnailUrl
        }
      }
      introductionTitle {
        value
      }
      introductionMessage {
        value
      }
      introductionButton
      benefitTitle {
        value
      }
      benefitItems {
        id
        iconSvg {
          url
        }
        name
        description
      }
      benefitCallout {
        value
      }
      mapTitle {
        value
      }
      mapMessage {
        value
      }
    }
  }
`;

export default async function Home() {
  const { homePage: content } = await performRequest({ query: QUERY });

  return (
    <Fragment>
      <HeroSection
        background={content.heroBackground}
        button={content.heroButton}
        message={content.heroMessage}
        title={content.heroTitle}
      />
      <IntroductionSection
        button={content.introductionButton}
        message={content.introductionMessage}
        title={content.introductionTitle}
      />
      <BenefitSection
        callout={content.benefitCallout}
        items={content.benefitItems}
        title={content.benefitTitle}
      />
      <ClientSection key={"shared-1"} />
      <ProductSection key={"shared-3"} />
      <StatisticSection key={"shared-4"} />
      <MapSection message={content.mapMessage} title={content.mapTitle} />
      <CtaSection key={"shared-2"} />
    </Fragment>
  );
}
