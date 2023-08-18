"use client";

import { useInView } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";

interface MilestoneTimelineStepProps {
  description: string;
  lastItem?: boolean;
  title: string;
  year: string;
}

export const MilestoneTimelineStep: FC<MilestoneTimelineStepProps> = ({
  description,
  lastItem,
  title,
  year,
}) => {
  const [isActive, setIsActive] = useState(false);

  const step = useRef<HTMLLIElement | null>(null);

  const isInView = useInView(
    { current: step.current },
    {
      margin: "200px 0px -200px 0px",
      amount: "all",
    }
  );

  const Dot: FC = () => {
    return (
      <div
        className={`w-7 h-7 rounded-full border transition-all ease-out duration-300 ${
          isActive
            ? "border-primary-forest-green bg-primary-light-forest-green"
            : "border-shades-gray-50 bg-shades-gray-20"
        }`}
      />
    );
  };

  const Line: FC = () => {
    return (
      <div
        className={`absolute w-px h-[240px] left-1/2 -translate-x-1/2 transition-all ease-out duration-300 ${
          isActive ? "bg-primary-forest-green" : "bg-shades-gray-40"
        }`}
      />
    );
  };

  useEffect(() => {
    setIsActive(isInView);
  }, [isInView]);

  return (
    <article ref={step} className="flex w-full items-center gap-[72px]">
      <p
        className={`w-[108px] flex-shrink-0 ${
          isActive ? "text-primary-forest-green" : "text-shades-gray-40"
        } text-desktop-p-700 transition-all ease-out duration-300`}
      >
        {year}
      </p>
      <div className="relative flex-shrink-0">
        <Dot />
        {!lastItem && <Line />}
      </div>
      <div className="flex flex-col justify-center items-start gap-4 flex-[1_0_0]">
        <h3
          className={`${
            isActive ? "text-primary-dark" : "text-shades-gray-40"
          } text-desktop-h4-400 transition-all ease-out duration-300`}
        >
          {title}
        </h3>
        <p
          className={`${
            isActive ? "text-primary-dark" : "text-shades-gray-40"
          } text-desktop-b1-400 transition-all ease-out duration-300`}
        >
          {description}
        </p>
      </div>
    </article>
  );
};
