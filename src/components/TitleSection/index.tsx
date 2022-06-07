import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface TitleSectionProps {
  className?: string;
  children: ReactNode;
}

export function TitleSection({ children, className } : TitleSectionProps) {
  return (
    <h2 className={`${styles.title} ${className}`}>
      {children}
    </h2>
  )
}