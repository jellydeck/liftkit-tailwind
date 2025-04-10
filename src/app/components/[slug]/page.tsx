import Grid from "@/liftkit/components/grid";
import styles from "./page.module.css";
import NavBar from "@/liftkit/components/navbar";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return (
    <div className={styles.lkPage}>
      <NavBar></NavBar>
      <Grid columns={5} gap={"xl"}></Grid>
      Hello world.
      <Post />
    </div>
  );
}

export function generateStaticParams() {
  return [
    { slug: "section" },
    { slug: "container" },
    { slug: "grid" },
    { slug: "badge" },
    { slug: "button" },
    { slug: "card" },
    { slug: "column" },
    { slug: "containers" },
    { slug: "dropdown-chip" },
    { slug: "dropdown-list" },
    { slug: "heading" },
    { slug: "icon-button" },
    { slug: "icon" },
    { slug: "image" },
    { slug: "menu-chip" },
    { slug: "menu-item" },
    { slug: "menu-list" },
    { slug: "navbar" },
    { slug: "paragraph" },
    { slug: "row" },
    { slug: "select" },
    { slug: "snackbar" },
    { slug: "sticker" },
    { slug: "tab-content" },
    { slug: "tab-link" },
    { slug: "tab-menu" },
    { slug: "tabs" },
    { slug: "text-input" },
    { slug: "text" },
  ];
}

export const dynamicParams = false;
