import { FC } from "react";
import { ProductCard } from "../_components/product-card";
import { ProductSwiper } from "../_components/product-swiper";

export const ProductSection: FC = () => {
  return (
    <section
      id="product"
      className="flex py-[72px] md:py-[100px] px-8 md:px-[120px] flex-col items-start gap-[72px] self-stretch bg-shades-gray-10"
    >
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6 md:gap-[72px] self-stretch">
        <h2 className="text-mobile-h2-400 md:text-desktop-h2-400">
          Proven biomass solutions already exist.{" "}
          <strong className="text-mobile-h2-700 md:text-desktop-h2-700">
            We make them happen.
          </strong>
        </h2>
        <ProductCard className="h-[352px]" />
      </div>
      <div className="flex flex-col justify-center items-center md:items-start gap-6 md:gap-8 self-stretch">
        <h3 className="text-mobile-h4-700 md:text-desktop-h4-400">
          We also provide another products
        </h3>
        <ProductSwiper />
      </div>
    </section>
  );
};
