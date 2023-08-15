import { FC, useMemo } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { Swiper } from "@basj/components/core/swiper/Swiper";
import { useSwiper } from "swiper/react";
import { Button } from "@basj/components/core/button/Button";

interface ImageSliderProps {
  activeIndex: number;
}

interface PointProps {
  name: string;
}

interface TabPanelProps {
  number: string;
  name: string;
  message: string;
  points: string[];
  images: string[];
}

interface ProductionContentsProps {
  currentTab: number;
  onSlideNext: () => void;
  onSlidePrev: () => void;
}

export const ProductionContents: FC<ProductionContentsProps> = ({
  currentTab,
  onSlideNext,
  onSlidePrev,
}) => {
  const tabContents = useMemo(
    () => [
      {
        number: "01",
        name: "Material Loading",
        message:
          "We source our wood materials through sustainable practice, ensuring compliance to the industry's standard.",
        points: ["Log", "Slab", "Veneer", "Sawdust"],
        images: [
          "https://s3-alpha-sig.figma.com/img/c8a3/0eb1/2ee2f14e32696e01b9a86386a7dfcd0e?Expires=1693180800&Signature=oei7LJ872pi3zRuhTuMagZOGWcs7ExJpzmEBha7kpU6cIXcgU5e4wmDVac1JTZyY-X0ghVJyVRZPhdJtY-e7kV1xXATMoWPBiHACwWEGkHszOdsEaDJ27Yt56PffKkNmn-bepjpOONbWQk48Ww6lfY6DZkgSrRWoVyNm8Nzy7cR-6yqxCFWYNXWvrTGOWaxbX9cJG6CBZU3a6j2W7O4j~wC6PVPsX5NcV2eeSy~7eVfs9TdfrcA~Vzey3-G73lLMLaVvaQ0b1FYNR5ZlnBgL9vHnkh73xs-Xhg275TAMd002VwJtWxiCTrXbDXmosUYvC1mWac2M~91Y1h3Dm1AIgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        ],
      },
      {
        number: "02",
        name: "Chipping",
        message:
          "The woods are then converted to small & consistent pieces through a mechanical breaking down of larger wood pieces such as logs and branches.",
        points: ["Slab", "Wood Chipper", "Hammer Mill"],
        images: [
          "https://s3-alpha-sig.figma.com/img/1fda/3c5a/543de6326680329089641695b5a40cdd?Expires=1693180800&Signature=O5TwqfsBG6T8aL6dhsqOiryxxYnU01wfY5WZvt2vS7p8s7u6XeQV5lbGd15YYVfDVpWZrERFbByGeoIOtpIGhT40~H85iFdwN4Q9j7nw5LSnAWGbPniKNicagSYyZDEJaizhQKzEYX~7hLbxxdtf9j7A1YGIM9uxCQsxITwczQEv7ncchkFeEDzHVy1Tthwqhe3VgKKSK9Qf1k22FxwWXv5BXWCODHtrTieiFXQ4u9sgld16bowgOX7von4XI5B738LeSlFyGXtyYzbHpX4L~KfY-lpHnrt2Qcar4~o2rsrMq9cgi7U5G2RJ6f4XGG5zXChL34~9BjI9hFs~wmSPzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          "https://s3-alpha-sig.figma.com/img/10fc/e651/8c4cb1f6de932e01149d89835d510515?Expires=1693180800&Signature=etYr3d-c9Yv0o7qlm~mO2MYIFg4bv~uPclmUcvf55oMzlIv-FZbvYLp~A~JJSbKseL-zF3uUDpCyFPpovaZovLJ2ix0Rzk7nx4pN3KPV1Hox1y9ddB4hG74wM80o0zafjvcd3VvfH0HSYbjTFFc4dTOLhfggqPb75jX-PV7BNnpj9Zy9-3~X5PRB~vp6y681U315SGu59PYs9diigzqgtwyGutPCTftGrI7fNGn~N8VqU8wvHt0eyRjzZHmS9RLNxsz1y~OxsgmtzLU3MSfaIl53uMnoLaye24vcufcgxphW7Qrc9~o~GN0hz~dFcSCmzY7dVZBxegFxMCXiRqzbBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          "https://s3-alpha-sig.figma.com/img/a9d8/a07b/ff9774919c896ec13a1abf4f5844502a?Expires=1693180800&Signature=iq6ce0MYkDY~q2cLcL1jV5OsibFrWG9CxKoPitvhFh-YdQnVF8ACJEw3M8BBnhr8n0VslD5p1Jos8AD-072sMbV6GzvOSjOJIXLrfNzWhGGh5OpXfyRacJOywNzlUBXCCe4oUwicnIom5OkKtWWb1Hrbt3mB2JuAASEcGQNl1ntD3ZfivcM9~MuywS0WksfFKytxL5yOsexiRku4sObl2cu-kGQXTCsr64z8pxEcnqtqQYCgjoZ4ZveFIhUQDJ2MwiTmpNCnx7vP-oqlmkaDHqwNhEmiLv2Sh5TmDC3MPAhDiE~CEkg9nyEXJiO4LyXYMhAFzO~F~IBUfVp1uivqCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        ],
      },
      {
        number: "03",
        name: "Secondary Drying",
        message:
          "Prior to pelletization, the woods are to be dried for the purpose of moisture reduction and enhanced energy content.",
        points: ["Dryer", "Screen", "Test MC"],
        images: [
          "https://s3-alpha-sig.figma.com/img/8eda/f40d/af73d83e30ae27f1d4faf7c1f163e645?Expires=1693180800&Signature=fUAsqRwAOr4jauvdtEAgX1pdVlGS1QEg4bN-FkHpAnjbWQI0PcLK8-PCR8iqxvTZieswrT5JctQf-3iPbTlw8bH9x1wCrE72KjsIhFLZxDTinU3VXoGA-xiwQgVRTdHZF27Q5dYpqle3V8Da5XOkCtuKCpFCgK6rmcpjHKnTDFlrQVTZP5mH9~a2EUApdPpzLRmQk2i8hzzwSuxvgZzSdE0Lay~Vuug4wx4F-yjjKStUOdRqk8SmI3tiyoHkSgsorWvwshcT7wVeif9FLaSyCLaGG-4qIRvAqqg2gNozFs7rEYBar6P3x0bFjXfURjrd0KSYfnGw0zzf~WY4LR0Wog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          "https://s3-alpha-sig.figma.com/img/5e80/1d43/3ca145a5233b179c47208fba531d09a0?Expires=1693180800&Signature=Pn~MSlAobcFHPHSYISyDJu-Q~ZCgGuejHtura4c866XlYZuLVOHgJRwhB3n2U8k9N7jx4~7R-VXvy4KxMopkcjY-MQJ~oxN5FIK2ZxkCDJxFIiKrnLk-Xd1BqSCvmFEsT5kNHzWK8aEbvZsG6niHEwOrunUM48R9NBAyiihROCeyjoZ5iD27nhu902DksHVpkbNjM1jJFK~8DPOdtNRn1cFAhSJ4rx5-HCIM8MjMRYvpWod72Qiz9rzYvluxNAq2i0PHGCuq4-pXkNbPiFe0amfra5~7hKB1Kq~ytzOK-kUGyC0V~xk0FLnZ8flYbRiaShEDet7b2Mcm8BVK6Rknew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        ],
      },
      {
        number: "04",
        name: "Milling & Quality Control",
        message:
          "This is where the wood materials are converted to pellets, ensuring size consistency, improved combustion, and the pellets are later cooled down for quality control.",
        points: ["Cooling", "Screening", "Packing"],
        images: [
          "https://s3-alpha-sig.figma.com/img/ac9f/0de0/b51229a23eb91fe8e913c9446c25b91b?Expires=1693180800&Signature=HTnhq2HI2IGSR1Jwo29HKDYy9EcBL0h5CCDVelbs3yHzRVP7fDaKlW~TCTO7tExzF6DTDY6AGWSBjWZdc5-G5O1e8SBXCrQJ96h3-94ZzrXIqmXKB1ska8Vg120DwnCTpwwRIWlRcD7pGg30K7zOeHm55eLKvv1vxS-B-im6uQZCf54KJ741TDJMHfhnfsor819vre7hwwrq~NpST~BHlzzpyncdB4xr~s5LG3nzrWtXBGqZqiDSbki~Ef3P9ylYBQNm034O-HTUPRJM6WwTul7AEZQFZUemANDt2XOH0C5yurYX4myB3YBfc5ttpuVs-shpx8v67Kmvf9qt~JTQdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          "https://s3-alpha-sig.figma.com/img/0c7a/ec40/b2db4e82f33194c00eb1b662191aea1d?Expires=1693180800&Signature=EurpCCtKJuiIaJ0nMwDoeZHVcOnMSAsbnCQlMTyiSHhw6ik-iFh2W7EutAcOPlhbYa~Uid9kgakxYqQDL9V~X3C2bXznKJm6vKhivqsG6fcQIJKYl8vU1R~wEIw5ATeIExBdRy2nv8qvYUPt3jaHntVThRl1ezySs04iBTTZ3DMF3tw~W8szF3cs5-X1Fmxsy635QR8sT8vy9-8CKM8Ytuk1A1nqJtd9RygDBGmhyAugQ1hpWVzqOZdvM11gVWW7J~33txAjZwjnDYaZWedFsxJImMEvZ9dTptjzWkglx~GkDhMPyZFJmwi~9Ojt9ewL-gTKEbxES4mNb1f6UZmltg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        ],
      },
      {
        number: "05",
        name: "Packaging & Shipping",
        message:
          "We source our wood materials through sustainable practice, ensuring compliance to the industry's standard.",
        points: ["Jumbo bag", "Bulk", "Weight truck"],
        images: [
          "https://s3-alpha-sig.figma.com/img/4209/ff72/3eb920359739d2a2a088df19da8354ee?Expires=1693180800&Signature=l2DrwuDkZ9z3Rm7Nl0uPqYRLADmPd41vB1v4znUhzyy-GIgdt77Anyv218qBFjcOHgxmh6sc7kcWqbJOPFEm29bmeW9W23o8mTISWmHW1ogb2ItdwHeWSkbeohgAI1zSdA-obhChWcPlRJt7XHmW-JxhLGdKuLk2fHrkOdUGN~uVQjncQIADE7Xz7L1qDNp04amIZibKhB3BoYHuP0XcGE2jhen1pH6jQSNiQcv-VE7TvbYqWr~nkrVvFv5LbivLRVJe6fTn1efX7MxIhl~UfG9auNpBw1vtYSbPmYPJr6DzXuwHjzc8kw3mweVkF3SQ5myceDPppKv-q3kFFLAaaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        ],
      },
    ],
    []
  );

  const isFirstContent = useMemo(() => currentTab === 0, [currentTab]);

  const isLastContent = useMemo(
    () => currentTab === tabContents.length - 1,
    [currentTab, tabContents]
  );

  const TabPanel: FC<TabPanelProps> = ({
    images,
    message,
    name,
    number,
    points,
  }) => {
    const ImageSlider: FC<ImageSliderProps> = ({ activeIndex }) => {
      const swiper = useSwiper();

      const PrevButton: FC = () => {
        return (
          <button
            disabled={swiper.isBeginning}
            onClick={() => swiper.slidePrev()}
          >
            <i
              className={`bx bx-sm bx-left-arrow-alt ${
                swiper.isBeginning
                  ? "text-shades-gray-30/50"
                  : "text-shades-gray-30"
              }`}
            />
          </button>
        );
      };

      const NextButton: FC = () => {
        return (
          <button disabled={swiper.isEnd} onClick={() => swiper.slideNext()}>
            <i
              className={`bx bx-sm bx-right-arrow-alt ${
                swiper.isEnd ? "text-shades-gray-30/50" : "text-shades-gray-30"
              }`}
            />
          </button>
        );
      };

      return (
        <div className="absolute z-[1] bottom-3 left-1/2 -translate-x-1/2 flex w-[112px] p-2 justify-center items-center gap-4 rounded-[28px] bg-[rgba(43,38,38,0.70)]">
          <PrevButton />
          <p className="text-shades-gray-30 text-desktop-b2-700">
            {activeIndex + 1}/{images.length}
          </p>
          <NextButton />
        </div>
      );
    };

    const Content: FC = () => {
      const Point: FC<PointProps> = ({ name }) => {
        return (
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-bold-amber" />
            <p className="text-primary-dark text-mobile-p-400 lg:text-desktop-p-400 whitespace-nowrap">
              {name}
            </p>
          </div>
        );
      };

      return (
        <article className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 flex lg:w-[800px] lg:h-[620px] p-6 lg:py-[120px] lg:pr-[72px] lg:pl-[360px] flex-col justify-center items-center lg:items-start gap-5 lg:gap-10 lg:flex-shrink-0 self-stretch rounded-xl lg:rounded-[20px] bg-primary-light-forest-green">
          <p className="self-stretch text-primary-forest-green text-mobile-h4-700 lg:text-desktop-h4-700">
            {number}
          </p>
          <h3 className="self-stretch text-primary-dark text-mobile-h4-400 lg:text-desktop-h4-400">
            {name}
          </h3>
          <p className="self-stretch text-primary-dark text-mobile-p-400 lg:text-desktop-p-400">
            {message}
          </p>
          <div className="grid grid-cols-2 gap-4 place-items-stretch self-stretch">
            {points.map((point, key) => (
              <Point key={key} name={point} />
            ))}
          </div>
          <footer className="flex items-center gap-4">
            <Button
              className="disabled:opacity-50"
              disabled={isFirstContent}
              size="sm"
              onClick={onSlidePrev}
            >
              <i className="bx bx-sm bx-left-arrow-alt" />
              Prev
            </Button>
            <Button
              className="disabled:opacity-50"
              disabled={isLastContent}
              size="sm"
              onClick={onSlideNext}
            >
              Next
              <i className="bx bx-sm bx-right-arrow-alt" />
            </Button>
          </footer>
        </article>
      );
    };

    return (
      <Tab.Panel className="relative flex lg:block flex-col justify-center items-center gap-6 self-stretch">
        <div className="relative lg:w-[640px] lg:h-[480px]">
          <Swiper
            customSlider={(activeIndex) => (
              <ImageSlider activeIndex={activeIndex} />
            )}
            spaceBetween={32}
            items={images}
          >
            {(image) => (
              <Image
                alt="image"
                className="w-full aspect-square lg:h-[480px] object-cover rounded-xl"
                src={image}
                width={400}
                height={400}
              />
            )}
          </Swiper>
        </div>
        <Content />
      </Tab.Panel>
    );
  };

  return (
    <Tab.Panels className="px-8 md:px-[120px] xl:px-[160px] self-stretch lg:mt-[72px]">
      {tabContents.map((content, key) => (
        <TabPanel key={key} {...content} />
      ))}
    </Tab.Panels>
  );
};
