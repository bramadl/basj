import { FC } from "react";

import { StatisticCard } from "../_components/statistic-card";
import { StatisticSwiper } from "../_components/statistic-swiper";

export const StatisticSection: FC = () => {
  return (
    <section
      id="statistic"
      className="flex py-[72px] md:py-[100px] px-8 md:px-[120px] flex-col items-start gap-12 md:gap-[72px] self-stretch bg-primary-forest-green"
    >
      <h2 className="text-primary-white text-mobile-h2-700 md:text-desktop-h2-700 text-center self-stretch">
        Let the number speaks.
      </h2>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 self-stretch">
        <StatisticCard variant="white" />
        <StatisticCard variant="primary" />
      </div>
      <StatisticSwiper />
    </section>
  );
};
