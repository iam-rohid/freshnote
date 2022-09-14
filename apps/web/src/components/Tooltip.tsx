import { FC, ReactNode } from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

export interface TooltipProps {
  children: ReactNode;
  label: string;
  side?: "right" | "top" | "bottom" | "left";
  align?: "start" | "center" | "end";
}

const Tooltip: FC<TooltipProps> = (props) => {
  const { children, label, side, align } = props;
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content side={side} align={align} className="tooltip">
            <RadixTooltip.Arrow className="tooltip-arrow" />
            <p className="tooltip-label">{label}</p>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
