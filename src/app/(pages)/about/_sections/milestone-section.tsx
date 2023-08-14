"use client";

import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";

import { MilestoneTitle } from "../_components/milestone-title";
import { MilestoneTimeline } from "../_components/milestone-timeline";

export const MilestoneSection: FC = () => {
  const { scope } = useFadeTransition(
    {
      title: "h2",
    },
    { staggerDelay: "-0.4", whenInView: true }
  );

  return (
    <section
      ref={scope}
      id="milestone-section"
      className="flex flex-col items-start gap-12 md:gap-20 xl:gap-[72px] self-stretch py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] bg-primary-white"
    >
      <MilestoneTitle />
      <MilestoneTimeline />
    </section>
  );
};
