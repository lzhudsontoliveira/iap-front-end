import { Accordion } from "../../../components/Accordion";
import { Container } from "../../../components/layout/Container";
import { Small } from "../../../components/Small";
import { TitleSection } from "../../../components/TitleSection";
import styles from "./styles.module.scss";
export function SectionFaq() {
  return (
    <section className={styles["frequent-questions"]}>
      <Container>
        <div className="section__title-container">
          <Small>Tire suas dúvidas</Small>
          <TitleSection>Perguntas Frequentes</TitleSection>
        </div>

        <div className={styles["frequent-questions__accordion-list"]}>
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
        </div>
      </Container>
    </section>
  );
}
