import styles from './styles.module.scss';

interface SpinnerProps {
  className?: string;
}

export function Spinner({ className } : SpinnerProps) {
  return (
    <div className={`${styles["spinner"]} ${className ? className : ''}`}></div>
  )
}