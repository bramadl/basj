"use client";

import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";

import { GalleryTitle } from "../_components/gallery-title";
import { GalleryPhotos } from "../_components/gallery-photos";

export const GallerySection: FC = () => {
  const { scope } = useFadeTransition({
    title: "h2",
    photos: ".gallery-photo",
  }, { staggerDelay: "-0.4", whenInView: true });
  
  return (
    <section
      ref={scope}
      id="gallery-section"
      className="flex flex-col items-start gap-12 md:gap-20 xl:gap-[72px] self-stretch py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] bg-primary-white"
    >
      <GalleryTitle />
      <GalleryPhotos />
    </section>
  );
};
