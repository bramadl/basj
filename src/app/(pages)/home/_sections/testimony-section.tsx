"use client";

import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";

import { TestimonyCard } from "../_components/testimony-card";

export const TestimonySection: FC = () => {
  const { scope } = useFadeTransition(
    {
      card: ".testimony-card",
    },
    { staggerDelay: "-0.4", whenInView: true }
  );

  return (
    <section
      ref={scope}
      id="testimony"
      className="flex py-16 px-8 md:py-20 md:px-[120px] lg:py-[100px] lg:px-[160px] flex-col justify-center items-center self-stretch"
      style={{
        background:
          "linear-gradient(0deg, #2B2626B2, #2B2626B2), url(https://s3-alpha-sig.figma.com/img/9973/335a/86f95eda8c49629d1945db8e2b7ddc10?Expires=1692576000&Signature=AGJBV9vpncLLyIYrVobBWCXEbrwAsCsWmYz~fuTXaQImi~ed5F2k4VEZTMzJRCT9G9mlOWKKYS7xEAapnXXkc0edCtz0AcvdpsLDrT6k7TWVDEMDf~bR--Tt9F~G4-i5B42FF8cc5xnFMgRQemyNc4EgU4bKqw~LvKm8~Fi13ppY5uXKSoyl~82En1tBQxWR~P-mKDau3LvSVwYJS0eiA~wjRSl2xBZqYT~~xoXN8yCjrDk~UzTktxUwDzSVeQReHLHxf3pX41-Jd24gO68dBhipBhOFLJZBE~XXkL8S~Bh3UtV-DoomJHRGOBipm~4st~dyQ30jKZq7fZvBbQ1-fg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4) fixed center/cover",
      }}
    >
      <TestimonyCard />
    </section>
  );
};
