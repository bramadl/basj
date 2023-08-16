import { performRequest } from "@basj/libs/datocms";

const VIDEO_QUERY = `
  query CompanyProfileVideo {
    companyProfile: companyProfileSection {
      thumbnail: videoThumbnail {
        alt
        url
        width
        height
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
