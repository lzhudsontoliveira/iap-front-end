import { Button } from "../../components/Button";
import FormGroup from "../../components/FormGroup";
import { Input } from "../../components/Input";
import { Container } from "../../components/layout/Container";
import { Share } from "../../components/Share";
import { Textarea } from "../../components/Textarea";
import { TitleSection } from "../../components/TitleSection";
import styles from "./styles.module.scss";

export default function Contact() {
  return (
    <main>
      <section className={styles["contact"]}>
        <Container>
          <TitleSection className={styles["contact__title"]}>
            Contato
          </TitleSection>
          <div className={styles["contact__form-container"]}>
            <form>
              <div className={styles["contact__form-inputs-container"]}>
                <Input
                  placeholder="Seu nome aqui"
                  name="name"
                  label="Nome"
                  type="text"
                  id="name"
                />
                <Input
                  placeholder="Digite seu e-mail aqui"
                  name="email"
                  label="E-mail"
                  type="email"
                  id="email"
                />
                <Input
                  placeholder="Seu telefone com DDI"
                  name="phone"
                  label="Telefone"
                  type="text"
                  id="phone"
                />
                <Input
                  placeholder="Assunto"
                  name="subject"
                  label="Assunto"
                  type="text"
                  id="subject"
                />
              </div>

              <Textarea
                name="message"
                label="Mensagem"
                placeholder="Digite sua mensagem"
                id="message"
              />
              <p className={styles["contact__form-observation"]}>
                *Todos os campos de preenchimento são obrigatórios
              </p>

              <Button
                type="submit"
                className={`${styles["contact__form-submit"]}`}
              >
                Enviar
              </Button>
            </form>
          </div>
        </Container>
      </section>
      <section className={styles["contact-information"]}>
        <Container className={styles["contact-information__container"]}>
          <TitleSection className={styles["contact-information__title"]}>
            Atendimento
          </TitleSection>
          <p className={styles["contact-information__text"]}>
            De segunda a sexta das 8 às 12h e das 14 às 18h - Exceto feriados
          </p>

          <ul className={styles["contact-information__list-contact"]}>
            <li className={styles["contact-information__list-item"]}>
              <img
                className={styles["contact-information__icon"]}
                src="/images/icon/email-icon.svg"
                alt="E-mail"
              />
              <p className={styles["contact-information__contact-info"]}>
                <strong>E-mail: </strong>
                <a href="mailto:atendimento@iapcursosonline.com">atendimento@iapcursosonline.com</a>
              </p>
            </li>
            <li className={styles["contact-information__list-item"]}>
              <img
                className={styles["contact-information__icon"]}
                src="/images/icon/phone.svg"
                alt="Telefone"
              />
              <p className={styles["contact-information__contact-info"]}>
                <strong>Telefone: </strong>
                <a href="tel:843113-2485">(84) 3113-2485</a>
              </p>
            </li>
            <li className={styles["contact-information__list-item"]}>
              <img
                className={styles["contact-information__icon"]}
                src="/images/icon/whatsapp-icon-green.svg"
                alt="Whatsapp"
              />
              <p className={styles["contact-information__contact-info"]}>
                <strong>Whatsapp: </strong>
                <a href="https://api.whatsapp.com/send?phone=5584987122854">(84) 98712-2854</a>
              </p>
            </li>
          </ul>
        </Container>
      </section>
      <Share className={styles["contact__share"]} />
    </main>
  );
}
