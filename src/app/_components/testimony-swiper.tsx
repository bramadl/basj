"use client";

import { Swiper } from "@basj/components/core/swiper/Swiper";

import { FC } from "react";

export const TestimonySwiper: FC = () => {
  const testimonies = [
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
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
      items={testimonies}
      slidesPerView={1}
      spaceBetween={24}
    >
      {(testimony) => (
        <article className="flex p-8 flex-col items-start gap-6 self-stretch rounded-xl bg-primary-dark-forest-green text-primary-white">
          <p className="text-mobile-h5-400 md:text-desktop-h5-400">{testimony.year}</p>
          <section className="flex items-center gap-4">
            <p className="text-mobile-h1-400 md:text-desktop-h1-400">{testimony.amount}</p>
            <h3 className="text-mobile-h5-400 md:text-desktop-h5-400">{testimony.label}</h3>
          </section>
        </article>
      )}
    </Swiper>
  );
};
