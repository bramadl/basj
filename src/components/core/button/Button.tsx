import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean | ReactNode;
  outline?: "dark" | "light";
  size?: "base" | "sm";
}

export const Button: FC<ButtonProps> = ({
  icon,
  outline,
  size = "base",
  ...props
}) => {
  const buttonClass = [
    size === "base"
      ? "text-mobile-b1-700 md:text-desktop-b1-700"
      : "text-mobile-b2-700 md:text-desktop-b2-700",
    ...(!icon ? [size === "base" ? "py-3 px-6" : "py-2 px-4"] : []),
    ...(outline
      ? [
          outline === "dark"
            ? "border border-primary-dark text-primary-dark hover:bg-[rgba(43,38,38,0.20)]"
            : "border border-primary-white text-primary-white hover:bg-[rgba(43,38,38,0.60)]",
        ]
      : [
          icon
            ? "text-primary-forest-green"
            : "border border-primary-forest-green bg-primary-forest-green hover:bg-primary-dark-forest-green text-primary-white",
        ]),
    icon ? "gap-2" : "gap-[10px]",
    "group flex items-center justify-center gap-[10px] rounded-[32px] uppercase transition-colors ease-out duration-300",
  ];

  if (typeof icon === "boolean") {
    icon = (
      <i className="bx bx-sm bx-right-arrow-alt group-hover:translate-x-2 transition-transform ease-out duration-300" />
    );
  }

  return (
    <button className={buttonClass.join(" ")}>
      <span>{props.children}</span>
      {icon}
    </button>
  );
};
