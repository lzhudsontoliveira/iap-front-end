import { CartProduct } from "./CartProduct";
import styles from "./styles.module.scss";

export function CartProducts() {
  return (
    <div className={styles["cart-products"]}>
      <div className={styles["cart-products__header"]}>
        <p className={styles["cart-products__header-title"]}>Cursos</p>
        <p className={styles["cart-products__header-title"]}>Valor</p>
      </div>
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
    </div>
  );
}
