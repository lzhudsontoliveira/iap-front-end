import { useRef, useState } from "react";
import styles from "./styles.module.scss";
export function Accordion() {
  const [isOpen, setIsOpen] = useState(false);
  const contentEl = useRef<HTMLDivElement>(null);
  function handleToggleAccordion() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className={`${styles.accordion} ${isOpen && styles['accordion--active']}`}>
      <button
        onClick={handleToggleAccordion}
        type="button"
        className={styles.accordion__button}
      >
        Quais as vantagens do IAP Cursos Online?
      </button>
      <div
        ref={contentEl}
        className={`${styles.accordion__content}`}
        style={
          isOpen
            ? {maxHeight: contentEl.current.scrollHeight}
            : {maxHeight: 0}
        }
      >
        <p className={styles.accordion__text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}
