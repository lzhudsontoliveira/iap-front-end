import Head from "next/head";
import Link from "next/link";
import { Badge } from "../../components/Badge";
import { Button } from "../../components/Button";
import { InputSearchContainer } from "../../components/InputSearchContainer";
import { Container } from "../../components/layout/Container";
import { CardCertificate } from "../../components/pages/my-certificates/CardCertificate";
import { Pagination } from "../../components/Pagination";
import { Title } from "../../components/Title";
import styles from "./styles.module.scss";

export default function MyCertificates() {
  return (
    <>
      <Head>
        <title>Meus Certificados | IAP</title>
      </Head>
      <main>
        <section className={`${styles["my-certificates--no-certificates"]}`}>
          <Container>
            <div className={styles["my-certificates__no-certificates"]}>
              <img src="/images/icon/bag.svg" alt="Bolsa" />
              <h2
                className={styles["my-certificates__no-certificates-message"]}
              >
                VOCê AINDA NÃO ADICIONOU REALIZOU NENHUM PEDIDO.
              </h2>
            </div>
            <Link href="/cursos">
              <a className={styles["my-certificates__link-courses"]}>
                <Button
                  className={styles["my-certificates__button-courses"]}
                  variant="gradient-blue"
                >
                  Conheçer todos os cursos
                </Button>
              </a>
            </Link>
          </Container>
        </section>
        <section className={styles["my-certificates"]}>
          <Container className={styles["my-certificates__container"]}>
            <Title headingLevel="h1">Certificados</Title>
            <ul className={styles["my-certificates__categories"]}>
              <li className={styles["my-certificates__category-item"]}>
                <button className={styles["my-certificates__category-button"]}>
                  <Badge active>Todos</Badge>
                </button>
              </li>
              <li className={styles["my-certificates__category-item"]}>
                <button className={styles["my-certificates__category-button"]}>
                  <Badge>Concluídos</Badge>
                </button>
              </li>
              <li className={styles["my-certificates__category-item"]}>
                <button className={styles["my-certificates__category-button"]}>
                  <Badge>Em Andamento</Badge>
                </button>
              </li>
            </ul>
            <InputSearchContainer
              className={styles["my-certificates__search"]}
              placeholder="Pesquise em Certificados"
            />
          </Container>
        </section>

        <ul className={styles["my-certificates__list"]}>
          <li className={styles["my-certificates__item"]}>
            <CardCertificate status="no-emitted" />
          </li>
          <li className={styles["my-certificates__item"]}>
            <CardCertificate status="pending" />
          </li>
          <li className={styles["my-certificates__item"]}>
            <CardCertificate status="emitted" />
          </li>
        </ul>
      </main>
    </>
  );
}
