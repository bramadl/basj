"use client";

import { FC, HTMLAttributes } from "react";
import { Image as DatoImage, ResponsiveImageType } from "react-datocms";

import { VideoPlayer } from "./video-player";

interface IntroductionVideoProps extends HTMLAttributes<HTMLDivElement> {
  video: {
    thumbnail: {
      responsiveImage: ResponsiveImageType;
    };
  };
}

export const IntroductionVideo: FC<IntroductionVideoProps> = ({
  video,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`${props.className} relative flex-shrink-0 w-full lg:w-auto lg:flex-1 h-[188.669px] md:h-[320px]`}
    >
      <DatoImage
        className="w-full h-full rounded-xl object-cover"
        data={video.thumbnail.responsiveImage}
        objectFit="cover"
        objectPosition="center"
      />
      <VideoPlayer>
        {(open) => (
          <button
            className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-primary-white"
            onClick={open}
          >
            <i className="bx bx-play-circle bx-lg" />
          </button>
        )}
      </VideoPlayer>
    </div>
  );
};
