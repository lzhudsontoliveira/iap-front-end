import styles from "./styles.module.scss";

interface ShareProps {
  className?: string;
}

export function Share({ className } : ShareProps) {
  return (
    <div className={`${styles["share"]} ${className}`}>
      <p className={styles["share__text"]}>Compartilhar via</p>

      <ul className={styles["share__social-list"]}>
        <li className={styles["share__social-item"]}>
          <a className={styles["share__social-link"]} href="">
            <img
              className={styles["share__social__icon"]}
              src="/images/icon/share-link.svg"
              alt="Compartilhar Link"
            />
          </a>
        </li>
        <li className={styles["share__social-item"]}>
          <a className={styles["share__social-link"]} href="">
            <img
              className={styles["share__social__icon"]}
              src="/images/icon/facebook-primary.svg"
              alt="Compartilhar no Facebook"
            />
          </a>
        </li>
        <li className={styles["share__social-item"]}>
          <a className={styles["share__social-link"]} href="">
            <img
              className={styles["share__social__icon"]}
              src="/images/icon/whatsapp-primary.svg"
              alt="Compartilhar no Whatsapp"
            />
          </a>
        </li>
        <li className={styles["share__social-item"]}>
          <a className={styles["share__social-link"]} href="">
            <img
              className={styles["share__social__icon"]}
              src="/images/icon/twitter-primary.svg"
              alt="Compartilhar no Twitter"
            />
          </a>
        </li>
        <li className={styles["share__social-item"]}>
          <a className={styles["share__social-link"]} href="">
            <img
              className={styles["share__social__icon"]}
              src="/images/icon/linkedin-primary.svg"
              alt="Compartilhar no Linkedin"
            />
          </a>
        </li>
        <li className={styles["share__social-item"]}>
          <a className={styles["share__social-link"]} href="">
            <img
              className={styles["share__social__icon"]}
              src="/images/icon/email-icon.svg"
              alt="Compartilhar via E-mail"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
