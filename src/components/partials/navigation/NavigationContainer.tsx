"use client";

import { useNavigationScroll } from "@basj/hooks/useNavigationScroll";
import { BaseHTMLAttributes, FC, useMemo, useState } from "react";

export interface NavigationContainerProps
  extends BaseHTMLAttributes<HTMLDivElement> {
  fixed?: boolean;
}

export const NavigationContainer: FC<NavigationContainerProps> = ({
  fixed = false,
  ...props
}) => {
  const alternateColors =
    "bg-primary-white text-primary-dark fill-primary-dark shadow-md";

  const defaultColors =
    "bg-transparent text-primary-white fill-primary-white shadow-none";

  const [colors, setColors] = useState(defaultColors);

  const classes = useMemo(() => {
    return [
      props.className,
      fixed ? "fixed z-[1] top-0 left-0" : "static",
      colors,
    ].join(" ");
  }, [colors, fixed, props.className]);

  useNavigationScroll((latestValue) => {
    setColors(latestValue >= 100 ? alternateColors : defaultColors);
  });

  return (
    <nav
      className={`${classes} w-full flex items-center justify-between py-5 px-8 md:py-6 md:px-10 lg:py-8 lg:px-[120px] xl:px-[160px] transition-colors ease-out duration-300`}
    >
      {props.children}
    </nav>
  );
};
