import { performRequest } from "@basj/libs/datocms";

const CLIENT_QUERY = `
  query ClientSection {
    client: clientSection {
      title {
        value
      }
      message {
        value
      }
      clientList {
        id
        logo {
          responsiveImage(imgixParams: { fit: fill, h: 80, auto: format }) {
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
      clientCertificates {
        id
        name
        certificateUrl {
          filename
          url
        }
      }
    }
  }
`;

export const getClientContent = async () => {
  const response = await performRequest({ query: CLIENT_QUERY });
  if (response) return { client: response.client };

  return {
    client: {
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
                    value: "Our solutions are recognized by ",
                  },
                  {
                    type: "span",
                    marks: ["strong"],
                    value: "international certification bodies.",
                  },
                ],
              },
            ],
          },
        },
      },
      message: {
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
                      "PT Berkah Agung Semesta Jaya is committed to creating positive impacts on people and the planet. We are certified to meet high standards of social and environmental performance.",
                  },
                ],
              },
            ],
          },
        },
      },
      clientList: [
        {
          id: "1",
          logo: {
            responsiveImage: {
              sizes: "",
              src: "/images/png/bureau-veritas-logo.png",
              width: 90,
              height: 110,
              alt: "bureau-veritas-logo",
              title: "",
              base64: "",
            },
          },
        },
        {
          id: "2",
          logo: {
            responsiveImage: {
              sizes: "",
              src: "/images/png/fsc-logo.png",
              width: 246,
              height: 120,
              alt: "fsc-logo",
              title: "",
              base64: "",
            },
          },
        },
        {
          id: "3",
          logo: {
            responsiveImage: {
              sizes: "",
              src: "/images/png/indonesian-legal-wood-logo.png",
              width: 146,
              height: 98,
              alt: "indonesian-legal-wood-logo",
              title: "",
              base64: "",
            },
          },
        },
        {
          id: "4",
          logo: {
            responsiveImage: {
              sizes: "",
              src: "/images/png/sarbi-logo.png",
              width: 233,
              height: 100,
              alt: "sarbi-international-certification-logo",
              title: "",
              base64: "",
            },
          },
        },
      ],
      clientCertificates: [
        {
          id: "1",
          name: "Bureau Certificate",
          certificateUrl: {
            filename: "Bureau Veritas Certificate",
            url: "/pdfs/certificate_bureau_veritas.pdf",
          },
        },
        {
          id: "2",
          name: "Sarbi Certificate",
          certificateUrl: {
            filename: "Sarbi Certificate",
            url: "/pdfs/certificate_sarbi.pdf",
          },
        },
      ],
    },
  };
};
