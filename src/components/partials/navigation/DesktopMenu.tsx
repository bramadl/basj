"use client";

import { links } from "@basj/common/constants/site-links";
import { Button, type ButtonProps } from "@basj/components/core/button/Button";
import { useNavigationScroll } from "@basj/hooks/useNavigationScroll";

import Link from "next/link";
import { FC, useState } from "react";

export const DesktopMenu: FC = () => {
  const [outlineColor, setOutlineColor] =
    useState<ButtonProps["outline"]>("light");

  useNavigationScroll((latestValue) => {
    setOutlineColor(latestValue >= 100 ? "dark" : "light");
  });

  return (
    <ul className="hidden md:flex items-center gap-12">
      {links.map((link, key) => (
        <li key={key}>
          <Link className="text-desktop-b2-400" href={{ pathname: link.href }}>
            {link.label}
          </Link>
        </li>
      ))}
      <li>
        <Link className="text-desktop-b2-400" href={{ pathname: "/contact" }}>
          <Button outline={outlineColor} size="sm">
            Contact us
          </Button>
        </Link>
      </li>
    </ul>
  );
};
