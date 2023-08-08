"use client";

import { Button } from "@basj/components/core/button/Button";
import { Logo } from "@basj/components/core/logo/Logo";

import Link from "next/link";
import { FC, Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { links } from "./links";
import { NavigationContainer } from "./NavigationContainer";

export const MobileMenu: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <Fragment>
      <button onClick={() => setIsOpened(true)}>
        <i className="bx bx-sm bx-menu-alt-right text-primary-white" />
      </button>
      <AnimatePresence>
        {isOpened && (
          <motion.aside
            animate={{ opacity: 1 }}
            className="fixed z-[2] top-0 left-0 w-full h-full flex flex-col items-start justify-between bg-primary-white"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <div className="w-full flex flex-col">
              <NavigationContainer>
                <Link href={{ href: "/" }}>
                  <Logo className="flex-shrink-0 h-6 fill-primary-dark" />
                </Link>
                <button onClick={() => setIsOpened(false)}>
                  <i className="bx bx-sm bx-x text-primary-dark" />
                </button>
              </NavigationContainer>
              <ul className="flex flex-col">
                {links.map((link, key) => (
                  <li key={key}>
                    <Link
                      className="flex items-center justify-between py-4 px-8 text-mobile-b1-400"
                      href={{ href: link.href }}
                    >
                      {link.label}
                      <i className="bx bx-sm bx-right-arrow-alt text-shades-gray-40" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full flex items-center justify-center py-5 px-8">
              <Button className="w-full" outline="dark" size="sm">
                Contact us
              </Button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </Fragment>
  );
};
