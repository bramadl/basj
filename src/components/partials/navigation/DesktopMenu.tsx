import { links } from "@basj/common/constants/site-links";
import { Button } from "@basj/components/core/button/Button";

import Link from "next/link";
import { FC } from "react";

export const DesktopMenu: FC = () => {
  return (
    <ul className="hidden md:flex items-center gap-12 text-primary-white">
      {links.map((link, key) => (
        <li key={key}>
          <Link className="text-desktop-b1-400" href={{ pathname: link.href }}>
            {link.label}
          </Link>
        </li>
      ))}
      <li>
        <Link className="text-desktop-b1-400" href={{ pathname: "/" }}>
          <Button outline="light" size="sm">
            Contact us
          </Button>
        </Link>
      </li>
    </ul>
  );
};
