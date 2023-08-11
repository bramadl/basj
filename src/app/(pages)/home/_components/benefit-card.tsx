import Image from "next/image";
import { FC } from "react";

interface BenefitCardProps {
  image: any;
  title: string;
  description: string;
}

export const BenefitCard: FC<BenefitCardProps> = ({ description, image, title }) => {
  return (
    <div className="md:flex-1 flex flex-col justify-center md:justify-start items-start gap-7 self-stretch">
      <div className="flex p-2 justify-center items-center gap-2.5 rounded-lg bg-primary-bold-amber">
        <Image alt="enery" src={image} />
      </div>
      <div className="flex flex-col justify-center items-start gap-3 self-stretch">
        <h3 className="text-mobile-h5-700">{title}</h3>
        <p className="text-mobile-b1-400">{description}</p>
      </div>
    </div>
  );
};
