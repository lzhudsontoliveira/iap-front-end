import { Button } from "../../components/Button";
import { Container } from "../../components/layout/Container";
import { Question } from "../../components/pages/battery-of-questions/Question";
import styles from "./styles.module.scss";

export default function BatteryOfQuestions() {
  return (
    <main>
      <Container className={styles["battery-questions__container"]}>
        <ul className={styles["battery-questions__question-list"]}>
          <li className={styles["battery-questions__question-item"]}>
            <Question  />
          </li>
          <li className={styles["battery-questions__question-item"]}>
            <Question />
          </li>
          <li className={styles["battery-questions__question-item"]}>
            <Question />
          </li>
        </ul>
        <aside className={styles["battery-questions__map"]}>
          <p className={styles["battery-questions__map-text"]}>
            Mapa de Páginas
          </p>
          <ul className={styles["battery-questions__map-pages"]}>
            <li className={`${styles["battery-questions__map-page"]} ${styles["battery-questions__map-page--active"]}`}>01</li>
            <li className={styles["battery-questions__map-page"]}>02</li>
            <li className={styles["battery-questions__map-page"]}>03</li>
            <li className={styles["battery-questions__map-page"]}>04</li>
            <li className={styles["battery-questions__map-page"]}>05</li>
            <li className={styles["battery-questions__map-page"]}>06</li>
          </ul>
          <div className={styles["battery-questions__map-pagination"]}>
            <button
              className={styles["battery-questions__map-pagination-button"]}
            >
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.6818 1.85053L8.76818 8.74917C8.34393 9.1725 7.65607 9.1725 7.23182 8.74917L0.31819 1.85053C-0.106064 1.4272 -0.106064 0.740835 0.318191 0.3175C0.742446 -0.105834 1.4303 -0.105834 1.85455 0.3175L8 6.44962L14.1454 0.317501C14.5697 -0.105834 15.2576 -0.105834 15.6818 0.317501C16.1061 0.740836 16.1061 1.4272 15.6818 1.85053Z"
                  fill="#7B7B7B73"
                />
              </svg>
            </button>
            <button
              className={styles["battery-questions__map-pagination-button"]}
            >
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.6818 1.85053L8.76818 8.74917C8.34393 9.1725 7.65607 9.1725 7.23182 8.74917L0.31819 1.85053C-0.106064 1.4272 -0.106064 0.740835 0.318191 0.3175C0.742446 -0.105834 1.4303 -0.105834 1.85455 0.3175L8 6.44962L14.1454 0.317501C14.5697 -0.105834 15.2576 -0.105834 15.6818 0.317501C16.1061 0.740836 16.1061 1.4272 15.6818 1.85053Z"
                  fill="#545AE8"
                />
              </svg>
            </button>
          </div>
          <hr />
          <Button
            className={styles["battery-questions__end-exercise"]}
            variant="gradient-blue"
          >
            Finalizar Exercício
          </Button>
          <hr />
          <Button
            className={styles["battery-questions__change-full-screen"]}
            variant="outline-blue"
          > 
            Alternar Tela Cheia
          </Button>
        </aside>
      </Container>
    </main>
  );
}
