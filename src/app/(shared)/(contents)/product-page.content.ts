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
  const response = await performRequest({ query: QUERY });
  if (response) return { product: response.product };

  return {
    product: {
      heroTitle: {
        value: {
          schema: "dast",
          document: {
            type: "root",
            children: [
              {
                type: "heading",
                level: 1,
                children: [
                  {
                    type: "span",
                    marks: [],
                    value: "Fueling excellence with quality wood pellets",
                  },
                ],
              },
            ],
          },
        },
      },
      heroMessage: {
        value: {
          schema: "dast",
          document: {
            type: "root",
            children: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "span",
                    marks: [],
                    value:
                      "Meticulously select the finest wood material, ensuring that each pellet is made from sustainably sourced and efficient energy output.",
                  },
                ],
              },
            ],
          },
        },
      },
      heroBackground: {
        url: "/images/png/product-page-background.png",
      },
      productionTitle: "A glance of our wood pellet productions",
      productionContent: [
        {
          id: "1",
          number: "01",
          tabLabel: "Material",
          name: "Material Loading",
          message:
            "We source our wood materials through sustainable practice, ensuring compliance to the industry's standard.",
          points: [
            { name: "Log" },
            { name: "Veneer" },
            { name: "Slab" },
            { name: "Sawdust" },
          ],
          images: [
            {
              responsiveImage: {
                sizes: "",
                src: "/images/png/production-material-one.jpg",
                width: 3024,
                height: 4032,
                alt: "production-material-photo-one",
                title: "",
                base64: "",
              },
            },
          ],
        },
        {
          id: "2",
          number: "02",
          tabLabel: "Chipping",
          name: "Chipping",
          message:
            "The woods are then converted to small & consistent pieces through a mechanical breaking down of larger wood pieces such as logs and branches.",
          points: [
            { name: "Slab" },
            { name: "Wood Chipper" },
            { name: "Hammer Mill" },
          ],
          images: [
            {
              responsiveImage: {
                sizes: "",
                src: "/images/png/production-chipping-one.jpg",
                width: 3024,
                height: 4032,
                alt: "production-chipping-photo-one",
                title: "",
                base64: "",
              },
            },
            {
              responsiveImage: {
                sizes: "",
                src: "/images/png/production-chipping-two.jpg",
                width: 3024,
                height: 4032,
                alt: "production-chipping-photo-two",
                title: "",
                base64: "",
              },
            },
            {
              responsiveImage: {
                sizes: "",
                src: "/images/png/production-chipping-three.jpg",
                width: 3024,
                height: 4032,
                alt: "production-chipping-photo-three",
                title: "",
                base64: "",
              },
            },
          ],
        },
        {
          id: "3",
          number: "03",
          tabLabel: "Secondary Drying",
          name: "Secondary Drying",
          message:
            "Prior to pelletization, the woods are to be dried for the purpose of moisture reduction and enhanced energy content.",
          points: [{ name: "Dryer" }, { name: "Test MC" }, { name: "Screen" }],
          images: [
            {
              responsiveImage: {
                sizes: "",
                src: "/images/png/production-drying-one.jpg",
                width: 3024,
                height: 4032,
                alt: "production-drying-photo-one",
                title: "",
                base64: "",
              },
            },
            {
              responsiveImage: {
                sizes: "",
                src: "/images/png/production-drying-two.jpg",
                width: 3024,
                height: 4032,
                alt: "production-drying-photo-two",
                title: "",
                base64: "",
              },
            },
          ],
        },
        {
          id: "4",
          number: "04",
          tabLabel: "Milling & Quality Control",
          name: "Milling & Quality Control",
          message:
            "This is where the wood materials are converted to pellets, ensuring size consistency, improved combustion, and the pellets are later cooled down for quality control.",
          points: [
            { name: "Cooling" },
            { name: "Screening" },
            { name: "Packaging" },
          ],
          images: [
            {
              responsiveImage: {
                sizes: "",
                src: "/images/png/production-milling-one.jpg",
                width: 3024,
                height: 4032,
                alt: "production-milling-photo-one",
                title: "",
                base64: "",
              },
            },
            {
              responsiveImage: {
                sizes: "",
                src: "/images/png/production-milling-two.jpg",
                width: 3024,
                height: 4032,
                alt: "production-milling-photo-two",
                title: "",
                base64: "",
              },
            },
          ],
        },
        {
          id: "5",
          number: "05",
          tabLabel: "Packaging & Shipping",
          name: "Packaging & Shipping",
          message:
            "After a thorough quality control, our Wood Pellets are packaged in bags made of durable materials and ready to be shipped to our partners, both locally all throughout Medan area and globally to Japan, Korea and more.",
          points: [
            { name: "Jumbo bag" },
            { name: "Bulk" },
            { name: "Weight truck" },
          ],
          images: [
            {
              responsiveImage: {
                sizes: "",
                src: "/images/png/production-packaging-one.jpg",
                width: 3024,
                height: 4032,
                alt: "production-milling-packaging-one",
                title: "",
                base64: "",
              },
            },
          ],
        },
      ],
    },
  };
};
