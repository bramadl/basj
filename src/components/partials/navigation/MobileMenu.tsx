"use client";

import { links } from "@basj/common/constants/site-links";
import { Button } from "@basj/components/core/button/Button";
import { Logo } from "@basj/components/core/logo/Logo";

import Link from "next/link";
import { FC, Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { NavigationContainer } from "./NavigationContainer";

export const MobileMenu: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  function openMenu() {
    document.body.classList.add("overflow-hidden");
    setIsOpened(true);
  }

  function closeMenu() {
    document.body.classList.remove("overflow-hidden");
    setIsOpened(false);
  }

  return (
    <Fragment>
      <button onClick={openMenu}>
        <i className="bx bx-sm bx-menu-alt-right" />
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
                <Link href={{ pathname: "/" }}>
                  <Logo className="flex-shrink-0 h-6 fill-primary-dark" />
                </Link>
                <button onClick={closeMenu}>
                  <i className="bx bx-sm bx-x text-primary-dark" />
                </button>
              </NavigationContainer>
              <ul className="flex flex-col">
                {links.map((link, key) => (
                  <li key={key}>
                    <Link
                      className="flex items-center justify-between py-4 px-8 text-mobile-b1-400 text-primary-dark"
                      href={{ pathname: link.href }}
                      onClick={closeMenu}
                    >
                      {link.label}
                      <i className="bx bx-sm bx-right-arrow-alt text-shades-gray-40" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full flex items-center justify-center py-5 px-8">
              <Link className="self-stretch w-full block" href={{ pathname: "/contact" }}>
                <Button className="w-full" outline="dark" size="sm">
                  Contact us
                </Button>
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </Fragment>
  );
};
