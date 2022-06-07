import { Container } from "../../../components/layout/Container";
import styles from "./styles.module.scss";
import "swiper/css/pagination";
import BannerSlider from "./components/BannerSlider";
import { Small } from "../../../components/Small";
import { TitleSection } from "../../../components/TitleSection";
import { HighlightText } from "../../../components/HighlightText";
import CourseSlider from "./components/CourseSlider";
import { Numbers } from "./components/Numbers";

export function SectionCourses() {
  return (
    <section className={styles["courses"]}>
      <Container>
        <BannerSlider />
        <div className={styles["courses__title-container"]}>
          <Small>CONHEÇA OS nossos</Small>
          <TitleSection className={styles["courses__title"]}>
            Cursos Em <HighlightText>Destaque</HighlightText>
          </TitleSection>
        </div>

        <CourseSlider className={styles["courses__course-slider"]} />

        <a className={styles["courses__link"]} href="">
          Escolha agora seu curso
        </a>

        <Numbers />
      </Container>
    </section>
  );
}
