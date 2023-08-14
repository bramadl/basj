import { FC } from "react";

import { MilestoneTimelineStep } from "./milestone-timeline-step";

interface MilestoneListProps {
  milestones: {
    description: string;
    title: string;
    year: string;
  }[];
}

export const MilestoneList: FC<MilestoneListProps> = ({ milestones }) => {
  return (
    <ul className="hidden lg:flex flex-col gap-[100px] w-[768px] mx-auto">
      {milestones.map((milestone, key) => (
        <li key={key}>
          <MilestoneTimelineStep
            {...milestone}
            lastItem={key === milestones.length - 1}
          />
        </li>
      ))}
    </ul>
  );
};
