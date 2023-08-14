import QuoteSVG from "@basj/assets/images/svg/quote.svg";

import Image from "next/image";
import { FC } from "react";

export const TestimonyCard: FC = () => {
  return (
    <div className="testimony-card flex flex-col gap-8 text-primary-white md:max-w-[509px]">
      <Image alt="quote" src={QuoteSVG} />
      <article className="flex flex-col gap-4">
        <h3 className="text-mobile-h6-400 md:text-desktop-h6-400">
          We are pleased to work with PT Berkah Agung Semesta Jaya, lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </h3>
        <p className="text-mobile-b2-400 uppercase">
          Bram Adl, Chief Of PLN Indonesia
        </p>
      </article>
    </div>
  );
};
