"use client";

import { VideoPlayer } from "@basj/app/(shared)/(components)/video-player";
import { Button } from "@basj/components/core/button/Button";
import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import Link from "next/link";
import { FC } from "react";

interface ContactSectionProps {
  title: string;
  description: string;
}

export const ContactSection: FC<ContactSectionProps> = ({
  description,
  title,
}) => {
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
        <h2 className="contact-title opacity-0 self-stretch text-primary-dark text-mobile-h2-700 lg:text-desktop-h2-700">
          {title}
        </h2>
        <p className="contact-message opacity-0 self-stretch text-primary-dark text-mobile-b1-400 lg:text-desktop-b1-400">
          {description}
        </p>
        <article className="contact-callout opacity-0 flex py-5 px-6 flex-col justify-center items-start gap-6 self-stretch rounded-xl border border-shades-gray-20 bg-shades-gray-10">
          <p className="self-stretch text-primary-dark text-mobile-h6-400 lg:text-desktop-h6-400">
            Take a deeper look to our Company Profile.
          </p>
          <div className="flex items-center gap-16">
            <VideoPlayer>
              {(open) => (
                <Button icon onClick={open}>
                  Watch
                </Button>
              )}
            </VideoPlayer>
            <Link
              download="PT. BASJ Company Profile"
              href="/pdfs/pt_basj_company_profile.pdf"
              target="_blank"
            >
              <Button icon>Read</Button>
            </Link>
          </div>
        </article>
      </header>
      <Divider />
      <div
        className="contact-information opacity-0 flex py-10 lg:py-16 px-6 lg:px-[72px] flex-col justify-center items-center gap-5 self-stretch rounded-[20px] xl:w-[510px] flex-shrink-0"
        style={{
          background: "linear-gradient(226deg, #086057 0%, #05423C 100%)",
          boxShadow: "0px 0px 21px 0px rgba(0, 0, 0, 0.07)",
        }}
      >
        <p className="contact-information--title opacity-0 self-stretch text-primary-white text-center text-mobile-h5-400 lg:text-desktop-h5-400">
          For partners or investor relation inquiries
        </p>
        <Link
          className="self-stretch w-full"
          href={{
            protocol: "https",
            hostname: "wa.me",
            pathname: "6285360828888",
          }}
          target="_blank"
        >
          <button className="contact-information--button opacity-0 flex py-4 px-0 justify-center items-center gap-2.5 w-full rounded-xl bg-primary-white text-primary-forest-green">
            <i className="bx bx-sm bxl-whatsapp " />
            <span className="text-mobile-b1-700">Text us on WhatsApp</span>
          </button>
        </Link>
        <Link
          className="self-stretch w-full"
          href={{ protocol: "mailto", hostname: "berkahagung.sj@yahoo.com" }}
        >
          <button className="contact-information--button opacity-0 flex py-4 px-0 justify-center items-center gap-2.5 w-full rounded-xl border border-primary-white bg-transparent text-primary-white">
            <i className="bx bx-sm bx-envelope " />
            <span className="text-mobile-b1-700">Send us your e-mail</span>
          </button>
        </Link>
      </div>
    </section>
  );
};
