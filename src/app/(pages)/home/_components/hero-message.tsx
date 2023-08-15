import { FC, HTMLAttributes } from "react";

interface HeroMessageProps extends HTMLAttributes<HTMLHeadingElement> {}

export const HeroMessage: FC<HeroMessageProps> = ({ ...props }) => {
  return (
    <p
      {...props}
      className={`${props.className} text-primary-white text-center`}
    >
      Our Wood Pellets encompass more than just energy, but a great biomass
      solution for future times to come.
    </p>
  );
};
