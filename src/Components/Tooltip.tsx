import { ReactNode } from "react";
import InfoIcon from "./InfoIcon";

type MultiUploadTooltipProps = {
  children: ReactNode;
};

const Tooltip = ({ children }: MultiUploadTooltipProps) => {
  return (
    <div className="p-8 relative">
      <InfoIcon />
      <div className="absolute left-16 top-[34px] flex scale-0 bg-slate-300 p-4 rounded-md">
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
