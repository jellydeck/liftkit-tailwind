import { useMemo } from 'react';
import { propsToDataAttrs } from './utilities';

interface LkIconProps extends React.HTMLAttributes<HTMLElement> {
  fontClass?: Exclude<LkFontClass, `${string}-bold` | `${string}-mono`>;
  color?: LkColorWithOnToken | 'currentColor';
  display?: 'block' | 'inline-block' | 'inline';
  children: string; // material symbol name
}

export default function Icon(props: LkIconProps) {
  const { children, ...restProps } = props;

  const lkIconAttrs = useMemo(
    () => propsToDataAttrs(restProps, 'lk-icon'),
    [restProps.fontClass, restProps.color, restProps.display]
  );

  return (
    <i {...lkIconAttrs}>{children}</i>
  );
}
