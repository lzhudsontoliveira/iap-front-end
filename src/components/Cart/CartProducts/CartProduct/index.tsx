import styles from "./styles.module.scss";

export function CartProduct() {
  return (
    <div className={styles["cart-product"]}>
      <div className={styles["cart-product__image-container"]}>
        <img
          className={styles["cart-product__image"]}
          src="/images/components/cart/mock.png"
          alt="Curso"
        />
      </div>
      <div className={styles["cart-product__content"]}>
        <h2 className={styles["cart-product__name"]}>Nome Do Curso 1</h2>
        <p className={styles["cart-product__total-hours"]}>
          <img src="/images/icon/clock-black.svg" alt="Total de Horas" />
          12 hrs
        </p>
        <p className={styles["cart-product__total-lessons"]}>
          <img src="/images/icon/video-black.svg" alt="Total de Aulas" />
          24 vídeo - aulas
        </p>
      </div>
      <p className={styles["cart-product__price"]}>R$ 500,00</p>
      <button className={styles["cart-product__button-exclude"]}>
        <img src="/images/icon/exclude.svg" alt="Excluir" />
      </button>
      <div className={styles["cart-product__price-mobile"]}>
        <p className={styles["cart-product__label"]}>Valor</p>
        <p className={styles["cart-product__price"]}>R$ 000,00</p>
        <button className={styles["cart-product__button-exclude"]}>
          <img src="/images/icon/exclude.svg" alt="Excluir" />
        </button>
      </div>
    </div>
  );
}
