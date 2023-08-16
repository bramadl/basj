"use client";

import { FC, useState } from "react";
import { Tab } from "@headlessui/react";

import { ProductionTabs } from "../_components/production-tabs";
import { ProductionContents } from "../_components/production-contents";
import { ResponsiveImageType } from "react-datocms";

interface ProductionSectionProps {
  title: string;
  content: {
    id: string;
    number: string;
    tabLabel: string;
    name: string;
    message: string;
    points: {
      name: string;
    }[];
    images: {
      responsiveImage: ResponsiveImageType;
    }[];
  }[];
}

export const ProductionSection: FC<ProductionSectionProps> = ({
  title,
  content,
}) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  function goToNextTab() {
    setSelectedTab((prevIndex) => prevIndex + 1);
  }

  function goToPrevTab() {
    setSelectedTab((prevIndex) => prevIndex - 1);
  }

  return (
    <section
      id="production-section"
      className="flex flex-col items-start justify-center gap-12 md:gap-[72px] self-stretch py-[72px] md:py-20 xl:py-[100px] bg-white"
    >
      <header className="px-8 md:px-[120px] xl:px-[160px] self-stretch">
        <h2 className="md:flex-1 text-mobile-h2-700 lg:text-desktop-h3-700 xl:text-desktop-h2-700 text-center">
          {title}
        </h2>
      </header>
      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
        <ProductionTabs
          currentTab={selectedTab}
          tabs={content.map((content) => ({
            number: content.number,
            tab: content.tabLabel,
          }))}
        />
        <ProductionContents
          content={content.map((content) => ({
            number: content.number,
            name: content.name,
            message: content.message,
            points: content.points.map((point) => point.name),
            images: content.images.map((image) => image.responsiveImage),
          }))}
          currentTab={selectedTab}
          onSlideNext={goToNextTab}
          onSlidePrev={goToPrevTab}
        />
      </Tab.Group>
    </section>
  );
};
