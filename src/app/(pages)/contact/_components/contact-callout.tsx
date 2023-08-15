import { VideoPlayer } from "@basj/app/(shared)/(components)/video-player";
import { Button } from "@basj/components/core/button/Button";

import { FC } from "react";

export const ContactCallout: FC = () => {
  return (
    <article className="contact-callout opacity-0 flex py-5 px-6 flex-col justify-center items-start gap-6 self-stretch rounded-xl border border-shades-gray-20 bg-shades-gray-10">
      <p className="self-stretch text-primary-dark text-mobile-h6-400 lg:text-desktop-h6-400">
        Take a deeper look to our Company Profile.
      </p>
      <div className="flex items-center gap-16">
        <VideoPlayer>
          {(open) => (
            <Button icon onClick={open}>
              Watch
            </Button>
          )}
        </VideoPlayer>
        <Button icon>Read</Button>
      </div>
    </article>
  );
};
