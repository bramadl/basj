import { Fragment } from "react";

import { HeroSection } from "./_sections/hero-section";
import { IntroductionSection } from "./_sections/introduction-section";

export default function AboutPage() {
  return (
    <Fragment>
      <HeroSection />
      <IntroductionSection />
    </Fragment>
  );
}
