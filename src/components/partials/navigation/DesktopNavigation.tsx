import { Logo } from "@basj/components/core/logo/Logo";

import { FC } from "react";
import Link from "next/link";

import { DesktopMenu } from "./DesktopMenu";
import { NavigationContainer } from "./NavigationContainer";

export const DesktopNavigation: FC = () => {
  return (
    <NavigationContainer className="hidden md:flex" fixed>
      <Link href={{ pathname: "/" }}>
        <Logo className="flex-shrink-0 h-6 md:h-8 fill-inherit" />
      </Link>
      <DesktopMenu />
    </NavigationContainer>
  );
};
