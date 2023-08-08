import { BaseHTMLAttributes, FC } from "react";

export interface CalloutProps extends BaseHTMLAttributes<HTMLDivElement> {}

const Dot: FC = () => {
  return (
    <div className="flex items-center justify-center gap-[10px] py-3 ">
      <div className="w-3 h-3 rounded-full bg-primary-bold-amber" />
    </div>
  );
};

export const Callout: FC<CalloutProps> = ({ ...props }) => {
  return (
    <div className="flex flex-shrink-0 items-start justify-start self-stretch gap-5 py-5 px-7 rounded-lg bg-primary-light-amber">
      <Dot />
      {props.children}
    </div>
  );
};
