import { Badge } from "../Badge";
import styles from "./styles.module.scss";

interface FeaturedPostProps {
  className?: string;
}

export function FeaturedPost({ className } : FeaturedPostProps) {
  return (
    <article className={`${styles["featured-post"]} ${className}`}>
      <div className={styles["freatured-post__featured-image-container"]}>
        <img
          className={styles["featured-post__featured-image"]}
          src="/images/components/featured-post/mock.png"
          alt=""
        />
      </div>
      <div className={styles["featured-post__content"]}>
        <p className={styles["featured-post__featured-text"]}>
          🔥 DESTAQUE DA SEMANA
        </p>
        <h2 className={styles["featured-post__title"]}>
          Live: a eSTRUTURA cOMPLETA - pASSO A pASSO Da sua redação
        </h2>
        <div className={styles["featured-post__meta"]}>
          <div className={styles["featured-post__date"]}>
            <img
              className={styles["featured-post__date-icon"]}
              src="/images/icon/calendar-icon.svg"
              alt="Data de Publicação"
            />
            <span className={styles["featured-post__date-text"]}>
              12/12/2022
            </span>
          </div>
          <Badge active>Aulas Gratuitas</Badge>
        </div>
        <p className={styles["featured-post__description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, vitae,
          a aenean purus leo, nam. Urna ullamcorper lorem sodales donec magna
          aenean sit pharetra ac. Amet arcu ut ac sapien euismod interdum
          vestibulum, lacus.
        </p>
      </div>
    </article>
  );
}
