"use client";

import { Swiper } from "@basj/components/core/swiper/Swiper";

import { FC } from "react";

export const StatisticSwiper: FC = () => {
  const statistics = [
    {
      year: 2023,
      amount: "45+",
      label: "partners",
    },
    {
      year: 2023,
      amount: "45+",
      label: "labors",
    },
    {
      year: 2023,
      amount: "3+",
      label: "countries",
    },
    {
      year: 2023,
      amount: "5+",
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
      {(statistic) => (
        <article className="flex p-8 flex-col items-start gap-6 self-stretch rounded-xl bg-primary-dark-forest-green text-primary-white">
          <p className="text-mobile-h5-400 md:text-desktop-h5-400">{statistic.year}</p>
          <section className="flex items-center gap-4">
            <p className="text-mobile-h1-400 lg:text-desktop-h2-400 xl:text-desktop-h1-400">{statistic.amount}</p>
            <h3 className="text-mobile-h5-400 lg:text-desktop-h6-400 xl:text-desktop-h5-400">{statistic.label}</h3>
          </section>
        </article>
      )}
    </Swiper>
  );
};
