import { BaseHTMLAttributes, FC } from "react";
import { Image as DatoImage, ResponsiveImageType } from "react-datocms";

interface ProductCardProps extends BaseHTMLAttributes<HTMLDivElement> {
  caption: string;
  image: ResponsiveImageType;
}

export const ProductCard: FC<ProductCardProps> = ({
  caption,
  image,
  ...props
}) => {
  return (
    <div {...props} className={`${props.className} relative w-full`}>
      <figure className="relative w-full h-full overflow-hidden rounded-[20px] group">
        <DatoImage
          className="w-full h-full object-cover group-hover:scale-110 rounded-[20px] transition-transform ease-out duration-300"
          data={image}
          objectFit="cover"
          objectPosition="center"
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
        <p className="text-mobile-h2-700 text-primary-white">{caption}</p>
      </figcaption>
    </div>
  );
};
