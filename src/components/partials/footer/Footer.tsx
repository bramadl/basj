import { Logo } from "@basj/components/core/logo/Logo";
import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="flex py-[72px] px-8 md:py-[100px] md:px-[120px] flex-col md:flex-row items-start md:justify-between gap-8 md:gap-12 self-stretch bg-primary-forest-green">
      <div className="flex flex-col items-start md:justify-between gap-8 md:gap-0 self-stretch">
        <div className="flex flex-col items-start gap-5 self-stretch">
          <Logo type="footer" />
          <ul className="flex items-start gap-5">
            <li className="text-primary-white">
              <i className="bx bx-sm bxl-facebook" />
            </li>
            <li className="text-primary-white">
              <i className="bx bx-sm bxl-twitter" />
            </li>
            <li className="text-primary-white">
              <i className="bx bx-sm bxl-instagram" />
            </li>
            <li className="text-primary-white">
              <i className="bx bx-sm bxl-linkedin" />
            </li>
          </ul>
        </div>
        <p className="text-mobile-b1-400 text-primary-white">
          &copy; 2023 All right reserved.
        </p>
      </div>
      <div className="flex items-start gap-12 md:gap-[120px] self-stretch text-primary-white">
        <div className="flex flex-col items-start gap-5 whitespace-nowrap">
          <p className="text-center text-mobile-h5-700">Sitemap</p>
          <Link className="text-mobile-b1-400" href={{ href: "/" }}>
            Home
          </Link>
          <Link className="text-mobile-b1-400" href={{ href: "/" }}>
            About Us
          </Link>
          <Link className="text-mobile-b1-400" href={{ href: "/" }}>
            Product
          </Link>
          <Link className="text-mobile-b1-400" href={{ href: "/" }}>
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
