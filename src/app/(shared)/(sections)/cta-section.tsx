"use client";

import { Button } from "@basj/components/core/button/Button";
import { Text } from "@basj/components/core/text/Text";
import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import Link from "next/link";
import { FC } from "react";
import { StructuredTextDocument } from "react-datocms";

interface CtaSectionProps {
  content: {
    background: {
      url: string;
    };
    title: StructuredTextDocument;
    message: StructuredTextDocument;
  };
}

export const CtaSection: FC<CtaSectionProps> = ({ content }) => {
  const { scope } = useFadeTransition(
    {
      title: ".cta-title",
      message: ".cta-message",
      link: ".cta-link",
    },
    { staggerDelay: "-0.6", whenInView: true }
  );

  return (
    <section
      ref={scope}
      id="cta"
      className="flex py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] flex-col justify-center items-center self-stretch"
      style={{
        background: `url(${content.background.url}) fixed center center/cover`,
      }}
    >
      <div className="flex py-10 md:py-20 px-8 md:px-[120px] xl:px-[200px] flex-col justify-center items-center gap-6 md:gap-7 self-stretch md:self-auto rounded-[20px] md:rounded-[40px] bg-[rgba(176,93,36,0.40)] backdrop-blur-[5px] text-primary-white">
        <Text
          classNames={{
            heading:
              "cta-title opacity-0 text-center text-mobile-h3-400 md:text-desktop-h3-400",
            strong: "text-mobile-h3-700 md:text-desktop-h3-700",
          }}
          data={content.title}
        />
        <Text
          classNames={{
            paragraph:
              "cta-message opacity-0 text-center text-mobile-b1-400 md:text-desktop-b1-400",
          }}
          data={content.message}
        />
        <Link className="cta-link opacity-0" href={{ pathname: "/contact" }}>
          <Button outline="light">Contact us</Button>
        </Link>
      </div>
    </section>
  );
};
