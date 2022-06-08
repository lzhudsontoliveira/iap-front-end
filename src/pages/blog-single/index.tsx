import { BackButton } from "../../components/BackButton";
import { Badge } from "../../components/Badge";
import { Container } from "../../components/layout/Container";
import { Share } from "../../components/Share";
import styles from "./styles.module.scss";

export default function BlogSingle() {
  return (
    <main>
      <div className={styles["blog-single__featured-image-container"]}>
        <img
          className={styles["blog-single__featured-image"]}
          src="/images/components/blog-single/background.png"
          alt=""
        />
      </div>
      <section className={styles["blog-single"]}>
        <Container>
          <BackButton className={styles["blog-single__back-button"]} />
          <h1 className={styles["blog-single__title"]}>
            10 dicas para quem trabalha, mas quer estudar para concurso
          </h1>
          <div className={styles["blog-single__meta"]}>
            <div className={styles["blog-single__date"]}>
              <img
                className={styles["blog-single__date-icon"]}
                src="/images/icon/calendar-icon.svg"
                alt="Data de Publicação"
              />
              <span className={styles["blog-single__date-text"]}>
                12/12/2022
              </span>
            </div>
            <Badge active>Aulas Gratuitas</Badge>
          </div>
        </Container>

        <Share className={styles["blog-single__share"]} />
      </section>
    </main>
  );
}
