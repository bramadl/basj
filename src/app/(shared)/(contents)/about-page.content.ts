import { performRequest } from "@basj/libs/datocms";

const QUERY = `
  query AboutPage {
    about: aboutPage {
      heroTitle {
        value
      }
      heroMessage {
        value
      }
      heroBackground {
        url
      }
      introductionTag
      introductionTitle {
        value
      }
      introductionMessage {
        value
      }
      missionTitle
      missionList {
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
      missionThumbnail {
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
      galleryTitle
      galleryImages {
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
      milestoneTitle
      milestoneTimelines {
        id
        year
        title
        description
      }
    }
  }
`;

export const getAboutPageContent = async () => {
  const response = await performRequest({ query: QUERY });
  if (response) return { about: response.about };

  return {
    about: {
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
                    value: "Preserving Nature. Powering Future.",
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
                      "Whereas green biomass holds paramount importance in today's world for a multitude of reasons, our company becomes one of the performers to create a sustainable revelation in green biomass through the production of quality Wood Pellets.",
                  },
                ],
              },
            ],
          },
        },
      },
      heroBackground: {
        url: "/images/png/about-page-background.jpg",
      },
      introductionTag: "Our vision",
      introductionTitle: {
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
                    value: "Leading the way in ",
                  },
                  {
                    type: "span",
                    marks: ["strong"],
                    value: "renewable energy.",
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
                      "In the ongoing quest for sustainable energy solutions, wood pellets have become a shining example of how innovation can harmonize with nature's wisdom. Derived from renewable biomass sources from, wood pellets offer a viable pathway toward a greener and cleaner future for the generations to come. Currently, our local supply chains have expanded through all over North Sumatra including Medan, Siantar, Binjai, Langkat, and more.",
                  },
                ],
              },
            ],
          },
        },
      },
      missionTitle: "Missions we pursue.",
      missionList: [
        {
          id: "1",
          iconSvg: {
            alt: "preserve-icon",
            height: 32,
            url: "/images/svg/preserve.svg",
            width: 32,
          },
          name: "Preserve",
          description:
            "Our company is committed to further support the ongoing green agenda of reducing the impact of fossil fuels on the environment.",
        },
        {
          id: "2",
          iconSvg: {
            alt: "provide-icon",
            height: 32,
            url: "/images/svg/provide.svg",
            width: 32,
          },
          name: "Provide",
          description:
            "Producing sustainable and superior quality wood pellets as a green alternative energy sources, promoting a greener future for individuals and businesses.",
        },
        {
          id: "3",
          iconSvg: {
            alt: "pursue-icon",
            height: 32,
            url: "/images/svg/pursue.svg",
            width: 32,
          },
          name: "Pursue",
          description:
            "Continually innovating and improving our manufacturing processes to produce wood pellets with superior combustion efficiency, low emissions, and consistent quality.",
        },
      ],
      missionThumbnail: {
        responsiveImage: {
          sizes: "",
          src: "/images/png/mission-thumbnail.jpg",
          width: 1920,
          height: 1080,
          alt: "mission-thumbnail",
          title: "",
          base64: "",
        },
      },
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
                    value:
                      "These core values evolved with us as the company grew and ",
                  },
                  {
                    type: "span",
                    marks: ["strong"],
                    value: "we learned from our experiences.",
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
      galleryTitle: "Our people, our product, our process.",
      galleryImages: [
        {
          responsiveImage: {
            sizes: "",
            src: "/images/png/production-chipping-two.jpg",
            width: 821,
            height: 1459,
            alt: "gallery-photo-one",
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
            alt: "gallery-photo-two",
            title: "",
            base64: "",
          },
        },
        {
          responsiveImage: {
            sizes: "",
            src: "/images/png/production-chipping-three.jpg",
            width: 1866,
            height: 3318,
            alt: "gallery-photo-three",
            title: "",
            base64: "",
          },
        },
        {
          responsiveImage: {
            sizes: "",
            src: "/images/png/production-chipping-one.jpg",
            width: 3024,
            height: 4032,
            alt: "gallery-photo-four",
            title: "",
            base64: "",
          },
        },
        {
          responsiveImage: {
            sizes: "",
            src: "/images/png/production-milling-one.jpg",
            width: 3024,
            height: 4032,
            alt: "gallery-photo-five",
            title: "",
            base64: "",
          },
        },
      ],
      milestoneTitle: "Looking back, moving forward.",
      milestoneTimelines: [
        {
          id: "1",
          year: "2015",
          title: "Fueling a greener future",
          description:
            "In the action of bridging the world's green gap, PT Berkah Agung Semesta Jaya was established as a genuine embodiement of commitment towards the environment, by focusing on a sustainable production of Wood Pellets.",
        },
        {
          id: "2",
          year: "2016 - 2018",
          title: "Precision in production",
          description:
            "At the heart of PT Berkah Agung Semesta Jaya's pursuit of quality Wood Pellet production, our company takes a meticulous approach in all of our processes to eliminate any variability in our Wood Pellet quality.",
        },
        {
          id: "3",
          year: "2019 - 2021",
          title: "Enviromental stewardship",
          description:
            "PT Berkah Agung Semesta Jaya shines as a pillar of environmental preservation, and we have been trusted by many local industrial partners as well as international partners.",
        },
        {
          id: "4",
          year: "2022",
          title: "Agile operation",
          description:
            "PT Berkah Agung Semesta Jaya recognized that adaptability was key to survival. Through great human capital investment and crisis management, we bounced back stronger for a much more resilient and responsible company operation.",
        },
        {
          id: "5",
          year: "2023 - onwards",
          title: "Expansion & IPO",
          description:
            "PT Berkah Agung Semesta Jaya gains the capability to enlarge its factory & operation, increasing production capacity from <100,000 tons of Wood Pellet to >130,000 tons of Wood Pellet yearly. With that, the company is proceeding to its Initial Public Offering to institutional and retail investors.",
        },
      ],
    },
  };
};
