import PreserveSVG from "@basj/assets/images/svg/preserve.svg";
import ProvideSVG from "@basj/assets/images/svg/provide.svg";
import PursueSVG from "@basj/assets/images/svg/pursue.svg";

import { MissionCard } from "./mission-card";

import { FC } from "react";

export const MissionList: FC = () => {
  return (
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
  );
};
