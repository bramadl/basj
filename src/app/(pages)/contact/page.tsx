import { ClientSection } from "@basj/app/(shared)/(sections)/client-section";

import { Fragment } from "react";

import { HeroSection } from "./_sections/hero-section";
import { ContactSection } from "./_sections/contact-section";

export default function ProductsPage() {
  return (
    <Fragment>
      <HeroSection />
      <ContactSection />
      <ClientSection key={"shared-1"} />
    </Fragment>
  );
}
