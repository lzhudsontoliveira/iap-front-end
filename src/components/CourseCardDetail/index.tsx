import styles from "./styles.module.scss";

interface CourseCardDetailProps {
  className?: string;
}

export function CourseCardDetail({ className } : CourseCardDetailProps) {
  return (
    <div className={`${styles["course-card-detail"]} ${className}`}>
      <span className={styles["course-card-detail__type"]}>Curso</span>
      <h1 className={styles["course-card-detail__name"]}>Nome do Curso</h1>
      <span className={styles["course-card-detail__category"]}>- ESA 2022</span>
      <div className={styles["course-card-detail__prices-container"]}>
        <div className={styles["course-card-detail__installment-container"]}>
          <small className={styles["course-card-detail__installments-text"]}>
            12x de 
          </small>
          <span className={styles["course-card-detail__installment-amount"]}>
            R$ 48,90
          </span>
        </div>
        <div className={styles["course-card-detail__cash-value-container"]}>
          <small className={styles["course-card-detail__cash-value-text"]}>
            ou 
          </small>
          <span className={styles["course-card-detail__cash-value"]}>
            R$ 586,80
          </span>
        </div>
        <div className={styles["course-card-detail__buttons-container"]}>
          <a className={styles["course-card-detail__button-purchase"]} href="">
            Comprar
          </a>
          <a className={styles["course-card-detail__button-video-demo"]} href="">
            Vídeo Demo
          </a>
        </div>
      </div>
    </div>
  );
}
