import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container } from "../../components/layout/Container";
import { Share } from "../../components/Share";
import { Spinner } from "../../components/Spinner";
import { TitleSection } from "../../components/TitleSection";
import styles from "./styles.module.scss";

export default function ValidateCertificate() {
  const [statusRequest, setStatusRequest] = useState();

  return (
    <main>
      <section className={styles["validate-certificate"]}>
        <Container className={styles["validate-certificate__container"]}>
          <TitleSection className={styles["validate-certificate__title"]}>
            Este é o módulo de consulta de certificados para fins de comprovação
            e autenticidade por qualquer pessoa física ou jurídica.
          </TitleSection>
          <form className={styles["validate-certificate__form"]} action="">
            <Input placeholder="Insira o código verificador do certificado" />
            <Button
              type="submit"
              className={styles["validate-certificate__form-submit"]}
            >
              Validar
            </Button>
          </form>
        </Container>

        <div
          className={`${styles["validate-certificate__result"]} ${styles["validate-certificate__result--loading"]}`}
        >
          <Spinner className={styles["validate-certificate__loading"]} />
        </div>

        <div
          className={`${styles["validate-certificate__result"]} ${styles["validate-certificate__result--error"]}`}
        >
          <img src="/images/icon/error.svg" alt="Erro" />
          <p className={styles["validate-certificate__result-message"]}>
            Não foi possível localizar nenhum certificado em nossa base com o
            código informado.
          </p>
        </div>

        <div
          className={`${styles["validate-certificate__result"]} ${styles["validate-certificate__result--success"]}`}
        >
          <img src="/images/icon/success.svg" alt="Erro" />
          <p className={styles["validate-certificate__result-message"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget at
            eget laoreet aliquam.
          </p>
        </div>

        <Share className={styles["validate-certificate__share"]} />
      </section>
    </main>
  );
}
