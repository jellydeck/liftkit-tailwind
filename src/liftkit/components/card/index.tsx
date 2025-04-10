import styles from "./card.module.css";
import { useMemo } from 'react';
import { propsToDataAttrs } from '../utilities';

interface LkCardProps extends React.HTMLAttributes<HTMLDivElement> {
  scaleFactor?: LkFontClass;
  variant?: 'fill' | 'outline' | 'transparent';
  material?: 'flat' | 'glass' | 'rubber';
  opticalCorrection?: 'top' | 'left' | 'right' | 'bottom' | 'x' | 'y' | 'all' | 'none';
  isClickable?: boolean;
  children?: React.ReactNode;
}

export default function Card(props: LkCardProps) {
  const { children, ...restProps } = props;

  const lkCardAttrs = useMemo(
    () => propsToDataAttrs(restProps, 'lk-card'),
    [restProps.scaleFactor, restProps.variant, restProps.material, restProps.opticalCorrection, restProps.isClickable]
  );

  return (
    <div {...lkCardAttrs}>
      <div lk-component="slot" lk-slot="children">{children}</div>
    </div>
  );
}