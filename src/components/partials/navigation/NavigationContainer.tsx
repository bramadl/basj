import { BaseHTMLAttributes, FC } from "react";

export interface NavigationContainerProps
  extends BaseHTMLAttributes<HTMLDivElement> {}

export const NavigationContainer: FC<NavigationContainerProps> = ({
  ...props
}) => {
  return (
    <nav className={`${props.className} w-full flex items-center justify-between py-5 px-8 md:py-6 md:px-10 lg:py-8 lg:px-[120px] xl:px-[160px]`}>
      {props.children}
    </nav>
  );
};
