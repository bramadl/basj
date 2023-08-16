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
          alt
          height
          sizes
          src
          width
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
        responsiveImage(imgixParams: { fit: crop, w: 1200, h: 1200, auto: format }) {
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
  const { about } = await performRequest({ query: QUERY });
  return { about };
};
