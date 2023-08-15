"use client";

import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";

import { ContactTitle } from "../_components/contact-title";
import { ContactMessage } from "../_components/contact-message";
import { ContactCallout } from "../_components/contact-callout";
import { ContactInformation } from "../_components/contact-information";

export const ContactSection: FC = () => {
  const { scope } = useFadeTransition(
    {
      title: ".contact-title",
      message: ".contact-message",
      callout: ".contact-callout",
      divider: ".divider",
      information: ".contact-information",
      informationTitle: ".contact-information--title",
      informationButtons: ".contact-information--button",
    },
    { staggerDelay: "-0.8", whenInView: true }
  );

  const Divider: FC = () => {
    return (
      <div className="divider opacity-0 w-full h-px xl:w-px xl:h-auto xl:self-stretch bg-shades-gray-40" />
    );
  };

  return (
    <section
      ref={scope}
      id="contact-section"
      className="flex flex-col xl:flex-row items-start gap-8 md:gap-[72px] self-stretch py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] bg-primary-white"
    >
      <header className="flex flex-col gap-8 lg:gap-6">
        <ContactTitle />
        <ContactMessage />
        <ContactCallout />
      </header>
      <Divider />
      <ContactInformation />
    </section>
  );
};
