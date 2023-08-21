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
  const response = await performRequest({ query: PRODUCT_QUERY });
  if (response) return { product: response.product };

  return {
    product: {
      title: {
        value: {
          schema: "dast",
          document: {
            type: "root",
            children: [
              {
                type: "heading",
                level: 2,
                children: [
                  {
                    type: "span",
                    marks: [],
                    value: "Proven biomass solutions already exist. ",
                  },
                  {
                    type: "span",
                    marks: ["strong"],
                    value: "We make them happen.",
                  },
                ],
              },
            ],
          },
        },
      },
      thumbnail: {
        responsiveImage: {
          sizes: "",
          src: "/images/png/product-thumbnail.png",
          width: 1920,
          height: 1080,
          alt: "product-thumbnail",
          title: "",
          base64: "",
        },
      },
      thumbnailName: "Wood pellet",
      subtitle: "We also provide another products",
      productList: [
        {
          id: "1",
          name: "Sawdust",
          picture: {
            responsiveImage: {
              sizes: "",
              src: "/images/png/product-sawdust.png",
              width: 1920,
              height: 1080,
              alt: "product-sawdust",
              title: "",
              base64: "",
            },
          },
        },
        {
          id: "2",
          name: "Shaving",
          picture: {
            responsiveImage: {
              sizes: "",
              src: "/images/png/product-shaving.png",
              width: 1920,
              height: 1080,
              alt: "product-shaving",
              title: "",
              base64: "",
            },
          },
        },
        {
          id: "3",
          name: "Wood chip",
          picture: {
            responsiveImage: {
              sizes: "",
              src: "/images/png/product-woodchip.png",
              width: 1920,
              height: 1080,
              alt: "product-woodchip",
              title: "",
              base64: "",
            },
          },
        },
      ],
    },
  };
};
