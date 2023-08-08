import { Logo } from "@basj/components/core/logo/Logo";

import { FC } from "react";
import Link from "next/link";

import { MobileMenu } from "./MobileMenu";
import { NavigationContainer } from "./NavigationContainer";

export const MobileNavigation: FC = () => {
  return (
    <NavigationContainer className="absolute z-[1] top-0 left-0 md:hidden">
      <Link href={{ href: "/" }}>
        <Logo className="flex-shrink-0 h-6 md:h-8 fill-primary-white" />
      </Link>
      <MobileMenu />
    </NavigationContainer>
  );
};
