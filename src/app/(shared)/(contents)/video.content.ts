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
  const response = await performRequest({ query: VIDEO_QUERY });
  if (response) return { companyProfile: response.companyProfile };

  return {
    companyProfile: {
      thumbnail: {
        responsiveImage: {
          sizes: "",
          src: "/images/png/video-cover.png",
          width: 1920,
          height: 1080,
          alt: "basj-company-profile-video-thumbnail",
          title: "",
          base64: "",
        },
      }
    }
  };
};
