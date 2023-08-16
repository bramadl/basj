"use client";

import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";

import { StructuredTextDocument } from "react-datocms";
import { StatisticCardSummary } from "../(components)/statistic-card-summary";
import { Swiper } from "@basj/components/core/swiper/Swiper";
import { StatisticCard } from "../(components)/statistic-card";
import { Text } from "@basj/components/core/text/Text";

interface Summary {
  year: string;
  name: string;
  amount: number;
  unit: string;
  description: string;
}

interface Highlight {
  amount: number;
  name: string;
}

interface StatisticSectionProps {
  content: {
    title: StructuredTextDocument;
    summaries: Summary[];
    highlights: Highlight[];
  };
}

export const StatisticSection: FC<StatisticSectionProps> = ({ content }) => {
  const { scope } = useFadeTransition(
    {
      title: ".statistic-title",
      summary: ".statistic-card-summary",
      cards: ".statistic-card",
    },
    { staggerDelay: "-0.4", whenInView: true }
  );

  return (
    <section
      ref={scope}
      id="statistic"
      className="flex py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] flex-col items-start gap-12 md:gap-20 xl:gap-[72px] self-stretch bg-primary-forest-green"
    >
      <Text
        classNames={{
          heading:
            "statistic-title opacity-0 text-primary-white text-mobile-h2-700 lg:text-desktop-h3-700 xl:text-desktop-h2-700 text-center self-stretch",
        }}
        data={content.title}
      />
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 md:gap-12 self-stretch">
        {content.summaries.map((summary, key) => (
          <StatisticCardSummary
            key={key}
            {...summary}
            variant={key === 0 ? "white" : "primary"}
          />
        ))}
      </div>
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        items={content.highlights}
        slidesPerView={1}
        spaceBetween={24}
      >
        {(statistic: Summary) => <StatisticCard {...statistic} />}
      </Swiper>
    </section>
  );
};
