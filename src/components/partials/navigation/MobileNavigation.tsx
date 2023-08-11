import { Logo } from "@basj/components/core/logo/Logo";

import { FC } from "react";
import Link from "next/link";

import { MobileMenu } from "./MobileMenu";
import { NavigationContainer } from "./NavigationContainer";

export const MobileNavigation: FC = () => {
  return (
    <NavigationContainer className="md:hidden" fixed>
      <Link href={{ href: "/" }}>
        <Logo className="flex-shrink-0 h-6 md:h-8 fill-inherit" />
      </Link>
      <MobileMenu />
    </NavigationContainer>
  );
};
