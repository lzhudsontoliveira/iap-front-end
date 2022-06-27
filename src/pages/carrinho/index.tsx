import Link from "next/link";
import { Button } from "../../components/Button";
import { CartProducts } from "../../components/Cart/CartProducts";
import { CartResume } from "../../components/Cart/CartResume";
import { Container } from "../../components/layout/Container";
import styles from "./styles.module.scss";

export default function Cart() {
  return (
    <main>
      <section className={styles["cart"]}>
        <Container>
          <div className={styles["cart__no-products"]}>
            <img src="/images/icon/bag.svg" alt="Bolsa" />
            <h2 className={styles["cart__no-products-message"]}>
              VOCê AINDA NÃO ADICIONOU NENHUM CURSO AO CARRINHO...
            </h2>
          </div>
          <Link href="/cursos">
            <a className={styles["cart__link-courses"]}>
              <Button
                className={styles["cart__button-courses"]}
                variant="gradient-blue"
              >
                Conheçer todos os cursos
              </Button>
            </a>
          </Link>
        </Container>
      </section>
      <section className={styles["cart"]}>
        <Container className={styles["cart__container"]}>
          <div className={styles["cart__content"]}>
            <CartProducts />
            <CartResume className={styles["cart__cart-resume"]} />
          </div>
        </Container>
      </section>
    </main>
  );
}
