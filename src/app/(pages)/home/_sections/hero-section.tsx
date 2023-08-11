import { Button } from "@basj/components/core/button/Button";

import { FC } from "react";

import { HeroTitle } from "../_components/hero-title";
import { HeroMessage } from "../_components/hero-message";

export const HeroSection: FC = () => {
  return (
    <section
      id="hero"
      className="basj-hero-background w-full min-h-screen flex items-center justify-center"
    >
      <article className="w-[360px] md:w-[640px] flex flex-col items-center justify-center gap-8 py-16 px-8 lg:p-0 mt-5 md:mt-16 lg:mt-8">
        <HeroTitle />
        <HeroMessage />
        <Button>Discover how</Button>
      </article>
    </section>
  );
};
