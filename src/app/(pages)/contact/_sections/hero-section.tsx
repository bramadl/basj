"use client";

import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";

import { HeroTitle } from "../_components/hero-title";
import { HeroMessage } from "../_components/hero-message";

export const HeroSection: FC = () => {
  const { scope } = useFadeTransition({
    title: "h1",
    message: "p",
  });

  return (
    <section
      ref={scope}
      id="hero"
      className="basj-contact-hero-background w-full min-h-screen flex items-center justify-center lg:justify-start overflow-hidden"
    >
      <article className="relative flex w-[360px] md:w-[640px] lg:w-[768px] xl:w-[830px] py-16 px-8 lg:px-[120px] xl:px-[160px] flex-col justify-center items-center gap-8">
        <div
          className="absolute z-[0] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[920px] md:w-[1080px] lg:w-[1200px] aspect-square -mt-60 lg:mt-0 lg:-ml-32 rounded-full"
          style={{
            borderRadius: "1196px",
            background:
              "linear-gradient(234deg, rgba(43, 38, 38, 0.79) 0%, rgba(24, 22, 22, 0.79) 100%)",
            backdropFilter: "blur(5px)",
          }}
        />
        <HeroTitle className="z-[1] opacity-0" />
        <HeroMessage className="z-[1] opacity-0" />
      </article>
    </section>
  );
};
