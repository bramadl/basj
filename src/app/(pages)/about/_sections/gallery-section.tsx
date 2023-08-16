"use client";

import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";
import { Image as DatoImage, ResponsiveImageType } from "react-datocms";

interface GallerySectionProps {
  title: string;
  images: {
    responsiveImage: ResponsiveImageType;
  }[];
}

export const GallerySection: FC<GallerySectionProps> = ({ images, title }) => {
  const { scope } = useFadeTransition(
    {
      title: ".gallery-title",
      photos: ".gallery-photo",
    },
    { staggerDelay: "-0.4", whenInView: true }
  );

  return (
    <section
      ref={scope}
      id="gallery-section"
      className="flex flex-col items-start gap-12 md:gap-20 xl:gap-[72px] self-stretch py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] bg-primary-white"
    >
      <h2 className="gallery-title opacity-0 self-stretch text-primary-dark text-center text-mobile-h2-700 lg:text-desktop-h3-700 xl:text-desktop-h2-700">
        {title}
      </h2>
      <section className="grid grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-6">
        {images.map((image, key) => (
          <div
            key={key}
            className={`${
              key === 0 ? "col-span-2 row-span-2" : ""
            } rounded-xl overflow-hidden`}
          >
            <DatoImage
              className="gallery-photo opacity-0 w-full aspect-square object-cover rounded-xl hover:scale-110 transition-transform ease-out duration-300"
              data={image.responsiveImage}
            />
          </div>
        ))}
      </section>
    </section>
  );
};
