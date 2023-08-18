import { performRequest } from "@basj/libs/datocms";

const VIDEO_QUERY = `
  query CompanyProfileVideo {
    companyProfile: companyProfileSection {
      thumbnail: videoThumbnail {
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
    }
  }
`;

export const getVideoContent = async () => {
  const { companyProfile } = await performRequest({
    query: VIDEO_QUERY,
    revalidate: 60 * 60,
  });

  return { companyProfile };
};
