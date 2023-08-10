"use client";

import { Button } from "@basj/components/core/button/Button";

import { FC } from "react";
import { motion } from "framer-motion";

export const HeroSection: FC = () => {
  return (
    <section
      id="hero"
      className="basj-hero-background w-full min-h-screen flex items-center justify-center"
    >
      <motion.article
        animate={{ opacity: 1 }}
        className="w-[360px] md:w-[640px] flex flex-col items-center justify-center gap-8 py-16 px-8 lg:p-0 mt-5 md:mt-16 lg:mt-8"
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
      >
        <h1 className="text-mobile-h1-400 md:text-desktop-h1-400 text-primary-white text-center">
          Unlock the full power of wood pellet{" "}
          <strong className="text-mobile-h1-700 md:text-desktop-h1-700">
            with BASJ.
          </strong>
        </h1>
        <p className="text-primary-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button>Discover how</Button>
      </motion.article>
    </section>
  );
};
