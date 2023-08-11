import { FC } from "react";

import { StatisticCard } from "./statistic-card";

export const StatisticSummary: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 md:gap-12 self-stretch">
      <StatisticCard variant="white" />
      <StatisticCard variant="primary" />
    </div>
  );
};
