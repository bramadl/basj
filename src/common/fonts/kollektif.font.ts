import LocalFont from "next/font/local";

export const kollektifFont = LocalFont({
  src: [
    {
      path: "../../assets/fonts/Kollektif.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../assets/fonts/Kollektif-Bold.ttf",
      style: "normal",
      weight: "700",
    },
  ],
  display: "swap",
  preload: true,
});
