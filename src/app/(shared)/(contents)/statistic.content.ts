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
  const response = await performRequest({ query: STATISTIC_QUERY });
  if (response) return { statistic: response.statistic };

  return {
    statistic: {
      title: {
        value: {
          schema: "dast",
          document: {
            type: "root",
            children: [
              {
                type: "heading",
                level: 2,
                children: [
                  {
                    type: "span",
                    marks: [],
                    value: "Let the number speaks.",
                  },
                ],
              },
            ],
          },
        },
      },
      summaries: [
        {
          year: "2024",
          name: "Wood Pellets Production",
          amount: 135000,
          unit: "tons /year",
          description:
            "Due to the current expansion, in year of 2024 forward, PT. Berkah Agung Semesta Jaya will be able to produce more Wood Pellet yearly.",
        },
        {
          year: "2023",
          name: "Wood Pellets Production",
          amount: 104000,
          unit: "tons /year",
          description:
            "As per year of 2023, PT. Berkah Agung Semesta Jaya has reached the capability to produce 104,000 tons of Wood Pellet yearly.",
        },
      ],
      highlights: [
        {
          id: "1",
          amount: "35",
          name: "Partners",
        },
        {
          id: "2",
          amount: "45",
          name: "Labors",
        },
        {
          id: "3",
          amount: "3",
          name: "Export destinations",
        },
        {
          id: "4",
          amount: "5",
          name: "Investors",
        },
      ],
    },
  };
};
