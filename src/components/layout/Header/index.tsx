import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles["header"]}>
      <>
        <div className={styles["header__container"]}>
          <img
            className={styles["header__logo"]}
            src="/images/logo-header.svg"
            alt="IAP Cursos Online"
          />
          <nav className={styles["header__nav"]}>
            <ul className={styles["header__menu"]}>
              <li className={styles["header__item"]}>
                <a className={styles["header__link"]} href="">
                  Home
                </a>
              </li>
              <li className={styles["header__item"]}>
                <a className={styles["header__link"]} href="">
                  Material Gratuito
                </a>
              </li>
              <li className={styles["header__item"]}>
                <a className={styles["header__link"]} href="">
                  Cursos
                </a>
              </li>
              <li className={styles["header__item"]}>
                <a className={styles["header__link"]} href="">
                  Blog do IAP
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles["header__other-links-container"]}>
            <a className={styles["header__button-search"]} href="">
              <img src="/images/icon/search-icon.svg" alt="Pesquisa" />
            </a>
            <a className={styles["header__button-register"]} href="">
              Cadastre-se
            </a>

            <a className={styles["header__button-cart"]} href="">
              <img src="/images/cart-icon.svg" alt="Carrinho de Compras" />
              <span className={styles["header__button-cart-number"]}>0</span>
            </a>

            <a className={styles["header__button-student-area"]} href="">
              <img src="/images/student-icon.svg" alt="Área do Estudante" />
            </a>
          </div>
        </div>
        <ul className={styles["header__social-list"]}>
          <li className={styles["header__social-item"]}>
            <a className={styles["header__social-link"]} href="">
              <img
                className={styles["header__social-icon"]}
                src="/images/icon/facebook.svg"
                alt="Facebook"
              />
            </a>
          </li>
          <li className={styles["header__social-item"]}>
            <a className={styles["header__social-link"]} href="">
              <img
                className={styles["header__social-icon"]}
                src="/images/icon/youtube.svg"
                alt="YouTube"
              />
            </a>
          </li>
          <li className={styles["header__social-item"]}>
            <a className={styles["header__social-link"]} href="">
              <img
                className={styles["header__social-icon"]}
                src="/images/icon/whatsapp.svg"
                alt="Whatsapp"
              />
            </a>
          </li>
          <li className={styles["header__social-item"]}>
            <a className={styles["header__social-link"]} href="">
              <img
                className={styles["header__social-icon"]}
                src="/images/icon/instagram.svg"
                alt="Instagram"
              />
            </a>
          </li>
        </ul>
      </>
    </header>
  );
}
