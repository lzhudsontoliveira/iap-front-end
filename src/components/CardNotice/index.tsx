import styles from "./styles.module.scss";

export function CardNotice() {
  return (
    <div className={styles["card-notice"]}>
      <img
        className={styles["card-notice__image"]}
        src="/images/components/card-notice/mock.png"
        alt="UFERSA"
      />
      <div className={styles["card-notice__content"]}>
        <span className={styles["card-notice__date"]}>
          <img src="/images/icon/calendar-icon.svg" alt="Data" />
          12/12/2021
        </span>
        <p className={styles["card-notice__excerpt"]}>
          UFERSA divulga concurso público com 9 vagas e remuneração de até R$
          9.618,18.
        </p>
        <a className={styles["card-notice__link"]} href="">
          Saiba Mais
          <img src="/images/icon/arrow-left.svg" alt="Data" />
        </a>
      </div>
    </div>
  );
}
