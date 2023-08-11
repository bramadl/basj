import Image from "next/image";
import { FC } from "react";

export const IntroductionVideo: FC = () => {
  return (
    <div className="relative flex-shrink-0 w-full lg:w-auto lg:flex-1 h-[188.669px] md:h-[367px]">
      <Image
        alt="Thumbnail"
        className="rounded-xl object-cover"
        fill
        src={
          "https://s3-alpha-sig.figma.com/img/4896/0fe4/d30fb58e74cf78f249818e733af1fc59?Expires=1692576000&Signature=Xd5zgWmeCZq3by4ariDB-rzSkahAd7WT-TQ6gUtqq6sQId-s88fzo7ABfJ7Qk9GXDVdfZ5EKwXAaeS~QkC-dchDYNISaKqko100RqlmaHb2cp4DzR3VJzdVGA41xtSFHjsozAheufFXP1KyihOOSMRyeUl32KGw7yE9rs7E-XuYbJnPrqF3qrZw02zGY08jqZQj4efWtiNs1JOyJSmMg985-nX3h1A-dRRan-FqRnd4TJM7Cp7qYcuulwUlX8g1ryuRu-mdGyhRTFUtMny4mPBCliipaHmudmqEhU00GcdGRVEdHIwpKHkSJIMKbumSq14jBis9eHfks8wXLmDq8Zw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        }
      />
      <i className="bx bx-play-circle bx-lg absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-primary-white" />
    </div>
  );
};
