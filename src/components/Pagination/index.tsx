import styles from './styles.module.scss';

interface PaginationProps {
  className?: string;
}

export function Pagination({ className } : PaginationProps) {
  return (
    <div className={`${styles["pagination"]} ${className}`}>
      <button className={`${styles["pagination__button"]} ${styles["pagination__button--active"]}`}>1</button>
      <button className={styles["pagination__button"]}>2</button>
      <button className={styles["pagination__button"]}>3</button>
      <span className={styles["pagination__dots"]}>...</span>
      <button className={styles["pagination__button"]}>Próxima</button>
      <button className={styles["pagination__button"]}>Última</button>
    </div>
  )
}