import styles from "./styles.module.scss";

interface CallToActionProps {
  className?: string;
}

export function CallToAction({ className } : CallToActionProps) {
  return (
    <div className={`${styles["call-to-action"]} ${className}`}>
      <h2 className={styles["call-to-action__title"]}>PRECISANDO DE AJUDA?</h2>
      <p className={styles["call-to-action__text"]}>
        Nosso suporte funciona das 8h às 18h, de segunda a sexta-feira e das 8h
        às 12h, no sábado.
      </p>

      <a href="" className={styles["call-to-action__link"]}>
        <img src="/images/icon/whatsapp-icon.svg" alt="Whatsapp" />
        ATENDIMENTO PELO WHATSAPP
      </a>
    </div>
  );
}
