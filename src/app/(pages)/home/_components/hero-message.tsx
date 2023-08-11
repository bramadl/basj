import { FC, HTMLAttributes } from "react";

interface HeroMessageProps extends HTMLAttributes<HTMLHeadingElement> {}

export const HeroMessage: FC<HeroMessageProps> = ({ ...props }) => {
  return (
    <p
      {...props}
      className={`${props.className} text-primary-white text-center`}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  );
};
