import { Badge } from "../../components/Badge";
import FormGroup from "../../components/FormGroup";
import { Container } from "../../components/layout/Container";
import { RadioGroup } from "../../components/RadioGroup";
import { Separator } from "../../components/Separator";
import styles from "./styles.module.scss";

export default function MyData() {
  return (
    <main>
      <section className={styles["my-data"]}>
        <Container>
          <h1 className={styles["my-data__title"]}>Dados</h1>
          <form className={styles["my-data__form"]} action="">
            <fieldset className={styles["my-data__fieldset"]}>
              <FormGroup>
                <label htmlFor="name">Nome Completo*</label>
                <input placeholder="Seu nome aqui" type="text" name="name" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="birthday">Data de Nascimento</label>
                <input type="date" name="birthday" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="general_registration">RG</label>
                <input
                  placeholder="Digite aqui"
                  type="text"
                  name="general_registration"
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="document_number">CPF*</label>
                <input
                  placeholder="Digite aqui"
                  type="text"
                  name="document_number"
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">E-mail*</label>
                <input
                  placeholder="Será seu nome de usuário"
                  type="email"
                  name="email"
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="confirm_email">Confirmar E-mail*</label>
                <input
                  placeholder="Digite novamente seu e-mail"
                  type="text"
                  name="confirm_email"
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="primary_phone">Telefone Primário*</label>
                <input
                  placeholder="(00) 0000-0000"
                  type="text"
                  id="name"
                  name="primary_phone"
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="gender">Sexo</label>
                <select name="gender">
                  <option value="">Selecione uma opção</option>
                  <option value="feminino">Feminino</option>
                  <option value="masculino">Masculino</option>
                  <option value="masculino">Não informar</option>
                </select>
              </FormGroup>
              <FormGroup>
                <label htmlFor="gender">Escolaridade</label>
                <select name="gender">
                  <option value="">Selecione uma opção</option>
                  <option value="ensino_medio">Ensino médio</option>
                  <option value="graduacao">Graduação</option>
                  <option value="pos_graduacao">Pós graduação</option>
                  <option value="mestrado">Mestrado</option>
                  <option value="doutorado">Doutorado</option>
                  <option value="outro">Outro</option>
                </select>
              </FormGroup>
            </fieldset>

            <Separator className={styles["my-data__separator"]} />

            <fieldset className={styles["my-data__fieldset"]}>
              <FormGroup>
                <label htmlFor="password">Senha*</label>
                <input type="password" name="password" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="confirm_password">Confirmar Senha*</label>
                <input type="password" name="confirm_password" />
              </FormGroup>
            </fieldset>

            <Separator className={styles["my-data__separator"]} />

            <div>
              <h2 className={styles["my-data__legend"]}>Áreas de Interesse</h2>
              <ul className={styles["my-data__areas-interest-list"]}>
                <Badge>Turmas</Badge>
                <Badge>Universidades</Badge>
                <Badge>Macaíba</Badge>
              </ul>
              <fieldset className={styles["my-data__fieldset"]}>
                <FormGroup>
                  <label htmlFor="zipcode">CEP</label>
                  <input placeholder="Digite aqui" type="text" name="zipcode" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="confirm_password">Logradouro</label>
                  <input
                    placeholder="Digite aqui"
                    type="text"
                    name="logradouro"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="number">Número</label>
                  <input
                    placeholder="Número ou S/N"
                    type="text"
                    name="number"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="complement">Complemento</label>
                  <input
                    placeholder="Apartamento, sala, prédio e/ou ponto de refereência"
                    type="text"
                    name="complement"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="neighborhood">Bairro</label>
                  <input
                    placeholder="Digite aqui"
                    type="text"
                    name="neighborhood"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="city">Cidade</label>
                  <input placeholder="Digite aqui" type="text" name="city" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="state">Estado</label>
                  <select name="state">
                    <option value="">Estado</option>
                    <option value="ensino_medio">Ensino médio</option>
                    <option value="graduacao">Graduação</option>
                    <option value="pos_graduacao">Pós graduação</option>
                    <option value="mestrado">Mestrado</option>
                    <option value="doutorado">Doutorado</option>
                    <option value="outro">Outro</option>
                  </select>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="country">Brasil</label>
                  <select name="country">
                    <option value="">País</option>
                    <option value="ensino_medio">Ensino médio</option>
                    <option value="graduacao">Graduação</option>
                    <option value="pos_graduacao">Pós graduação</option>
                    <option value="mestrado">Mestrado</option>
                    <option value="doutorado">Doutorado</option>
                    <option value="outro">Outro</option>
                  </select>
                </FormGroup>
              </fieldset>
            </div>
            <div className={styles["my-data__terms"]}>
              <h2>CONTRATO DE PRESTAÇÃO DE SERVIÇOS DO IAP CURSOS ON-LINE</h2>
              <p>
                <span>
                  <strong>IDENTIFICAÇÃO DAS PARTES CONTRANTES:</strong>
                  <br />
                </span>
              </p>
              <p>
                <span>
                  <strong>CONTRATANTE</strong>: Portador dos dados informados no
                  momento do cadastro e arquivados em nosso banco de dados,
                  identificado por login e senha, doravante chamado de aluno.
                  <br />
                </span>
              </p>
              <p>
                <span>
                  <strong>CONTRATADA</strong>: A empresa de razão social
                  OLIVEIRA CURSOS EIRELI e nome fantasia IAP Cursos Online,
                  inscrita no CNPJ sob o nº 20.862.627/0001-69, com sede
                  administrativa na Rua Professor Almeida Barreto, 1062, SL02,
                  Lagoa Nova, CEP 59.056-260 Natal/RN.
                  <br />
                </span>
              </p>
              <p>
                <span>
                  <strong>
                    1 - CLÁUSULA PRIMEIRA - SERVIÇO PRESTADO:
                    <br />
                  </strong>
                </span>
              </p>
              <p>
                <span>
                  1.1 Este Contrato de Prestação de Serviços diz respeito às
                  partes citadas acima e aplica-se ao uso dos serviços
                  oferecidos pela contratada por meio de seu site na Internet e
                  descritos no item {"Detalhes do Curso"};
                  <br />
                </span>
              </p>
              <p>
                <span>
                  1.2 Todo contratante que pretenda utilizar os serviços da
                  contratada deve obrigatoriamente aceitar e cumprir as
                  cláusulas deste contrato.
                  <br />
                </span>
              </p>
              <p>
                <span>
                  <strong>
                    &nbsp;2 - CLÁUSULA SEGUNDA - DEVERES DO CONTRATANTE:
                    <br />
                  </strong>
                </span>
              </p>
              <p>
                <span>
                  2.1 Ao se cadastrar, o contratante se compromete a fornecer
                  informações verdadeiras e completas, conforme solicitado na
                  página de cadastro;
                  <br />
                </span>
              </p>
              <p>
                <span>
                  2.2 É dever do contratante entrar em contato com a equipe de
                  atendimento do site, caso qualquer problema ou imprevisto
                  ocorra durante o curso;
                  <br />
                </span>
              </p>
              <p>
                <span>
                  2.3 Possuir equipamentos e softwares, seguindo os requisitos
                  mínimos mencionados no site da CONTRATADA, (
                  <strong>conexão mínima de 5 MB</strong>&nbsp; megabyte. Não
                  aconselhamos a utilização da tecnologia 3G), acesso à Internet
                  e ter um endereço eletrônico permanente para contato. Em
                  relação aos dispositivos móveis nossos vídeos funcionarão via
                  browser para dispositivos Android e IOS.
                  <br />
                </span>
              </p>
              <p>
                <span>
                  2.4 Manter seus dados cadastrais atualizados, bem como zelar
                  pela confiabilidade de sua senha e login, de forma a não
                  permitir compartilhamento.
                  <br />
                </span>
              </p>
              <p>
                <span>
                  <strong>
                    3 - CLÁUSULA TERCEIRA – TERMO DE CONDUTA
                    <br />
                  </strong>
                </span>
              </p>
              <p>
                <span>
                  3.1 O CONTRATANTE compromete-se a seguir os padrões de conduta
                  estabelecidos e vigentes na Internet, abstendo-se de:
                  <br />
                </span>
              </p>
              <p>
                <span>
                  3.1.1 Violar a privacidade de outros usuários;
                  <br />
                </span>
              </p>
              <p>
                <span>
                  3. 1.2 Utilizar indevidamente códigos de acesso e/ou senha de
                  outros usuários;
                  <br />
                </span>
              </p>
              <p>
                <span>
                  3. 1.3 Reproduzir, sob qualquer forma, o(s) material(is) do(s)
                  curso(s), sob pena de responder, civil e criminalmente,
                  perante a CONTRATADA e terceiros, nos termos da Lei nº 9.609,
                  de 19 de fevereiro de 1988, por violação da propriedade
                  intelectual, devendo o uso deste ser feito exclusivamente em
                  âmbito privado pelo CONTRATANTE;
                  <br />
                </span>
              </p>
              <p>
                <span>
                  3. 1.4 Propagar vírus de computador e programas invasivos
                  (worms, ou outras formas de programas computacionais,
                  auto-replicantes ou não) que prejudiquem a operação das redes
                  e de computadores individuais;
                  <br />
                </span>
              </p>
              <p>
                <span>
                  3. 1.5 Tentar burlar o sistema de segurança de computadores
                  para os quais não possua autorização para acesso;
                  <br />
                </span>
              </p>
              <p>
                <span>
                  3. 1.6 Corromper ou destruir dados, arquivos ou programas;
                  <br />
                </span>
              </p>
              <p>
                <span>
                  3. 1.7 Divulgar por meio do Fórum sua promoção pessoal com
                  fins profissionais, comerciais ou eleitorais;
                  <br />
                </span>
              </p>
              <p>
                <span>
                  3.1.8 Veicular no Fórum mensagem que possa vir a ser
                  considerada ofensiva e constrangedora ou fira princípios
                  éticos;
                  <br />
                </span>
              </p>
              <p>
                <span>
                  <strong>
                    4 - CLÁUSULA QUARTA - PAGAMENTO:
                    <br />
                  </strong>
                </span>
              </p>
              <p>
                <span>
                  4.1 Os cursos são disponibilizados no formato pré-pago, ou
                  seja, são liberados para acesso apenas após a confirmação do
                  pagamento efetuado.
                  <br />
                </span>
              </p>
              <p>
                <span>
                  4.2 Cada curso possui um valor específico que, ao ser pago, dá
                  o direito ao contratante de participar do curso completo,
                  conforme a programação disponibilizada. Todos os cursos são
                  pagos uma única vez. Não há mensalidades ou custos adicionais.
                  <br />
                </span>
              </p>
              <p>
                <span>
                  4.3 O CONTRATANTE se compromete a guardar o(s) comprovante(s)
                  do(s) pagamento(s) efetuado(s) com a finalidade de, em caso de
                  necessidade, confirmar alguma informação.
                  <br />
                </span>
              </p>
              <p>
                <span>
                  4.4 O CONTRATANTE pode iniciar o curso imediatamente após a
                  confirmação do respectivo pagamento.
                  <br />
                </span>
              </p>
              <p>
                <span>
                  4.5 As formas de pagamento disponíveis são: Boleto Bancário,
                  Cartão de Crédito e PIX. Os prazos para liberação do(s)
                  curso(s) são:
                  <br />
                </span>
              </p>
              <blockquote>
                <p>
                  <span>
                    (i) Boleto Bancário: liberado automaticamente em 1 dia útil
                    após o pagamento.
                  </span>
                </p>
                <p>
                  <span>
                    (ii) Cartão de Crédito: liberado automaticamente, após a
                    confirmação do débito realizado.
                  </span>
                </p>
              </blockquote>
              <p>
                <span>
                  4.6 O parcelamento está disponível exclusivamente para
                  pagamento via Cartão de Crédito. Para pagamento parcelado, não
                  há acréscimo de juros.
                  <br />
                </span>
              </p>
              <p>
                <strong>
                  <span>
                    5 - CLÁUSULA QUINTA - RESCISÃO CONTRATUAL:
                    <br />
                  </span>
                </strong>
              </p>
              <p>
                <span>
                  5.1 Caso o curso tenha iniciado, mas não finalizadas as
                  filmagens, em caso de desistência, será descontado o valor
                  proporcional às aulas já disponibilizadas, assistidas ou não,
                  bem como incidirá multa rescisória de 20% (vinte por cento)
                  sobre o total pago;
                  <br />
                </span>
              </p>
              <p>
                <span>
                  5.2 No caso de todas as aulas já estarem efetivamente
                  disponíveis, não será possível o cancelamento;
                  <br />
                </span>
              </p>
              <p>
                <span>
                  5.3 A critério do(a) contratante(a), o saldo a ser restituído
                  poderá ser convertido em bônus para abatimento em futuros
                  cursos online oferecidos pelo IAP Cursos On-line;
                  <br />
                </span>
              </p>
              <p>
                <span>
                  5.4 Em nenhuma hipótese será possível a troca de um curso
                  contratado pelo(a) contratante(a) por outro curso online,
                  <br />
                </span>
              </p>
              <p>
                <span>
                  5.5 A CONTRATADA poderá rescindir, a qualquer tempo, o
                  presente contrato, independente de aviso ou notificação, em
                  caso de descumprimento de quaisquer das cláusulas constantes
                  no presente contrato, pelo CONTRATANTE.
                  <br />
                </span>
              </p>
              <p>
                <span>
                  5.6 A CONTRATADA se reserva o direito de cancelar o curso,
                  caso o número de matriculados seja inferior a 30 (trinta)
                  alunos. Nesse caso, os valores pagos pelo CONTRATANTE lhes
                  serão integralmente restituídos.
                  <br />
                </span>
              </p>
              <p>
                <strong>
                  <span>
                    6 - CLÁUSULA SEXTA - REGRAS PARA CERTIFICADOS:
                    <br />
                  </span>
                </strong>
              </p>
              <p>
                <span>
                  6.1 Todos os certificados serão emitidos através do site,
                  ficando a cargo do contratante imprimi-lo. Para a emissão do
                  certificado, o curso deverá estar expirado (caso o aluno
                  solicite o término do seu prazo antes da data prevista, não
                  terá mais acesso às aulas. A solicitação deve ser feita
                  através do atendimento). É necessário verificar e confirmar os
                  dados pessoais como: nome completo (sem abreviaturas); número
                  do CPF e os dados do Curso como: nome do curso e carga
                  horária. Após a emissão, nenhum dado poderá ser alterado. O
                  certificado deve ser impresso em folha do tamanho A4.
                  Constarão no certificado as seguintes informações: nome
                  completo do aluno, nome completo do curso realizado e carga
                  horária. No caso de emissão de 2ª via do certificado, será
                  cobrada uma taxa de R$30,00 (trinta Reais) e este será enviado
                  no formato “carta registrada/AR”.
                  <br />
                </span>
              </p>
              <p>
                <strong>
                  <span>
                    7 - CLÁUSULA SÉTIMA - DISPOSIÇÕES FINAIS:
                    <br />
                  </span>
                </strong>
              </p>
              <p>
                <span>
                  7.1{" "}
                  <strong>
                    É expressamente proibida a distribuição da totalidade ou de
                    parte do conteúdo do curso{" "}
                  </strong>
                  sem autorização expressa e escrita da CONTRATADA, bem como o
                  uso do material didático para quaisquer outros fins, que não
                  exclusivamente o de estudo, por parte daquele que se inscreveu
                  e fez o pagamento;
                  <br />
                </span>
              </p>
              <p>
                <span>
                  7.2 Fica ciente o CONTRATANTE, que por medida de segurança o
                  seu CPF ficará transitando na tela durante a exibição do
                  vídeo;
                  <br />
                </span>
              </p>
              <p>
                <span>
                  7.3 A compra de curso(s) não dá o direito de se reutilizar ou
                  revender o material de estudo a terceiros;
                  <br />
                </span>
              </p>
              <p>
                <span>
                  7.4 Em nenhum caso a contratada ou seus fornecedores poderão
                  ser responsabilizados por quaisquer danos ocasionados;
                  <br />
                </span>
              </p>
              <p>
                <span>
                  7.5 As partes, de comum acordo, elegem o Foro da comarca de
                  Natal – RN para dirimir toda e qualquer questão oriunda do
                  presente contrato, renunciando a qualquer outro, por mais
                  privilegiado que seja, ou que possa vir a ser.
                </span>
                <br />
              </p>{" "}
            </div>
            <RadioGroup>
              <input type="radio" name="accept" id="accept" />
              <label htmlFor="accept">Eu li e aceito os Termos de Uso.*</label>
            </RadioGroup>
            <RadioGroup>
              <input type="radio" name="accpet_offers" id="accept_offers" />
              <label htmlFor="accept_offers">
                Aceito receber e-mails com informações e novidades.
              </label>
            </RadioGroup>
            <p className={styles["my-data__observation-text"]}>*campos obrigatórios</p>
            <button className={styles["my-data__submit"]} type="submit">Enviar Cadastro</button>
          </form>
        </Container>
      </section>
    </main>
  );
}
