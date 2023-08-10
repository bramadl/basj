"use client";

import { FC } from "react";
import { motion } from "framer-motion";

import { StatisticCard } from "../_components/statistic-card";
import { StatisticSwiper } from "../_components/statistic-swiper";

export const StatisticSection: FC = () => {
  return (
    <section
      id="statistic"
      className="flex py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] flex-col items-start gap-12 md:gap-20 xl:gap-[72px] self-stretch bg-primary-forest-green"
    >
      <motion.h2
        className="text-primary-white text-mobile-h2-700 lg:text-desktop-h3-700 xl:text-desktop-h2-700 text-center self-stretch"
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        viewport={{ margin: "-100px" }}
        whileInView={{ opacity: 1 }}
      >
        Let the number speaks.
      </motion.h2>
      <motion.div
        className="flex flex-col lg:flex-row items-start lg:items-center gap-6 md:gap-12 self-stretch"
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        viewport={{ margin: "-100px" }}
        whileInView={{ opacity: 1 }}
      >
        <StatisticCard variant="white" />
        <StatisticCard variant="primary" />
      </motion.div>
      <StatisticSwiper />
    </section>
  );
};
