"use client";

import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";

import { ProductCard } from "../(components)/product-card";
import { Swiper } from "@basj/components/core/swiper/Swiper";
import { ResponsiveImageType, StructuredTextDocument } from "react-datocms";
import { Text } from "@basj/components/core/text/Text";

interface Product {
  id: string;
  name: string;
  picture: {
    responsiveImage: ResponsiveImageType;
  };
}

interface ProductSectionProps {
  content: {
    title: StructuredTextDocument;
    thumbnail: {
      responsiveImage: ResponsiveImageType;
    };
    thumbnailName: string;
    subtitle: string;
    productList: Product[];
  };
}

export const ProductSection: FC<ProductSectionProps> = ({ content }) => {
  const { scope } = useFadeTransition(
    {
      title: ".product-title",
      thumbnail: ".product-thumbnail",
      subtitle: ".product-subtitle",
      cards: ".product-card",
    },
    { staggerDelay: "-0.6", whenInView: true }
  );

  return (
    <section
      ref={scope}
      id="product"
      className="flex py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] flex-col items-start gap-[72px] md:gap-20 self-stretch bg-white"
    >
      <div className="flex flex-col lg:flex-row justify-center items-start md:items-center gap-6 md:gap-[72px] self-stretch">
        <Text
          classNames={{
            heading:
              "product-title opacity-0 md:flex-1 text-mobile-h2-400 lg:text-desktop-h3-400 xl:text-desktop-h2-400",
            strong:
              "text-mobile-h2-700 lg:text-desktop-h3-700 xl:text-desktop-h2-700",
          }}
          data={content.title}
        />
        <div className="product-thumbnail opacity-0 w-full lg:w-auto lg:flex-1">
          <ProductCard
            caption={content.thumbnailName}
            className="h-[352px]"
            image={content.thumbnail.responsiveImage}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start gap-6 md:gap-8 self-stretch">
        <h3 className="product-subtitle opacity-0 text-mobile-h4-400 lg:text-desktop-h5-400 xl:text-desktop-h4-400">
          {content.subtitle}
        </h3>
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 28,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          items={content.productList}
          slidesPerView={1}
          spaceBetween={32}
        >
          {(product: Product) => (
            <ProductCard
              caption={product.name}
              className="product-card opacity-0 h-[239px]"
              image={product.picture.responsiveImage}
            />
          )}
        </Swiper>
      </div>
    </section>
  );
};
