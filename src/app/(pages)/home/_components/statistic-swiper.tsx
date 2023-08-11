"use client";

import { Swiper } from "@basj/components/core/swiper/Swiper";

import { FC } from "react";
import { StatisticCard } from "./statistic-card";

export const StatisticSwiper: FC = () => {
  const statistics = [
    {
      amount: 45,
      label: "partners",
    },
    {
      amount: 45,
      label: "labors",
    },
    {
      amount: 3,
      label: "countries",
    },
    {
      amount: 5,
      label: "investors",
    },
  ];

  return (
    <Swiper
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
      items={statistics}
      slidesPerView={1}
      spaceBetween={24}
    >
      {(statistic) => <StatisticCard {...statistic} />}
    </Swiper>
  );
};
