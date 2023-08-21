import { performRequest } from "@basj/libs/datocms";

const CTA_QUERY = `
  query CTAQuery {
    callToAction: callToActionSection {
      background {
        url
      }
      title {
        value
      }
      message {
        value
      }
    }
  }
`;

export const getCtaContent = async () => {
  const response = await performRequest({ query: CTA_QUERY });
  if (response) return { callToAction: response.callToAction };

  return {
    callToAction: {
      background: {
        url: "/images/png/cta-background.png",
      },
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
                    value: "Ready to make change? ",
                  },
                  {
                    type: "span",
                    marks: ["strong"],
                    value: "Let's be partner.",
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
                      "We are a trusted supplier of biomass energy products to a wide range of customers, including leading biofuel refiners, major oil companies, blenders, retailers, and other commodity companies.",
                  },
                ],
              },
            ],
          },
        },
      },
    },
  };
};
