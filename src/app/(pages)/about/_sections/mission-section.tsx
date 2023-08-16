"use client";

import PreserveSVG from "@basj/assets/images/svg/preserve.svg";
import ProvideSVG from "@basj/assets/images/svg/provide.svg";
import PursueSVG from "@basj/assets/images/svg/pursue.svg";
import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import Image from "next/image";
import { FC } from "react";

import { MissionCard } from "../_components/mission-card";

export const MissionSection: FC = () => {
  const { scope } = useFadeTransition(
    {
      title: "h2",
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
      <h2 className="self-stretch text-primary-dark text-mobile-h2-700 lg:text-desktop-h3-700 xl:text-desktop-h2-700 opacity-0">
        Missions we pursue.
      </h2>
      <section className="flex flex-col lg:flex-row items-start gap-12 md:gap-20 xl:gap-[72px] self-stretch">
        <div className="flex flex-col  items-center gap-[52px] self-stretch">
          <MissionCard
            className="mission-card opacity-0"
            description="Our company is committed to further support the ongoing green agenda of reducing the impact of fossil fuels on the environment."
            image={PreserveSVG}
            title="Preserve"
          />
          <MissionCard
            className="mission-card opacity-0"
            description="Producing sustainable and superior quality wood pellets as a green alternative energy sources, promoting a greener future for individuals and businesses."
            image={ProvideSVG}
            title="Provide"
          />
          <MissionCard
            className="mission-card opacity-0"
            description="Continually innovating and improving our manufacturing processes to produce wood pellets with superior combustion efficiency, low emissions, and consistent quality."
            image={PursueSVG}
            title="Pursue"
          />
        </div>
        <div className="divider opacity-0 w-full lg:w-px h-px lg:h-auto lg:self-stretch bg-shades-gray-40" />
        <Image
          alt="mission-statement"
          className="mission-thumbnail opacity-0 rounded-full w-full aspect-square xl:w-full xl:h-full bg-[url(https://s3-alpha-sig.figma.com/img/94ac/f200/90050336bf941f350430ac593ec2e113?Expires=1693180800&Signature=mWHtVYtAAavvpTTDZIWa9OeUAj2p4BqKJ9Duxs2zm4ObFE3-OmsMC01Wn0DilWUwp9M6qNngB0IX4OA3D2AoU9G4Zr9LQvgC~C526C3yUO5nwlxBrkfJ5hwEFPP3iSeVDt5XwwSsVUQ8ywAHtY-7WWudKIdWh01MgSMgPdAXuKFTKENbrJzdOLeu76vv3BbAZP-Z4iDM6rn6sLlulerb09Z2HsmQKCKzANS8cdqYCGYjhKDK3RgtU7H4FdDzH4G5lbqpATrkCwwFpiOdKmC8vNl-hWoUjAIzhJp6nVR2keubdmEI1XHFPavGTVmardtdc~tBN34fAoB9OYxzC53w8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)]"
          src="https://s3-alpha-sig.figma.com/img/94ac/f200/90050336bf941f350430ac593ec2e113?Expires=1693180800&Signature=mWHtVYtAAavvpTTDZIWa9OeUAj2p4BqKJ9Duxs2zm4ObFE3-OmsMC01Wn0DilWUwp9M6qNngB0IX4OA3D2AoU9G4Zr9LQvgC~C526C3yUO5nwlxBrkfJ5hwEFPP3iSeVDt5XwwSsVUQ8ywAHtY-7WWudKIdWh01MgSMgPdAXuKFTKENbrJzdOLeu76vv3BbAZP-Z4iDM6rn6sLlulerb09Z2HsmQKCKzANS8cdqYCGYjhKDK3RgtU7H4FdDzH4G5lbqpATrkCwwFpiOdKmC8vNl-hWoUjAIzhJp6nVR2keubdmEI1XHFPavGTVmardtdc~tBN34fAoB9OYxzC53w8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          width={320}
          height={320}
        />
      </section>
    </section>
  );
};
