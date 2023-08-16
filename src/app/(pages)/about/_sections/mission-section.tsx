"use client";

import PreserveSVG from "@basj/assets/images/svg/preserve.svg";
import ProvideSVG from "@basj/assets/images/svg/provide.svg";
import PursueSVG from "@basj/assets/images/svg/pursue.svg";
import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";
import { Image as DatoImage } from "react-datocms";

import { MissionCard } from "../_components/mission-card";
import { ResponsiveImageType } from "react-datocms";

interface MissionSectionProps {
  title: string;
  missions: {
    id: string;
    iconSvg: {
      alt: string;
      height: number;
      url: string;
      width: number;
    };
    name: string;
    description: string;
  }[];
  thumbnail: {
    responsiveImage: ResponsiveImageType;
  };
}

export const MissionSection: FC<MissionSectionProps> = ({
  missions,
  thumbnail,
  title,
}) => {
  const { scope } = useFadeTransition(
    {
      title: ".mission-title",
      list: ".mission-card",
      divider: ".divider",
      thumbnail: ".mission-thumbnail",
    },
    { staggerDelay: "-0.6", whenInView: true }
  );

  return (
    <section
      ref={scope}
      id="mission-section"
      className="bg-primary-light-amber py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] flex flex-col gap-12 md:gap-20 xl:gap-[72px] self-stretch"
    >
      <h2 className="mission-title opacity-0 self-stretch text-primary-dark text-mobile-h2-700 lg:text-desktop-h3-700 xl:text-desktop-h2-700">
        {title}
      </h2>
      <section className="flex flex-col lg:flex-row items-start gap-12 md:gap-20 xl:gap-[72px] self-stretch">
        <div className="flex flex-col  items-center gap-[52px] self-stretch">
          {missions.map((mission) => (
            <MissionCard
              key={mission.id}
              className="mission-card opacity-0"
              description={mission.description}
              image={mission.iconSvg}
              title={mission.name}
            />
          ))}
        </div>
        <div className="divider opacity-0 w-full lg:w-px h-px lg:h-auto lg:self-stretch bg-shades-gray-40" />
        <DatoImage
          className="mission-thumbnail opacity-0 rounded-full w-full aspect-square xl:w-full xl:h-full"
          data={thumbnail.responsiveImage}
        />
      </section>
    </section>
  );
};
