import styles from "./badge.module.css";
import { useMemo } from "react";
import { propsToDataAttrs } from "./utilities";


interface LkBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  scale?: "md" | "lg";
  color?: LkColorWithOnToken;
  icon?: React.ReactNode;
}

export default function Badge(props: LkBadgeProps) {
  const { icon, children, ...restProps } = props;

  const lkBadgeAttrs = useMemo(() => propsToDataAttrs(restProps, "lk-badge"), [restProps.scale, restProps.color]);

  return (
    <div {...lkBadgeAttrs}>
      <div lk-component="slot" lk-slot="icon">
        {icon}
      </div>
      {children}
    </div>
  );
}
