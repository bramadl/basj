"use client";

import { Swiper } from "@basj/components/core/swiper/Swiper";
import { useSwiper } from "swiper/react";
import { Button } from "@basj/components/core/button/Button";

import { FC, useMemo } from "react";
import { Image as DatoImage, ResponsiveImageType } from "react-datocms";
import { Tab } from "@headlessui/react";

interface ImageSliderProps {
  activeIndex: number;
}

interface PointProps {
  name: string;
}

interface TabPanelProps {
  number: string;
  name: string;
  message: string;
  points: string[];
  images: ResponsiveImageType[];
}

interface ProductionContentsProps {
  content: {
    number: string;
    name: string;
    message: string;
    points: string[];
    images: ResponsiveImageType[];
  }[];
  currentTab: number;
  onSlideNext: () => void;
  onSlidePrev: () => void;
}

export const ProductionContents: FC<ProductionContentsProps> = ({
  content,
  currentTab,
  onSlideNext,
  onSlidePrev,
}) => {
  const isFirstContent = useMemo(() => currentTab === 0, [currentTab]);

  const isLastContent = useMemo(
    () => currentTab === content.length - 1,
    [content.length, currentTab]
  );

  const TabPanel: FC<TabPanelProps> = ({
    images,
    message,
    name,
    number,
    points,
  }) => {
    const ImageSlider: FC<ImageSliderProps> = ({ activeIndex }) => {
      const swiper = useSwiper();

      const PrevButton: FC = () => {
        return (
          <button
            disabled={swiper.isBeginning}
            onClick={() => swiper.slidePrev()}
          >
            <i
              className={`bx bx-sm bx-left-arrow-alt ${
                swiper.isBeginning
                  ? "text-shades-gray-30/50"
                  : "text-shades-gray-30"
              }`}
            />
          </button>
        );
      };

      const NextButton: FC = () => {
        return (
          <button disabled={swiper.isEnd} onClick={() => swiper.slideNext()}>
            <i
              className={`bx bx-sm bx-right-arrow-alt ${
                swiper.isEnd ? "text-shades-gray-30/50" : "text-shades-gray-30"
              }`}
            />
          </button>
        );
      };

      return (
        <div className="absolute z-[1] bottom-3 left-1/2 -translate-x-1/2 flex w-[112px] p-2 justify-center items-center gap-4 rounded-[28px] bg-[rgba(43,38,38,0.70)]">
          <PrevButton />
          <p className="text-shades-gray-30 text-desktop-b2-700">
            {activeIndex + 1}/{images.length}
          </p>
          <NextButton />
        </div>
      );
    };

    const Content: FC = () => {
      const Point: FC<PointProps> = ({ name }) => {
        return (
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-bold-amber" />
            <p className="text-primary-dark text-mobile-p-400 lg:text-desktop-p-400 whitespace-nowrap">
              {name}
            </p>
          </div>
        );
      };

      return (
        <article className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 flex lg:w-[800px] lg:h-[620px] p-6 lg:py-[120px] lg:pr-[72px] lg:pl-[360px] flex-col justify-center items-center lg:items-start gap-5 lg:gap-10 lg:flex-shrink-0 self-stretch rounded-xl lg:rounded-[20px] bg-primary-light-forest-green">
          <p className="self-stretch text-primary-forest-green text-mobile-h4-700 lg:text-desktop-h4-700">
            {number}
          </p>
          <h3 className="self-stretch text-primary-dark text-mobile-h4-400 lg:text-desktop-h4-400">
            {name}
          </h3>
          <p className="self-stretch text-primary-dark text-mobile-p-400 lg:text-desktop-p-400">
            {message}
          </p>
          <div className="grid grid-cols-2 gap-4 place-items-stretch self-stretch">
            {points.map((point, key) => (
              <Point key={key} name={point} />
            ))}
          </div>
          <footer className="flex items-center gap-4">
            <Button
              className="disabled:opacity-50"
              disabled={isFirstContent}
              size="sm"
              onClick={onSlidePrev}
            >
              <i className="bx bx-sm bx-left-arrow-alt" />
              Prev
            </Button>
            <Button
              className="disabled:opacity-50"
              disabled={isLastContent}
              size="sm"
              onClick={onSlideNext}
            >
              Next
              <i className="bx bx-sm bx-right-arrow-alt" />
            </Button>
          </footer>
        </article>
      );
    };

    return (
      <Tab.Panel className="relative flex lg:block flex-col justify-center items-center gap-6 self-stretch">
        <div className="relative lg:w-[640px] lg:h-[480px]">
          <Swiper
            customSlider={(activeIndex) => (
              <ImageSlider activeIndex={activeIndex} />
            )}
            spaceBetween={32}
            items={images}
          >
            {(image) => (
              <DatoImage
                className="relative w-full aspect-square lg:h-[480px] rounded-xl"
                data={image}
                objectFit="cover"
                objectPosition="center"
              />
            )}
          </Swiper>
        </div>
        <Content />
      </Tab.Panel>
    );
  };

  return (
    <Tab.Panels className="px-8 md:px-[120px] xl:px-[160px] self-stretch lg:mt-[72px]">
      {content.map((content, key) => (
        <TabPanel key={key} {...content} />
      ))}
    </Tab.Panels>
  );
};
