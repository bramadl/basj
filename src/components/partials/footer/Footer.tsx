import { links } from "@basj/common/constants/site-links";
import { Logo } from "@basj/components/core/logo/Logo";

import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="flex py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] flex-col lg:flex-row items-start lg:justify-between gap-8 md:gap-20 xl:gap-12 self-stretch bg-primary-forest-green">
      <div className="flex flex-col items-start md:justify-between gap-8 md:gap-12 lg:gap-0 self-stretch">
        <div className="flex flex-col items-start gap-5 self-stretch">
          <Logo type="footer" />
        </div>
        <p className="text-mobile-b1-400 text-primary-white">
          &copy; 2023 All right reserved.
        </p>
      </div>
      <div className="flex items-start gap-12 md:gap-[120px] self-stretch text-primary-white">
        <div className="flex flex-col items-start gap-5 whitespace-nowrap">
          <p className="text-center text-mobile-h5-700">Sitemap</p>
          {links.map((link, key) => (
            <Link key={key} className="text-mobile-b1-400" href={{ pathname: link.href }}>
              {link.label}
            </Link>
          ))}
          <Link className="text-mobile-b1-400" href={{ pathname: "/contact" }}>
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col items-start gap-5 md:max-w-[280px]">
          <p className="text-center text-mobile-h5-700">Location</p>
          <p className="text-mobile-b1-400">
            JI. Jalinsum No. 01 Tambangan, Kab. Sergai, Paya Pasir, Medan
            Marelan, Kota Medan, Sumatera Utara 20998
          </p>
        </div>
      </div>
    </footer>
  );
};
