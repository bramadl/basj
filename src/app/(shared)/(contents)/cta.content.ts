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
  const { callToAction } = await performRequest({ query: CTA_QUERY });
  return { callToAction };
};
