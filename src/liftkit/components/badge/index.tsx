import styles from "./badge.module.css";
import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";
import Icon from "@/liftkit/components/icon";
import { getOnToken } from "@/lib/colorUtils";
import { HTMLAttributes } from "react";
import { IconName } from "lucide-react/dynamic";

interface LkBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: IconName;
  color?: LkColorWithOnToken;
  scale?: "md" | "lg";
  iconStrokeWidth?: number;
}

export default function Badge({
  icon = "roller-coaster",
  color = "surface",
  scale = "md",
  iconStrokeWidth = 1,
  ...restProps
}: LkBadgeProps) {
  const iconColor = getOnToken(color) as LkColor;

  console.log(iconColor);

  return (
    <div lk-component="badge" lk-badge-color={`lk-${color}`} lk-badge-scale={scale} {...restProps}>
      <div lk-component="slot" lk-slot="icon">
        <Icon name={icon} color={iconColor} strokeWidth={1}></Icon>
      </div>
    </div>
  );
}
