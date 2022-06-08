import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardCourse } from "../../../../../components/CardCourse";
import styles from "./styles.module.scss";

interface CourseSliderProps {
  className?: string;
}

export default function CourseSlider({ className }: CourseSliderProps) {
  const navigationConfig = {
    prevEl: `.${styles["course-slider__button--prev"]}`,
    nextEl: `.${styles["course-slider__button--next"]}`,
    disabledClass: `.${styles["course-slider__button--disabled"]}`,
  };

  return (
    <div className={styles["course-slider__container"]}>
      <button
        className={`${styles["course-slider__button"]} ${styles["course-slider__button--prev"]}`}
      >
        <img
          className={styles["course-slider__button-arrow"]}
          src="/images/icon/arrow.svg"
          alt="Arrow"
        />
      </button>
      <Swiper
        modules={[Navigation]}
        navigation={navigationConfig}
        spaceBetween={24}
        slidesPerView={4}
        className={`${styles["course-slider"]} ${className ? className : ""}`}
        loop={true}
      >
        <SwiperSlide className={styles["course-slider__slide"]}>
          <CardCourse />
        </SwiperSlide>
        <SwiperSlide className={styles["course-slider__slide"]}>
          <CardCourse />
        </SwiperSlide>
        <SwiperSlide className={styles["course-slider__slide"]}>
          <CardCourse />
        </SwiperSlide>
        <SwiperSlide className={styles["course-slider__slide"]}>
          <CardCourse />
        </SwiperSlide>
      </Swiper>
      <button
        className={`${styles["course-slider__button"]} ${styles["course-slider__button--next"]}`}
      >
        <img
          className={styles["course-slider__button-arrow"]}
          src="/images/icon/arrow.svg"
          alt="Arrow"
        />
      </button>
    </div>
  );
}
