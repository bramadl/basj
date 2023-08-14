import { FC } from "react";

export const ClientTitle: FC = () => {
  return (
    <h2 className="text-mobile-h4-400 md:text-desktop-h4-400 opacity-0">
      Our solutions are recognized by{" "}
      <strong className="text-mobile-h4-700 md:text-desktop-h4-700">
        international certification bodies.
      </strong>
    </h2>
  );
};
