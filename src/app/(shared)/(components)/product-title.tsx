import { FC } from "react";

export const ProductTitle: FC = () => {
  return (
    <h2 className="md:flex-1 text-mobile-h2-400 lg:text-desktop-h3-400 xl:text-desktop-h2-400 opacity-0">
      Proven biomass solutions already exist.{" "}
      <strong className="text-mobile-h2-700 lg:text-desktop-h3-700 xl:text-desktop-h2-700">
        We make them happen.
      </strong>
    </h2>
  );
};
