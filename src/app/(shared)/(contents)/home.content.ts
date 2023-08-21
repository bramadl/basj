import { performRequest } from "@basj/libs/datocms";

const HOME_QUERY = `
  query Home {
    home: homePage {
      heroTitle {
        value
      }
      heroMessage {
        value
      }
      heroButton
      heroBackground {
        url
        video {
          thumbnailUrl
        }
      }
      introductionTitle {
        value
      }
      introductionMessage {
        value
      }
      introductionButton
      benefitTitle {
        value
      }
      benefitItems {
        id
        iconSvg {
          alt
          height
          url
          width
        }
        name
        description
      }
      benefitCallout {
        value
      }
      mapTitle {
        value
      }
      mapMessage {
        value
      }
    }
  }
`;

export const getHomeContent = async () => {
  const response = await performRequest({ query: HOME_QUERY });
  if (response) return { home: response.home };

  return {
    home: {
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
                    value: "Unlock the full power of wood pellet ",
                  },
                  {
                    type: "span",
                    marks: ["strong"],
                    value: "with BASJ.",
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
                      "Our Wood Pellets encompass more than just energy, but a great biomass solution for future times to come.",
                  },
                ],
              },
            ],
          },
        },
      },
      heroButton: "Discover how",
      heroBackground: {
        url: "/video/hero-background.mp4",
        video: {
          thumbnailUrl: "/images/png/hero-background-thumbnail.png",
        },
      },
      introductionTitle: {
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
                    value: "Since 2015, we produce ",
                  },
                  {
                    type: "span",
                    marks: ["strong"],
                    value: "Wood Pellets as a biomass energy source.",
                  },
                ],
              },
            ],
          },
        },
      },
      introductionMessage: {
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
                      "Every wood pellet we produce adheres to our strict quality criteria, surpassing the benchmarks set by the industry. We constantly strives to produce high quality wood pellets, with such unwavering commitment to creating the most exceptional quality wood pellets worldwide.",
                  },
                ],
              },
            ],
          },
        },
      },
      introductionButton: "Discover how",
      benefitTitle: {
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
                    value: "Wood Pellets, ",
                  },
                  {
                    type: "span",
                    marks: ["strong"],
                    value: "the future of clean energy.",
                  },
                ],
              },
            ],
          },
        },
      },
      benefitItems: [
        {
          id: "1",
          iconSvg: {
            alt: "renewable-icon",
            height: 36,
            url: "/images/svg/renewable.svg",
            width: 36,
          },
          name: "Renewable",
          description:
            "Wood pellets can be replenished over time. This makes them a sustainable alternative to fossil fuels, which are a finite resource.",
        },
        {
          id: "2",
          iconSvg: {
            alt: "low-emissions-icon",
            height: 36,
            url: "/images/svg/low-emissions.svg",
            width: 36,
          },
          name: "Low emissions",
          description:
            "Wood pellets produce lower emissions of greenhouse gases than fossil fuels, such as coal and oil.",
        },
        {
          id: "3",
          iconSvg: {
            alt: "economically-viable-icon",
            height: 36,
            url: "/images/svg/economically-viable.svg",
            width: 36,
          },
          name: "Economically viable",
          description:
            "Wood pellets are a cost-effective way to generate heat and electricity, and a viable option for businesses and homeowners who are looking to reduce their energy costs.",
        },
      ],
      benefitCallout: {
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
                    marks: ["highlight"],
                    value:
                      "A 2020 study by the U.S. Department of Energy found that wood pellets can be a cost-effective way to generate heat and electricity.",
                  },
                ],
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "span",
                    marks: [],
                    value:
                      "The study found that wood pellets can save businesses and homeowners up to 30% on their energy costs.",
                  },
                ],
              },
            ],
          },
        },
      },
      mapTitle: {
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
                    value: "Supported by powerful partners ",
                  },
                  {
                    type: "span",
                    marks: ["strong"],
                    value: "around the world.",
                  },
                ],
              },
            ],
          },
        },
      },
      mapMessage: {
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
                      "The reliance our partners have shown has taken us to different destinations. In the following years, we look forward to expand our chains.",
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
