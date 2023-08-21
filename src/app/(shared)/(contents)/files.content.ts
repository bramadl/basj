import { performRequest } from "@basj/libs/datocms";

const QUERY = `
  query Files {
    file {
      companyProfile
    }
  }
`;

export const getFilesContent = async () => {
  const response = await performRequest({ query: QUERY });
  if (response) return { files: response.files };

  return {
    files: {
      companyProfile: "/pdfs/pt_basj_company_profile.pdf",
    },
  };
};
