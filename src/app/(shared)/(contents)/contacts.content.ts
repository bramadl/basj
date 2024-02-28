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
      officeAddress:
        "Jl. Soekarno-Hatta No.1, Dusun II Paya Pasir, Tebing Syahbandar, Kab. Serdang Bedagai, Sumatera Utara",
    },
  };
};
