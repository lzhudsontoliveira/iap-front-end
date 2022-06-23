import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <div className={styles["input__wrapper"]}>
      {label && (
        <label className={styles["input__label"]} htmlFor={name}>
          {label}
        </label>
      )}
      <input {...rest} className={styles["input"]} />
    </div>
  );
}
