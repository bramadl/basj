"use client";

import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment, ReactNode, useState } from "react";
import { motion } from "framer-motion";

const defaultSrc =
  "https://drive.google.com/file/d/12cSMY3lpanIJjS5oubl0fKUmJIgHv2S0/preview";

export const VideoPlayer: FC<{ children: (open: () => void) => ReactNode }> = ({
  children,
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openDialog() {
    setIsOpen(true);
  }

  function closeDialog() {
    setIsOpen(false);
    setIsLoaded(false);
  }

  function onSourceLoaded() {
    setIsLoaded(true);
  }

  return (
    <Fragment>
      {children(openDialog)}
      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={closeDialog} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-[rgba(0,0,0,0.9)]"
              aria-hidden="true"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="w-full md:w-[640px] xl:w-[1080px] aspect-video">
                {!isLoaded && (
                  <i className="bx bx-loader-circle bx-md bx-spin absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -ml-4 -mt-8 z-[0] text-primary-white" />
                )}
                <motion.iframe
                  animate={{ opacity: 1 }}
                  allow="autoplay"
                  allowFullScreen
                  className="relative z-[1]"
                  height="100%"
                  initial={{ opacity: 0 }}
                  loading="lazy"
                  src={defaultSrc}
                  transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
                  width="100%"
                  onLoad={onSourceLoaded}
                />
                <button
                  className="absolute z-[1] right-4 top-4 text-primary-white"
                  onClick={closeDialog}
                >
                  <i className="bx bx-x bx-md" />
                </button>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </Fragment>
  );
};
