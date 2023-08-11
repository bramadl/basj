import { FC } from "react";

export const HeroTitle: FC = () => {
  return (
    <h1 className="text-mobile-h1-400 md:text-desktop-h1-400 text-primary-white text-center">
      Unlock the full power of wood pellet{" "}
      <strong className="text-mobile-h1-700 md:text-desktop-h1-700">
        with BASJ.
      </strong>
    </h1>
  );
};
