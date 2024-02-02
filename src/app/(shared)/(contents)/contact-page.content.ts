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
    contacts: contact {
      whatsappNumber
      emailAddress
    }
  }
`;

export const getContactPageContent = async () => {
  const response = await performRequest({ query: QUERY });
  if (response) return { contact: response.contact };

  return {
    contact: {
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
                    value: "Get in touch.",
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
                      "We are glad to have joined forces with industry partners from Indonesia, Japan, and Korea. Looking forward to cooperate with more.",
                  },
                ],
              },
            ],
          },
        },
      },
      heroBackground: {
        url: "/images/png/contact-page-background.png",
      },
      contactTitle: "Your partner for quality wood pellets.",
      contactDescription:
        "We are glad to have joined forces with industry partners from Indonesia, Japan, and Korea. Looking forward to cooperate with more.",
      contacts: {
        whatsappNumber: "6282164314585",
        emailAddress: "berkahagung.sj@yahoo.com",
      },
    },
  };
};
