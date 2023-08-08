"use client";

import QuoteSVG from "@basj/assets/images/svg/quote.svg";

import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

export const TestimonySection: FC = () => {
  return (
    <section
      id="testimony"
      className="flex py-16 px-8 md:py-[100px] mx:px-[120px] flex-col justify-center items-center self-stretch"
      style={{
        background:
          "linear-gradient(0deg, #2B2626B2, #2B2626B2), url(https://s3-alpha-sig.figma.com/img/9973/335a/86f95eda8c49629d1945db8e2b7ddc10?Expires=1692576000&Signature=AGJBV9vpncLLyIYrVobBWCXEbrwAsCsWmYz~fuTXaQImi~ed5F2k4VEZTMzJRCT9G9mlOWKKYS7xEAapnXXkc0edCtz0AcvdpsLDrT6k7TWVDEMDf~bR--Tt9F~G4-i5B42FF8cc5xnFMgRQemyNc4EgU4bKqw~LvKm8~Fi13ppY5uXKSoyl~82En1tBQxWR~P-mKDau3LvSVwYJS0eiA~wjRSl2xBZqYT~~xoXN8yCjrDk~UzTktxUwDzSVeQReHLHxf3pX41-Jd24gO68dBhipBhOFLJZBE~XXkL8S~Bh3UtV-DoomJHRGOBipm~4st~dyQ30jKZq7fZvBbQ1-fg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4) fixed center/cover",
      }}
    >
      <motion.div
        className="flex flex-col gap-8 text-primary-white md:max-w-[509px]"
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        viewport={{ margin: "-100px" }}
        whileInView={{ opacity: 1 }}
      >
        <Image alt="quote" src={QuoteSVG} />
        <article className="flex flex-col gap-4">
          <h3 className="text-mobile-h6-400 md:text-desktop-h6-400">
            We are pleased to work with PT Berkah Agung Semesta Jaya, lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </h3>
          <p className="text-mobile-b2-400 uppercase">
            Bram Adl, Chief Of PLN Indonesia
          </p>
        </article>
      </motion.div>
    </section>
  );
};
