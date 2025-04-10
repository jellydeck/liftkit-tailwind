import styles from "./grid.module.css";
import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";

// The LiftkitGrid type definition
interface LkGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns: number;
  gap: LkSizeUnit;
  autoResponsive: boolean;
}

export default function Grid(props: LkGridProps) {
  // Extract children and any other props you don't want passed as custom attributes
  // Do this on every component.
  const { children, ...restProps } = props;

  const lkGridAttrs = useMemo(() => propsToDataAttrs(restProps, "lk-dropdown"), []);

  return <div {...lkGridAttrs}>{children}</div>;
}
