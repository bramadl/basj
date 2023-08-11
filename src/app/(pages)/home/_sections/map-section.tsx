import MapPNG from "@basj/assets/images/png/map.png";

import Image from "next/image";
import { FC } from "react";

import { MapTitle } from "../_components/map-title";
import { MapDescription } from "../_components/map-description";

export const MapSection: FC = () => {
  return (
    <section
      id="map"
      className="flex py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] flex-col lg:flex-row items-start lg:items-center gap-[48px] md:gap-20 xl:gap-[72px] self-stretch bg-shades-gray-10"
    >
      <div className="lg:flex-1 flex flex-col items-center justify-center gap-5 self-stretch">
        <MapTitle />
        <MapDescription />
      </div>
      <div className="border-t lg:border-r lg:border-t-0 border-shades-gray-40 self-stretch lg:self-center h-px lg:h-[365px] lg:w-px" />
      <div className="lg:flex-1 w-full lg:w-auto">
        <Image alt="map" src={MapPNG} width={560} />
      </div>
    </section>
  );
};
