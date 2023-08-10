"use client";

import MapPNG from "@basj/assets/images/png/map.png";

import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

export const MapSection: FC = () => {
  return (
    <section
      id="map"
      className="flex py-[72px] md:py-[100px] px-8 md:px-[160px] flex-col md:flex-row items-start md:items-center gap-[48px] md:gap-[72px] self-stretch bg-shades-gray-10"
    >
      <motion.div
        className="md:flex-1 flex flex-col items-center justify-center gap-5 self-stretch"
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        viewport={{ margin: "-100px" }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-mobile-h3-400 md:text-desktop-h3-400">
          Supported by powerful partners{" "}
          <strong className="text-mobile-h3-700 md:text-desktop-h3-700">
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
        className="border-t md:border-r md:border-t-0 border-shades-gray-40 self-stretch md:self-center h-px md:h-[365px] md:w-px"
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        viewport={{ margin: "-100px" }}
        whileInView={{ opacity: 1 }}
      />
      <motion.div
        className="md:flex-1 w-full md:w-auto"
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
