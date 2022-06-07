import React from "react";
import { Badge } from "../Badge";
import styles from "./styles.module.scss";
export default function CardMaterial() {
  return (
    <div className={styles["card-material"]}>
      <button className={styles["card-material__button"]}>
        <img
          className={styles["card-material__button-icon"]}
          src="/images/icon/three-dots.svg"
          alt="Compartilhar"
        />
      </button>
      <div className={styles["card-material__content-container"]}>
        <div className={styles["card-material__image-container"]}>
          <img
            className={styles["card-material__image"]}
            src="/images/components/card-material/mock.png"
            alt="Mock"
          />
        </div>
        <div className={styles["card-material__content"]}>
          <h2 className={styles["card-material__title"]}>
            Live: a eSTRUTURA cOMPLETA - pASSO A pASSO Da sua redação
          </h2>
          <p className={styles["card-material__description"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
            vitae, a aenean purus leo, nam. Urna ullamcorper lorem sodales donec
            magna aenean sit pharetra ac. Amet arcu ut ac sapien euismod
            interdum vestibulum, lacus.
          </p>
          <footer className={styles["card-material__footer"]}>
            <Badge active>
              Aulas Gratuitas
            </Badge>
            <div className={styles["card-material__date-container"]}>
              <img className={styles["card-material__date-icon"]} src="/images/icon/calendar-icon.svg" alt="Data de Publicação" />
              <span className={styles["card-material__date-text"]}>
              12/12/2022
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
