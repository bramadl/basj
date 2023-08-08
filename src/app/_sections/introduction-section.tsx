import { Button } from "@basj/components/core/button/Button";

import Image from "next/image";
import { FC } from "react";

export const IntroductionSection: FC = () => {
  return (
    <section
      id="introduction"
      className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between gap-12 md:gap-[120px] self-stretch md:self-auto py-[72px] px-8 md:py-[100px] md:px-[120px] bg-shades-gray-10"
    >
      <div className="relative flex-shrink-0 w-[296px] md:w-[568px] h-[188.669px] md:h-[367px]">
        <Image
          alt="Thumbnail"
          className="rounded-xl object-cover"
          fill
          src={
            "https://s3-alpha-sig.figma.com/img/4896/0fe4/d30fb58e74cf78f249818e733af1fc59?Expires=1692576000&Signature=Xd5zgWmeCZq3by4ariDB-rzSkahAd7WT-TQ6gUtqq6sQId-s88fzo7ABfJ7Qk9GXDVdfZ5EKwXAaeS~QkC-dchDYNISaKqko100RqlmaHb2cp4DzR3VJzdVGA41xtSFHjsozAheufFXP1KyihOOSMRyeUl32KGw7yE9rs7E-XuYbJnPrqF3qrZw02zGY08jqZQj4efWtiNs1JOyJSmMg985-nX3h1A-dRRan-FqRnd4TJM7Cp7qYcuulwUlX8g1ryuRu-mdGyhRTFUtMny4mPBCliipaHmudmqEhU00GcdGRVEdHIwpKHkSJIMKbumSq14jBis9eHfks8wXLmDq8Zw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          }
        />
        <i className="bx bx-play-circle bx-md absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-primary-white" />
      </div>
      <article className="flex flex-col items-start justify-center gap-6 self-stretch">
        <h2 className="text-mobile-h2-400 md:text-desktop-h4-400">
          Since 2015, we&apos;ve been committed to preserving nature through
          produce{" "}
          <strong className="text-mobile-h2-700 md:text-desktop-h4-700 text-primary-forest-green">
            Wood Pellets as a biomass energy source.
          </strong>
        </h2>
        <p>
          Every wood pellet we produce adheres to our strict quality criteria,
          surpassing the benchmarks set by the industry. We constantly strives
          to produce high quality wood pellets, with such unwavering commitment
          to creating the most exceptional quality wood pellets worldwide.
        </p>
        <Button icon>Learn more</Button>
      </article>
    </section>
  );
};