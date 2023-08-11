import { useMotionValueEvent, useScroll } from "framer-motion";

export const useNavigationScroll = (
  callback: (latestValue: number) => void
) => {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", callback);

  return { scrollY };
};
