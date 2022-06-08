import styles from './styles.module.scss';

interface BackButtonProps {
  className?: string;
}

export function BackButton({ className } : BackButtonProps) {
  return (
    <button className={`${styles["back-button"]} ${className}`}>
      <img src="/images/icon/back-arrow.svg" alt="Seta de Voltar" />
      Voltar
    </button>
  );
}
