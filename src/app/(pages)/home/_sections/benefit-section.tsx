"use client";

import { BenefitList } from "@basj/app/(shared)/(components)/benefit-list";
import { Callout } from "@basj/components/core/callout/Callout";
import { Text } from "@basj/components/core/text/Text";
import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";
import { StructuredTextDocument } from "react-datocms";

interface BenefitSectionProps {
  callout: StructuredTextDocument;
  items: any[];
  title: StructuredTextDocument;
}

export const BenefitSection: FC<BenefitSectionProps> = ({
  callout,
  items,
  title,
}) => {
  const { scope } = useFadeTransition(
    {
      title: ".benefit-title",
      listItems: ".benefit-card",
      callout: ".benefit-callout",
    },
    { staggerDelay: "-0.6", whenInView: true }
  );

  return (
    <section
      ref={scope}
      id="benefits"
      className="flex flex-col items-start gap-12 md:gap-20 xl:gap-[72px] self-stretch py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] bg-primary-light-amber"
    >
      <Text
        classNames={{
          heading:
            "benefit-title opacity-0 text-center text-mobile-h2-400 lg:text-desktop-h3-400 xl:text-desktop-h2-400 self-stretch",
          strong:
            "text-mobile-h2-700 lg:text-desktop-h3-700 xl:text-desktop-h2-700",
        }}
        data={title}
      />
      <BenefitList items={items} />
      <div className="benefit-callout opacity-0 w-full">
        <Callout>
          <article>
            <Text
              classNames={{
                mark: "text-shades-gray-50",
                paragraph: "text-mobile-h6-400",
              }}
              data={callout}
            />
          </article>
        </Callout>
      </div>
    </section>
  );
};
