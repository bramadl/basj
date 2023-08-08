import { BaseHTMLAttributes, FC } from "react";

export interface NavigationContainerProps
  extends BaseHTMLAttributes<HTMLDivElement> {}

export const NavigationContainer: FC<NavigationContainerProps> = ({
  ...props
}) => {
  return (
    <nav className={`${props.className} w-full flex items-center justify-between py-5 px-8 md:py-8 md:px-[120px]`}>
      {props.children}
    </nav>
  );
};
