import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "../../components/Button";
import { ButtonSlider } from "../../components/ButtonSlider";
import { InputSearchContainer } from "../../components/InputSearchContainer";
import { Container } from "../../components/layout/Container";
import { Title } from "../../components/Title";
import styles from "./styles.module.scss";
import { CardPurchase } from "../../components/pages/my-purchases/CardPurchase";

export default function MyPurchases() {
  return (
    <main>
      <section className={styles["my-purchases"]}>
        <Container>
          <div className={styles["my-purchases__no-purchases"]}>
            <img src="/images/icon/bag.svg" alt="Bolsa" />
            <h2 className={styles["my-purchases__no-purchases-message"]}>
              VOCê AINDA NÃO ADICIONOU REALIZOU NENHUM PEDIDO.
            </h2>
          </div>
          <Link href="/cursos">
            <a className={styles["my-purchases__link-courses"]}>
              <Button
                className={styles["my-purchases__button-courses"]}
                variant="gradient-blue"
              >
                Conheçer todos os cursos
              </Button>
            </a>
          </Link>
        </Container>
      </section>
      <section
        className={`${styles["my-purchases"]} ${styles["my-purchases--with-purchases"]}`}
      >
        <Container>
          <Title className={styles["my-purchases__title"]} headingLevel="h1">
            Minhas Compras
          </Title>
          <InputSearchContainer
            className={styles["my-purchases__search"]}
            placeholder="Pesquise em Pedidos"
          />
        </Container>
      </section>

      <section className={styles["my-purchases-lists"]}>
        <div className={styles["my-purchases-lists__container"]}>
          <div className={styles["my-purchases-lists__list-container"]}>
            <h4 className={styles["my-purchases-lists__list-title"]}>Cursos</h4>
            <div
              className={styles["my-purchases-lists__list-buttons-container"]}
            >
              <ButtonSlider direction="prev" />
              <ButtonSlider direction="next" />
            </div>
          </div>
          <div className={styles["my-purchases-lists__list-slider"]}>
            <Swiper slidesPerView={5} spaceBetween={30}>
              <SwiperSlide>
                <CardPurchase />
              </SwiperSlide>
              <SwiperSlide>
                <CardPurchase />
              </SwiperSlide>
              <SwiperSlide>
                <CardPurchase />
              </SwiperSlide>
              <SwiperSlide>
                <CardPurchase />
              </SwiperSlide>
              <SwiperSlide>
                <CardPurchase />
              </SwiperSlide>
              <SwiperSlide>
                <CardPurchase />
              </SwiperSlide>
              <SwiperSlide>
                <CardPurchase />
              </SwiperSlide>
              <SwiperSlide>
                <CardPurchase />
              </SwiperSlide>
            </Swiper>
          </div>
          <hr className={styles["my-purchases-lists__list-separator"]} />
          <div className={styles["my-purchases-lists__list-container"]}>
            <h4 className={styles["my-purchases-lists__list-title"]}>Produtos</h4>
            <div
              className={styles["my-purchases-lists__list-buttons-container"]}
            >
              <ButtonSlider direction="prev" />
              <ButtonSlider direction="next" />
            </div>
          </div>
          <div className={styles["my-purchases-lists__list-slider"]}>
            <Swiper slidesPerView={5} spaceBetween={30}>
              <SwiperSlide>
                <CardPurchase />
              </SwiperSlide>
              <SwiperSlide>
                <CardPurchase />
              </SwiperSlide>
              <SwiperSlide>
                <CardPurchase />
              </SwiperSlide>
              <SwiperSlide>
                <CardPurchase />
              </SwiperSlide>
              <SwiperSlide>
                <CardPurchase />
              </SwiperSlide>
              <SwiperSlide>
                <CardPurchase />
              </SwiperSlide>
              <SwiperSlide>
                <CardPurchase />
              </SwiperSlide>
              <SwiperSlide>
                <CardPurchase />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
}
