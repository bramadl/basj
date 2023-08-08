import { Dispatch, FC, SetStateAction } from "react";
import { useSwiper } from "swiper/react";

interface SwiperControlsProps {
  activeIndex: number;
  index: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export const SwiperControls: FC<SwiperControlsProps> = ({
  activeIndex,
  index,
  setActiveIndex,
}) => {
  const swiper = useSwiper();

  function clickHandler() {
    swiper.slideTo(index);
    setActiveIndex(index);
  }

  return (
    <button
      className={`${
        index === activeIndex ? "bg-shades-gray-50" : "bg-shades-gray-20"
      } w-2 h-2 rounded-full transition-colors ease-out duration-300`}
      onClick={clickHandler}
    />
  );
};
