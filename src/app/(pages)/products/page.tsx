import { ClientSection } from "@basj/app/(shared)/(sections)/client-section";
import { CtaSection } from "@basj/app/(shared)/(sections)/cta-section";
import { ProductSection } from "@basj/app/(shared)/(sections)/product-section";

import { Fragment } from "react";

import { HeroSection } from "./_sections/hero-section";

export default function ProductsPage() {
  return (
    <Fragment>
      <HeroSection />
      <ProductSection />
      <ClientSection />
      <CtaSection />
    </Fragment>
  );
}
