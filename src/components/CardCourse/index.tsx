import styles from './styles.module.scss';

export function CardCourse() {
  return (
    <div className={styles["card-course"]}>
      <img src="/images/components/card-course/mock.png" alt="Curso" />

      <div className={styles["card-course__price-container"]}>
        <p className={styles["card-course__installment-plan"]}>
          <span className={styles["card-course__installment-number"]}>
            12x de
          </span>
          R$ 48,90
        </p>
        <p className={styles["card-course__cash-price"]}>
          ou R$ 586,80
        </p>
      </div>
      <a className={styles["card-course__purchase-button"]} href="">
        Comprar
      </a>

      <a className={styles["card-course__learn-more-button"]} href="">
        Saiba Mais
      </a>
    </div>
  )
}