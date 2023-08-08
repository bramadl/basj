import { Button } from "@basj/components/core/button/Button";

import Link from "next/link";
import { FC } from "react";

import { links } from "./links";

export const DesktopMenu: FC = () => {
  return (
    <ul className="hidden md:flex items-center gap-12 text-primary-white">
      {links.map((link, key) => (
        <li key={key}>
          <Link className="text-desktop-b1-400" href={{ href: link.href }}>
            {link.label}
          </Link>
        </li>
      ))}
      <li>
        <Link className="text-desktop-b1-400" href={{ href: "/" }}>
          <Button outline="light" size="sm">
            Contact us
          </Button>
        </Link>
      </li>
    </ul>
  );
};
