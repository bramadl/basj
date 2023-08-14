import { FC, Fragment } from "react";

export const IntroductionTitle: FC = () => {
  return (
    <header className="flex flex-col gap-3">
      <p className="uppercase self-stretch text-primary-forest-green text-mobile-h6-700 xl:text-desktop-h6-700">
        Our Vision
      </p>
      <h2 className="self-stretch text-primary-dark text-mobile-h3-400 md:text-mobile-h2-400 xl:text-desktop-h2-400">
        Leading the way in{" "}
        <span className="text-mobile-h3-700 md:text-mobile-h2-700 xl:text-desktop-h3-700">
          renewable energy.
        </span>
      </h2>
    </header>
  );
};
