import { Accordion } from "../../components/Accordion";
import { Container } from "../../components/layout/Container";
import { Share } from "../../components/Share";
import { Small } from "../../components/Small";
import { TitleSection } from "../../components/TitleSection";
import styles from "./styles.module.scss";

export default function FrequentsAsks() {
  return (
    <main>
      <section className={styles["frequent-asks"]}>
        <Container>
          <Small className={styles["frequent-asks__small-title"]}>FAQ</Small>
          <TitleSection className={styles["frequent-asks__title-section"]}>
            Perguntas Frequentes
          </TitleSection>
        </Container>
      </section>

      <ul className={styles["frequent-asks__list"]}>
        <li className={styles["frequent-asks__item"]}>
          <Accordion>
            {`Quais as vantagens do IAP Cursos Online?`}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Accordion>
        </li>
        <li className={styles["frequent-asks__item"]}>
          <Accordion>
            {`Quais as vantagens do IAP Cursos Online?`}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Accordion>
        </li>
        <li className={styles["frequent-asks__item"]}>
          <Accordion>
            {`Quais as vantagens do IAP Cursos Online?`}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Accordion>
        </li>
        <li className={styles["frequent-asks__item"]}>
          <Accordion>
            {`Quais as vantagens do IAP Cursos Online?`}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Accordion>
        </li>
        <li className={styles["frequent-asks__item"]}>
          <Accordion>
            {`Quais as vantagens do IAP Cursos Online?`}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Accordion>
        </li>
        <li className={styles["frequent-asks__item"]}>
          <Accordion>
            {`Quais as vantagens do IAP Cursos Online?`}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Accordion>
        </li>
        <li className={styles["frequent-asks__item"]}>
          <Accordion>
            {`Quais as vantagens do IAP Cursos Online?`}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Accordion>
        </li>
        <li className={styles["frequent-asks__item"]}>
          <Accordion>
            {`Quais as vantagens do IAP Cursos Online?`}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Accordion>
        </li>
        <li className={styles["frequent-asks__item"]}>
          <Accordion>
            {`Quais as vantagens do IAP Cursos Online?`}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Accordion>
        </li>
      </ul>
      <Share 
        className={styles["frequent-asks__share"]}
      />
    </main>
  );
}
