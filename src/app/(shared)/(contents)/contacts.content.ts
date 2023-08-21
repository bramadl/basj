import { performRequest } from "@basj/libs/datocms";

const QUERY = `
  query Contacts {
    contact {
      whatsappNumber
      emailAddress
      officeAddress
    }
  }
`;

export const getContactContent = async () => {
  const response = await performRequest({ query: QUERY });
  if (response) return { contact: response.contact };

  return {
    contact: {
      whatsappNumber: "6285360828888",
      emailAddress: "berkahagung.sj@yahoo.com",
      officeAddress: "JI. Jalinsum No. 01 Tambangan, Kab. Sergai, Paya Pasir, Medan Marelan, Kota Medan, Sumatera Utara 20998",
    },
  };
};
