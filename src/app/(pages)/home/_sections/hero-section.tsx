"use client";

import { Button } from "@basj/components/core/button/Button";
import { Text } from "@basj/components/core/text/Text";
import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import dynamic from "next/dynamic";
import { FC } from "react";
import { StructuredTextDocument } from "react-datocms";

interface HeroSectionProps {
  background: {
    mimeType: string;
    url: string;
    video: {
      thumbnailUrl: string;
    };
  };
  button: string;
  message: StructuredTextDocument;
  title: StructuredTextDocument;
}

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const HeroSection: FC<HeroSectionProps> = ({
  background,
  button,
  message,
  title,
}) => {
  const { scope } = useFadeTransition({
    title: ".hero-title",
    message: ".hero-message",
    button: ".hero-button",
  });

  return (
    <section
      ref={scope}
      id="hero"
      className="w-full h-screen flex items-center justify-center"
    >
      <article className="relative z-[1] w-[360px] md:w-[640px] flex flex-col items-center justify-center gap-8 py-16 px-8 lg:p-0 mt-5 md:mt-16 lg:mt-8">
        <Text
          classNames={{
            heading:
              "hero-title opacity-0 text-mobile-h1-400 md:text-desktop-h1-400 text-primary-white text-center",
            strong: "text-mobile-h1-700 md:text-desktop-h1-700",
          }}
          data={title}
        />
        <Text
          classNames={{
            paragraph:
              "hero-message opacity-0 text-primary-white text-center text-mobile-b1-400 lg:text-desktop-b1-400",
          }}
          data={message}
        />
        <Button className="hero-button opacity-0">{button}</Button>
      </article>
      <div className="absolute top-0 left-0 w-full h-full after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[linear-gradient(0deg,rgba(51,27,10,0.6)_0%,rgba(51,27,10,0.6)_100%)] overflow-hidden">
        <ReactPlayer
          height={"100%"}
          loop
          muted
          playing
          style={{ scale: 1.5 }}
          url={background.url}
          volume={0}
          width={"100%"}
        />
      </div>
    </section>
  );
};
