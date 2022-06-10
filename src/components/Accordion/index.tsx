import { ReactNode, useRef, useState } from "react";
import styles from "./styles.module.scss";

interface AccordionProps {
  children: ReactNode;
}

export function Accordion({ children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentEl = useRef<HTMLDivElement>(null);
  function handleToggleAccordion() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div
      className={`${styles.accordion} ${isOpen && styles["accordion--active"]}`}
    >
      <button
        onClick={handleToggleAccordion}
        type="button"
        className={styles.accordion__button}
      >
        {children[0]}
      </button>
      <div
        ref={contentEl}
        className={`${styles["accordion__content-container"]}`}
        style={
          isOpen
            ? { maxHeight: contentEl.current.scrollHeight }
            : { maxHeight: 0 }
        }
      >
        <div className={`${styles["accordion__content"]}`}>{children[1]}</div>
      </div>
    </div>
  );
}
