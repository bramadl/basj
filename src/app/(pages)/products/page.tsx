import { ClientSection } from "@basj/app/(shared)/(sections)/client-section";
import { CtaSection } from "@basj/app/(shared)/(sections)/cta-section";
import { ProductSection } from "@basj/app/(shared)/(sections)/product-section";

import { Fragment } from "react";

import { HeroSection } from "./_sections/hero-section";
import { ProductionSection } from "./_sections/production-section";

export default function ProductsPage() {
  return (
    <Fragment>
      <HeroSection />
      <ProductSection key={"shared-3"} />
      <ProductionSection />
      <ClientSection key={"shared-1"} />
      <CtaSection key={"shared-2"} />
    </Fragment>
  );
}
