import { Container } from "../../components/layout/Container";
import { Badge } from "../../components/Badge";
import styles from "./styles.module.scss";
import CardMaterial from "../../components/CardMaterial";
import { Pagination } from "../../components/Pagination";
export default function MateriaisGratuitos() {
  return (
    <main>
      <section className={styles["free-materials-filter"]}>
        <Container className={styles["free-materials-filter__container"]}>
          <h1 className={styles["free-materials-filter__title"]}>
            Materiais Gratuitos
          </h1>
          <ul className={styles["free-materials-filter__categories-list"]}>
            <li className={styles["free-materials-filter__categories-item"]}>
              <button className={styles["free-materials-filter__categories-button"]}>
                <Badge active>Todas</Badge>
              </button>
            </li>
            <li className={styles["free-materials-filter__categories-item"]}>
              <button className={styles["free-materials-filter__categories-button"]}>
                <Badge>Aulas Gratuitas</Badge>
              </button>
            </li>
            <li className={styles["free-materials-filter__categories-item"]}>
              <button className={styles["free-materials-filter__categories-button"]}>
                <Badge>Comunicado</Badge>
              </button>
            </li>
            <li className={styles["free-materials-filter__categories-item"]}>
              <button className={styles["free-materials-filter__categories-button"]}>
                <Badge>Concurso em Foco</Badge>
              </button>
            </li>
            <li className={styles["free-materials-filter__categories-item"]}>
              <button className={styles["free-materials-filter__categories-button"]}>
                <Badge>Happy Our</Badge>
              </button>
            </li>
            <li className={styles["free-materials-filter__categories-item"]}>
              <button className={styles["free-materials-filter__categories-button"]}>
                <Badge>Live</Badge>
              </button>
            </li>
            <li className={styles["free-materials-filter__categories-item"]}>
              <button className={styles["free-materials-filter__categories-button"]}>
                <Badge>Mútipla Escolha</Badge>
              </button>
            </li>
            <li className={styles["free-materials-filter__categories-item"]}>
              <button className={styles["free-materials-filter__categories-button"]}>
                <Badge>Papo de Aprovado</Badge>
              </button>
            </li>
          </ul>

          <div className={styles["free-materials-filter__input-search-container"]}>
            <input
              placeholder="Pesquise em Materiais Gratuitos"
              className={styles["free-materials-filter__input-search"]}
              type="text"
            />
            <button className={styles["free-materials-filter__button-search"]}>
              <img
                className={styles["free-materials-filter__search-icon"]}
                src="/images/icon/search.svg"
                alt="Search"
              />
            </button>
          </div>
        </Container>
      </section>

      <div className={styles["free-materials"]}>
        <Container className={styles["free-materials__container"]}>
          <ul className={styles["free-materials__list"]}>
            <CardMaterial />
            <CardMaterial />
            <CardMaterial />
            <CardMaterial />
            <CardMaterial />
            <CardMaterial />
            <CardMaterial />
            <CardMaterial />
          </ul>
          <Pagination className={styles["free-materials__pagination"]} />
        </Container>
      </div>
    </main>
  );
}
