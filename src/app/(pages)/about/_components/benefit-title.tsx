import { FC, HTMLAttributes } from "react";

interface BenefitTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export const BenefitTitle: FC<BenefitTitleProps> = ({ ...props }) => {
  return (
    <h2
      {...props}
      className={`${props.className} text-center text-mobile-h2-400 lg:text-desktop-h3-400 self-stretch`}
    >
      These core values evolved with us as the company grew and{" "}
      <strong className="text-mobile-h2-700 lg:text-desktop-h3-700">
        we learned from our experiences.
      </strong>
    </h2>
  );
};
