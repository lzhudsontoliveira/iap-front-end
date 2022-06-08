import { Navigation } from "swiper";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { CardDepoiment } from "../../../components/CardDepoiment";
import { Container } from "../../../components/layout/Container";
import { Small } from "../../../components/Small";
import { TitleSection } from "../../../components/TitleSection";
import styles from "./styles.module.scss";

export function SectionDepoiments() {
  const navigationConfig = {
    prevEl: `.${styles["depoiments__button--prev"]}`,
    nextEl: `.${styles["depoiments__button--next"]}`,
  };
  console.log(navigationConfig);
  return (
    <section className={styles["depoiments"]}>
      <Container>
        <div className="section__title-container">
          <Small className={styles["depoiments__small"]}>
            Tire suas dúvidas
          </Small>
          <TitleSection className={styles["depoiments__title"]}>
            De CONCURSEIRO A CONCURSADO COM O IAP ONLINE
          </TitleSection>
        </div>
        <div className={styles["depoiments__slider-container"]}>
          <button
            className={`${styles["depoiments__button"]} ${styles["depoiments__button--prev"]}`}
          >
            <img
              className={styles["depoiments__button-arrow"]}
              src="/images/icon/arrow.svg"
              alt="Arrow"
            />
          </button>
          <Swiper
            className={styles["depoiments__slider"]}
            spaceBetween={1}
            slidesPerView={3}
            centeredSlides={true}
            roundLengths={true}
            loop={true}
            modules={[Navigation]}
            navigation={navigationConfig}
            loopAdditionalSlides={30}
            // slideActiveClass={styles["depoiments__slide--active"]}
            // slideDuplicateActiveClass={styles["depoiments__slide--active"]}
          >
            <SwiperSlide className={styles["depoiments__slide"]}>
              {({ isActive }) => (
                <CardDepoiment className="" isActive={isActive} />
              )}
            </SwiperSlide>
            <SwiperSlide className={styles["depoiments__slide"]}>
              {({ isActive }) => (
                <CardDepoiment className="" isActive={isActive} />
              )}
            </SwiperSlide>
            <SwiperSlide className={styles["depoiments__slide"]}>
              {({ isActive }) => (
                <CardDepoiment className="" isActive={isActive} />
              )}
            </SwiperSlide>
            <SwiperSlide className={styles["depoiments__slide"]}>
              {({ isActive }) => (
                <CardDepoiment className="" isActive={isActive} />
              )}
            </SwiperSlide>
          </Swiper>
          <button
            className={`${styles["depoiments__button"]} ${styles["depoiments__button--next"]}`}
          >
            <img
              className={styles["depoiments__button-arrow"]}
              src="/images/icon/arrow.svg"
              alt="Arrow"
            />
          </button>
        </div>
      </Container>
    </section>
  );
}
