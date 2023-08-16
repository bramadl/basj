import { performRequest } from "@basj/libs/datocms";

const QUERY = `
  query ContactPage {
    contact: contactPage {
      heroTitle {
        value
      }
      heroMessage {
        value
      }
      heroBackground {
        url
      }
      contactTitle: title
      contactDescription:description
    }
  }
`;

export const getContactPageContent = async () => {
  const { contact } = await performRequest({ query: QUERY });
  return { contact };
};
