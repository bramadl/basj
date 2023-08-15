import {
  AnimationPlaybackControls,
  AnimationSequence,
  Segment,
  stagger,
  useAnimate,
  useInView,
} from "framer-motion";
import { useEffect } from "react";

interface TransitionElement {
  [key: string]: string;
}

export const useFadeTransition = (
  elements: TransitionElement,
  options?: {
    staggerDelay?: string;
    whenInView?: boolean;
  }
) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { margin: "-100px", once: true });

  useEffect(() => {
    const sequence: AnimationSequence = Object.values(elements).map(
      (element, index) => {
        return [
          element,
          { opacity: [0, 1] },
          ...(index === 0
            ? []
            : [{ at: options?.staggerDelay || "-0.8", delay: stagger(0.2) }]),
        ] as Segment;
      }
    ) as AnimationSequence;

    const animation = () => {
      return animate(sequence, {
        defaultTransition: { duration: 1, ease: "easeOut" },
      });
    };

    if (options?.whenInView) {
      if (isInView) animation();
    } else {
      animation();
    }
  }, [animate, elements, isInView, options?.staggerDelay, options?.whenInView]);

  return { scope };
};
