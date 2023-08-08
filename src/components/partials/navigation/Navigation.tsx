import React, { FC, Fragment } from "react";

import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export const Navigation: FC = () => {
  return (
    <Fragment>
      <DesktopNavigation />
      <MobileNavigation />
    </Fragment>
  );
};
