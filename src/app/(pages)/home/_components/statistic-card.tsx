import { FC } from "react";

interface StatisticCardProps {
  variant: "white" | "primary";
}

export const StatisticCard: FC<StatisticCardProps> = ({ variant }) => {
  return (
    <article
      className={`flex p-6 flex-col items-start gap-5 self-stretch rounded-xl ${
        variant === "white"
          ? "bg-primary-white text-primary-forest-green"
          : "bg-primary-dark-forest-green text-primary-white"
      }`}
    >
      <header className="flex items-center self-stretch">
        <p className="text-mobile-h5-400 md:text-desktop-h5-400">2024</p>
        <p className="text-mobile-h5-400 md:text-desktop-h5-400 px-4">•</p>
        <h3 className="flex-1 text-mobile-b2-700">WOOD PELLETS PRODUCTION</h3>
      </header>
      <section className="flex flex-col md:flex-row justify-center md:justify-normal items-start md:items-center md:gap-4">
        <p className="text-mobile-h1-700 md:text-desktop-h1-700">135,000+</p>
        <p className="text-mobile-h5-400 md:text-desktop-h5-400">tons /year</p>
      </section>
      <p className="self-stretch text-mobile-b1-400 md:text-desktop-b1-400">
        Due to the current expansion, in year of 2024 forward, PT. Berkah Agung
        Semesta Jaya will be able to produce more Wood Pellet yearly.
      </p>
    </article>
  );
};
