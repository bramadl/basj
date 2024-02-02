import "@basj/assets/styles/globals.css";
import { kollektifFont } from "@basj/common/fonts/kollektif.font";
import { montserratFont } from "@basj/common/fonts/montserrat.font";
import { Footer } from "@basj/components/partials/footer/Footer";
import { Navigation } from "@basj/components/partials/navigation/Navigation";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title:
    "PT Berkah Agung Semesta Jaya | Producing Wood Pellets for a Greener Future",
  description:
    "PT Berkah Agung Semesta Jaya (BASJ) is a leading producer of wood pellets in North Sumatra that is committed to providing sustainable energy solutions that are good for the environment and the economy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={montserratFont.variable} lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={kollektifFont.variable}>
        <Navigation />
        <main className="w-full min-h-screen overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
