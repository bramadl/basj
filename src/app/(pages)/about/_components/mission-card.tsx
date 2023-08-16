import Image from "next/image";
import { FC, HTMLAttributes } from "react";

interface MissionCardProps extends HTMLAttributes<HTMLDivElement> {
  image: {
    alt: string;
    height: number;
    url: string;
    width: number;
  };
  title: string;
  description: string;
}

export const MissionCard: FC<MissionCardProps> = ({
  description,
  image,
  title,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`${props.className} benefit-card md:flex-1 flex flex-col lg:flex-row justify-center md:justify-start items-start gap-7 self-stretch`}
    >
      <div className="flex-shrink-0 lg:mt-2 flex p-2 justify-center items-center gap-2.5 rounded-lg bg-primary-bold-amber">
        <Image
          alt={image.alt}
          src={image.url}
          width={image.width}
          height={image.height}
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-3 self-stretch">
        <h3 className="text-primary-bold-amber text-mobile-h5-700 lg:text-desktop-h5-700">
          {title}
        </h3>
        <p className="text-mobile-b1-400 lg:text-desktop-b1-400">
          {description}
        </p>
      </div>
    </div>
  );
};
