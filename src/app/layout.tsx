import "@basj/assets/styles/globals.css";
import { kollektifFont } from "@basj/common/fonts/kollektif.font";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berkah Agung Sejahtera",
  description: "Hello world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={kollektifFont.className}>{children}</body>
    </html>
  );
}
