"use client";

import MapPNG from "@basj/assets/images/png/map.png";

import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

export const MapSection: FC = () => {
  return (
    <section
      id="map"
      className="flex py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] flex-col lg:flex-row items-start lg:items-center gap-[48px] md:gap-20 xl:gap-[72px] self-stretch bg-shades-gray-10"
    >
      <motion.div
        className="lg:flex-1 flex flex-col items-center justify-center gap-5 self-stretch"
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        viewport={{ margin: "-100px" }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-mobile-h3-400 lg:text-desktop-h4-400 xl:text-desktop-h3-400">
          Supported by powerful partners{" "}
          <strong className="text-mobile-h3-700 lg:text-desktop-h4-700 xl:text-desktop-h3-700">
            around the world.
          </strong>
        </h2>
        <p className="text-mobile-b1-400 md:text-desktop-b1-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </motion.div>
      <motion.div
        className="border-t lg:border-r lg:border-t-0 border-shades-gray-40 self-stretch lg:self-center h-px lg:h-[365px] lg:w-px"
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        viewport={{ margin: "-100px" }}
        whileInView={{ opacity: 1 }}
      />
      <motion.div
        className="lg:flex-1 w-full lg:w-auto"
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        viewport={{ margin: "-100px" }}
        whileInView={{ opacity: 1 }}
      >
        <Image alt="map" src={MapPNG} width={560} />
      </motion.div>
    </section>
  );
};
