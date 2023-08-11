import { Callout } from "@basj/components/core/callout/Callout";

import { FC } from "react";

export const BenefitCallout: FC = () => {
  return (
    <div className="w-full">
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
    </div>
  );
};
