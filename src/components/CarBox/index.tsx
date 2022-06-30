import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface CardBoxProps {
  children: ReactNode;
}

export function CardBox({ children } : CardBoxProps) {
  return (
    <div className={styles["card-box"]}>
      {children}
    </div>
  )
}