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
  const { client } = await performRequest({ query: CLIENT_QUERY });
  return { client };
};
