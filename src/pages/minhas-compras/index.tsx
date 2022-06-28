import Link from "next/link";
import { Accordion } from "../../components/Accordion";
import { Button } from "../../components/Button";
import { InputSearchContainer } from "../../components/InputSearchContainer";
import { Container } from "../../components/layout/Container";
import { Title } from "../../components/Title";
import styles from "./styles.module.scss";

export default function MyPurchases() {
  return (
    <main>
      <section className={styles["my-purchases"]}>
        <Container>
          <div className={styles["my-purchases__no-purchases"]}>
            <img src="/images/icon/bag.svg" alt="Bolsa" />
            <h2 className={styles["my-purchases__no-purchases-message"]}>
              VOCê AINDA NÃO ADICIONOU REALIZOU NENHUM PEDIDO.
            </h2>
          </div>
          <Link href="/cursos">
            <a className={styles["my-purchases__link-courses"]}>
              <Button
                className={styles["my-purchases__button-courses"]}
                variant="gradient-blue"
              >
                Conheçer todos os cursos
              </Button>
            </a>
          </Link>
        </Container>
        <Container>
          <Title headingLevel="h1">Pedidos</Title>
          <InputSearchContainer
            className={styles["my-purchases__search"]}
            placeholder="Pesquise em Pedidos"
          />

          <ul className={styles["my-purchases__list"]}>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
            <li className={styles["my-purchases__item"]}>
              <Accordion className={styles["my-purchases__accordion"]}>
                <div className={styles["my-purchases__order-info"]}>
                  <p className={styles["my-purchases__order-number"]}>
                    Pedido
                    <strong> #00000000000</strong>
                  </p>
                  <p className={styles["my-purchases__order-date"]}>
                    <img
                      src="/images/icon/calendar-icon.svg"
                      alt="Data de Compra"
                    />
                    00/00/2022
                  </p>
                  <p className={styles["my-purchases__order-hour"]}>
                    <img
                      src="/images/icon/clock-black.svg"
                      alt="Hora da Compra"
                    />
                    00:00
                  </p>
                </div>
                <div className={styles["my-purchases__order-content"]}>
                  <p className={styles["my-purchases__order-status"]}>
                    <strong>Status: </strong>
                    Nome do Status
                  </p>

                  <table className={styles["my-purchases__order-table"]}>
                    <tr>
                      <th>Itens</th>
                      <th>
                        <strong>Investimento</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>Bateria de Questões</td>
                      <td>R$ 000,00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Valor total do pedido
                        </strong>
                      </td>
                      <td>
                        <strong>
                          R$ 000,00
                        </strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </Accordion>
            </li>
          </ul>
        </Container>
      </section>
    </main>
  );
}
