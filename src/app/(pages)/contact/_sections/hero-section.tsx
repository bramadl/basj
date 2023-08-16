"use client";

import { Text } from "@basj/components/core/text/Text";
import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";
import { StructuredTextDocument } from "react-datocms";

interface HeroSectionProps {
  background: {
    url: string;
  };
  message: StructuredTextDocument;
  title: StructuredTextDocument;
}

export const HeroSection: FC<HeroSectionProps> = ({
  background,
  message,
  title,
}) => {
  const { scope } = useFadeTransition({
    title: ".hero-title",
    message: ".hero-message",
  });

  return (
    <section
      ref={scope}
      id="hero"
      className="w-full min-h-[520px] flex items-center justify-center lg:justify-start overflow-hidden"
      style={{
        background: `linear-gradient(0deg, rgba(51, 27, 10, 0.6) 0%, rgba(51, 27, 10, 0.6) 100%), url(${background.url}) bottom center/cover`,
      }}
    >
      <article className="relative flex w-[360px] md:w-[640px] lg:w-[768px] xl:w-[960px] py-16 px-8 lg:px-[120px] xl:px-[160px] flex-col justify-center items-center gap-8">
        <div
          className="absolute z-[0] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[920px] md:w-[1080px] lg:w-[1200px] aspect-square -mt-60 lg:mt-0 lg:-ml-32 rounded-full"
          style={{
            borderRadius: "1196px",
            background:
              "linear-gradient(234deg, rgba(43, 38, 38, 0.79) 0%, rgba(24, 22, 22, 0.79) 100%)",
            backdropFilter: "blur(5px)",
          }}
        />
        <Text
          classNames={{
            heading:
              "hero-title opacity-0 z-[1] self-stretch text-primary-white text-mobile-h1-700 md:text-desktop-h1-700 text-center lg:text-left",
          }}
          data={title}
        />
        <Text
          classNames={{
            paragraph:
              "hero-message opacity-0 z-[1] self-stretch text-primary-white text-mobile-b1-400 md:text-desktop-b1-400 text-center lg:text-left",
          }}
          data={message}
        />
      </article>
    </section>
  );
};
