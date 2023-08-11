import { FC } from "react";

export const IntroductionTitle: FC = () => {
  return (
    <h2 className="text-mobile-h2-400 lg:text-desktop-h5-400 xl:text-desktop-h4-400">
      Since 2015, we&apos;ve been committed to preserving nature through produce{" "}
      <strong className="text-mobile-h2-700 lg:text-desktop-h5-700 xl:text-desktop-h4-700 text-primary-forest-green">
        Wood Pellets as a biomass energy source.
      </strong>
    </h2>
  );
};
