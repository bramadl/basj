import React, { FC, HTMLAttributes } from "react";

interface HeroTitleProps extends HTMLAttributes<HTMLDivElement> {}

export const HeroTitle: FC<HeroTitleProps> = ({ ...props }) => {
  return (
    <h1
      {...props}
      className={`${props.className} hero-title self-stretch text-primary-white text-mobile-h1-700 md:text-desktop-h1-700 text-center lg:text-left`}
    >
      Preserving Nature. Powering Future.
    </h1>
  );
};
