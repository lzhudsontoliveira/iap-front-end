import { CardBlog } from "../../components/CardBlog";
import { FeaturedPost } from "../../components/FeaturedPost";
import { InputSearchContainer } from "../../components/InputSearchContainer";
import { Container } from "../../components/layout/Container";
import { Pagination } from "../../components/Pagination";
import styles from "./styles.module.scss";
export default function Blog() {
  return (
    <main>
      <section className={styles["blog"]}>
        <Container className={styles["blog__container"]}>
          <h1 className={styles["blog__title"]}>BLOG DO IAP</h1>
          <InputSearchContainer
            className={styles["blog__search"]}
            placeholder="Pesquise em  Blog do IAP"
          />
          <FeaturedPost className={styles["blog__featured-post"]} />

          <ul className={styles["blog__list"]}>
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
          </ul>

          <Pagination className={styles["blog__pagination"]} />
        </Container>
      </section>
    </main>
  );
}
