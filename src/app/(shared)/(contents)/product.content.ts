import { performRequest } from "@basj/libs/datocms";

const PRODUCT_QUERY = `
  query ProductSection {
    product: productSection {
      title {
        value
      }
      thumbnail {
        alt
        height
        url
        width
      }
      thumbnailName
      subtitle
      productList {
        id
        name
        picture {
          alt
          height
          url
          width
        }
      }
    }
  }
`;

export const getProductContent = async () => {
  const { product } = await performRequest({ query: PRODUCT_QUERY });
  return { product };
};
