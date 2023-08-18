import { performRequest } from "@basj/libs/datocms";

const PRODUCT_QUERY = `
  query ProductSection {
    product: productSection {
      title {
        value
      }
      thumbnail {
        responsiveImage(imgixParams: { auto: format }) {
          sizes
          src
          width
          height
          alt
          title
          base64
        }
      }
      thumbnailName
      subtitle
      productList {
        id
        name
        picture {
          responsiveImage(imgixParams: { auto: format }) {
            sizes
            src
            width
            height
            alt
            title
            base64
          }
        }
      }
    }
  }
`;

export const getProductContent = async () => {
  const { product } = await performRequest({ query: PRODUCT_QUERY });
  return { product };
};
