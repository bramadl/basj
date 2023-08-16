"use client";

import { BenefitList } from "@basj/app/(shared)/(components)/benefit-list";
import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";

export const BenefitSection: FC = () => {
  const { scope } = useFadeTransition(
    {
      title: ".benefit-title",
      items: ".benefit-card",
    },
    { staggerDelay: "-0.4", whenInView: true }
  );

  return (
    <section
      ref={scope}
      id="benefits"
      className="flex flex-col items-start gap-12 md:gap-20 xl:gap-[72px] self-stretch py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] bg-shades-gray-10"
    >
      <h2 className="benefit-title opacity-0 text-center text-mobile-h2-400 lg:text-desktop-h3-400 self-stretch">
        These core values evolved with us as the company grew and{" "}
        <strong className="text-mobile-h2-700 lg:text-desktop-h3-700">
          we learned from our experiences.
        </strong>
      </h2>
      <BenefitList items={[]} />
    </section>
  );
};
