import EnergySVG from "@basj/assets/images/svg/energy.svg";
import LeafSVG from "@basj/assets/images/svg/leaf.svg";
import MoneySVG from "@basj/assets/images/svg/money.svg";
import { Callout } from "@basj/components/core/callout/Callout";

import React, { FC } from "react";

import { BenefitCard } from "../_components/benefit-card";

export const BenefitSection: FC = () => {
  return (
    <section
      id="benefits"
      className="flex flex-col items-start gap-12 md:gap-[72px] self-stretch py-[72px] md:py-[100px] px-8 md:px-[120px] bg-shades-gray-10"
    >
      <h2 className="text-center text-mobile-h2-400 md:text-desktop-h2-400 self-stretch">
        Wood Pellets,{" "}
        <strong className="text-mobile-h2-700 md:text-desktop-h2-700">
          the future of clean energy.
        </strong>
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-[52px] self-stretch">
        <BenefitCard
          description="Wood pellets can be replenished over time. This makes them a sustainable alternative to fossil fuels, which are a finite resource."
          image={EnergySVG}
          title="Renewable"
        />
        <BenefitCard
          description="Wood pellets produce lower emissions of greenhouse gases than fossil fuels, such as coal and oil."
          image={LeafSVG}
          title="Low emissions"
        />
        <BenefitCard
          description="Wood pellets are a cost-effective way to generate heat and electricity, and a viable option for businesses and homeowners who are looking to reduce their energy costs."
          image={MoneySVG}
          title="Economically viable"
        />
      </div>
      <Callout>
        <article>
          <p className="text-shades-gray-50 text-mobile-h6-400">
            A 2020 study by the U.S. Department of Energy found that wood
            pellets can be a cost-effective way to generate heat and
            electricity.
          </p>
          <p className="text-mobile-h6-400">
            The study found that wood pellets can save businesses and homeowners
            up to 30% on their energy costs.
          </p>
        </article>
      </Callout>
    </section>
  );
};
