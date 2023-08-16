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
  const { home } = await performRequest({ query: HOME_QUERY });
  return { home };
};
