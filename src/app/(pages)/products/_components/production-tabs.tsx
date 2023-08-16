import { Tab } from "@headlessui/react";
import { FC } from "react";

interface TabItemProps {
  isActive: boolean;
  number: string;
  label: string;
}

interface ProductionTabsProps {
  currentTab: number;
  tabs: {
    number: string;
    tab: string;
  }[];
}

export const ProductionTabs: FC<ProductionTabsProps> = ({
  currentTab,
  tabs,
}) => {
  const BorderLine: FC = () => {
    return (
      <div className="absolute z-0 left-0 bottom-0 w-full h-px border-b border-shades-gray-30" />
    );
  };

  const TabItem: FC<TabItemProps> = ({ isActive, label, number }) => {
    const Dot: FC = () => {
      return (
        <div className="w-5 h-5 rounded-full bg-primary-white border border-shades-gray-30" />
      );
    };

    return (
      <Tab className="relative z-[1] flex flex-col gap-2 items-start translate-y-2.5">
        <p className="text-desktop-b2-700 xl:text-desktop-p-700">
          <span className="text-primary-forest-green">{number}</span>&nbsp;{" "}
          <span
            className={`${
              isActive ? "text-primary-forest-green" : "text-primary-dark"
            } transition-colors ease-out duration-300`}
          >
            {label}
          </span>
        </p>
        <Dot />
      </Tab>
    );
  };

  return (
    <Tab.List className="relative hidden lg:flex items-start justify-between px-8 md:px-[120px] xl:px-[160px] self-stretch">
      {tabs.map((tab, index) => (
        <TabItem
          key={index}
          isActive={currentTab === index}
          number={tab.number}
          label={tab.tab}
        />
      ))}
      <BorderLine />
    </Tab.List>
  );
};
