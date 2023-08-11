"use client";

import { Button } from "@basj/components/core/button/Button";

import { FC, useEffect } from "react";

import { HeroTitle } from "../_components/hero-title";
import { HeroMessage } from "../_components/hero-message";
import { AnimationSequence, useAnimate } from "framer-motion";

export const HeroSection: FC = () => {
  const elements = {
    title: "h1",
    message: "p",
    button: "button",
  };

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sequence: AnimationSequence = [
      [elements.title, { opacity: [0, 1] }],
      [elements.message, { opacity: [0, 1] }, { at: "-0.8" }],
      [elements.button, { opacity: [0, 1] }, { at: "-0.8" }],
    ];

    const animation = animate(sequence, {
      defaultTransition: { duration: 1, ease: "easeOut" },
    });

    return animation.stop;
  }, [animate, elements.button, elements.message, elements.title]);

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
