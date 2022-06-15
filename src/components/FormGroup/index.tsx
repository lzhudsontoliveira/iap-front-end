import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface FormGroupProps {
  children: ReactNode;
}

export default function FormGroup({ children } : FormGroupProps) {
  return (
    <div className={styles["form-group"]}>
      {children}
    </div>
  )
}