import { Badge } from "../../components/Badge";
import { Container } from "../../components/layout/Container";
import { Share } from "../../components/Share";
import styles from "./styles.module.scss";

export default function MateriaisGratuitosSingle() {
  return (
    <main>
      <section className={styles["free-materials-single"]}>
        <Container className={styles["free-materials-single__container"]}>
          <button className={styles["free-materials-single__back-button"]}>
            <img src="/images/icon/back-arrow.svg" alt="Seta de Voltar" />
            Voltar
          </button>
          <h1 className={styles["free-materials-single__title"]}>
            Live: a eSTRUTURA cOMPLETA - pASSO A pASSO Da sua redação
          </h1>
          <div className={styles["free-materials-single__meta"]}>
            <div className={styles["free-materials-single__date"]}>
              <img
                className={styles["free-materials-single__date-icon"]}
                src="/images/icon/calendar-icon.svg"
                alt="Data de Publicação"
              />
              <span className={styles["free-materials-single__date-text"]}>
                12/12/2022
              </span>
            </div>
            <Badge active>Aulas Gratuitas</Badge>
          </div>
          <div className={styles["free-materials-single__video"]}>
            <iframe
              className={styles["free-materials-single__iframe"]}
              src="https://www.youtube.com/embed/2Gg6Seob5Mg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className={styles["free-materials-single__content"]}>
            <div className={styles["free-materials-single__top"]}>
              <img className={styles["free-materials-single__icon"]} src="/images/icon/list-icon.svg" alt="Descrição" />
              Descrição
            </div>
            <p className={styles["free-materials-single__description"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
              ornare arcu amet blandit sapien suspendisse faucibus. Aenean
              vulputate eu lobortis pulvinar varius. Ultricies turpis nulla
              iaculis scelerisque pretium euismod habitant a dictum. Commodo,
              semper a a orci ipsum. Etiam sed sollicitudin donec nunc. Mauris
              quisque orci, in in. Quis commodo magna mauris, rutrum ultricies
              pellentesque. Vitae, imperdiet interdum velit nisl. Nunc
              consectetur viverra non eget lobortis nullam facilisis lorem.
              Suscipit egestas mauris velit, id. Sollicitudin cursus nisi quam
              consectetur massa pellentesque eget. <br/><br/> 
              
              Integer nibh mauris, aliquam
              a, turpis. Amet eu risus, ultrices scelerisque. In enim, massa
              luctus massa, sollicitudin eget eu. Leo est, sed aliquet tempor.
              Facilisis ut sit cras tortor suspendisse. Enim, congue urna tellus
              id. Et nullam fusce magna posuere dictum ac enim. Facilisis non
              risus morbi sagittis nibh egestas in aliquet.
            </p>
          </div>
          <Share className={styles["free-materials-single__share"]} />
        </Container>
      </section>
    </main>
  );
}
