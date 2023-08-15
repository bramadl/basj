import { FC, HTMLAttributes } from "react";

interface HeroMessageProps extends HTMLAttributes<HTMLDivElement> {}

export const HeroMessage: FC<HeroMessageProps> = ({ ...props }) => {
  return (
    <p
      {...props}
      className={`${props.className} hero-message self-stretch text-primary-white text-mobile-b1-400 md:text-desktop-b1-400 text-center lg:text-left`}
    >
      We are glad to have joined forces with industry partners from Indonesia,
      Japan, and Korea. Looking forward to cooperate with more.
    </p>
  );
};
