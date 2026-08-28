import Link from "next/link";
import css from "./not-found.module.css";
export default function NotFound() {
  return (
    <main className={css.page}>
      <div className={css.content}>
        <p className={css.code}>404</p>
        <h1 className={css.title}>Page not found</h1>
        <p className={css.text}>
          Oops! The page you are looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link href="/" className={css.button}>
          Go to home page
        </Link>
      </div>
    </main>
  );
}
