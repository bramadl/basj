"use client";

import MapPNG from "@basj/assets/images/png/map.png";
import { Text } from "@basj/components/core/text/Text";
import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import Image from "next/image";
import { FC } from "react";
import { StructuredTextDocument } from "react-datocms";

interface MapSectionProps {
  title: StructuredTextDocument;
  message: StructuredTextDocument;
}

export const MapSection: FC<MapSectionProps> = ({ message, title }) => {
  const { scope } = useFadeTransition(
    {
      title: ".map-title",
      message: ".map-message",
      divider: ".divider",
      image: ".map-image",
    },
    { staggerDelay: "-0.8", whenInView: true }
  );

  const Divider: FC = () => {
    return (
      <div className="divider border-t lg:border-r lg:border-t-0 border-shades-gray-40 self-stretch lg:self-center h-px lg:h-[365px] lg:w-px" />
    );
  };

  return (
    <section
      ref={scope}
      id="map"
      className="flex py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] flex-col lg:flex-row items-start lg:items-center gap-[48px] md:gap-20 xl:gap-[72px] self-stretch bg-white"
    >
      <div className="lg:flex-1 flex flex-col items-center justify-center gap-5 self-stretch">
        <Text
          classNames={{
            heading:
              "map-title opacity-0 text-mobile-h3-400 lg:text-desktop-h4-400 xl:text-desktop-h3-400",
            strong:
              "text-mobile-h3-700 lg:text-desktop-h4-700 xl:text-desktop-h3-700",
          }}
          data={title}
        />
        <Text
          classNames={{
            paragraph:
              "map-message opacity-0 text-mobile-b1-400 md:text-desktop-b1-400",
          }}
          data={message}
        />
      </div>
      <Divider />
      <div className="lg:flex-1 w-full lg:w-auto">
        <Image alt="map" className="map-image" src={MapPNG} width={560} />
      </div>
    </section>
  );
};
