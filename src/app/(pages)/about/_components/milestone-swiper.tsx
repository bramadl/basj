"use client";

import { Swiper } from "@basj/components/core/swiper/Swiper";

import { FC } from "react";

import { MilestoneTimelineCard } from "./milestone-timeline-card";

interface MilestoneSwiperProps {
  milestones: {
    description: string;
    title: string;
    year: string;
  }[];
}

export const MilestoneSwiper: FC<MilestoneSwiperProps> = ({ milestones }) => {
  return (
    <div className="lg:hidden">
      <Swiper items={milestones} slidesPerView={1} spaceBetween={32}>
        {(item) => <MilestoneTimelineCard {...item} />}
      </Swiper>
    </div>
  );
};
