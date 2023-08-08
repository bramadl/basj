import { Button } from "@basj/components/core/button/Button";

import React, { FC } from "react";

export const HeroSection: FC = () => {
  return (
    <section
      id="hero"
      className="basj-hero-background w-full min-h-screen flex items-center justify-center"
    >
      <article className="w-[360px] md:w-[640px] flex flex-col items-center justify-center gap-8 py-16 px-8 md:p-0 mt-5 md:mt-8">
        <h1 className="text-mobile-h1-400 md:text-desktop-h1-400 text-primary-white text-center">
          Unlock the full power of wood pellet{" "}
          <strong className="text-mobile-h1-700 md:text-desktop-h1-700">
            with BASJ.
          </strong>
        </h1>
        <p className="text-primary-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button>Discover how</Button>
      </article>
    </section>
  );
};
