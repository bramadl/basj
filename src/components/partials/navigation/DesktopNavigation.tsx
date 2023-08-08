import { Logo } from "@basj/components/core/logo/Logo";

import React, { FC } from "react";
import Link from "next/link";

import { DesktopMenu } from "./DesktopMenu";
import { NavigationContainer } from "./NavigationContainer";

export const DesktopNavigation: FC = () => {
  return (
    <NavigationContainer className="fixed z-[1] top-0 left-0 hidden md:flex">
      <Link href={{ href: "/" }}>
        <Logo className="flex-shrink-0 h-6 md:h-8 fill-primary-white" />
      </Link>
      <DesktopMenu />
    </NavigationContainer>
  );
};
