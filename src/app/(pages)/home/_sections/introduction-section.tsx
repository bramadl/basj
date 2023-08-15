"use client";

import { IntroductionVideo } from "@basj/app/(shared)/(components)/introduction-video";
import { Text } from "@basj/components/core/text/Text";
import { Button } from "@basj/components/core/button/Button";
import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";

import { StructuredTextDocument } from "react-datocms";

interface IntroductionSectionProps {
  button: string;
  message: StructuredTextDocument;
  title: StructuredTextDocument;
}

export const IntroductionSection: FC<IntroductionSectionProps> = ({
  button,
  message,
  title,
}) => {
  const { scope } = useFadeTransition(
    {
      video: ".introduction-video",
      title: ".introduction-title",
      message: ".introduction-message",
      button: ".introduction-button",
    },
    { staggerDelay: "-0.8", whenInView: true }
  );

  return (
    <section
      ref={scope}
      id="introduction"
      className="flex flex-col lg:flex-row items-start md:items-center justify-center md:justify-between gap-12 md:gap-20 xl:gap-[120px] self-stretch md:self-auto py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] bg-white"
    >
      <IntroductionVideo className="introduction-video opacity-0" />
      <article className="md:flex-1 flex flex-col items-start justify-center gap-6 self-stretch">
        <Text
          classNames={{
            heading:
              "introduction-title opacity-0 text-mobile-h2-400 lg:text-desktop-h5-400 xl:text-desktop-h4-400",
            strong:
              "text-mobile-h2-700 lg:text-desktop-h5-700 xl:text-desktop-h4-700 text-primary-forest-green",
          }}
          data={title}
        />
        <Text
          classNames={{
            paragraph:
              "introduction-message opacity-0 text-mobile-b1-400 lg:text-desktop-b1-400",
          }}
          data={message}
        />
        <Button className="introduction-button opacity-0" icon>
          {button}
        </Button>
      </article>
    </section>
  );
};
