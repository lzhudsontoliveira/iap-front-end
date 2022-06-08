import { Badge } from "../Badge";
import styles from "./styles.module.scss";

export function CardBlog() {
  return (
    <div className={styles["card-blog"]}>
      <div className={styles["card-blog__featured-image-container"]}>
        <img
          className={styles["card-blog__featured-image"]}
          src="/images/components/card-blog/mock.png"
          alt=""
        />
      </div>
      <div className={styles["card-blog__meta"]}>
        <div className={styles["card-blog__date"]}>
          <img
            className={styles["card-blog__date-icon"]}
            src="/images/icon/calendar-icon.svg"
            alt="Data de Publicação"
          />
          <span className={styles["card-blog__date-text"]}>12/12/2022</span>
        </div>
        <Badge active>Aulas Gratuitas</Badge>
      </div>
      <h2 className={styles["card-blog__title"]}>
        10 dicas para quem trabalha, mas quer estudar para concurso
      </h2>
      <p className={styles["card-blog__excerpt"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, vitae, a
        aenean purus leo, nam.
      </p>
    </div>
  );
}
