"use client";

import { useRouter } from "next/navigation";

import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export default function ErrorMessage({
  title = "Oops! Something went wrong",
  message = "We couldn't load the travel trucks. Please try again.",
  onRetry,
}: ErrorMessageProps) {
  const router = useRouter();

  const handleClose = () => {
    router.push("/");
  };

  return (
    <div className={css.overlay}>
      <div className={css.error}>
        <button
          type="button"
          className={css.closeButton}
          onClick={handleClose}
          aria-label="Close error message and return to home page"
        >
          <svg width="24" height="24" aria-hidden="true">
            <use href="/icons/sprite.svg#icon-Close" />
          </svg>
        </button>

        <div className={css.icon}>
          <svg
            aria-hidden="true"
            width="72"
            height="72"
            className={css.errorIcon}
          >
            <use href="/icons/sprite.svg#icon-Error" />
          </svg>
        </div>

        <div className={css.textContent}>
          <h2 className={css.title}>{title}</h2>

          <p className={css.text}>{message}</p>
        </div>

        {onRetry && (
          <button type="button" className={css.button} onClick={onRetry}>
            Try again
          </button>
        )}
      </div>
    </div>
  );
}
