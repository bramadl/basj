"use client";

import { useAnimatedCounter } from "@basj/hooks/useAnimatedCounter";
import { motion } from "framer-motion";
import { FC } from "react";

interface StatisticCardSummaryProps {
  amount: number;
  description: string;
  name: string;
  unit: string;
  variant: "white" | "primary";
  year: string;
}

export const StatisticCardSummary: FC<StatisticCardSummaryProps> = ({
  amount,
  description,
  name,
  unit,
  variant,
  year,
}) => {
  const { counter, scope } = useAnimatedCounter(amount);

  return (
    <article
      ref={scope}
      className={`statistic-card-summary opacity-0 flex-1 flex p-6 flex-col items-start gap-5 self-stretch rounded-xl ${
        variant === "white"
          ? "bg-primary-white text-primary-forest-green"
          : "bg-primary-dark-forest-green text-primary-white"
      }`}
    >
      <header className="flex items-center self-stretch">
        <p className="text-mobile-h5-400 md:text-desktop-h5-400">{year}</p>
        <p className="text-mobile-h5-400 md:text-desktop-h5-400 px-4">•</p>
        <h3 className="flex-1 text-mobile-b2-700 uppercase">{name}</h3>
      </header>
      <section className="flex flex-col md:flex-row justify-center md:justify-normal items-start md:items-center md:gap-4">
        <motion.p className="text-mobile-h1-700 md:text-desktop-h1-700">
          {counter}
        </motion.p>
        <p className="text-mobile-h5-400 md:text-desktop-h5-400">{unit}</p>
      </section>
      <p className="self-stretch text-mobile-b1-400 md:text-desktop-b1-400">
        {description}
      </p>
    </article>
  );
};
