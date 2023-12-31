import EnergySVG from "@basj/assets/images/svg/energy.svg";
import LeafSVG from "@basj/assets/images/svg/leaf.svg";
import MoneySVG from "@basj/assets/images/svg/money.svg";

import { FC } from "react";

import { BenefitCard } from "./benefit-card";

interface BenefitListProps {
  items: {
    id: string;
    iconSvg: {
      alt: string;
      height: number;
      url: string;
      width: number;
    };
    name: string;
    description: string;
  }[];
}

export const BenefitList: FC<BenefitListProps> = ({ items }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-[52px] self-stretch">
      {items.map((benefit, index) => (
        <BenefitCard
          key={benefit.id}
          className="benefit-card opacity-0"
          description={benefit.description}
          image={benefit.iconSvg}
          title={benefit.name}
        />
      ))}
    </div>
  );
};
