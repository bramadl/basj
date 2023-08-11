import { FC } from "react";

import { BenefitTitle } from "../_components/benefit-title";
import { BenefitList } from "../_components/benefit-list";
import { BenefitCallout } from "../_components/benefit-callout";

export const BenefitSection: FC = () => {
  return (
    <section
      id="benefits"
      className="flex flex-col items-start gap-12 md:gap-20 xl:gap-[72px] self-stretch py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] bg-shades-gray-10"
    >
      <BenefitTitle />
      <BenefitList />
      <BenefitCallout />
    </section>
  );
};
