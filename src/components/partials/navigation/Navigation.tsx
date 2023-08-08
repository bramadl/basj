import { Button } from "@basj/components/core/button/Button";
import { Logo } from "@basj/components/core/logo/Logo";

import Link from "next/link";
import React, { FC } from "react";

const HamburgerButton: FC = () => {
  return (
    <button className="md:hidden">
      <i className="bx bx-sm bx-menu-alt-right text-primary-white" />
    </button>
  );
};

const MenuListHorizontal: FC = () => {
  return (
    <ul className="hidden md:flex items-center gap-12 text-primary-white">
      <li>
        <Link className="text-desktop-b1-400" href={{ href: "/" }}>
          Home
        </Link>
      </li>
      <li>
        <Link className="text-desktop-b1-400" href={{ href: "/" }}>
          About Us
        </Link>
      </li>
      <li>
        <Link className="text-desktop-b1-400" href={{ href: "/" }}>
          Product
        </Link>
      </li>
      <li>
        <Link className="text-desktop-b1-400" href={{ href: "/" }}>
          <Button outline="light" size="sm">Contact us</Button>
        </Link>
      </li>
    </ul>
  );
};

export const Navigation: FC = () => {
  return (
    <nav className="fixed z-[1] top-0 left-0 w-full flex items-center justify-between py-5 px-8 md:py-8 md:px-[120px]">
      <Link href={{ href: "/" }}>
        <Logo className="flex-shrink-0 h-6 md:h-8" />
      </Link>
      <HamburgerButton />
      <MenuListHorizontal />
    </nav>
  );
};
