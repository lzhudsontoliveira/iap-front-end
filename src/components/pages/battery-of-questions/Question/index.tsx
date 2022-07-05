import { Button } from "../../../../components/Button";
import { RadioGroup } from "../../../../components/RadioGroup";
import styles from "./styles.module.scss";

export function Question() {
  return (
    <div className={styles["question"]}>
      <div className={styles["question__container"]}>
        <header className={styles["question__header"]}>
          <p className={styles["question__year"]}>
            Ano: <strong>2018</strong>
          </p>
          <p className={styles["question__bank"]}>
            Banca: <strong>FGV</strong>
          </p>
        </header>
        <p className={styles["question__description"]}>
          1. Para o tratamento de esgoto, a COMPESA utiliza um produto químico
          que fica armazenado em três reservatórios: A, B e C, com capacidade de
          1000 litros cada um.
          <br />
          <br />
          Certo dia, o reservatório A estava vazio, B tinha 200 litros e C tinha
          500 litros. Nesse dia, foi feita uma entrega de 2000 litros do produto
          que foram colocados nos reservatórios de forma que os três ficaram com
          quantidades iguais.
          <br />
          <br />
          É correto concluir que
          <br />
        </p>
        <div className={styles["question__answers"]}>
          <RadioGroup className={`${styles["question__answer"]} ${styles["question__answer--error"]}`}>
            <input type="radio" name="answer" id="answer" />
            <label className={styles["question__label"]} htmlFor="answer">o reservatório A recebeu cerca de 667 litros.</label>
          </RadioGroup>
          <RadioGroup className={styles["question__answer"]}>
            <input type="radio" name="answer" id="answer" />
            <label className={styles["question__label"]} htmlFor="answer">o reservatório B recebeu 600 litros.</label>
          </RadioGroup>
          <RadioGroup className={styles["question__answer"]}>
            <input type="radio" name="answer" id="answer" />
            <label className={styles["question__label"]} htmlFor="answer">o reservatório C recebeu 500 litros.</label>
          </RadioGroup>
          <RadioGroup className={styles["question__answer"]}>
            <input type="radio" name="answer" id="answer" />
            <label className={styles["question__label"]} htmlFor="answer">o reservatório A recebeu 300 litros a mais do que B.</label>
          </RadioGroup>
          <RadioGroup className={styles["question__answer"]}>
            <input type="radio" name="answer" id="answer" />
            <label className={styles["question__label"]} htmlFor="answer">o reservatório B recebeu 700 litros.</label>
          </RadioGroup>
        </div>
        <Button
          className={styles["question__reply"]}
          type="button"
          variant="gradient-blue"
        >
          Responder
        </Button>
        <footer className={styles["question__footer"]}>
          <button className={styles["question__button"]}>
            <img src="/images/icon/comment.svg" alt="Comentários" />
            Comentários (0)
          </button>
          <button className={styles["question__button"]}>
            <img src="/images/icon/notion.svg" alt="Anotações" />
            Anotações
          </button>
          <button className={styles["question__button"]}>
            <img src="/images/icon/flag.svg" alt="Bandeira" />
            Notificar Erro
          </button>
        </footer>
      </div>
    </div>
  );
}
