import { CardBox } from "../../components/CarBox";
import { Container } from "../../components/layout/Container";
import { Title } from "../../components/Title";
import styles from "./styles.module.scss";
import { RadioGroup } from "../../components/RadioGroup";
import FormGroup from "../../components/FormGroup";
import { Button } from "../../components/Button";

export default function MyPerfomance() {
  return (
    <main>
      <section className={styles["my-performance"]}>
        <Container className={styles["my-performance__container"]}>
          <Title headingLevel="h1">Meu Desempenho</Title>
          <ul className={styles["my-performance__cards-list"]}>
            <li className={styles["my-performance__card-item"]}>
              <CardBox>
                <Title headingLevel="h2">Aproveitamento Geral (%)</Title>
              </CardBox>
            </li>
            <li className={"my-performance__card-item"}>
              <CardBox>
                <Title headingLevel="h2">
                  Aproveitamento por Disciplina (%)
                </Title>
              </CardBox>
            </li>
            <li className={"my-perfomance__card-item"}>
              <CardBox>
                <Title headingLevel="h2">Disciplinas fáceis</Title>
                <div className={styles["my-performance__custom-table"]}>
                  <p className={styles["my-performance__custom-table-legend"]}>
                    <strong>Desempenho</strong>
                  </p>
                  <div className={styles["my-performance__custom-table-data"]}>
                    <div className={styles["my-performance__custom-table-row"]}>
                      <span
                        className={styles["my-performance__custom-table-label"]}
                      >
                        Português
                      </span>
                      <span
                        className={styles["my-performance__custom-table-value"]}
                      >
                        100%
                      </span>
                    </div>
                  </div>
                </div>
              </CardBox>
            </li>
            <li className={"my-perfomance__card-item"}>
              <CardBox>
                <Title headingLevel="h2">Disciplinas mais difíceis</Title>
                <div className={styles["my-performance__custom-table"]}>
                  <p className={styles["my-performance__custom-table-legend"]}>
                    <strong>Desempenho</strong>
                  </p>
                  <div className={styles["my-performance__custom-table-data"]}>
                    <div className={styles["my-performance__custom-table-row"]}>
                      <span
                        className={styles["my-performance__custom-table-label"]}
                      >
                        Português
                      </span>
                      <span
                        className={styles["my-performance__custom-table-value"]}
                      >
                        100%
                      </span>
                    </div>
                  </div>
                </div>
              </CardBox>
            </li>
            <li className={"my-perfomance__card-item"}>
              <CardBox>
                <Title headingLevel="h2">Grupos fáceis</Title>
                <div className={styles["my-performance__custom-table"]}>
                  <p className={styles["my-performance__custom-table-legend"]}>
                    <strong>Desempenho</strong>
                  </p>
                  <div className={styles["my-performance__custom-table-data"]}>
                    <div className={styles["my-performance__custom-table-row"]}>
                      <span
                        className={styles["my-performance__custom-table-label"]}
                      >
                        Ano: 2022
                      </span>
                      <span
                        className={styles["my-performance__custom-table-value"]}
                      >
                        100%
                      </span>
                    </div>
                    <div className={styles["my-performance__custom-table-row"]}>
                      <span
                        className={styles["my-performance__custom-table-label"]}
                      >
                        Banca: FGV
                      </span>
                      <span
                        className={styles["my-performance__custom-table-value"]}
                      >
                        100%
                      </span>
                    </div>
                  </div>
                </div>
              </CardBox>
            </li>
            <li className={"my-perfomance__card-item"}>
              <CardBox>
                <Title headingLevel="h2">Grupos mais difíceis</Title>
                <div className={styles["my-performance__custom-table"]}>
                  <p className={styles["my-performance__custom-table-legend"]}>
                    <strong>Desempenho</strong>
                  </p>
                  <div className={styles["my-performance__custom-table-data"]}>
                    <div className={styles["my-performance__custom-table-row"]}>
                      <span
                        className={styles["my-performance__custom-table-label"]}
                      >
                        Ano: 2022
                      </span>
                      <span
                        className={styles["my-performance__custom-table-value"]}
                      >
                        100%
                      </span>
                    </div>
                    <div className={styles["my-performance__custom-table-row"]}>
                      <span
                        className={styles["my-performance__custom-table-label"]}
                      >
                        Banca: FGV
                      </span>
                      <span
                        className={styles["my-performance__custom-table-value"]}
                      >
                        100%
                      </span>
                    </div>
                  </div>
                </div>
              </CardBox>
            </li>
          </ul>
        </Container>
      </section>

      <section className={styles["mount-battery-questions"]}>
        <Container className={styles["mount-battery-questions__container"]}>
          <Title headingLevel="h1">Montar Bateria de Questões</Title>
          <form action="" className={styles["mount-battery-questions__form"]}>
            <div className={styles["mount-battery-questions__group"]}>
              <p className={styles["mount-battery-questions__group-legend"]}>
                Questões que eu
              </p>
              <RadioGroup>
                <input type="radio" id="answered" name="first-value" />
                <label htmlFor="answered">Respondi</label>
              </RadioGroup>
              <RadioGroup>
                <input type="radio" id="not-answer" name="first-value" />
                <label htmlFor="not-answer">Não respondi</label>
              </RadioGroup>
              <RadioGroup>
                <input type="radio" id="not-answer" name="first-value" />
                <label htmlFor="not-answer">Acertei</label>
              </RadioGroup>
              <RadioGroup>
                <input type="radio" id="not-answer" name="first-value" />
                <label htmlFor="not-answer">Não acertei</label>
              </RadioGroup>
              <RadioGroup>
                <input type="radio" id="not-answer" name="first-value" />
                <label htmlFor="not-answer">Todas as Questões</label>
              </RadioGroup>
            </div>
            <div className={styles["mount-battery-questions__group"]}>
              <p className={styles["mount-battery-questions__group-legend"]}>
                Questões com
              </p>
              <RadioGroup>
                <input type="radio" id="answered" name="first-value" />
                <label htmlFor="answered">Gabarito</label>
              </RadioGroup>
              <RadioGroup>
                <input type="radio" id="not-answer" name="first-value" />
                <label htmlFor="not-answer">Comentários</label>
              </RadioGroup>
              <RadioGroup>
                <input type="radio" id="not-answer" name="first-value" />
                <label htmlFor="not-answer">Minhas anotações</label>
              </RadioGroup>
            </div>
            <div className={styles["mount-battery-questions__options"]}>
              <FormGroup>
                <label htmlFor="discipline">Disciplina</label>
                <select name="discipline" id="discipline">
                  <option value="">Selecione</option>
                </select>
              </FormGroup>
              <FormGroup>
                <label htmlFor="subject">Assunto</label>
                <select name="subject">
                  <option value="">Selecione</option>
                </select>
              </FormGroup>
              <FormGroup>
                <label htmlFor="year">Ano</label>
                <select name="year" id="year">
                  <option value="">Selecione</option>
                </select>
              </FormGroup>
              <FormGroup>
                <label htmlFor="newsstand">Banca</label>
                <select name="newsstand" id="newsstand">
                  <option value="">Selecione</option>
                </select>
              </FormGroup>
            </div>
            <div className={styles["mount-battery-questions__buttons"]}>
              <Button className={styles["mount-battery-questions__button-submit"]} type="submit" variant="gradient-blue">Iniciar Bateria</Button>
              <Button className={styles["mount-battery-questions__button-clear"]} variant="outline-blue">Limpar Filtro</Button>
            </div>
          </form>
        </Container>
      </section>
    </main>
  );
}
