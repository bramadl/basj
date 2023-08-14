"use client";

import Image from "next/image";
import { FC, Fragment, HTMLAttributes, ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";

const VideoPlayer: FC<{ children: (open: () => void) => ReactNode }> = ({
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
                  src="https://drive.google.com/file/d/12cSMY3lpanIJjS5oubl0fKUmJIgHv2S0/preview"
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

interface IntroductionVideoProps extends HTMLAttributes<HTMLDivElement> {}

export const IntroductionVideo: FC<IntroductionVideoProps> = ({ ...props }) => {
  return (
    <div
      {...props}
      className={`${props.className} relative flex-shrink-0 w-full lg:w-auto lg:flex-1 h-[188.669px] md:h-[320px]`}
    >
      <Image
        alt="Thumbnail"
        className="w-full h-full rounded-xl object-cover"
        src={
          "https://s3-alpha-sig.figma.com/img/4896/0fe4/d30fb58e74cf78f249818e733af1fc59?Expires=1692576000&Signature=Xd5zgWmeCZq3by4ariDB-rzSkahAd7WT-TQ6gUtqq6sQId-s88fzo7ABfJ7Qk9GXDVdfZ5EKwXAaeS~QkC-dchDYNISaKqko100RqlmaHb2cp4DzR3VJzdVGA41xtSFHjsozAheufFXP1KyihOOSMRyeUl32KGw7yE9rs7E-XuYbJnPrqF3qrZw02zGY08jqZQj4efWtiNs1JOyJSmMg985-nX3h1A-dRRan-FqRnd4TJM7Cp7qYcuulwUlX8g1ryuRu-mdGyhRTFUtMny4mPBCliipaHmudmqEhU00GcdGRVEdHIwpKHkSJIMKbumSq14jBis9eHfks8wXLmDq8Zw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        }
        width={400}
        height={400}
      />
      <VideoPlayer>
        {(open) => (
          <button
            className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-primary-white"
            onClick={open}
          >
            <i className="bx bx-play-circle bx-lg" />
          </button>
        )}
      </VideoPlayer>
    </div>
  );
};
