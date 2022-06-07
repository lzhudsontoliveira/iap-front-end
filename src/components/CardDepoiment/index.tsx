import styles from "./styles.module.scss";

interface CardDepoimentProps {
  className?: string;
  isActive: boolean;
}

export function CardDepoiment({ className, isActive }: CardDepoimentProps) {
  return (
    <div className={`${styles["card-depoiment"]} ${isActive && styles["card-depoiment--active"]}`}>
      <blockquote className={styles["card-depoiment__text"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac purus massa
        diam donec neque, scelerisque. Proin sed enim euismod quis proin. Sed
        tellus duis congue ut integer faucibus risus.
      </blockquote>
      <div className={styles["card-depoiment__content"]}>
        <div className={styles["card-depoiment__photo-container"]}>
          <img
            className={styles["card-depoiment__photos"]}
            src="/images/components/card-depoiment/mock.png"
            alt="Fulano Lorem Ipsum"
          />
        </div>

        <div className={styles["card-depoiment__author-content"]}>
          <p className={styles["card-depoiment__author"]}>Fulano Lorem Ipsum</p>
          <span className={styles["card-depoiment__position"]}>
            2º Colocado - EBSERH
          </span>
        </div>
      </div>
    </div>
  );
}
