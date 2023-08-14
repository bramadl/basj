"use client";

import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";

import { ProductSwiper } from "../(components)/product-swiper";
import { ProductTitle } from "../(components)/product-title";
import { ProductThumbnail } from "../(components)/product-thumbnail";

export const ProductSection: FC = () => {
  const { scope } = useFadeTransition({
    title: "h2",
    thumbnail: ".product-thumbnail",
    subtitle: "h3",
    cards: ".product-card"
  }, { staggerDelay: "-0.4", whenInView: true });
  
  return (
    <section
      ref={scope}
      id="product"
      className="flex py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] flex-col items-start gap-[72px] md:gap-20 self-stretch bg-white"
    >
      <div className="flex flex-col lg:flex-row justify-center items-start md:items-center gap-6 md:gap-[72px] self-stretch">
        <ProductTitle />
        <ProductThumbnail />
      </div>
      <div className="flex flex-col justify-center items-center md:items-start gap-6 md:gap-8 self-stretch">
        <ProductSwiper />
      </div>
    </section>
  );
};
