import { ReactNode } from "react"
import styles from './styles.module.scss';

interface RadioGroupProps {
  children: ReactNode;
  className?: string;
}

export function RadioGroup({ children, className } : RadioGroupProps) {
  return (
    <div className={`${styles["radio-group"]} ${className ? className : ''}`}>
      {children}
    </div>
  )
}