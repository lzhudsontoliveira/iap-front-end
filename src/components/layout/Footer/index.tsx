import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__container"]}>
        <div className={styles["footer__content"]}>
          <img
            className={styles["footer__logo"]}
            src="/images/logo-header.svg"
            alt="IAP Cursos Online"
          />
          <ul className={styles["footer__menu"]}>
            <li className={styles["footer__menu-item"]}>
              <a className={styles["footer__menu-link"]} href="">
                Validar certificado
              </a>
            </li>
            <li className={styles["footer__menu-item"]}>
              <a className={styles["footer__menu-link"]} href="">
                Atendimento
              </a>
            </li>
            <li className={styles["footer__menu-item"]}>
              <a className={styles["footer__menu-link"]} href="">
                Contato
              </a>
            </li>
            <li className={styles["footer__menu-item"]}>
              <a className={styles["footer__menu-link"]} href="">
                FAQ
              </a>
            </li>
          </ul>
          <ul className={styles["footer__menu-social"]}>
            <li className={styles["footer__menu-social-item"]}>
              <a className={styles["footer__menu-social-link"]} href="">
                <img
                  src="/images/icon/facebook.svg"
                  alt="Facebook"
                  className={styles["footer__menu-social-icon"]}
                />
              </a>
            </li>
            <li className={styles["footer__menu-social-item"]}>
              <a className={styles["footer__menu-social-link"]} href="">
                <img
                  src="/images/icon/youtube.svg"
                  alt="Facebook"
                  className={styles["footer__menu-social-icon"]}
                />
              </a>
            </li>
            <li className={styles["footer__menu-social-item"]}>
              <a className={styles["footer__menu-social-link"]} href="">
                <img
                  src="/images/icon/whatsapp.svg"
                  alt="Facebook"
                  className={styles["footer__menu-social-icon"]}
                />
              </a>
            </li>
            <li className={styles["footer__menu-social-item"]}>
              <a className={styles["footer__menu-social-link"]} href="">
                <img
                  src="/images/icon/instagram.svg"
                  alt="Facebook"
                  className={styles["footer__menu-social-icon"]}
                />
              </a>
            </li>
            <img
              src="/images/warranty-seal.svg"
              alt="Selo de Garantia"
              className={styles["footer__warranty-seal"]}
            />
          </ul>
        </div>
        <div className={styles["footer__copyright-container"]}>
          <div className={styles["footer__copyright-content"]}>
            <p className={styles["footer__copyright-text"]}>
              Copyright © 2022 IAP Cursos On-line | Todos os direitos reservados
            </p>
            <p className={styles["footer__copyright-document-number"]}>
              CNPJ: 20.862.627/0001-69
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
