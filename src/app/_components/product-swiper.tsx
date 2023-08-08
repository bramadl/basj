"use client";

import { Dispatch, FC, SetStateAction, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ProductCard } from "./product-card";

interface SwiperControlsProps {
  activeIndex: number;
  index: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

const SwiperControls: FC<SwiperControlsProps> = ({
  activeIndex,
  index,
  setActiveIndex,
}) => {
  const swiper = useSwiper();

  function clickHandler() {
    swiper.slideTo(index);
    setActiveIndex(index);
  }

  return (
    <button
      className={`${
        index === activeIndex ? "bg-shades-gray-50" : "bg-shades-gray-20"
      } w-2 h-2 rounded-full transition-colors ease-out duration-300`}
      onClick={clickHandler}
    />
  );
};

export const ProductSwiper: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <Swiper
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 28,
        },
      }}
      className="w-full"
      initialSlide={activeIndex}
      loop
      slidesPerView={1}
      spaceBetween={32}
    >
      <SwiperSlide>
        <ProductCard className="h-[239px]" />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard className="h-[239px]" />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard className="h-[239px]" />
      </SwiperSlide>
      <div
        className="md:hidden flex justify-center items-center gap-2 mt-6"
        slot="container-end"
      >
        <SwiperControls
          activeIndex={activeIndex}
          index={0}
          setActiveIndex={setActiveIndex}
        />
        <SwiperControls
          activeIndex={activeIndex}
          index={1}
          setActiveIndex={setActiveIndex}
        />
        <SwiperControls
          activeIndex={activeIndex}
          index={2}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </Swiper>
  );
};
