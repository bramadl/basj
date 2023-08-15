import { FC, HTMLAttributes } from "react";

interface HeroMessageProps extends HTMLAttributes<HTMLDivElement> {}

export const HeroMessage: FC<HeroMessageProps> = ({ ...props }) => {
  return (
    <p
      {...props}
      className={`${props.className} hero-message self-stretch text-primary-white text-mobile-b1-400 md:text-desktop-b1-400 text-center lg:text-left`}
    >
      Meticulously select the finest wood material, ensuring that each pellet is made from sustainably sourced and efficient energy output.
    </p>
  );
};
