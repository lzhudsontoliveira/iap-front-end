import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface BadgeProps {
  children: ReactNode;
  active?: boolean;
}

export function Badge({ children, active } : BadgeProps) {
  return (
    <span className={`${styles["badge"]} ${!active && styles["badge--outline"]}`}>
      {children}
    </span>
  )
}