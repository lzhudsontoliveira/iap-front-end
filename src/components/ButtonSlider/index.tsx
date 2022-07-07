import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface ButtonSliderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "next" | "prev";
}

export function ButtonSlider({ direction }: ButtonSliderProps) {
  return (
    <button
      className={`${styles["button-slider"]} ${
        direction === "prev"
          ? `${styles["button-slider--prev"]}`
          : `${styles["button-slider--next"]}`
      }`}
    >
      <img
        className={styles["button-slider__arrow"]}
        src="/images/icon/arrow.svg"
        alt="Arrow"
      />
    </button>
  );
}
