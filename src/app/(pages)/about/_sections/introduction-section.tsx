"use client";

import { IntroductionVideo } from "@basj/app/(shared)/(components)/introduction-video";
import { Text } from "@basj/components/core/text/Text";
import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";
import { StructuredTextDocument } from "react-datocms";

interface IntroductionSectionProps {
  tag: string;
  title: StructuredTextDocument;
  message: StructuredTextDocument;
  video: {
    thumbnail: {
      alt: string;
      url: string;
      width: number;
      height: number;
    };
  };
}

export const IntroductionSection: FC<IntroductionSectionProps> = ({
  message,
  tag,
  title,
  video,
}) => {
  const { scope } = useFadeTransition(
    {
      video: ".introduction-video",
      article: ".introduction-article",
    },
    { staggerDelay: "-0.6", whenInView: true }
  );

  return (
    <section
      ref={scope}
      id="introduction"
      className="flex flex-col lg:flex-row items-start md:items-center justify-center md:justify-between gap-12 md:gap-20 xl:gap-[120px] self-stretch md:self-auto py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] bg-shades-gray-10"
    >
      <IntroductionVideo
        className="introduction-video opacity-0"
        video={video}
      />
      <article className="introduction-article md:flex-1 flex flex-col items-start justify-center gap-6 self-stretch opacity-0">
        <header className="flex flex-col gap-3">
          <p className="uppercase self-stretch text-primary-forest-green text-mobile-h6-700 xl:text-desktop-h6-700">
            {tag}
          </p>
          <Text
            classNames={{
              heading:
                "self-stretch text-primary-dark text-mobile-h3-400 md:text-mobile-h2-400 xl:text-desktop-h2-400",
              strong:
                "text-mobile-h3-700 md:text-mobile-h2-700 xl:text-desktop-h3-700",
            }}
            data={title}
          />
        </header>
        <Text
          classNames={{
            paragraph: "self-stretch text-primary-dark text-desktop-b1-400",
          }}
          data={message}
        />
      </article>
    </section>
  );
};
