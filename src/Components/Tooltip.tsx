import { ReactNode, useState, useRef, useEffect } from "react";
import clsx from "clsx";
import InfoIcon from "./InfoIcon";

type MultiUploadTooltipProps = {
  children: ReactNode;
};

const Tooltip = ({ children }: MultiUploadTooltipProps) => {
  const [tooltipIsVisible, setTooltipIsVisible] = useState(false);

  const handleInfoClick = () => {
    setTooltipIsVisible(!tooltipIsVisible);
  };

  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setTooltipIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-8 relative">
      <span className=" cursor-pointer" onClick={handleInfoClick} ref={iconRef}>
        <InfoIcon />
      </span>
      <div
        className={clsx(
          "absolute left-16 top-[34px] flex scale-0 bg-slate-300 p-4 rounded-md",
          tooltipIsVisible ? "scale-100" : "scale-0"
        )}
        ref={tooltipRef}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
