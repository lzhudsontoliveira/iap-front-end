import { Badge } from "../../components/Badge";
import { CardCourse } from "../../components/CardCourse";
import { InputSearchContainer } from "../../components/InputSearchContainer";
import { Container } from "../../components/layout/Container";
import { Pagination } from "../../components/Pagination";
import styles from "./styles.module.scss";

export default function Courses() {
  return (
    <main>
      <section className={styles["courses-filters"]}>
        <Container className={styles["courses-filters__container"]}>
          <h1 className={styles["courses-filters__title"]}>Cursos</h1>
          <ul className={styles["courses-filters__categories-list"]}>
            <li className={styles["courses-filters__categories-item"]}>
              <Badge active>Destaques</Badge>
            </li>
            <li className={styles["courses-filters__categories-item"]}>
              <Badge>ESA</Badge>
            </li>
            <li className={styles["courses-filters__categories-item"]}>
              <Badge>Isolados</Badge>
            </li>
            <li className={styles["courses-filters__categories-item"]}>
              <Badge>Prefeituras</Badge>
            </li>
            <li className={styles["courses-filters__categories-item"]}>
              <Badge>Carreiras Policiais</Badge>
            </li>
            <li className={styles["courses-filters__categories-item"]}>
              <Badge>Curso Base - Comece do Zero</Badge>
            </li>
            <li className={styles["courses-filters__categories-item"]}>
              <Badge>Assembleia Legislativa</Badge>
            </li>
            <li className={styles["courses-filters__categories-item"]}>
              <Badge>Universidades</Badge>
            </li>
            <li className={styles["courses-filters__categories-item"]}>
              <Badge>Turmas </Badge>
            </li>
          </ul>
          <hr className={styles["courses-filters__separator"]} />
          <ul className={`${styles["courses-filters__types-list"]}`}>
            <li className={styles["courses-filters__categories-item"]}>
              <Badge active>Destaques</Badge>
            </li>
            <li className={styles["courses-filters__categories-item"]}>
              <Badge>Cursos</Badge>
            </li>
            <li className={styles["courses-filters__categories-item"]}>
              <Badge>Pacotes</Badge>
            </li>
          </ul>
          <InputSearchContainer className={styles["courses-filters__search"]} placeholder="Pesquise em Cursos" />
        </Container>
      </section>

      <div className={styles["courses"]}>
        <Container className={styles["courses__container"]}>
          <ul className={styles["courses__list"]}>
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
          </ul>
          <Pagination className={styles["courses__pagination"]} />
        </Container>
      </div>
    </main>
  );
}
