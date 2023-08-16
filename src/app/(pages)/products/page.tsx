import { getClientContent } from "@basj/app/(shared)/(contents)/client.content";
import { getProductContent } from "@basj/app/(shared)/(contents)/product.content";
import { getCtaContent } from "@basj/app/(shared)/(contents)/cta.content";
import { ClientSection } from "@basj/app/(shared)/(sections)/client-section";
import { CtaSection } from "@basj/app/(shared)/(sections)/cta-section";
import { ProductSection } from "@basj/app/(shared)/(sections)/product-section";

import { Fragment } from "react";

import { HeroSection } from "./_sections/hero-section";
import { ProductionSection } from "./_sections/production-section";
import { getProductPageContent } from "@basj/app/(shared)/(contents)/product-page.content";

export default async function ProductsPage() {
  const { product } = await getProductPageContent();
  const { client } = await getClientContent();
  const { product: productSection } = await getProductContent();
  const { callToAction } = await getCtaContent();
  
  return (
    <Fragment>
      <HeroSection background={product.heroBackground} message={product.heroMessage} title={product.heroTitle} />
      <ProductSection content={productSection} />
      <ProductionSection title={product.productionTitle} content={product.productionContent} />
      <ClientSection content={client} />
      <CtaSection content={callToAction} />
    </Fragment>
  );
}
