import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className } : ContainerProps) {
  return (
    <div className={`${styles.container} ${className ? className : ''}`}>
      {children}
    </div>
  )
}