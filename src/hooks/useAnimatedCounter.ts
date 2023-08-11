import {
  useAnimate,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

export const useAnimatedCounter = (finalValue: number) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { margin: "-100px" });

  const counter = useMotionValue<number>(0);
  const realCounter = useTransform(
    counter,
    (input) => `${Math.round(input).toLocaleString()}+`
  );

  useEffect(() => {
    const animation = animate(counter, finalValue, {
      autoplay: false,
      duration: 2,
      ease: "easeOut",
    });

    if (isInView) animation.play();
    return animation.stop;
  }, [animate, counter, finalValue, isInView]);

  return { counter: realCounter, scope };
};
