"use client";

import { IntroductionVideo } from "@basj/app/(shared)/(components)/introduction-video";
import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";

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
        <header className="flex flex-col gap-3">
          <p className="uppercase self-stretch text-primary-forest-green text-mobile-h6-700 xl:text-desktop-h6-700">
            Our Vision
          </p>
          <h2 className="self-stretch text-primary-dark text-mobile-h3-400 md:text-mobile-h2-400 xl:text-desktop-h2-400">
            Leading the way in{" "}
            <span className="text-mobile-h3-700 md:text-mobile-h2-700 xl:text-desktop-h3-700">
              renewable energy.
            </span>
          </h2>
        </header>
        <p className="self-stretch text-primary-dark text-desktop-b1-400">
          In the ongoing quest for sustainable energy solutions, wood pellets
          have become a shining example of how innovation can harmonize with
          nature&apos;s wisdom. Derived from renewable biomass sources from,
          wood pellets offer a viable pathway toward a greener and cleaner
          future for the generations to come. Currently, our local supply chains
          have expanded through all over North Sumatra including Medan, Siantar,
          Binjai, Langkat, and more.
        </p>
      </article>
    </section>
  );
};
