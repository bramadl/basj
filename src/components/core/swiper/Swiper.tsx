"use client";

import { FC, ReactNode, RefAttributes, useState } from "react";
import {
  Swiper as ReactSwiper,
  SwiperProps as ReactSwiperProps,
  SwiperRef,
  SwiperSlide,
} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { SwiperControls } from "./SwiperControls";

export interface SwiperProps
  extends RefAttributes<SwiperRef>,
    Omit<ReactSwiperProps, "children"> {
  children: (item: any) => ReactNode;
  customSlider?: (index: number) => ReactNode;
  items: any[];
}

export const Swiper: FC<SwiperProps> = ({
  children,
  customSlider,
  items,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <ReactSwiper
      {...props}
      className="w-full"
      initialSlide={activeIndex}
      onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      {items.map((item, key) => (
        <SwiperSlide key={key}>{children(item)}</SwiperSlide>
      ))}
      {items.length > 1 && (
        <div slot="container-end">
          {customSlider ? (
            customSlider(activeIndex)
          ) : (
            <div className="lg:hidden flex justify-center items-center gap-2 mt-6">
              {items.map((_, key) => (
                <SwiperControls
                  key={key}
                  activeIndex={activeIndex}
                  index={key}
                  setActiveIndex={setActiveIndex}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </ReactSwiper>
  );
};
