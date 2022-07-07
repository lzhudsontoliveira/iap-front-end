import styles from "./styles.module.scss";

export function CardPurchase() {
  return (
    <div className={styles["card-purchase"]}>
      <img
        className={styles["card-purchase__course-image"]}
        src="/images/components/my-purchases/image-course.png"
        alt="Nome do Curso"
      />
      <p className={styles["card-purchase__course-name"]}>Nome do Produto</p>
    </div>
  );
}
