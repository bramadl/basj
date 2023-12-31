"use client";

import { Button } from "@basj/components/core/button/Button";
import { Text } from "@basj/components/core/text/Text";
import { useFadeTransition } from "@basj/hooks/useFadeTransition";
import { performRequest } from "@basj/libs/datocms";
import Link from "next/link";

import { FC, useEffect, useState } from "react";
import { Image as DatoImage } from "react-datocms";

interface ClientSectionProps {
  content: any;
}

export const ClientSection: FC<ClientSectionProps> = ({ content }) => {
  const { scope } = useFadeTransition(
    {
      title: ".client-title",
      description: ".client-description",
      certificates: ".client-certificate",
      images: ".client-list-image",
      certificatesMobile: ".client-certificate-mobile",
    },
    { staggerDelay: "-0.8", whenInView: true }
  );

  return (
    <section
      ref={scope}
      id="client"
      className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-12 md:gap-20 self-stretch py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] bg-white"
    >
      <div className="flex flex-col items-center gap-6 self-stretch md:max-w-[502px]">
        <Text
          classNames={{
            heading:
              "client-title opacity-0 text-mobile-h4-400 md:text-desktop-h4-400",
            strong: "text-mobile-h4-700 md:text-desktop-h4-700",
          }}
          data={content.title}
        />
        <Text
          classNames={{
            paragraph:
              "client-description opacity-0 text-mobile-b1-400 md:text-desktop-b1-400",
          }}
          data={content.message}
        />
        <div className="client-certificate opacity-0 hidden lg:flex flex-col lg:flex-row py-6 px-8 gap-6 justify-between items-start lg:items-center self-stretch rounded-xl border border-shades-gray-20 bg-shades-gray-10">
          {content.clientCertificates.map((certificate: any) => (
            <Link
              key={certificate.id}
              title={certificate.certificateUrl.filename}
              href={certificate.certificateUrl.url}
              target="_blank"
            >
              <Button className="whitespace-nowrap" icon>{certificate.name}</Button>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start gap-10">
        <div className="grid grid-cols-2 items-end justify-end place-items-end place-content-end gap-x-14 gap-y-8 flex-wrap">
          {content.clientList.map((client) => (
            <DatoImage
              key={client.id}
              className="client-list-image opacity-0 grayscale"
              data={client.logo.responsiveImage}
              objectFit="cover"
              objectPosition="center"
            />
          ))}
        </div>
        <div className="client-certificate-mobile opacity-0 lg:hidden flex flex-col lg:flex-row py-6 px-8 gap-6 justify-between items-start lg:items-center self-stretch rounded-xl border border-shades-gray-20 bg-shades-gray-10">
          {content.clientCertificates.map((certificate: any) => (
            <Link
              key={certificate.id}
              title={certificate.certificateUrl.filename}
              href={certificate.certificateUrl.url}
              target="_blank"
            >
              <Button className="whitespace-nowrap" icon>{certificate.name}</Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
