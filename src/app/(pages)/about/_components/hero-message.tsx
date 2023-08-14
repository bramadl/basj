import { FC, HTMLAttributes } from "react";

interface HeroMessageProps extends HTMLAttributes<HTMLDivElement> {}

export const HeroMessage: FC<HeroMessageProps> = ({ ...props }) => {
  return (
    <p
      {...props}
      className={`${props.className} hero-message self-stretch text-primary-white text-mobile-b1-400 md:text-desktop-b1-400 text-center lg:text-left`}
    >
      Whereas green biomass holds paramount importance in today&apos;s world for
      a multitude of reasons, our company becomes one of the performers to
      create a sustainable revelation in green biomass through the production of
      quality Wood Pellets.
    </p>
  );
};
