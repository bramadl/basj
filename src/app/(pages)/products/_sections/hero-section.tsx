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
      className="basj-product-hero-background w-full min-h-screen flex items-center justify-center lg:justify-start"
    >
      <article className="flex w-[360px] md:w-[640px] lg:w-[768px] xl:w-[830px] py-16 px-8 lg:px-[120px] xl:px-[160px] flex-col justify-center items-center gap-8">
        <HeroTitle className="opacity-0" />
        <HeroMessage className="opacity-0" />
      </article>
    </section>
  );
};
