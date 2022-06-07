import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface SmallProps {
  className?: string;
  children: ReactNode;
}

export function Small({children, className} : SmallProps) {
  return (
    <small className={`${styles.small} ${className}`}>
      {children}
    </small>
  )
}