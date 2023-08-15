"use client";

import { Button } from "@basj/components/core/button/Button";
import { useFadeTransition } from "@basj/hooks/useFadeTransition";

import { FC } from "react";

import { ClientTitle } from "../(components)/client-title";
import { ClientDescription } from "../(components)/client-description";
import { ClientList } from "../(components)/client-list";
import { ClientCertificate } from "../(components)/client-certificate";

export const ClientSection: FC = () => {
  const { scope } = useFadeTransition(
    {
      title: "h2",
      description: ".client-description",
      button: ".button",
      images: ".client-list-image",
      certificates: ".client-certificate",
    },
    { staggerDelay: "-0.4", whenInView: true }
  );

  return (
    <section
      ref={scope}
      id="client"
      className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-12 md:gap-20 xl:gap-[72px] self-stretch py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] bg-white"
    >
      <div className="flex flex-col items-center gap-6 self-stretch md:max-w-[502px]">
        <ClientTitle />
        <ClientDescription />
        <div className="self-stretch button xl:hidden opacity-0">
          <Button icon>View certificate</Button>
        </div>
      </div>
      <div className="flex flex-col items-start gap-10">
        <ClientList />
        <ClientCertificate />
      </div>
    </section>
  );
};
