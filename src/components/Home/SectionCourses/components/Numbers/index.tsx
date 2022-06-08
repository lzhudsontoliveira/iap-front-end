
import { HighlightText } from "../../../../HighlightText";
import { TitleSection } from "../../../../TitleSection";
import styles from "./styles.module.scss";

export function Numbers() {
  return (
    <div className={styles["numbers"]}>
      <div className={styles["numbers__title-container"]}>
        <TitleSection className={styles["courses__title"]}>
          Mais que Números <HighlightText>Vidas Transformadas</HighlightText>
        </TitleSection>
      </div>
      <ul className={styles["numbers__rounded-list"]}>
        <li className={styles["numbers__rounded-item"]}>
          <div className={styles["numbers__rounded-number-container"]}>
            <img src="/images/icon/clock-gradient.svg" alt="Horas de Aula" />
            <p className={styles["numbers__rounded-number-text"]}>+ 20k</p>
          </div>
          <p className={styles["numbers__rounded-text"]}>horas de aulas</p>
        </li>
        <li className={styles["numbers__rounded-item"]}>
          <div className={styles["numbers__rounded-number-container"]}>
            <img src="/images/icon/lesson-gradient.svg" alt="Cursos Ofertados" />
            <p className={styles["numbers__rounded-number-text"]}>+ 400</p>
          </div>
          <p className={styles["numbers__rounded-text"]}>cursos ofertados</p>
        </li>
        <li className={styles["numbers__rounded-item"]}>
          <div className={styles["numbers__rounded-number-container"]}>
            <img src="/images/icon/like-gradient.svg" alt="Alunos Aprovados" />
            <p className={styles["numbers__rounded-number-text"]}>+ 4k</p>
          </div>
          <p className={styles["numbers__rounded-text"]}>alunos aprovados</p>
        </li>
      </ul>
    </div>
  );
}
