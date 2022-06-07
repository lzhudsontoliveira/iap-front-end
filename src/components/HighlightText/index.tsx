import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface HightlightTextProps {
  children: ReactNode
}

export function HighlightText({ children } : HightlightTextProps ) {
  return (
    <span className={styles["highlight"]}>
      {children}
    </span>
  )
}