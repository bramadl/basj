"use client";

import Image from "next/image";
import { FC, HTMLAttributes, useEffect, useState } from "react";
import { VideoPlayer } from "./video-player";
import { performRequest } from "@basj/libs/datocms";

interface IntroductionVideoProps extends HTMLAttributes<HTMLDivElement> {}

const QUERY = `
  query CompanyProfileVideo {
    companyProfileSection {
      videoThumbnail {
        alt
        url
        width
        height
      }
    }
  }
`;

export const IntroductionVideo: FC<IntroductionVideoProps> = ({ ...props }) => {
  const [video, setVideo] = useState<any>(undefined);

  useEffect(() => {
    performRequest({
      query: QUERY,
      revalidate: 60 * 60,
    }).then(({ companyProfileSection }) =>
      setVideo(companyProfileSection.videoThumbnail)
    );
  }, []);

  return (
    <div
      {...props}
      className={`${props.className} relative flex-shrink-0 w-full lg:w-auto lg:flex-1 h-[188.669px] md:h-[320px]`}
    >
      <Image
        alt={video?.alt}
        className="w-full h-full rounded-xl object-cover"
        src={video?.url}
        width={video?.width}
        height={video?.height}
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
