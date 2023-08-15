import Link from "next/link";
import { FC } from "react";

export const ContactInformation: FC = () => {
  return (
    <div
      className="contact-information opacity-0 flex py-10 lg:py-16 px-6 lg:px-[72px] flex-col justify-center items-center gap-5 self-stretch rounded-[20px] xl:w-[510px] flex-shrink-0"
      style={{
        background: "linear-gradient(226deg, #086057 0%, #05423C 100%)",
        boxShadow: "0px 0px 21px 0px rgba(0, 0, 0, 0.07)",
      }}
    >
      <p className="contact-information--title opacity-0 self-stretch text-primary-white text-center text-mobile-h5-400 lg:text-desktop-h5-400">
        For partners or investor relation inquiries
      </p>
      <Link
        className="self-stretch w-full"
        href={{
          protocol: "https",
          hostname: "wa.me",
          pathname: "6285360828888",
        }}
        target="_blank"
      >
        <button className="contact-information--button opacity-0 flex py-4 px-0 justify-center items-center gap-2.5 w-full rounded-xl bg-primary-white text-primary-forest-green">
          <i className="bx bx-sm bxl-whatsapp " />
          <span className="text-mobile-b1-700">Text us on WhatsApp</span>
        </button>
      </Link>
      <Link
        className="self-stretch w-full"
        href={{ protocol: "mailto", hostname: "berkahagung.sj@yahoo.com" }}
      >
        <button className="contact-information--button opacity-0 flex py-4 px-0 justify-center items-center gap-2.5 w-full rounded-xl border border-primary-white bg-transparent text-primary-white">
          <i className="bx bx-sm bx-envelope " />
          <span className="text-mobile-b1-700">Send us your e-mail</span>
        </button>
      </Link>
    </div>
  );
};
