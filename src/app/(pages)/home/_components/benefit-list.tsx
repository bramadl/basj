import EnergySVG from "@basj/assets/images/svg/energy.svg";
import LeafSVG from "@basj/assets/images/svg/leaf.svg";
import MoneySVG from "@basj/assets/images/svg/money.svg";

import { FC } from "react";

import { BenefitCard } from "./benefit-card";

export const BenefitList: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-[52px] self-stretch">
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
  );
};
