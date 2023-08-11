"use client";

import { Button } from "@basj/components/core/button/Button";
import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";

import { HeroTitle } from "../_components/hero-title";
import { HeroMessage } from "../_components/hero-message";

export const HeroSection: FC = () => {
  const { scope } = useFadeTransition({
    title: "h1",
    message: "p",
    button: "button",
  });

  return (
    <section
      ref={scope}
      id="hero"
      className="basj-hero-background w-full min-h-screen flex items-center justify-center"
    >
      <article className="w-[360px] md:w-[640px] flex flex-col items-center justify-center gap-8 py-16 px-8 lg:p-0 mt-5 md:mt-16 lg:mt-8">
        <HeroTitle className="opacity-0" />
        <HeroMessage className="opacity-0" />
        <Button className="opacity-0">Discover how</Button>
      </article>
    </section>
  );
};
