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
          <Accordion>
            {`Quais as vantagens do IAP Cursos Online?`}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Accordion>
          <Accordion>
            {`Quais as vantagens do IAP Cursos Online?`}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Accordion>
          <Accordion>
            {`Quais as vantagens do IAP Cursos Online?`}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Accordion>
          <Accordion>
            {`Quais as vantagens do IAP Cursos Online?`}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
