import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

export function Textarea({ name, label, ...rest } : TextareaProps) {
  return (
    <div className={styles["textarea__wrapper"]}>
      <label className={styles["textarea__label"]} htmlFor={name}>{label}</label>
      <textarea {...rest} className={styles["textarea"]}></textarea>
    </div>
  );
}
