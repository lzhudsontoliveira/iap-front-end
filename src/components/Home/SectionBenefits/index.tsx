import { Container } from "../../../components/layout/Container";
import { Small } from "../../../components/Small";
import { TitleSection } from "../../../components/TitleSection";
import styles from "./styles.module.scss";
export function SectionBenefits() {
  return (
    <section className={styles["benefits"]}>
      <Container>
        <div className="section__title-container">
          <Small className={styles["benefits__small"]}>Os Benefícios</Small>
          <TitleSection className={styles["benefits__title"]}>
            POR QUÊ ESTUDAR NO IAP CURSOS ONLINE TE LEVA À APROVAÇÃO?
          </TitleSection>
        </div>
        <ul className={styles["benefits__list"]}>
          <li className={styles["benefits__card"]}>
            <div className={styles["benefits__card-icon-container"]}>
              <img
                className={styles["benefits__card-icon"]}
                src="/images/components/section-benefits/search-document.svg"
                alt="Banco de Questões"
              />
            </div>
            <h3 className={styles["benefits__card-title"]}>
              Banco de Questões
            </h3>
            <p className={styles["benefits__card-description"]}>
              Tenha acesso ao nosso banco de questões para intensificar seu
              preparo e otimizar seu estudo.
            </p>
          </li>
          <li className={styles["benefits__card"]}>
            <div className={styles["benefits__card-icon-container"]}>
              <img
                className={styles["benefits__card-icon"]}
                src="/images/components/section-benefits/team-teachers.svg"
                alt="Equipe de Professores"
              />
            </div>
            <h3 className={styles["benefits__card-title"]}>
              Equipe de Professores
            </h3>
            <p className={styles["benefits__card-description"]}>
              Conte com a melhor equipe de professores do nordeste sempre
              atualizados e alinhados com os conteúdos exigidos no edital.
            </p>
          </li>
          <li className={styles["benefits__card"]}>
            <div className={styles["benefits__card-icon-container"]}>
              <img
                className={styles["benefits__card-icon"]}
                src="/images/components/section-benefits/online-tutorial.svg"
                alt="Tutorial Online"
              />
            </div>
            <h3 className={styles["benefits__card-title"]}>Tutorial Online</h3>
            <p className={styles["benefits__card-description"]}>
              Tire suas dúvidas direto pela plataforma e fique sempre em dia com
              seu cronograma de estudos.
            </p>
          </li>
          <li className={styles["benefits__card"]}>
            <div className={styles["benefits__card-icon-container"]}>
              <img
                className={styles["benefits__card-icon"]}
                src="/images/components/section-benefits/monitoring.svg"
                alt="Monitoria"
              />
            </div>
            <h3 className={styles["benefits__card-title"]}>Monitoria</h3>
            <p className={styles["benefits__card-description"]}>
              Acesso ao material complementar produzidos pelos nossos monitores
              sob orientação dos nossos professores.
            </p>
          </li>
          <li className={styles["benefits__card"]}>
            <div className={styles["benefits__card-icon-container"]}>
              <img
                className={styles["benefits__card-icon"]}
                src="/images/components/section-benefits/warranty.svg"
                alt="Garantia"
              />
            </div>
            <h3 className={styles["benefits__card-title"]}>
              Garantia incondicional de 7 dias
            </h3>
            <p className={styles["benefits__card-description"]}>
              Se após 7 dias você desistir da compra, devolvemos 100% do valor
              investido.
            </p>
          </li>
          <li className={styles["benefits__card"]}>
            <div className={styles["benefits__card-icon-container"]}>
              <img
                className={styles["benefits__card-icon"]}
                src="/images/components/section-benefits/lives.svg"
                alt="Lives do IAP"
              />
            </div>
            <h3 className={styles["benefits__card-title"]}>Lives do IAP</h3>
            <p className={styles["benefits__card-description"]}>
              Tenha acesso a todas as LIVES do IAP categorizadas por disciplina
              direto na plataforma.
            </p>
          </li>
        </ul>
        <a className={styles["benefits__link"]} href="">
          Escolha agora seu curso
        </a>
      </Container>
    </section>
  );
}
