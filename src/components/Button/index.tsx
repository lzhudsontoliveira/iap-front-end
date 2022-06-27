import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.scss";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  variant?: string;
}

const VARIANTS_CLASS = {
  "gradient-blue": "button--gradient-blue",
};

export function Button({ children, className, variant, ...rest }: ButtonProps) {
  return (
    <button
      className={`${styles["button"]} ${className ? className : ""} ${
        styles[VARIANTS_CLASS[variant]]
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}
