import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface TitleProps {
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  className?: string;
}

export function Title({ headingLevel, children, className } : TitleProps) {
  const HeadingLevel = headingLevel;
  return(
    <HeadingLevel className={`${styles['title']}${className ? ` ${className}` : ''}`}>
      {children}
    </HeadingLevel>
  )
}