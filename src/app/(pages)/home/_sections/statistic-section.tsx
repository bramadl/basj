"use client";

import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";

import { StatisticSwiper } from "../_components/statistic-swiper";
import { StatisticSummary } from "../_components/statistic-summary";
import { StatisticTitle } from "../_components/statistic-title";

export const StatisticSection: FC = () => {
  const { scope } = useFadeTransition(
    {
      title: "h2",
      summary: ".statistic-card-summary",
      cards: ".statistic-card",
    },
    { staggerDelay: "-0.4", whenInView: true }
  );

  return (
    <section
      ref={scope}
      id="statistic"
      className="flex py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] flex-col items-start gap-12 md:gap-20 xl:gap-[72px] self-stretch bg-primary-forest-green"
    >
      <StatisticTitle />
      <StatisticSummary />
      <StatisticSwiper />
    </section>
  );
};
