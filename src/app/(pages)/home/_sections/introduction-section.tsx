"use client";

import { Button } from "@basj/components/core/button/Button";
import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";

import { IntroductionVideo } from "../_components/introduction-video";
import { IntroductionTitle } from "../_components/introduction-title";
import { IntroductionMessage } from "../_components/introduction-message";

export const IntroductionSection: FC = () => {
  const { scope } = useFadeTransition(
    {
      video: ".introduction-video",
      article: ".introduction-article",
    },
    { staggerDelay: "-0.6", whenInView: true }
  );

  return (
    <section
      ref={scope}
      id="introduction"
      className="flex flex-col lg:flex-row items-start md:items-center justify-center md:justify-between gap-12 md:gap-20 xl:gap-[120px] self-stretch md:self-auto py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] bg-shades-gray-10"
    >
      <IntroductionVideo className="introduction-video opacity-0" />
      <article className="introduction-article md:flex-1 flex flex-col items-start justify-center gap-6 self-stretch opacity-0">
        <IntroductionTitle />
        <IntroductionMessage />
        <Button icon>Learn more</Button>
      </article>
    </section>
  );
};
