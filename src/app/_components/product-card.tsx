import Image from "next/image";
import { BaseHTMLAttributes, FC } from "react";

interface ProductCardProps extends BaseHTMLAttributes<HTMLDivElement> {}

export const ProductCard: FC<ProductCardProps> = ({ ...props }) => {
  return (
    <div {...props} className={`${props.className} relative w-full`}>
      <figure className="relative w-full h-full overflow-hidden rounded-[20px] group">
        <Image
          alt="image"
          className="object-cover group-hover:scale-125 transition-transform ease-out duration-300"
          fill
          src={
            "https://s3-alpha-sig.figma.com/img/4b5b/3a65/cd3b76bee75d860af6b04046e4482dc4?Expires=1692576000&Signature=bYKLZXrdP1zL9Z6J1Y8iKfRaAlYH793xBjllBAwmUKUJ5GG-YElXIp7QADU8cDpvBzKYLhqlMK-c~hBO8IOWkPkug1Eegwcjtr3QhtQXwZDA6VTRGhDzotV1rx8GNlBr04eHhELIUK3QFX1IHaIOqvc8shY0taKVifblAw03w20OJXT7z9aCgFPTpgtagGphY3oYd-oolGVRYa2uz~LxGVNg7c3vB1LIg-5jgzmURILcXFWYADzwaLsNwhZMYmu9D9iK2Im-o9ojaG~2mYj-7-Rc8aFwCbiOIcwILcfERSoDREB-0Ve7eyd73Cj5m6XwTiT954pIMZ2ZiUCtrzPz9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          }
        />
        <div
          className="absolute left-0 top-0 inset-0"
          style={{
            background:
              "linear-gradient(134deg, rgba(8, 96, 87, 0.50) 0%, rgba(43, 38, 38, 0.00) 100%, rgba(8, 96, 87, 0.00) 100%)",
          }}
        />
      </figure>
      <figcaption className="absolute left-8 bottom-8">
        <p className="text-mobile-h2-700 text-primary-white">Wood pellet</p>
      </figcaption>
    </div>
  );
};
