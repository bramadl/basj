import { FC, HTMLAttributes } from "react";

interface BenefitTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export const BenefitTitle: FC<BenefitTitleProps> = ({ ...props }) => {
  return (
    <h2
      {...props}
      className={`${props.className} text-center text-mobile-h2-400 lg:text-desktop-h3-400 xl:text-desktop-h2-400 self-stretch`}
    >
      Wood Pellets,{" "}
      <strong className="text-mobile-h2-700 lg:text-desktop-h3-700 xl:text-desktop-h2-700">
        the future of clean energy.
      </strong>
    </h2>
  );
};
