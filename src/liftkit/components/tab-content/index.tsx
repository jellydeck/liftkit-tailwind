import styles from "./tab-content.module.css";
import type { ReactNode } from "react";

interface TabContentProps {
  children: ReactNode;
}
export default function TabContent({ children }: TabContentProps) {
  return <div lk-component="tab-content">{children} </div>;
}
