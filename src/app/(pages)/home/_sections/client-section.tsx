"use client";

import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";

import { ClientTitle } from "../_components/client-title";
import { ClientDescription } from "../_components/client-description";
import { ClientList } from "../_components/client-list";

export const ClientSection: FC = () => {
  const { scope } = useFadeTransition(
    {
      title: "h2",
      description: ".client-description",
      images: ".client-list-image",
    },
    { staggerDelay: "-0.4", whenInView: true }
  );

  return (
    <section
      ref={scope}
      id="client"
      className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-12 md:gap-20 xl:gap-[72px] self-stretch py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] bg-shades-gray-10"
    >
      <div className="flex flex-col items-center gap-6 self-stretch md:max-w-[502px]">
        <ClientTitle />
        <ClientDescription />
      </div>
      <ClientList />
    </section>
  );
};
