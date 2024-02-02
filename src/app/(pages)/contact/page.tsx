import { getClientContent } from "@basj/app/(shared)/(contents)/client.content";
import { getContactPageContent } from "@basj/app/(shared)/(contents)/contact-page.content";
import { ClientSection } from "@basj/app/(shared)/(sections)/client-section";

import { Fragment } from "react";

import { HeroSection } from "./_sections/hero-section";
import { ContactSection } from "./_sections/contact-section";

export default async function ProductsPage() {
  const { contact } = await getContactPageContent();
  const { client } = await getClientContent();

  return (
    <Fragment>
      <HeroSection
        background={contact.contact.heroBackground}
        title={contact.contact.heroTitle}
        message={contact.contact.heroMessage}
      />
      <ContactSection
        title={contact.contact.contactTitle}
        description={contact.contact.contactDescription}
        contacts={contact.contacts}
      />
      <ClientSection content={client} />
    </Fragment>
  );
}
