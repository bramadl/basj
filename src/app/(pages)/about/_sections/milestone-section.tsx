"use client";

import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC, Fragment } from "react";

import { MilestoneSwiper } from "../_components/milestone-swiper";
import { MilestoneList } from "../_components/milestone-list";

interface MilestoneSectionProps {
  title: string;
  timelines: {
    id: string;
    year: string;
    title: string;
    description: string;
  }[];
}

export const MilestoneSection: FC<MilestoneSectionProps> = ({
  title,
  timelines,
}) => {
  const { scope } = useFadeTransition(
    {
      title: ".gallery-title",
    },
    { staggerDelay: "-0.4", whenInView: true }
  );

  return (
    <section
      ref={scope}
      id="milestone-section"
      className="flex flex-col items-start gap-12 md:gap-20 xl:gap-[72px] self-stretch py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] bg-primary-white"
    >
      <h2 className="gallery-title opacity-0 self-stretch text-primary-dark text-center text-mobile-h2-700 lg:text-desktop-h3-700 xl:text-desktop-h2-700">
        {title}
      </h2>
      <Fragment>
        <MilestoneSwiper milestones={timelines} />
        <MilestoneList milestones={timelines} />
      </Fragment>
    </section>
  );
};
