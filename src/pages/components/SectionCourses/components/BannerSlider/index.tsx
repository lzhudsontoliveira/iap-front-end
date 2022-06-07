import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
export default function BannerSlider() {
  const paginationConfig = {
    renderBullet: function (index, className) {
      return `
        <div class="${className} ${styles["banner-slider__pagination-bullet"]}"></div>
      `;
    },
    clickable: true,
    el: `.${styles["banner-slider__pagination"]}`,
    bulletActiveClass: `${styles["banner-slider__pagination-bullet--active"]}`,
  };
  const autoplayConfig = {
    delay: 2800,
    disableOnInteraction: false
  };
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={paginationConfig}
        scrollbar={{ draggable: true }}
        className={styles["banner-slider"]}
        loop={true}
        autoplay={autoplayConfig}
      >
        <SwiperSlide className={styles["banner-slider__slide"]}>
          <div className={styles["banner-slider__image-container"]}>
            <img
              className={styles["banner-slider__image"]}
              src="/images/components/slider-banner/mock.png"
              alt="Banner"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["banner-slider__slide"]}>
          <div className={styles["banner-slider__image-container"]}>
            <img
              className={styles["banner-slider__image"]}
              src="/images/components/slider-banner/mock.png"
              alt="Banner"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["banner-slider__slide"]}>
          <div className={styles["banner-slider__image-container"]}>
            <img
              className={styles["banner-slider__image"]}
              src="/images/components/slider-banner/mock.png"
              alt="Banner"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["banner-slider__slide"]}>
          <div className={styles["banner-slider__image-container"]}>
            <img
              className={styles["banner-slider__image"]}
              src="/images/components/slider-banner/mock.png"
              alt="Banner"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["banner-slider__slide"]}>
          <div className={styles["banner-slider__image-container"]}>
            <img
              className={styles["banner-slider__image"]}
              src="/images/components/slider-banner/mock.png"
              alt="Banner"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["banner-slider__slide"]}>
          <div className={styles["banner-slider__image-container"]}>
            <img
              className={styles["banner-slider__image"]}
              src="/images/components/slider-banner/mock.png"
              alt="Banner"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["banner-slider__slide"]}>
          <div className={styles["banner-slider__image-container"]}>
            <img
              className={styles["banner-slider__image"]}
              src="/images/components/slider-banner/mock.png"
              alt="Banner"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles["banner-slider__pagination"]}></div>
    </>
  );
}
