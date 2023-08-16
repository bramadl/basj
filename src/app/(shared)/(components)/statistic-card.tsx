"use client";

import { useAnimatedCounter } from "@basj/hooks/useAnimatedCounter";

import { FC } from "react";
import { motion } from "framer-motion";

interface StatisticCardProps {
  amount: number;
  name: string;
}

export const StatisticCard: FC<StatisticCardProps> = ({ amount, name }) => {
  const { counter, scope } = useAnimatedCounter(amount);

  return (
    <article
      ref={scope}
      className="statistic-card opacity-0 flex p-8 flex-col items-start gap-6 self-stretch rounded-xl bg-primary-dark-forest-green text-primary-white"
    >
      <section className="flex items-center gap-4">
        <motion.p className="text-mobile-h1-400 lg:text-desktop-h2-400 xl:text-desktop-h1-400">
          {counter}
        </motion.p>
        <h3 className="text-mobile-h5-400 lg:text-desktop-h6-400">{name}</h3>
      </section>
    </article>
  );
};
