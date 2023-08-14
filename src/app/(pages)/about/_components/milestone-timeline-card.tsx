import { FC } from "react";

interface MilestoneTimelineCardProps {
  description: string;
  title: string;
  year: string;
}

export const MilestoneTimelineCard: FC<MilestoneTimelineCardProps> = ({
  description,
  title,
  year,
}) => {
  return (
    <div className="milestone-timeline-card flex p-6 flex-col justify-center items-start gap-4 self-stretch rounded-xl bg-primary-light-amber">
      <p className="text-primary-bold-amber text-mobile-p-700">{year}</p>
      <h3 className="text-primary-dark text-mobile-h4-400">{title}</h3>
      <p className="text-primary-dark text-mobile-b1-400">{description}</p>
    </div>
  );
};
