import { performRequest } from "@basj/libs/datocms";

const STATISTIC_QUERY = `
  query StatisticQuery {
    statistic: statisticSection {
      title {
        value
      }
      summaries {
        year
        name
        amount
        unit
        description
      }
      highlights {
        id
        amount
        name
      }
    }
  }
`;

export const getStatisticContent = async () => {
  const { statistic } = await performRequest({ query: STATISTIC_QUERY });
  return { statistic };
};
