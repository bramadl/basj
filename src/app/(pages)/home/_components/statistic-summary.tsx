import { FC } from "react";

import { StatisticCardSummary } from "./statistic-card-summary";

export const StatisticSummary: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 md:gap-12 self-stretch">
      <StatisticCardSummary variant="white" />
      <StatisticCardSummary variant="primary" />
    </div>
  );
};
