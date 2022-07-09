import { Button } from "../../../Button";
import styles from "./styles.module.scss";

interface CardCertificateProps {
  status: "no-emitted" | "pending" | "emitted";
}

export function CardCertificate({ status }: CardCertificateProps) {
  return (
    <div className={styles["card-certificate"]}>
      <div className={styles["card-certificate__content"]}>
        <p className={styles["card-certificate__course-name"]}>
          Nome do Curso - Nome do Curso Completo
        </p>
        <span
          className={`${styles["card-certificate__status"]}
           ${
             status === "no-emitted" &&
             `${styles["card-certificate__status--no-emitted"]}`
           }
           ${
             status === "pending" &&
             `${styles["card-certificate__status--pending"]}`
           }
           ${
             status === "emitted" &&
             `${styles["card-certificate__status--emitted"]}`
           }
          `}
        >
          {status === "no-emitted" && "Não emitido"}
          {status === "pending" && "Em Andamento"}
          {status === "emitted" && "Certificado Emitido"}
        </span>
      </div>
      {status === "no-emitted" && ""}
      {status === "pending" && (
        <Button
          variant="outline-blue"
          className={`${styles["card-certificate__button"]}`}
        >
          Emitir Certificado
        </Button>
      )}
      {status === "emitted" && (
        <Button
          variant="outline-blue"
          className={`${styles["card-certificate__button"]}`}
        >
          Fazer Download
        </Button>
      )}
    </div>
  );
}
