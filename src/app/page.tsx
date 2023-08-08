import { Button } from "@basj/components/core/button/Button";
import { Navigation } from "@basj/components/partials/navigation/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navigation />
      <section
        id="hero"
        className="basj-hero-background w-full min-h-screen flex items-center justify-center"
      >
        <article className="w-[360px] md:w-[640px] flex flex-col items-center justify-center gap-8 py-16 px-8 md:p-0 mt-5 md:mt-8">
          <h1 className="text-mobile-h1-400 md:text-desktop-h1-400 text-primary-white text-center">
            Unlock the full power of wood pellet{" "}
            <span className="text-mobile-h1-700 md:text-desktop-h1-700">
              with BASJ.
            </span>
          </h1>
          <p className="text-primary-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button>Discover how</Button>
        </article>
      </section>
      <section
        id="introduction"
        className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between gap-12 md:gap-[120px] self-stretch md:self-auto py-[72px] px-8 md:py-[100px] md:px-[120px] bg-shades-gray-10"
      >
        <div className="relative flex-shrink-0 w-[296px] md:w-[568px] h-[188.669px] md:h-[367px]">
          <Image
            alt="Thumbnail"
            className="rounded-xl"
            fill
            objectFit="cover"
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
            <span className="text-mobile-h2-700 md:text-desktop-h4-700 text-primary-forest-green">
              Wood Pellets as a biomass energy source.
            </span>
          </h2>
          <p>
            Every wood pellet we produce adheres to our strict quality criteria,
            surpassing the benchmarks set by the industry. We constantly strives
            to produce high quality wood pellets, with such unwavering
            commitment to creating the most exceptional quality wood pellets
            worldwide.
          </p>
          <Button icon>Learn more</Button>
        </article>
      </section>
    </main>
  );
}
