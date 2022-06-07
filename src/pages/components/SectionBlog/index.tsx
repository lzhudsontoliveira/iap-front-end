import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { Container } from "../../../components/layout/Container";
import { Small } from "../../../components/Small";
import { TitleSection } from "../../../components/TitleSection";
import styles from "./styles.module.scss";
import { CardNotice } from "../../../components/CardNotice";
import { useRef } from "react";
import { CallToAction } from "../CallToAction";

export function SectionBlog() {
  const navigationConfig = {
    prevEl: `.${styles["blog__button--prev"]}`,
    nextEl: `.${styles["blog__button--next"]}`,
  };

  return (
    <section className={styles["blog"]}>
      <Container className={styles["blog__container"]}>
        <div className={styles["blog__content"]}>
          <Small className={styles["blog__small-title"]}>Notícias</Small>
          <TitleSection className={styles["blog__title"]}>
            Blog do IAP
          </TitleSection>
          <p className={styles["blog__text"]}>
            Fique por dentro dos principais artigos e notícias
          </p>
          <a className={styles["blog__link"]}>Visitar blog</a>
          <div className={styles["blog__buttons-container"]}>
            <button
              className={`${styles["blog__button"]} ${styles["blog__button--prev"]}`}
            >
              <img
                className={styles["blog__button-arrow"]}
                src="/images/icon/arrow.svg"
                alt="Arrow"
              />
            </button>
            <button
              className={`${styles["blog__button"]} ${styles["blog__button--next"]}`}
            >
              <img
                className={styles["blog__button-arrow"]}
                src="/images/icon/arrow.svg"
                alt="Arrow"
              />
            </button>
          </div>
        </div>
        <Swiper
          className={styles["blog__slider"]}
          modules={[Navigation]}
          navigation={navigationConfig}
          spaceBetween={30}
          slidesPerView={3}
        >
          <SwiperSlide className={styles["blog__slide"]}>
            <CardNotice />
          </SwiperSlide>
          <SwiperSlide className={styles["blog__slide"]}>
            <CardNotice />
          </SwiperSlide>
          <SwiperSlide className={styles["blog__slide"]}>
            <CardNotice />
          </SwiperSlide>
          <SwiperSlide className={styles["blog__slide"]}>
            <CardNotice />
          </SwiperSlide>
          <SwiperSlide className={styles["blog__slide"]}>
            <CardNotice />
          </SwiperSlide>
          <SwiperSlide className={styles["blog__slide"]}>
            <CardNotice />
          </SwiperSlide>
          <SwiperSlide className={styles["blog__slide"]}>
            <CardNotice />
          </SwiperSlide>
          <SwiperSlide className={styles["blog__slide"]}>
            <CardNotice />
          </SwiperSlide>
        </Swiper>
      </Container>
      <CallToAction className={styles["blog__call-to-action"]} />
    </section>
  );
}
