"use client";

import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";

export const HeroSection: FC = () => {
  const { scope } = useFadeTransition({
    title: "h1",
    message: "p",
  });

  return (
    <section
      ref={scope}
      id="hero"
      className="basj-about-hero-background w-full min-h-[520px] flex items-center justify-center lg:justify-start"
    >
      <article className="flex w-[360px] md:w-[640px] lg:w-[768px] xl:w-[960px] py-16 px-8 lg:px-[120px] xl:px-[160px] flex-col justify-center items-center gap-8">
        <h1 className="hero-title opacity-0 self-stretch text-primary-white text-mobile-h1-700 md:text-desktop-h1-700 text-center lg:text-left">
          Preserving Nature. Powering Future.
        </h1>
        <p className="hero-message opacity-0 self-stretch text-primary-white text-mobile-b1-400 md:text-desktop-b1-400 text-center lg:text-left">
          Whereas green biomass holds paramount importance in today&apos;s world
          for a multitude of reasons, our company becomes one of the performers
          to create a sustainable revelation in green biomass through the
          production of quality Wood Pellets.
        </p>
      </article>
    </section>
  );
};
