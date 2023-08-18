import { performRequest } from "@basj/libs/datocms";

const QUERY = `
  query ProductPage {
    product: productPage {
      heroTitle {
        value
      }
      heroMessage {
        value
      }
      heroBackground {
        url
      }
      productionTitle
      productionContent {
        id
        number
        tabLabel
        name
        message
        points {
          name
        }
        images {
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

export const getProductPageContent = async () => {
  const { product } = await performRequest({ query: QUERY });
  return { product };
};
