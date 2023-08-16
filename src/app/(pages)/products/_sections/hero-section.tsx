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
      className="basj-product-hero-background w-full min-h-[520px] flex items-center justify-center lg:justify-start"
      style={{
        background: `linear-gradient(0deg, rgba(51, 27, 10, 0.6) 0%, rgba(51, 27, 10, 0.6) 100%), url(${background.url}) bottom center/cover`,
      }}
    >
      <article className="flex w-[360px] md:w-[640px] lg:w-[768px] xl:w-[960px] py-16 px-8 lg:px-[120px] xl:px-[160px] flex-col justify-center items-center gap-8">
        <Text
          classNames={{
            heading:
              "hero-title opacity-0 self-stretch text-primary-white text-mobile-h1-700 md:text-desktop-h1-700 text-center lg:text-left",
          }}
          data={title}
        />
        <Text
          classNames={{
            paragraph:
              "hero-message opacity-0 self-stretch text-primary-white text-mobile-b1-400 md:text-desktop-b1-400 text-center lg:text-left",
          }}
          data={message}
        />
      </article>
    </section>
  );
};
