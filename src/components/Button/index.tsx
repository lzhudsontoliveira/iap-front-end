import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.scss";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={`${styles["button"]} ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}
