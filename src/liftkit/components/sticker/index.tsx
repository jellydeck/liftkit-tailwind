import styles from "./sticker.module.css";
import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";
import Text from "./text";

interface LkStickerProps extends React.HTMLAttributes<HTMLDivElement> {
  content?: string;
  color?: string; // Should match allowed subset of LkColor from Button
}

export default function Sticker({ content = "sticker", color = "lk-primary", ...rest }: LkStickerProps) {
  const dataAttrs = useMemo(() => propsToDataAttrs({ color }, "lk-sticker"), [color]);

  return (
    <div {...dataAttrs} {...rest}>
      <Text fontClass="label" content={content} />
    </div>
  );
}
