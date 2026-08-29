import Image from "next/image";
import Link from "next/link";
import css from "./EmptyState.module.css";

interface EmptyStateProps {
  title: string;
  text: React.ReactNode;
  buttonText: string;
  href?: string;
  onClick?: () => void;
}

export function EmptyState({
  title,
  text,
  buttonText,
  href,
  onClick,
}: EmptyStateProps) {
  return (
    <div className={css.container}>
      <Image
        src="/images/empty-campers.webp"
        alt="No campers found"
        width={488}
        height={463}
        className={css.image}
      />

      <h2 className={css.title}>{title}</h2>

      <p className={css.text}>{text}</p>

      {href ? (
        <Link href={href} className={css.viewAllButton}>
          {buttonText}
        </Link>
      ) : (
        <button type="button" onClick={onClick} className={css.viewAllButton}>
          {buttonText}
        </button>
      )}
    </div>
  );
}
