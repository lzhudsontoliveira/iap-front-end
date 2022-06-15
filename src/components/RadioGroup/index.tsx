import { ReactNode } from "react"
import styles from './styles.module.scss';

interface RadioGroupProps {
  children: ReactNode;
}

export function RadioGroup({ children } : RadioGroupProps) {
  return (
    <div className={styles["radio-group"]}>
      {children}
    </div>
  )
}