import Image from "next/image";
import styles from "./page.module.css";
import Welcome from "@/content/components/section.mdx";

export default function Home() {
  return (
    <div className={styles.page}>
      <Welcome/>
    </div>
  );
}
