import { FC, Fragment } from "react";

import { MilestoneSwiper } from "./milestone-swiper";
import { MilestoneList } from "./milestone-list";

export const MilestoneTimeline: FC = () => {
  const milestones = [
    {
      title: "Fueling a greener future",
      description:
        "In the action of bridging the world's green gap, PT Berkah Agung Semesta Jaya was established as a genuine embodiement of commitment towards the environment, by focusing on a sustainable production of Wood Pellets.",
      year: "2015",
    },
    {
      title: "Precision in production",
      description:
        "At the heart of PT Berkah Agung Semesta Jaya's pursuit of quality Wood Pellet production, our company takes a meticulous approach in all of our processes to eliminate any variability in our Wood Pellet quality.",
      year: "2016 - 2018",
    },
    {
      title: "Enviromental stewardship",
      description:
        "PT Berkah Agung Semesta Jaya shines as a pillar of environmental preservation, and we have been trusted by many local industrial partners as well as international partners.",
      year: "2019 - 2021",
    },
    {
      title: "Agile operation",
      description:
        "PT Berkah Agung Semesta Jaya recognized that adaptability was key to survival. Through great human capital investment and crisis management, we bounced back stronger for a much more resilient and responsible company operation.",
      year: "2019 - 2021",
    },
    {
      title: "Expansion & IPO",
      description:
        "PT Berkah Agung Semesta Jaya gains the capability to enlarge its factory & operation, increasing production capacity from <100,000 tons of Wood Pellet to >130,000 tons of Wood Pellet yearly. With that, the company is proceeding to its Initial Public Offering to institutional and retail investors.",
      year: "2023 - onwards",
    },
  ];
  
  return (
    <Fragment>
      <MilestoneSwiper milestones={milestones} />
      <MilestoneList milestones={milestones} />
    </Fragment>
  );
};
