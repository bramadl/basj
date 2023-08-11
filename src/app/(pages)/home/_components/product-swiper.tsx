"use client";

import { Swiper } from "@basj/components/core/swiper/Swiper";

import { FC, Fragment } from "react";

import { ProductCard } from "./product-card";

export const ProductSwiper: FC = () => {
  const products = [
    {
      caption: "Sawdust",
      image:
        "https://s3-alpha-sig.figma.com/img/1518/d21b/b1d60ec7a2aaba36f485d4008dffc037?Expires=1692576000&Signature=YyfXgjAOzKiUsMfQ01yTmM756QTn1EpKyewIfGRuo2aOAECtyUaU83IPW07-lUnyEKRFqh7HlTVXyvDPM4ZmGkh5u-COB2JMAkqxdYGwQZokebpFHtTfFCFkDkGPfUPEhr4GxO3s0G9uMuYaTuO3l2olSATPWHUtYAgo5HPBc26SwGUT9F8KRTW0Wk35JAQBm7wJcexTAFqGXfNxBl7PG60ujx-PapbpuiM8AvwoL9TmI0cXNq-y5aJH4Rv0pwSm5QlNQ1quVSB3OYiBh0Jjycf9SU9FBSSDtwYiD2Ffc6e6G5CBEfO5hGUTGsxNaa9PYBXFW70DIIklBXTQScWg4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      caption: "Shaving",
      image:
        "https://s3-alpha-sig.figma.com/img/ce07/d287/5914fb1530025a80c93de62235706e63?Expires=1692576000&Signature=p1qFwO0sIP2mZ8EGSwcMrLcMIAfS26S4GCvfeMI1u8vFDC5XdSORZ34H9Ljit5XpBNujw7Gyu72e7~3LJnG0k79da-lLgQbBU-Op7qnaqVr8D6jaAWXJodrAzSiCe1iU0uaVRexmnHElUecPKVDorTz-M1fNl4NBpe1bRL6OBs0b-Rup6TNlx~7d3GmBBFkqhnFZ4GPe8pO5R9qBqVj3DJ7H9acgZlJKTHXcegI6DGFgx9x4wjf4pYpT083P2LEIiBzwneRV75g0t4K-GnyON8tlFU-2LLgH~prYWrhOhLhmGMEobgBmZPZKKRp9wHt3lf9~VzbjlxiHA9AOMrwRDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      caption: "Wood Chip",
      image:
        "https://s3-alpha-sig.figma.com/img/8e40/9b72/cd95b45c3848f97ee828d434fb9c223f?Expires=1692576000&Signature=WTh7Nl2ZwQNxf4IDpvAh8AqgO6TUAXZCJZeTs1HiO2BddfG6By~856DePFRYPe4wa6JiMDWBs99hoPKS7Kt4LLnY-SIucAtY0-qX6EG~tW86T0NieG7gboOyUx1lsP56ll-eCovox4yY1UNxqlDnQSlKHTPQHK0frcNMG0EINVG61fU1I6Zjteq0UT3rjyA5i0pjcR8W8bkwQAe6dG2w12eEidYHkKRLQbIk~2IRIfJ9Ppd-7gF7YJCR44V-hlPABaAApjk5N7YHTzOULnGF~tIs5QotB40jnfaB6yIwRwGzbJacA1dUA2MsbUsUMUn8AdnOXEd564c4ItuZeaY3JA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ];

  return (
    <Fragment>
      <h3 className="text-mobile-h4-700 lg:text-desktop-h5-700 xl:text-desktop-h4-700">
        We also provide another products
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
        items={products}
        slidesPerView={1}
        spaceBetween={32}
      >
        {(product) => <ProductCard {...product} className="h-[239px]" />}
      </Swiper>
    </Fragment>
  );
};
