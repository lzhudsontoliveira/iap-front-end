import styles from './styles.module.scss';

interface SeparatorProps {
  className?: string;
}

export function Separator({ className } : SeparatorProps) {
  return (
    <hr className={`${styles["separator"]} ${className ? className : ''}`} />
  )
}