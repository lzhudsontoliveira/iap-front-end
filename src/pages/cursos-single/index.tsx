import { Accordion } from "../../components/Accordion";
import { BackButton } from "../../components/BackButton";
import { CourseCardDetail } from "../../components/CourseCardDetail";
import { Container } from "../../components/layout/Container";
import styles from "./styles.module.scss";

export default function CoursesSingle() {
  return (
    <main>
      <section className={styles["courses-single-top"]}>
        <img
          className={styles["courses-single-top__background"]}
          src="/images/components/courses-single/mock.png"
          alt=""
        />
        <Container className={styles["courses-single-top__container"]}>
          <CourseCardDetail
            className={styles["courses-single-top__course-card"]}
          />
        </Container>
      </section>

      <div className={styles["courses-single-content"]}>
        <Container className={styles["courses-single-content__container"]}>
          <BackButton className={styles["courses-single-content__back-button"]} />
          <ul className={styles["courses-single-content__accordions"]}>
            <Accordion>
              <div
                className={styles["courses-single-content__accordion-button"]}
              >
                <img
                  className={styles["courses-single-content__accordion-icon"]}
                  src="/images/components/courses-single/target.svg"
                  alt="Ícone de Objetivo"
                />
                <h2
                  className={styles["courses-single-content__accordion-title"]}
                >
                  Objetivo
                </h2>
              </div>
              <p className="">
                Este curso é ideal para você que deseja revisar ou estudar os
                tópicos mais importantes para sua aprovação, sendo o objetivo
                principal direcionar e otimizar os seus estudos por meio de
                aulas dinâmicas e listas de questões aprimoradas. Este curso irá
                fazer a diferença na sua aprovação, pois quem começa a estudar
                antes tem mais chances. Vem que no IAP você tem o Alvo certo da
                sua aprovação.
              </p>
            </Accordion>
            <Accordion>
              <div
                className={styles["courses-single-content__accordion-button"]}
              >
                <img
                  className={styles["courses-single-content__accordion-icon"]}
                  src="/images/components/courses-single/check.svg"
                  alt="Ícone de Certo"
                />
                <h2
                  className={styles["courses-single-content__accordion-title"]}
                >
                  Vantagens
                </h2>
              </div>
              <p className="">
                - Material complementar em PDF <br />
                <br />
                - Aulas gravadas em estúdio, 100% online <br />
                <br />
                - Site seguro <br />
                <br />
                - Suporte via Chat <br />
                <br />
                - Visualização ilimitada durante a vigência do curso <br />
                <br />
                - Acelerador de vídeo <br />
                <br />
                - Risco zero: 7 dias de teste. Em caso de desistência,
                devolvemos 100% do valor investido <br />
                <br />
                - Certificado de conclusão <br />
                <br />
                - Parcelamento em até 12x sem juros <br />
                <br />- Tutoria: Tire suas dúvidas na plataforma
              </p>
            </Accordion>
            <Accordion>
              <div
                className={styles["courses-single-content__accordion-button"]}
              >
                <img
                  className={styles["courses-single-content__accordion-icon"]}
                  src="/images/components/courses-single/clock.svg"
                  alt="Ícone de Relógio"
                />
                <h2
                  className={styles["courses-single-content__accordion-title"]}
                >
                  Carga Horária
                </h2>
              </div>
              <p className="">- 10h / 05 Encontros / 20 vídeo-aulas</p>
            </Accordion>
            <Accordion>
              <div
                className={styles["courses-single-content__accordion-button"]}
              >
                <img
                  className={styles["courses-single-content__accordion-icon"]}
                  src="/images/components/courses-single/informations.svg"
                  alt="Ícone de Informações"
                />
                <h2
                  className={styles["courses-single-content__accordion-title"]}
                >
                  Informações
                </h2>
              </div>
              <p className="">
                - Banca: Comissão Própria <br />
                <br />
                - Nível: Médio <br />
                <br />
                - Cargo: Geral/Aviação; Saúde e Música <br />
                <br />
                - Data da Prova: 04 de outubro <br />
                <br />
                - Disponibilização das aulas: 16/05<br/>
                <br/>
                <p>
                  O curso foi ministrado em estúdio e disponibilizado na
                  modalidade online, no site www.iapcursosonline.com e acessível
                  aos alunos matriculados. As aulas serão disponibilizadas aos
                  alunos, os quais terão o prazo até o último dia do curso para
                  assistir todas as aulas, com a possibilidade de prorrogação,
                  mediante disponibilidade a ser definida em acordo com o IAP
                  CURSOS ONLINE. A consulta deverá ser realizada por meio dos
                  nossos canais de atendimento.
                </p>
              </p>
            </Accordion>
            <Accordion>
              <div
                className={styles["courses-single-content__accordion-button"]}
              >
                <img
                  className={styles["courses-single-content__accordion-icon"]}
                  src="/images/components/courses-single/content.svg"
                  alt="Ícone de Conteúdo"
                />
                <h2
                  className={styles["courses-single-content__accordion-title"]}
                >
                  Conteúdo
                </h2>
              </div>
              <p className="">
                <strong> - AULA 01</strong>: Gênero textual; textualidade e
                estilo (funções da linguagem; coesão e coerência textual; tipos
                de discurso; intertextualidade; denotação e conotação; figuras
                de linguagem; mecanismos de coesão; a ambiguidade; a
                não-contradição; paralelismos sintáticos e semânticos;
                continuidade e progressão textual); <br />
                <br />
                <br />
                <br />
                <strong> - AULA 02</strong>: Texto e contexto;
                <br />
                <br />
                <br />
                <br />
                <strong> - AULA 03</strong>: O texto narrativo: o enredo, o
                tempo e o espaço; a técnica da descrição; o narrador;
                <br />
                <br />
                <br />
                <br />
                <strong> - AULA 04</strong>: O texto argumentativo; o tema; a
                impessoalidade; a carta argumentativa; a crônica argumentativa;
                a argumentação e a persuasão;
                <br />
                <br />
                <br />
                <br />
                <strong> - AULA 05</strong>: O texto dissertativo-argumentativo;
                a consistência dos argumentos; a contra-argumentação; o
                parágrafo; a informatividade e o senso comum; formas de
                desenvolvimento do texto dissertativo-argumentativo; a
                introdução; e a conclusão.
                <br />
                <br />
                <br />
                <br />
              </p>
            </Accordion>
            <Accordion>
              <div
                className={styles["courses-single-content__accordion-button"]}
              >
                <img
                  className={styles["courses-single-content__accordion-icon"]}
                  src="/images/components/courses-single/rules.svg"
                  alt="Ícone de Regras"
                />
                <h2
                  className={styles["courses-single-content__accordion-title"]}
                >
                  Regras
                </h2>
              </div>
              <p className="">
                O curso será realizado na modalidade online e disponibilizado no
                site www.iapcursosonline.com, sendo as aulas gravadas e
                acessíveis aos alunos matriculados. O material será
                disponibilizado em PDF.
                <br />
                <br />
                O aluno terá o prazo de 180 dias para assistir às aulas,
                contados a partir da efetivação da matrícula.
                <br />
                <br />
                O aluno poderá assistir cada vídeo-aula, no horário que achar
                conveniente, bastando possuir um computador e acesso à internet
                banda larga (5MB). Em hipótese alguma será permitida a gravação
                das aulas, sujeito as sanções civis e penais cabíveis para quem
                o fizer.
                <br />
                <br />
                Distribuição das aulas e carga horária: cada aula é composta por
                04 vídeos com duração média de 30 minutos.
                <br />
                <br />
                Número de acessos: você terá acesso ilimitado as vídeo-aulas
                enquanto o curso estiver ativo.
                <br />
                <br />
                Período de acesso: o curso ficará disponível para acesso durante
                o prazo total de 180 dias, a partir da data de liberação do
                pagamento. Esse prazo poderá ser prorrogado mediante
                disponibilidade do IAP Cursos online (consulte nosso chat).
                <br />
                <br />
                Pagamento: compra segura por meio de cartão de crédito (em até
                12x sem juros) ou boleto bancário.
                <br />
                <br />
                Risco Zero: garantimos sua satisfação ou devolvemos o seu
                dinheiro sem nenhuma burocracia. Você poderá comprar nossos
                cursos com GARANTIA DE 7 DIAS para testar nossa plataforma e
                aprovar nosso produto. Após esse prazo, seguiremos o trâmite
                regular de cancelamento.
                <br />
                <br />
                <br />
                <br />
              </p>
            </Accordion>
            <Accordion>
              <div
                className={styles["courses-single-content__accordion-button"]}
              >
                <img
                  className={styles["courses-single-content__accordion-icon"]}
                  src="/images/components/courses-single/certified.svg"
                  alt="Certificado"
                />
                <h2
                  className={styles["courses-single-content__accordion-title"]}
                >
                  Certificado
                </h2>
              </div>
              <p className="">
                - Certificado: você poderá emitir o certificado de conclusão do
                curso após assistir, no mínimo, 75% do total das aulas.
                <br />
                <br />
                Todos os certificados serão emitidos diretamente do site pelo
                aluno, no menu “Meus Certificados”;
                <br />
                <br />
                Para a emissão do certificado, o curso precisa estar expirado
                (caso o aluno solicite a expiração do seu prazo antes da data
                prevista, não terá mais acesso às aulas. Esta solicitação deve
                ser feita pelo Atendimento Online);
                <br />
                <br />
                É necessário verificar e confirmar os dados pessoais, como nome
                completo (sem abreviaturas) e o número do CPF;
                <br />
                <br />
                Constarão no certificado as seguintes informações: nome
                completo, nome completo do curso realizado e carga horária;
                <br />
                <br />
                O certificado deve ser impresso em folha do tamanho A4;
                <br />
                <br />
                Após a emissão, nenhum dado poderá ser alterado.
                <br />
                <br />
                <br />
                <br />
              </p>
            </Accordion>
          </ul>

          <a className={styles["courses-single-content__link"]} href="">
            Experimente Por 7 Dias
          </a>
        </Container>
      </div>
    </main>
  );
}
