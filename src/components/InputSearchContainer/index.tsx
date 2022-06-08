import styles from "./styles.module.scss";

interface InputSearchContainerProps {
  placeholder: string;
  className?: string;
}

export function InputSearchContainer({ placeholder, className } : InputSearchContainerProps) {
  return (
    <div className={`${styles["input-search__container"]} ${className}`}>
      <input
        placeholder={placeholder}
        className={styles["input-search__input"]}
        type="text"
      />
      <button className={styles["input-search__button-search"]}>
        <img
          className={styles["input-search__search-icon"]}
          src="/images/icon/search.svg"
          alt="Search"
        />
      </button>
    </div>
  );
}
