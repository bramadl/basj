"use client";

import { FC } from "react";
import { motion } from "framer-motion";

import { ProductCard } from "../_components/product-card";
import { ProductSwiper } from "../_components/product-swiper";

export const ProductSection: FC = () => {
  return (
    <section
      id="product"
      className="flex py-[72px] md:py-[100px] px-8 md:px-[160px] flex-col items-start gap-[72px] self-stretch bg-shades-gray-10"
    >
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6 md:gap-[72px] self-stretch">
        <motion.h2
          initial={{ opacity: 0 }}
          className="text-mobile-h2-400 md:text-desktop-h2-400"
          transition={{ ease: "easeOut", duration: 0.8 }}
          viewport={{ margin: "-100px" }}
          whileInView={{ opacity: 1 }}
        >
          Proven biomass solutions already exist.{" "}
          <strong className="text-mobile-h2-700 md:text-desktop-h2-700">
            We make them happen.
          </strong>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          viewport={{ margin: "-100px" }}
          whileInView={{ opacity: 1 }}
        >
          <ProductCard
            caption="Wood pellet"
            className="h-[352px]"
            image={
              "https://s3-alpha-sig.figma.com/img/4896/0fe4/d30fb58e74cf78f249818e733af1fc59?Expires=1692576000&Signature=Xd5zgWmeCZq3by4ariDB-rzSkahAd7WT-TQ6gUtqq6sQId-s88fzo7ABfJ7Qk9GXDVdfZ5EKwXAaeS~QkC-dchDYNISaKqko100RqlmaHb2cp4DzR3VJzdVGA41xtSFHjsozAheufFXP1KyihOOSMRyeUl32KGw7yE9rs7E-XuYbJnPrqF3qrZw02zGY08jqZQj4efWtiNs1JOyJSmMg985-nX3h1A-dRRan-FqRnd4TJM7Cp7qYcuulwUlX8g1ryuRu-mdGyhRTFUtMny4mPBCliipaHmudmqEhU00GcdGRVEdHIwpKHkSJIMKbumSq14jBis9eHfks8wXLmDq8Zw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        className="flex flex-col justify-center items-center md:items-start gap-6 md:gap-8 self-stretch"
        transition={{ ease: "easeOut", duration: 0.8 }}
        viewport={{ margin: "-100px" }}
        whileInView={{ opacity: 1 }}
      >
        <h3 className="text-mobile-h4-700 md:text-desktop-h4-700">
          We also provide another products
        </h3>
        <ProductSwiper />
      </motion.div>
    </section>
  );
};
