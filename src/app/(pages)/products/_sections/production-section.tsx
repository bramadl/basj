"use client";

import { FC, useMemo, useState } from "react";
import { Tab } from "@headlessui/react";

import { ProductionTitle } from "../_components/production-title";
import { ProductionTabs } from "../_components/production-tabs";
import { ProductionContents } from "../_components/production-contents";

export const ProductionSection: FC = () => {
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
      <ProductionTitle />
      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
        <ProductionTabs currentTab={selectedTab} />
        <ProductionContents
          currentTab={selectedTab}
          onSlideNext={goToNextTab}
          onSlidePrev={goToPrevTab}
        />
      </Tab.Group>
    </section>
  );
};
